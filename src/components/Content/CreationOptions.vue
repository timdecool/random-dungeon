<script setup>
const props = defineProps({
    currentQuestion: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['confirm'])
function confirmChoice(option) {
    emit('confirm', option)
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col  p-3">
                <h2 class="text-center">
                    {{ currentQuestion.question }}
                </h2>
                <form class="d-flex flex-column justify-content-center align-items-center">
                    <div class="mt-3" v-for="(option, index) in currentQuestion.options.value" :key="index" @click.prevent="confirmChoice(option)">
                        <input type="radio" class="btn-check" name="options" :id="`btn-check-${index+1}`" >
                        <label class="btn btn-primary" :for="`btn-check-${index+1}`">{{ option }}</label>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
