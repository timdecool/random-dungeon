<script setup>
import CardItem from '@/components/Layout/CardItem.vue'
import GalleryFilters from '@/components/Content/GalleryFilters.vue'

import { useCharactersStore } from '@/stores';
const charStore = useCharactersStore()

const props = defineProps({
    dataArr: {
        type: Array,
        required: true,
        default: function () {
            return null
        }
    },
    mode: {
        type: String,
        required: true
    }
})


</script>

<template>
    <h2 class="text-center mb-3">Galerie de vos {{ mode === "characters" ? "personnages":"donjons" }}</h2>

    <section class="filters d-flex justify-content-between p-2 mb-3 align-items-end">
        <gallery-filters :mode="mode"/>
        <router-link to="/characters/creation" class="btn btn-primary btn-card">Créer un nouveau personnage</router-link>
    </section>
    
    <section class="d-flex row mb-5">
        <template v-for="item in charStore.getCharacters" :key="item.id">
            <div class="mb-3 col-3">
                <card-item :item="item" :mode="mode"/>
            </div>
        </template>
        <pre>{{ charStore.characters }}</pre>
    </section>
</template>

<style scoped>
.card-character {
    color: white;
  background-color: #8b5726;
}

.btn-card {
    margin: 0;
    border: 0;
}

.btn-card:hover {
    background-color: white;
    color: #191818;
}

section.filters {
    background-color: #583819;
    border-radius: 5px;
}
</style>