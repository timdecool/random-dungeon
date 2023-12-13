<script setup>
import { useCharacterCreationStore } from '@/stores';
const charCreationStore = useCharacterCreationStore()

</script>

<template>
  <div class="mb-3">
    <h6 class="text-center">Étape {{ charCreationStore.getCurrentStep }} / 9</h6>  
    <div class="progressBar">
      <div class="curStepBar" :style="`width: ${(charCreationStore.getCurrentStep-1)/8*100}%`"></div>
    </div>
  </div>
</template>

<style scoped>
  .progressBar {
    margin: auto;
    width: 90%;
    height: 20px;
    background-color: rgb(184, 184, 184);
    border-radius:10px;
  }

  .curStepBar {
    height: 100%;
    background-color: #8b5726;
    border-radius:10px;
    transition: width 380ms ease-in-out;
  }
</style>

