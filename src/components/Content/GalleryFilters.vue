<script setup>
import { computed, ref } from 'vue'

// AVAILABLE CLASSES
import {useCharactersStore} from '@/stores'
const charactersStore = useCharactersStore()

const props = defineProps({
    mode: {
        type:String,
        required: true,
        default: function() {
            return "characters"
        }
    }
})

const classesToDisplay = ref(charactersStore.getAvailableClasses)
const emit = defineEmits(['updateClassFilter'])
function toggleFilter(item) {
    if(classesToDisplay.value.includes(item)) {
        let index = classesToDisplay.value.findIndex((charClass) => charClass === item)
        classesToDisplay.value.splice(index,1)
    } else {
        classesToDisplay.value.push(item)
    }
    emit('updateClassFilter', classesToDisplay)
}

</script>

<template>
    <section class="my-3 p-2">        
        <div v-if="mode === 'characters'" >
            <div class="d-flex gap-2 align-items-center">
                <h6 class="mb-0">Filtrer par classes :</h6>
                <div class="form-check d-flex align-items-end gap-2" v-for="(item, index) in charactersStore.getAvailableClasses" :key="index">
                    <input class="form-check-input checkbox-filter" type="checkbox" :value="item" :id="`${item}-check`" @click="toggleFilter(item)" checked>
                    <label class="form-check-label checkbox-label" :for="`${item}-check`">{{ item }}</label>
                </div>                  
            </div>
            <div class="d-flex gap-2 align-items-center">
                <h6 class="mb-0">Filter par niveaux : </h6>
                <input type="range" :min="charactersStore.getLevelRange.min" :max="charactersStore.getLevelRange.max">
            </div>

        </div>
        <p>Niveau max : {{ charactersStore.getLevelRange.max }}, niveau min: {{ charactersStore.getLevelRange.min }}</p>
    </section>

</template>

<style scoped>
section {
    background-color: #583819;
    border-radius: 5px;
}

.checkbox-filter:checked {
    background-color: #b97734;
    border: 0;
}

.checkbox-label {
    font-size: 13px;
}

</style>