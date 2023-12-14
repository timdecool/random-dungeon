<script>
import { useCharacterCreationStore } from '@/stores'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useCharacterCreationStore, ['currentCreation'])
  }
}
</script>

<template>
  <h2>Recap</h2>

  <ul class="mb-2">
    <li>
      Ascendance : {{ currentCreation.ascendancy }}
    </li>
    <li>
      Nom : {{ currentCreation.name }}
    </li>
    <li>
      Voie : {{ currentCreation.class }}
    </li>
    <li>
      Capacité spéciale : {{ currentCreation.feat }}
    </li>
    <li>
      Arme : {{ currentCreation.weapon }}
    </li>
    <li>
      Historique : {{ currentCreation.background }}
    </li>
    <li>
      Défaut : {{ currentCreation.flaw }}
    </li>
    <li>
      Babiole : {{ currentCreation.trinket }}
    </li>
  </ul>
</template>

<style>
ul {
  list-style-type : none;
  margin : 0;
  padding : 0;
}
</style>
