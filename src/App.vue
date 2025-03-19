<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const isSidebarVisible = ref(true); // Estado para controlar la visibilidad del sidebar

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value; // Cambiar el estado de visibilidad
};
</script>

<template> 
  <header>
    <div class="wrapper">
      <HelloWorld msg="Carlos Cortes Sanchez" />
      <br>
      <!-- Botón para mostrar/ocultar el sidebar -->
      <button @click="toggleSidebar" class="sidebar-toggle-btn">
        <span v-if="isSidebarVisible">Cerrar</span>
        <span v-else>Mostrar</span>
      </button>

      <nav :class="{ hidden: !isSidebarVisible }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/experience">Job Experience</RouterLink>
        <RouterLink to="/projects">Proyectos</RouterLink>
        <RouterLink to="/cv">C.V.</RouterLink>
      </nav>
    </div>
  </header>

  <div :class="{ 'router-content': true, 'expanded': isSidebarVisible }">
    <RouterView />
  </div>
</template>


