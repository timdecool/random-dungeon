<script setup>
import { useCharactersStore, useCharacterCreationStore } from '@/stores';
const characStore = useCharactersStore()
const creationStore = useCharacterCreationStore()


const props = defineProps({
    currentQuestion: {
        type: Object,
        required: true
    }
})

function confirmCharac() {
    characStore.addCharacter(creationStore.currentCreation)
    creationStore.resetCreation()
}

const emit = defineEmits(['confirm'])
function confirmChoice(option) {
    emit('confirm', option)
}


</script>

<template>
    <section class="container">
        <div class="row m-auto">
            <div class="col-9 p-3 m-auto">
                <h2 class="text-center">
                    {{ currentQuestion.question }}
                </h2>
                <section>
                    <form class="d-flex flex-column justify-content-center align-items-center" v-if="currentQuestion.options">
                        <div class="mt-3 w-100" v-for="(option, index) in currentQuestion.options.value" :key="index" @click.prevent="confirmChoice(option)">
                            <input type="radio" class="btn-check" name="options" :id="`btn-check-${index+1}`" >
                            <label class="btn btn-primary btn-option" :for="`btn-check-${index+1}`">{{ option }}</label>
                        </div>
                    </form>
                    <div v-else>
                        <ul>
                            <li v-for="item in currentQuestion.list.value">{{ item.stat }} : {{ item.value }}</li>
                        </ul>
                        <button class="btn btn-primary btn-option mt-2" @click="confirmChoice()">Créer le personnage</button>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<style scoped>
.btn-option {
    width: 100%;
    font-size: 20px;
    padding: 7px;
    margin: 0;
}

.btn-option:hover {
  background-color: #8b5726 !important;
  border-color: #8b5726 !important;
}
</style>