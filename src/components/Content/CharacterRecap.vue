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
      Votre ascendance : {{ currentCreation.ascendancy }}
    </li>
    <li>
      Votre nom : {{ currentCreation.name }}
    </li>
    <li>
      Votre voie : {{ currentCreation.class }}
    </li>
    <li>
      Votre capacité spéciale : {{ currentCreation.feat }}
    </li>
    <li>
      Votre arme : {{ currentCreation.weapon }}
    </li>
    <li>
      Votre histoire : {{ currentCreation.background }}
    </li>
    <li>
      Votre plus grand défaut : {{ currentCreation.flaw }}
    </li>
    <li>
      Votre babiole : {{ currentCreation.trinket }}
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
