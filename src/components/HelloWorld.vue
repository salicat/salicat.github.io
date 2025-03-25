<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
 
<template>
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3 style="color: white;">
        Programador Full Stack
      </h3>
    </div>
</template>

