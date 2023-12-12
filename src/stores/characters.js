import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'characters'
const STORE_LOCAL_STORAGE_KEY = 'characters'
const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): [{
        id: 1,
        name: "Océane",
        race: "Halfeline",
        charClass: "Illusionniste",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 5,
        inventory: [],
        gold: 0
    },
    {
        id: 2,
        name: "Roman",
        race: "Humain",
        charClass: "Paladin",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 6,
        inventory: [],
        gold: 0,
    },
    {
        id: 3,
        name: "Océane",
        race: "Halfeline",
        charClass: "Illusionniste",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 2
    },
    {
        id: 4,
        name: "Roman",
        race: "Humain",
        charClass: "Paladin",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 3
    },
    {
        id: 5,
        name: "Océane",
        race: "Halfeline",
        charClass: "Druide",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 4
    },
    {
        id: 6,
        name: "Roman",
        race: "Humain",
        charClass: "Barde",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 2
    },
    {
        id: 7,
        name: "Océane",
        race: "Halfeline",
        charClass: "Prêtre",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 1
    },
    {
        id: 8,
        name: "Roman",
        race: "Humain",
        charClass: "Guerrier",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 1
    }
]}

export const useCharactersStore = defineStore(STORE_NAME, () => {
    // STATES
    const characters = ref(getCurrentState())

    // GETTERS
    const getCharacters = computed(() => {
        const localCharacters = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
        return localCharacters ? JSON.parse(localCharacters) : []
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
        characters.value.push(item)
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(characters))
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
