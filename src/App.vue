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
      <RouterView />
    <template #footer>
      <footer-view />
    </template>
  </main-layout>
</template>

<style>

</style>
