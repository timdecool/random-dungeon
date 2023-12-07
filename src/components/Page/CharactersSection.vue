<<<<<<< HEAD

import { toLower } from 'cypress/types/lodash';
=======
>>>>>>> 78afdc9d24546cc2c6f16e8083dfdd3dfdd1e1ef
<script>
    import {useCharactersStore} from '@/stores'
    import CreationView from '../Content/CreationView.vue';
    import GalleryView from '@/components/Content/GalleryView.vue'
    export default {
        components : {
            CreationView,
            GalleryView
        },
        data() {
            return {
                creationViewActivated : true,
            }
        }
    }
</script>

<template>
<<<<<<< HEAD
    <h1>Personnages</h1>
    <creation-view />
=======
    <gallery-view v-if="!creationViewActivated"/>
    <creation-view v-else />
    <button @click="creationViewActivated = !creationViewActivated">Changer de vue</button>
>>>>>>> 78afdc9d24546cc2c6f16e8083dfdd3dfdd1e1ef
</template>