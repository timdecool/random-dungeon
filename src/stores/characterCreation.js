// IMPORTS
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import charactersJSON from '@/data/characters.json'

// KEYS
const STORE_NAME = 'characterCreation'
const STORE_LOCAL_STORAGE_KEY = 'characterCreation'

const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): charactersJSON }

export const useCharacterCreationStore = defineStore(STORE_NAME, () => {
    // STATES
    const characterOptions = ref(getCurrentState())
    const currentCreation = ref({
        ascendancy: null,
        name: null,
        charClass: null,
        feat: null,
        weapon: null,
        background: null,
        flaw: null,
        trinket: null,
        attributes: null
    })

    // COMPUTED
    const getCurrentStep = computed(() => {
        let curStep = 1
        for(let trait of Object.getOwnPropertyNames(currentCreation.value)) {
            if(currentCreation.value[trait] !== null) {
                curStep++
            }
        }
        return curStep
    })


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
        else if(currentCreation.value.charClass === null ) {
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
        else if(currentCreation.value.attributes === null) {
            currentQuestion.question = "Voici tes caractéristiques. Bonne chance."
            currentQuestion.list = getStats
        }
        else {
            currentQuestion.question = "Fini"
        }
        return currentQuestion
    })

    const getStats = computed(() => {
        let stats = ["Force","Dextérité","Constitution","Intelligence","Sagesse","Charisme"]
        let charStats = []
        for(let stat of stats) {
            charStats.push({
                "stat": stat,
                "value": Math.ceil(Math.random() * 6)*3
            })
        }
        return charStats
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
            const heroClass = characterOptions.value.classes.find((el) => el.name === currentCreation.value.charClass)
            feats = getRandomOptions(heroClass.feats)
        }
        return feats
    })

    const getWeapons = computed(() => {
        let weapons=[]
        if(currentCreation.value.ascendancy !== null) {
            const heroClass = characterOptions.value.classes.find((el) => el.name === currentCreation.value.charClass)
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

    function resetCreation() {
        currentCreation.value = {
            ascendancy: null,
            name: null,
            class: null,
            feat: null,
            weapon: null,
            background: null,
            flaw: null,
            trinket: null,
            attributes: null
        }
    }
    

    function setCurrentTrait(option) {
        if(currentCreation.value.ascendancy === null) {
            currentCreation.value.ascendancy = option
        }
        else if(currentCreation.value.name === null) {
            currentCreation.value.name = option
        }
        else if(currentCreation.value.charClass === null) {
            currentCreation.value.charClass = option
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
        else if(currentCreation.value.attributes === null) {
            currentCreation.value.attributes = option
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

return { currentCreation, getCurrentQuestion, getCurrentStep, setCurrentTrait, resetCreation }

})
