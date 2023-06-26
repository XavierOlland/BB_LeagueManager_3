import { defineStore } from 'pinia'
import axios from "axios"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useLeagueStore = defineStore("league",{
    state: () => ({
        league: {stats:{}},
        params: [],
        competitions: [],
    }),
    getters: {
      getLeague: (state) => {
          return state.league
      },
      getTranslation: (state) => (name) => {
        var item = state.params.find(param => param.name == name);
        var translation = !item ? "-" : item.translation;
        return translation
      }
    },
    actions: {
      async fetchLeague() {
        try {
            const result = await axios.get(route + 'boot')
            this.league = result.data.stats
            this.params = result.data.parameters
            this.competitions = result.data.competitions
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})