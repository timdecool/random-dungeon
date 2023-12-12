<script setup>
import { computed, ref } from 'vue'

// AVAILABLE CLASSES
import {useCharactersStore} from '@/stores'
const charactersStore = useCharactersStore()
const availableClasses = computed(() => {
    let classes = charactersStore.characters.map(({charClass}) => charClass)
    return [... new Set(classes)]
})

const classesToDisplay = ref(availableClasses)
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

const props = defineProps({
    mode: {
        type:String,
        required: true,
        default: function() {
            return "characters"
        }
    }
})
</script>

<template>
    <section class="my-3 p-2">        
        <div v-if="mode === 'characters'" class="d-flex gap-2 align-items-center">
            <h5 class="mb-0">Filtrer par classes :</h5>
            <div class="form-check d-flex align-items-end gap-2" v-for="(item, index) in availableClasses" :key="index">
                    <input class="form-check-input checkbox-filter" type="checkbox" :value="item" id="flexCheckDefault" @click="toggleFilter(item)" checked>
                    <label class="form-check-label checkbox-label" for="flexCheckDefault">
                        {{ item }}
                    </label>
                </div>                  
        </div>     
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