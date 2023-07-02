import { defineStore } from 'pinia'
import axios from "axios"
import races from "../assets/races"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useParamStore = defineStore("params",{
    state: () => ({
        params: {
          stats:{},
          races: races
        }
    }),
    getters: {
      getLeague(state){
          return state.params
        },
      getTranslation: (state) => (id) => {
        var item = state.params.races.find(param => param.id == id);
        var translation = !item ? "-" : item.translation;
        return translation
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