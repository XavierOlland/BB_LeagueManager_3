import { defineStore } from 'pinia'
import axios from "axios"
import races from "../assets/races"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useLeagueStore = defineStore("league",{
    state: () => ({
        league: {
          stats:{}
        }
    }),
    getters: {
      getLeague(state){
          return state.league
        }
    },
    actions: {
      async fetchLeague() {
        try {
            const data = await axios.get(route + 'boot')
            this.league = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})