<script setup>
import { computed, ref } from 'vue'

// AVAILABLE CLASSES
import {useCharactersStore} from '@/stores'
const charactersStore = useCharactersStore()

const minLvl = ref(charactersStore.getLevelRange.min)
const maxLvl = ref(charactersStore.getLevelRange.max)

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
const emit = defineEmits(['updateClassFilter', 'updateLevelFilter'])
function toggleClassFilter(item) {
    if(classesToDisplay.value.includes(item)) {
        let index = classesToDisplay.value.findIndex((charClass) => charClass === item)
        classesToDisplay.value.splice(index,1)
    } else {
        classesToDisplay.value.push(item)
    }
    emit('updateClassFilter', classesToDisplay)
}

function updateLevelFilter() {
    emit('updateLevelFilter', { min: minLvl.value, max: maxLvl.value})
}
</script>

<template>
        <div v-if="mode === 'characters'" >
            <div class="d-flex gap-2 align-items-center mb-2">
                <div class="form-check d-flex align-items-end gap-2" v-for="(item, index) in charactersStore.getAvailableClasses" :key="index">
                    <input class="form-check-input checkbox-filter" type="checkbox" :value="item" :id="`${item}-check`" @click="toggleClassFilter(item)" checked>
                    <label class="form-check-label checkbox-label" :for="`${item}-check`">{{ item }}</label>
                </div>                  
            </div>
            <div class="d-flex gap-2 align-items-center">
                Du niveau <input type="number" v-model="minLvl" min="1" :max="maxLvl" @change="updateLevelFilter()"> au niveau <input type="number" v-model="maxLvl" :min="minLvl" @change="updateLevelFilter()">
            </div>
        </div>
</template>

<style scoped>
.checkbox-filter:checked {
    background-color: #b97734;
    border: 0;
}

.checkbox-label {
    font-size: 13px;
}

input[type="number"] {
    width: 50px;
}
</style>