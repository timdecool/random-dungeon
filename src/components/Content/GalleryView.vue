<script setup>
import { ref, computed } from 'vue'

import CardItem from '@/components/Layout/CardItem.vue'
import GalleryFilters from '@/components/Content/GalleryFilters.vue'

const props = defineProps({
    dataArr: {
        type: Array,
        required: true
    },
    mode: {
        type: String,
        required: true
    }
})

const classArr = ref([])

function handleClassFilter(arr) {
    classArr.value = arr.value
}

const charactersFiltered = computed(() => {
    let dataFiltered = props.dataArr
    if(classArr.value.length !== 0) {
        dataFiltered = dataFiltered.filter((item) => classArr.value.includes(item.charClass))
    }
    return dataFiltered
})
</script>

<template>
    <h2 class="text-center mb-3">Galerie de vos {{ mode === "characters" ? "personnages":"donjons" }}</h2>
    <section>
        <gallery-filters :mode="mode" @updateClassFilter="handleClassFilter"/>
    </section>
    <section class="d-flex flex-wrap justify-content-around mb-5">
        <template v-for="item in charactersFiltered" :key="item.id">
            <card-item :item="item" :mode="mode" class="mb-2" />
        </template>
    </section>
</template>