<script>
import { useCharactersStore } from '@/stores';
import { mapState } from 'pinia';
const character = computed(useCharactersStore, ['characters']);

</script>

<template>
  <h2>Détails de {{ characters.name }}</h2>

  <ul class               = "mb-2">
    <li>
      Ascendance          : {{ characters.ascendancy }}
    </li>
    <li>
      Nom                 : {{ characters.name }}
    </li>
    <li>
      Voie                : {{ characters.charClass }}
    </li>
    <li>
      Capacité spéciale   : {{ characters.feat }}
    </li>
    <li>
      Arme                : {{ characters.weapon }}
    </li>
    <li>
      Historique          : {{ characters.background }}
    </li>
    <li>
      Défaut              : {{ characters.flaw }}
    </li>
    <li>
      Babiole             : {{ characters.trinket }}
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
