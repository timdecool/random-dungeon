<script setup>
import { ref, computed, onUpdated } from 'vue'

import ProgressBar from '@/components/Layout/ProgressBar.vue'
import CreationOptions from '@/components/Content/CreationOptions.vue'
import charactersJSON from '@/data/characters.json'

/*
Ce que je veux :
1. Introduction

2. Choix d'ascendance
3. Choix de nom de personnage
4. Classe
5. Capacité spéciale
6. Arme
7. Background
8. Défaut
9. Babiole

10. Caractéristiques
*/
const stepNumber = ref(1)

const answers = ref({
    ascendancy: null,
    name: null,
    class: null,
    feat: null,
    weapon: null,
    background: null,
    flaw: null,
    trinket: null
})

const currentQuestion = ref({
    title: 'Quelle est ton ascendance ?',
    options: getRandomAnswers(charactersJSON.ascendancies[0].typicalNames)
})

const curQuestion = computed(() => {
    let question = { title: null, options: null }
    switch (stepNumber.value) {
        case 1:
            question = {
                title: 'Quelle est ton ascendance ?',
                options: getRandomAnswers(charactersJSON.ascendancies)
            }
            break;
        case 2:
            question = {
                title: 'Quel est ton prénom ?',
                options: getRandomAnswers(charactersJSON.ascendancies[0].typicalNames)
            }
            break;
        case 3:
            question = {
                title: 'Quelle est ta classe ?',
                options: getRandomAnswers(charactersJSON.classes)
            }
            break;
        case 4:
            question = {
                title: 'Quelle est ta capacité spéciale ?',
                options: getRandomAnswers(charactersJSON.classes)
            }
            break;
        case 5:
            question = {
                title: 'Quelle arme manies-tu ?',
                options: getRandomAnswers(charactersJSON.classes)
            }
            break;
        case 6:
            question = {
                title: 'Qu\'étais-tu par le passé ?',
                options: getRandomAnswers(charactersJSON.backgrounds)
            }
            break;
        case 7:
            question = {
                title: 'Quel est ton défaut ?',
                options: getRandomAnswers(charactersJSON.flaws)
            }
            break;
        case 8:
            question = {
                title: 'Quel babiole gardes-tu toujours avec toi ?',
                options: getRandomAnswers(charactersJSON.trinkets)
            }
            break;
    }

    return question
})

function getRandomAnswers(array) {
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

function handleConfirm(option) {
    switch (stepNumber.value) {
        case 1:
            answers.value.ascendancy = option.id
            break;
        case 2:
            answers.value.name = option
            break;
        case 3:
            answers.value.class = option.id
            break;
        case 4:
            answers.value.feat = option
            break;
        case 5:
            answers.value.weapon = option
            break;
        case 6:
            answers.value.background = option
            break;
        case 7:
            answers.value.flaw = option
            break;
        case 8:
            answers.value.trinket = option
            break;
    }
    stepNumber.value++
    console.log(stepNumber.value)
}

onUpdated(() => {
    console.log(answers.value)
})


</script>

<template>
    <h1 class="text-center">Crée ton personnage</h1>
    <progress-bar />
    <creation-options :currentQuestion="curQuestion" @confirm="handleConfirm" />
</template>