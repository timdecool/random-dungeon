import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'dungeons'
const STORE_LOCAL_STORAGE_KEY = 'dungeons'
const getCurrentState = () => {
    const localData = localStorage.getItem(STORE_LOCAL_STORAGE_KEY)
    return localData ? JSON.parse(localData): []
}

export const useDungeonsStore = defineStore('dungeons', () => {
    // STATES
    const dungeons = ref(getCurrentState())


    // GETTERS
    const getDungeons = computed(() => {
        const localDungeons = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
        return localDungeons ? JSON.parse(localDungeons) : []
    })

    // ACTIONS
    function addDungeon(item) {
        dungeons.push(item)
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(dungeons))
    }

    function updateDungeon(item) {
        const index = dungeons.findIndex(el => {
            return e.id === item.id
        })
        if (index != -1) {
            dungeons[index] = item
        }
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(dungeons))
    }

    function removeDungeon(item) {
        const index = dungeons.findIndex(el => {
            return e.id === item.id
        })
        if (index != -1) {
            dungeons.splice(index, 1)
        }
        localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(dungeons))
    }
    
  return { dungeons, getDungeons, addDungeon, removeDungeon, updateDungeon }

})
