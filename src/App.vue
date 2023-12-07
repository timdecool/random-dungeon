<script setup>
  import { RouterView } from 'vue-router'
  import MainLayout from '@/components/Layout/MainLayout.vue'
  import MainNav from '@/components/Layout/MainNav.vue'
  import FooterView from '@/components/Layout/FooterView.vue'
</script>

<template>
  <main-layout>
    <template #header>
      <main-nav />
    </template>
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
    <template #footer>
      <footer-view />
    </template>
  </main-layout>
</template>

<style>
/* Ajoutez la classe Bootstrap au body */
@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Whisper&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap');

.navPad {
  margin-left: 45px;
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;
  font-family: 'MedievalSharp', cursive;
}

a:hover {
  color: #fd923b;
}

body {
  background-color: rgb(59, 56, 62) !important;
  color: #ffff;
  
  p{
    font-family: 'Hedvig Letters Sans', sans-serif;
  }
}
</style>
