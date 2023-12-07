<script>
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
    <gallery-view v-if="!creationViewActivated"/>
    <creation-view v-else />
    <button @click="creationViewActivated = !creationViewActivated">Changer de vue</button>
</template>