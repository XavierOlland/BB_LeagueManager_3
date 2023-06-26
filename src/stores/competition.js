import { defineStore } from 'pinia'
import axios from "axios"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useCompetitionStore = defineStore("competition",{
    state: () => ({
        competition: { 
          standing:[],
          calendar:[]
        }
    }),
    getters: {
      getCompetition(state){
          return state.competition
        }
    },
    actions: {
      async fetchCompetition(id) {
        try {
            const response = await axios.post(route + 'competition', {
              id: id
            })
            this.competition = response.data;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})