<script>
import ProgressBar from '@/components/Layout/ProgressBar.vue'

export default {
    name:"CreationView",
    components : {
        ProgressBar
    }
}
</script>

<template>
    <h1>Creation View</h1>
    <progress-bar />
    
    <section class="container">
        <div class="row">
            <div class="col border p-3">
                <h2 class="text-center">
                    Titre
                </h2>
                <form class="d-flex flex-column justify-content-center align-items-center">
                    <div class="mt-3">
                        <input type="radio" class="btn-check" name="options" id="btn-check-1">
                        <label class="btn btn-primary" for="btn-check-1">Option 1</label>
                    </div>

                    <div class="mt-3">
                        <input type="radio" class="btn-check" name="options" id="btn-check-2">
                        <label class="btn btn-primary" for="btn-check-2">Option 2</label>
                    </div>
                    <div class="mt-3">
                        <input type="radio" class="btn-check" name="options" id="btn-check-3">
                        <label class="btn btn-primary" for="btn-check-3">Option 3</label>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>