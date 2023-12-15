<script setup>
import { ref, computed, onMounted } from 'vue'

import CardItem from '@/components/Layout/CardItem.vue'
import GalleryFilters from '@/components/Content/GalleryFilters.vue'

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

const classArr = ref(null)
const levels = ref(null)

function handleClassFilter(arr) {
    classArr.value = arr.value
}

function handleLevelFilter(levelRange) {
    console.log("input", levelRange)
    levels.value = levelRange
    console.log("output", levels.value, levels.value.min, levels.value.max)
}

const charactersFiltered = computed(() => {
    let dataFiltered = props.dataArr
    if(classArr.value !== null) {
        dataFiltered = dataFiltered.filter((item) => classArr.value.includes(item.charClass))
    }
    if(levels.value !== null) {
        dataFiltered = dataFiltered.filter((item) => item.lvl >= levels.value.min && item.lvl <= levels.value.max)
    }
    return dataFiltered
})

onMounted(() => {
    console.log(props.dataArr)
})
</script>

<template>
    <h2 class="text-center mb-3">Galerie de vos {{ mode === "characters" ? "personnages":"donjons" }}</h2>

    <section class="filters d-flex justify-content-between p-2 mb-3 align-items-end">
        <gallery-filters :mode="mode" @updateClassFilter="handleClassFilter" @updateLevelFilter="handleLevelFilter"/>
        <router-link to="/characters/creation" class="btn btn-primary btn-card">Créer un nouveau personnage</router-link>
    </section>

    <section class="d-flex row mb-5"> 
        <template v-for="item in charactersFiltered" :key="item.id">
            <div class="mb-3 col-3">
                <card-item :item="item" :mode="mode"/>
            </div>
        </template>
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