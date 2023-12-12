import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'characters'
const STORE_LOCAL_STORAGE_KEY = 'characters'
const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): [{
        name: "Océane",
        race: "Halfeline",
        charClass: "Illusionniste",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 1
    },
    {
        name: "Roman",
        race: "Humain",
        charClass: "Paladin",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 1,
        inventory: [],
        gold: 0,
    },
    {
        name: "Océane",
        race: "Halfeline",
        charClass: "Illusionniste",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 1
    },
    {
        name: "Roman",
        race: "Humain",
        charClass: "Paladin",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 1
    },
    {
        name: "Océane",
        race: "Halfeline",
        charClass: "Druide",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 1
    },
    {
        name: "Roman",
        race: "Humain",
        charClass: "Barde",
        background: "Sans histoire",
        bauble: "Peluche d'éléphant hélas trop chère",
        lvl: 1
    },
    {
        name: "Océane",
        race: "Halfeline",
        charClass: "Prêtre",
        background: "Enfant des rues",
        bauble: "Vieille photo de BTS",
        lvl: 1
    },
    {
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
    
return { characters, getCharacters, addCharacter, removeCharacter, updateCharacter }

})
