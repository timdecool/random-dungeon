<script>
import CardItem from '@/components/Layout/CardItem.vue'
export default {
    components: {
        CardItem
    },
    props: {
        data : {
            type: Array,
            required: true
        }
    }
}

</script>


<template>
    <h2>Galerie</h2>
    <section class="d-flex gap-3">
        <card-item v-for="item in data" :key="item.name">
            <img :src="item.src" class="card-img-top" alt="...">
            <template #title>{{item.name}}</template>
            <template #char-desc>{{ item.race }}, {{ item.class }}</template>
        </card-item>
    </section>


</template>