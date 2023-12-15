<script setup>
import { useCharactersStore } from '@/stores/';
import CharacterInfos  from '../components/Content/CharacterInfos.vue' // componant de charachter info permettant de voir le personnage 

// initialise
const characterStore = useCharactersStore();

characterStore.characters;

</script>

<template>

<section class="d-flex flex-column align-items-start col-4 p-2 CharacterInfos">
      <character-infos/>      
      <router-link to="/characters/gallery" class="btn btn-secondary">Retour à la galerie</router-link>
    </section>
<pre>
 {{characterStore.characters}}
</pre>



</template>

<style scoped>
.CharacterInfos {
  background-color: #3b3742;
  border: solid 1px rgb(253, 253, 212);
  border-radius: 5px;

}
</style>