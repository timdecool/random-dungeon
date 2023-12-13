<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav class="d-flex align-items-center justify-content-center ">
        <RouterLink to="/"><img width="45vh" src="../../../public/favicon.png" alt=""></RouterLink>
        <RouterLink to="/" class="navPad">Accueil</RouterLink>
        <RouterLink to="/characters" class="navPad">Personnages</RouterLink>
        <RouterLink to="/dungeons" class="navPad">Donjons</RouterLink>
    </nav>
</template>

