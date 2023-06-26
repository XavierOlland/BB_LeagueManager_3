import { defineStore } from 'pinia'
import axios from "axios"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ADMIN

export const useAdminStore = defineStore("admin",{
    state: () => ({
      activeCompetitions: [],
      forums: [],
      activeTeams: [],
      activeCoachs: []
    }),
    getters: {
      getAdmin: (state) => {
          return state
      },
    },
    actions: {
      async fetchActiveTeams() {
        try {
            const result = await axios.get(route + 'getActiveTeams')
            this.activeTeams = result.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchActiveCoachs() {
        try {
            const result = await axios.get(route + 'getActiveCoachs')
            this.activeCoachs = result.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchActiveCompetitions() {
        try {
            const result = await axios.get(route + 'getActiveCompetitions')
            this.activeCompetitions = result.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async addMatchs(data) {
        try {
            await axios.post(route + 'matchsAdd', Object.values(data))
            return "Matchs ajoutés";
          }
          catch(error) {
            alert(error)
            console.log(error)
        }
      }
    }
  }
)