<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div class="app-container">
    <!-- Sidebar -->
    <nav :class="{ 'sidebar-hidden': !isSidebarVisible }">
      <div class="sidebar-content">
        <HelloWorld msg="Carlos Cortes Sanchez" />
        <RouterLink to="/main">Main</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/experience">Job Experience</RouterLink>
        <RouterLink to="/projects">Proyectos</RouterLink>
        <RouterLink to="/cv">C.V.</RouterLink>
      </div>
    </nav>

    <!-- Main Content -->
    <main >
      <button @click="toggleSidebar" class="sidebar-toggle-btn">
        {{ isSidebarVisible ? '◀ Ocultar' : 'Menú ' }}
      </button>
      <div class="router-content">
        <RouterView />
      </div>
    </main>
  </div>
</template>