
import { toLower } from 'cypress/types/lodash';
<script>
    import {useCharactersStore} from '@/stores'
    import CreationView from '../Content/CreationView.vue';
    export default {
        components : {
            CreationView
        }
    }
</script>

<template>
    <h1>Personnages</h1>
    <creation-view />
</template>