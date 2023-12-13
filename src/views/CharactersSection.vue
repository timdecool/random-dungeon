<script>
    // Tools
    import { useCharactersStore } from '@/stores'
    import { mapActions, mapState, mapGetters } from 'pinia'

    // Views
    import CreationView from '@/components/Content/CreationView.vue'
    import GalleryView from '@/components/Content/GalleryView.vue'

    export default {
        props: {
            view: {
                type: String,
                required: false,
                default: function() {
                    return "gallery"
                }
            }
        },
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
    <gallery-view v-if="view==='gallery'" :dataArr="characters" mode="characters"/>
    <creation-view v-if="view==='creation'" :data="characters" mode="characters"/>
</template>

