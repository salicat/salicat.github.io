<template>
    <div class="education">
      <div class="cv_seccion">
        <h2>Educación</h2>
      </div>
      
      <div v-for="edu in education" :key="edu.title">
        <h3>{{ edu.title }}</h3>
        <p>{{ edu.institution }} - {{ edu.year }}</p>
      </div>
  
      <h3>Cursos Adicionales</h3>
      <ul>
        <li v-for="course in courses" :key="course">{{ course }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  const education = [
    { title: "Certificado en Programación", institution: "Universidad Nacional de Colombia", year: "2020" },
    { title: "Ingeniería Mecánica", institution: "Universidad Santo Tomás - Colombia", year: "2005" }
  ];
  
  const courses = [
    "Ads Fundamentals (2019 - Google)",
    "E-Commerce (2018 - Google)",
    "Marketing Digital (2018 - Google)",
    "Google My Business (2018 - Google)",
    "Blueprint Ads (2018 - Facebook)"
  ];
  </script>
  