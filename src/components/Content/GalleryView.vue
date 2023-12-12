<script>
import CardItem from '@/components/Layout/CardItem.vue'
import GalleryFilters from '@/components/Content/GalleryFilters.vue'

export default {
    components: {
        CardItem,
        GalleryFilters
    },
    props: {
        data : {
            type: Array,
            required: true
        },
        mode: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClassFilter(arr) {
            classArr = arr
        }
    },
    data() {
        return {
            classArr: []
        }
    }
}
</script>


<template>

    <h2 class="text-center mb-3">Galerie de vos {{ mode === "characters" ? "personnages":"donjons" }}</h2>
    <section>
        <gallery-filters :mode="mode" @updateClassFilter="handleClassFilter"/>
    </section>
    <section class="d-flex flex-wrap justify-content-around mb-5">
        <template v-for="item in data" :key="item.name">
            <card-item :item="item" :mode="mode" class="mb-2" v-if="classArr.includes(item.charClass) || classArr.length === 0"/>
        </template>
    </section>
</template>