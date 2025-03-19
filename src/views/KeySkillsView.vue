<template>
    <div class="key_skills">
      <h2>Habilidades Clave</h2>
      <h3>Comerciales - 22 años</h3>
      <ul>
        <li v-for="skill in commercialSkills" :key="skill">{{ skill }}</li>
      </ul>
      <h3>e-Commerce y Marketing Digital - 7 años</h3>
      <ul>
        <li v-for="skill in ecommerceSkills" :key="skill">{{ skill }}</li>
      </ul>
      <h3>Herramientas</h3>
      <ul>
        <li v-for="tool in tools" :key="tool">{{ tool }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  const commercialSkills = [
    "Gestión Comercial Estratégica",
    "Banca y Finanzas",
    "Crédito e Inversión",
    "Inteligencia Comercial",
    "Comunicación Persuasiva"
  ];
  
  const ecommerceSkills = [
    "E-commerce Internacional",
    "Online Marketing Digital",
    "Optimización de Conversiones Web",
    "Embudo de Ventas",
    "Comercio Electrónico Multicanal",
    "Análisis de Datos Web",
    "SEO/SEM",
    "Marketing de Contenidos y Social Media",
    "Campañas Digitales",
    "Email Marketing",
    "Growth Hacking/CRO",
    "Gestión de Marketplace",
    "Estrategia Omnicanal"
  ];
  
  const tools = [
    "Google Marketing Platform",
    "Google y Facebook Ads",
    "WordPress / Shopify",
    "CRM (Salesforce, HubSpot)",
    "Plataformas E-commerce (Magento, WooCommerce)",
    "Herramientas SEO (Ahrefs, SEMrush)",
    "Complementos de marketing: Answer the Public, Ubersuggest",
    "Email Marketing (Mailchimp, Sendinblue)"
  ];
  </script>
  