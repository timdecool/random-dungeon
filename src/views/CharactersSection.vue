<script>
    // Tools
    import { useCharactersStore } from '@/stores'
    import { mapActions, mapState, mapGetters } from 'pinia'

    // Views
    import CreationView from '@/components/Content/CreationView.vue';
    import GalleryView from '@/components/Content/GalleryView.vue'

    export default {
        components : {
            CreationView,
            GalleryView
        },
        data() {
            return {
                creationViewActivated : true
            }
        },
        computed: {
            ...mapState(useCharactersStore, ['characters'])
        }
    }
</script>

<template>
    <gallery-view v-if="!creationViewActivated" :dataArr="characters" mode="characters"/>
    <creation-view v-else :data="characters" mode="characters"/>
    <button @click="creationViewActivated = !creationViewActivated">Changer de vue</button>
</template>

