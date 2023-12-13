<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>


<template>
    <div class="card card-character">
        <img :src="item.src ? item.src:'/src/assets/img/unknown.jpg'" class="card-img-top" :alt="`Image de ${item.name}`">
        <div class="card-body">
            <h5 class="card-title">
                {{item.name}}
            </h5>
            <p class="card-text">{{ item.race }}, {{ item.charClass }} de niveau {{ item.lvl }}</p>
            <router-link :to="{ name: 'CharacterDetails', params: { name: item.name }}" class="btn btn-primary btn-card">Détails</router-link>
        </div>
    </div>
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




</style>