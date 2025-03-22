<template>
    <div class="education">
      <div class="cv_seccion">
        <h2>Educación</h2>
      </div>
      <div class="edu">
        <div >
          <h3>Diplomado en Programación</h3>
          <p>Universidad Nacional de Colombia </p>
		  <p>Colombia 2020</p>
		  <br>
		  <h3>Ingeniería Mecánica</h3>
          <p>Universidad Santo Tomás </p>
		  <p>Colombia 2005</p>
        </div>
		<div>
			<h3>Cursos</h3>
			<p v-for="course in courses" :key="course">{{ course }}</p>
		</div>
      </div>

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
  