import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'characters'
const STORE_LOCAL_STORAGE_KEY = 'characters'
const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    console.log(localData)
    return localData ? JSON.parse(localData): []}

export const useCharactersStore = defineStore(STORE_NAME, () => {
    // STATES
    const characters = ref(getCurrentState())
    

    // GETTERS
    const getCharacters = computed(() => {
        const localCharacters = localStorage.getItem(STORE_LOCAL_STORAGE_KEY) ? localStorage.getItem(STORE_LOCAL_STORAGE_KEY) : []
        
    })

    const getAvailableClasses = computed(() => {
        let classes = characters.value.map(({charClass}) => charClass)
        return [... new Set(classes)]
    })

    const getLevelRange = computed(() => {
        let levels = characters.value.map(({lvl}) => lvl)
        return { max: Math.max(...levels), min: Math.min(...levels) }
    })



    // ACTIONS
    function addCharacter(item) {
        item.id = Math.floor(Math.random() * Date.now())
        item.lvl = 1
        item.gold = 0
        item.xp = 0
        characters.value.push(item)
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(characters.value))
    }

    function updateCharacter(item) {
        const index = characters.value.findIndex(el => {
            return el.id === item.id
        })
        if (index != -1) {
            characters[index] = item
        }
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(characters))
    }

    function removeCharacter(item) {
        const index = characters.value.findIndex(el => {
            return el.id === item.id
        })
        if (index != -1) {
            characters.value.splice(index, 1)
        }
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(characters))
    }
    
return { characters, getCharacters, getAvailableClasses, getLevelRange, addCharacter, removeCharacter, updateCharacter }
})
