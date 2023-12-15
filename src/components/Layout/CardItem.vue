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
        <div class="card-body">
            <!-- <img :src="item.src ? item.src:'/src/assets/img/unknown.jpg'" class="img-card" :alt="`Image de ${item.name}`"> -->
            <h5 class="card-title">
                {{item.name}}
            </h5>
            <p class="card-text">{{ item.ascendancy }}, {{ item.charClass }} de niveau {{ item.lvl }}</p>
            <router-link :to="{ name: 'CharacterDetails', params: { name: item.name }}" class="btn btn-primary btn-card">Détails</router-link>
        </div>
    </div>
</template>

<style scoped>
.card-character {
color: white;
  background-color: #8b5726;
  position: relative;
}

.btn-card {
    margin: 0;
    border: 0;
}

.btn-card:hover {
    background-color: white;
    color: #191818;
}

.img-card {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    position: absolute;
    left: -15px;
    top: -15px;
}



</style>