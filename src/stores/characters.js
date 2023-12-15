import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'characters'
const STORE_LOCAL_STORAGE_KEY = 'characters'
const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): [
        {
            id:1,
            name: "Océane",
            charClass:"Rôdeur",
            ascendancy: "Halfelin",
            lvl: 3
        },
        {
            id:2,
            name: "Roman",
            charClass:"Magicien",
            ascendancy: "Humain",
            lvl: 1
        },
        {
            id:3,
            name: "Tim",
            charClass:"Prêtre",
            ascendancy: "Aarakocra",
            lvl: 2
        }
    ]}

export const useCharactersStore = defineStore(STORE_NAME, () => {
    // CHARACTERS ARRAY
    const characters = ref(getCurrentState())

    // GET FILTERS INITIAL STATS
    const getLevelRange = computed(() => {
        let levels = characters.value.map(({lvl}) => lvl)
        return { max: Math.max(...levels), min: Math.min(...levels) }
    })
    const maxLevel = ref(getLevelRange.value.max)
    const minLevel = ref(getLevelRange.value.min)
    
    const getAvailableClasses = computed(() => {
        let classes = characters.value.filter((item) => item.lvl <= maxLevel.value && item.lvl >= minLevel.value).map(({charClass}) => charClass)
        return [... new Set(classes)]
    })
    const classesToDisplay = ref(getAvailableClasses.value)
    // UPDATE FILTERS
    function updateDisplay(newClasses, minLvl, maxLvl) {
        classesToDisplay.value = newClasses
        maxLevel.value = maxLvl
        minLevel.value = minLvl 
    }

    // GET FILTERED CHARACTERS
    const getCharacters = computed(() => {
        const allCharacters = characters.value
        let filteredCharacters = allCharacters.filter((item) => classesToDisplay.value.includes(item.charClass))
        filteredCharacters = filteredCharacters.filter((item) => item.lvl <= maxLevel.value && item.lvl >= minLevel.value)
        return filteredCharacters
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
    
return { characters, getCharacters, getAvailableClasses, getLevelRange, addCharacter, removeCharacter, updateCharacter, updateDisplay, classesToDisplay }
})
