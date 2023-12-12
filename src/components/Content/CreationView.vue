<script setup>
import { } from 'vue'

// COMPONENTS
import ProgressBar from '@/components/Layout/ProgressBar.vue'
import CreationOptions from '@/components/Content/CreationOptions.vue'

// STORE
import { useCharacterCreationStore } from '@/stores'
const charCreationStore = useCharacterCreationStore()

function handleConfirm(option) {
  charCreationStore.setCurrentTrait(option)
}
</script>

<template>
  <h1 class="text-center">Crée ton personnage</h1>
  <progress-bar />
  <!-- <pre>{{ charCreationStore.currentCreation }}</pre> -->
  <!-- <pre>{{ charCreationStore.getCurrentQuestion }}</pre> -->
  <creation-options
    :currentQuestion="charCreationStore.getCurrentQuestion"
    @confirm="handleConfirm"
  />
</template>
