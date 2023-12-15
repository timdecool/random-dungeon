<script setup>
import { } from 'vue'

// COMPONENTS
import ProgressBar from '@/components/Layout/ProgressBar.vue'
import CreationOptions from '@/components/Content/CreationOptions.vue'
import CharacterRecap from '@/components/Content/CharacterRecap.vue'
// STORE
import { useCharacterCreationStore } from '@/stores'
const charCreationStore = useCharacterCreationStore()

// PROPS
const props = defineProps({
  mode: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="text-center mb-3">Crée ton {{ mode === 'characters' ? 'personnage':'donjon' }}</h2>
  <div class="row">
    <section class="d-flex flex-column align-items-start col-4 p-2 creation-recap">
      <character-recap />      
      <router-link to="/characters/gallery" class="btn btn-secondary">Retour à la galerie</router-link>
    </section>
    <section class="col-8 p-2">
      <progress-bar />
      <creation-options
        :currentQuestion="charCreationStore.getCurrentQuestion"
      />
    </section>
  </div>
</template>

<style scoped>
.creation-recap {
  background-color: #3b3742;
  border: solid 1px rgb(253, 253, 212);
  border-radius: 5px;

}
</style>
