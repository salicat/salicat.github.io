<template>
    <div class="work_experience">
		<div class="cv_seccion">
			<h2>Experiencia Laboral</h2>
		</div>
      <div v-for="job in jobs" :key="job.company">
        <h3>{{ job.company }}</h3>
        <p><strong>{{ job.position }}</strong> ({{ job.dates }})</p>
        <ul>
          <li v-for="task in job.tasks" :key="task">{{ task }}</li>
        </ul>
        <p><strong>Logro destacado:</strong> {{ job.achievement }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const jobs = [
    {
      company: "COVALTEC SAS",
      position: "Director Comercial - Propietario Único",
      dates: "Ene 2020 - Actualidad (remoto)",
      tasks: [
        "Dirigí los equipos técnicos y comerciales en tareas de mantenimiento preventivo, venta consultiva y reparación de maquinaria.",
        "Incrementé significativamente las ventas mediante la importación de nuevos componentes y monitoreo de fallos."
      ],
      achievement: "Fundé Covaltec tras vender mi empresa anterior, a solicitud de mis clientes."
    },
    {
      company: "PRECISION PLASMA DE CORTE CNC",
      position: "Fundador & Director General",
      dates: "Ago 2011 - Dic 2019",
      tasks: [
        "Lideré el desarrollo, comercialización y operación de sistemas plasma CNC.",
        "Gestioné el diseño, montaje y parametrización de equipos.",
        "Manejé la relación comercial con clientes (Colombia) y proveedores (China)."
      ],
      achievement: "La empresa fue rentable y se vendió en 2019, sigue operando con éxito."
    }
  ];
  </script>
  