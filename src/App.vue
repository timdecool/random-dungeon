<script setup>
import { RouterView } from 'vue-router'
import MainLayout from '@/components/Layout/MainLayout.vue'
import MainNav from '@/components/Layout/MainNav.vue'
import FooterBlock from '@/components/Layout/FooterBlock.vue'
</script>

<template>
  <main-layout
    :headerClass="'p-3 mb-3 border-bottom'"
    :footerClass="'d-flex flex-wrap justify-content-between align-items-center'"
  >
    <template #header>
      <main-nav />
    </template>
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
    <template #footer>
      <footer-block />
    </template>
  </main-layout>
</template>

<style>

</style>
