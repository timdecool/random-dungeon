<script>
import ProgressBar from '@/components/Layout/ProgressBar.vue'
import CreationOptions from './CreationOptions.vue'

export default {
    name:"CreationView",
    components : {
        ProgressBar,
        CreationOptions
    }
}
</script>

<template>
    <h1>Creation View</h1>
    <progress-bar />
    <creation-options />
   
</template>