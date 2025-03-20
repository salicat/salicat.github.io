<script setup lang="ts">
import KeySkillsView from "./KeySkillsView.vue";
import LanguagesView from "./LanguagesView.vue";
import WorkExperienceView from "./WorkExperienceView.vue";
import EducationView from "./EducationView.vue";
import PersonalInfoView from "./PersonalInfoView.vue";
import ProfessionalProfileView from "./ProfessionalProfileView.vue";

import { ref, nextTick } from "vue";

const cvContent = ref<HTMLElement | null>(null);

async function openPrintView() {
  if (!cvContent.value) return;
  
  // Clonamos el contenido del CV
  const content = cvContent.value.cloneNode(true) as HTMLElement;

  // Esperamos que Vue termine de renderizar si es necesario
  await nextTick();

  // Abrimos una **nueva pestaña** en lugar de un pop-up
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert("El navegador bloqueó la nueva ventana. Permite las ventanas emergentes para visualizar el PDF.");
    return;
  }

  // Construimos el HTML para la nueva pestaña
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Curriculum Vitae</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; padding-right: 20%; padding-left: 20%; }
          .cv {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
            max-width: 1000px;
            margin: auto;
          }
          .left-column { padding: 20px; font-size: 0.5em; }
          .right-column { padding: 20px; font-size: 0.66em; }
          .cv h2 { font-size: 2em; color: #333; border-bottom: 2px solid #0073b1; padding-bottom: 5px; }
          .print-btn {
            display: block;
            margin: 20px auto;
            padding: 10px 15px;
            background-color: #0073b1;
            color: white;
            border: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
          }/* Estilos específicos para iconos */
          .svg-inline--fa {
            width: 15px !important;
            height: 15px !important;
            vertical-align: middle;
          }
          
          @media print {
            body { 
              padding: 0 !important;
              margin: 10px !important;
            }
            
            .cv {
              transform: scale(0.95);
              transform-origin: top center;
            }
            
            .fa-icon {
              font-size: 10px !important;
            }
          }

          .print-btn:hover { background-color: #005582; }
        </style>
      </head>
      <body>
        <button class="print-btn" onclick="window.print()">Imprimir / Guardar PDF</button>
        <div class="cv">${content.innerHTML}</div>
      </body>
    </html>
  `);
  printWindow.document.close();
}
</script>

<template>
  <div class="cv-wrapper">
    <header class="cv-header">
      <h1>Curriculum Vitae (Laboral)</h1>
      <button class="download-btn" @click="openPrintView">Exportar Curriculum</button>
    </header>
    <div class="cv" ref="cvContent">
      <div class="left-column">
        <PersonalInfoView />
        <br>
        <KeySkillsView />
        <br>
        <LanguagesView />
      </div>
      <div class="right-column">
        <ProfessionalProfileView />
        <br>
        <WorkExperienceView />
        <br>
        <EducationView />
      </div>
    </div>
  </div>
</template>
