<script setup>
import { RouterView } from 'vue-router'
import MainLayout from '@/components/Layout/MainLayout.vue'
</script>

<template>
  <main-layout>
    <RouterView />
  </main-layout>
</template>

<style>
/* Ajoutez la classe Bootstrap au body */
@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Whisper&display=swap');
.navPad {
  margin-left: 45px;
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;
}

a:hover {
  color: #fd923b;
}

body {
  background-color: rgb(59, 56, 62) !important;
  color: #ffff;
  font-family: 'MedievalSharp', cursive;
}
</style>
