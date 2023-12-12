// IMPORTS

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import characters from '@/data/characters.json'

// KEYS
const STORE_NAME = 'characterCreation'
const STORE_LOCAL_STORAGE_KEY = 'characterCreation'


const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): characters }

export const useCharacterCreationStore = defineStore(STORE_NAME, () => {
    // STATES
    const characterOptions = ref(getCurrentState())
    const currentCreation = ref({
        ascendancy: null,
        name: null,
        class: null,
        feat: null,
        weapon: null,
        background: null,
        flaw: null,
        trinket: null
    })

    // COMPUTED
    const getCurrentQuestion = computed(() => {
        let currentQuestion = { question: null, options: null }
        if(currentCreation.value.ascendancy === null) {
            currentQuestion.question = "Quelle est ton ascendance ?"
            currentQuestion.options  = getAscendancies      
        }
        else if(currentCreation.value.name === null) {
            currentQuestion.question = "Comment t'appelles-tu ?"
            currentQuestion.options = getNames
        }
        else if(currentCreation.value.class === null ) {
            currentQuestion.question = "Quelle est ta voie ?"
            currentQuestion.options = getClasses
        }
        else if(currentCreation.value.feat === null) {
            currentQuestion.question = "Quelle est ta capacité spéciale ?"
            currentQuestion.options = getFeats
        }
        else if(currentCreation.value.weapon === null) {
            currentQuestion.question = "Quelle arme manies-tu ?"
            currentQuestion.options = getWeapons
        }        
        else if(currentCreation.value.background === null) {
            currentQuestion.question = "Que faisais-tu par le passé ?"
            currentQuestion.options = getBackgrounds
        }
        else if(currentCreation.value.flaw === null) {
            currentQuestion.question = "Quel est ton plus grand défaut ?"
            currentQuestion.options = getFlaws
        }
        else if(currentCreation.value.trinket === null) {
            currentQuestion.question = "Quelle babiole emmènes-tu toujours avec toi ?"
            currentQuestion.options = getTrinkets
        }


        return currentQuestion
    })

    const getAscendancies = computed(() => {
        const options = getRandomOptions(characterOptions.value.ascendancies)
        const ascendancies = options.map(({name}) => name)
        return ascendancies
    })

    const getNames = computed(() => {
        let names=[]
        if(currentCreation.value.ascendancy !== null) {
            const ascendancy = characterOptions.value.ascendancies.find((el) => el.name === currentCreation.value.ascendancy)
            names = getRandomOptions(ascendancy.typicalNames)
        }
        return names
    })

    const getClasses = computed(() => {
        const options = getRandomOptions(characterOptions.value.classes)
        const classes = options.map(({name}) => name)
        return classes
    })

    const getFeats = computed(() => {
        let feats=[]
        if(currentCreation.value.ascendancy !== null) {
            const heroClass = characterOptions.value.classes.find((el) => el.name === currentCreation.value.class)
            feats = getRandomOptions(heroClass.feats)
        }
        return feats
    })

    const getWeapons = computed(() => {
        let weapons=[]
        if(currentCreation.value.ascendancy !== null) {
            const heroClass = characterOptions.value.classes.find((el) => el.name === currentCreation.value.class)
            weapons = getRandomOptions(heroClass.weapons)
        }
        return weapons
    })

    const getBackgrounds = computed(() => {
        const options = getRandomOptions(characterOptions.value.backgrounds)
        const backgrounds = options.map(({name}) => name)
        return backgrounds
    })

    const getFlaws = computed(() => {
        return getRandomOptions(characterOptions.value.flaws)
    })

    const getTrinkets = computed(() => {
        return getRandomOptions(characterOptions.value.trinkets)
    })

    // ACTIONS
    function setCurrentTrait(option) {
        if(currentCreation.value.ascendancy === null) {
            currentCreation.value.ascendancy = option
        }
        else if(currentCreation.value.name === null) {
            currentCreation.value.name = option
        }
        else if(currentCreation.value.class === null) {
            currentCreation.value.class = option
        }
        else if(currentCreation.value.feat === null) {
            currentCreation.value.feat = option
        }
        else if(currentCreation.value.weapon === null) {
            currentCreation.value.weapon = option
        }
        else if(currentCreation.value.background === null) {
            currentCreation.value.background = option
        }
        else if(currentCreation.value.flaw === null) {
            currentCreation.value.flaw = option
        }
        else if(currentCreation.value.trinket === null) {
            currentCreation.value.trinket = option
        }
    }

    function getRandomOptions(array) {
        let answersArray = []
        let drawnAnswers = []
        while (answersArray.length < 3) {
            let index = Math.floor(Math.random() * array.length)
            if (!drawnAnswers.includes(index)) {
                answersArray.push(array[index])
                drawnAnswers.push(index)
            }
        }
        return answersArray
    }

return { currentCreation, getCurrentQuestion, setCurrentTrait }

})
