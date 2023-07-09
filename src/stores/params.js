import { defineStore } from 'pinia'
import axios from "axios"
import races from "../assets/races"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useParamStore = defineStore("params",{
    state: () => ({
        params: {
          stats:{},
          races: races,
          user:{},
          season: String
        }
    }),
    getters: {
      getParams(state){
          return state.params
        },
      getTranslation: (state) => (id) => {
        var item = state.params.races.find(param => param.id == id);
        var translation = !item ? "-" : item.translation;
        return translation
      }
    },
    actions: {
      async fetchUser() {
        try {
            const data = await axios.get(route + 'user')
            this.params.user = data.data
            window.user = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchParams() {
        try {
            const result = await axios.get(route + 'boot')
            this.params.stats = result.data.stats
            //this.params = result.data.parameters
            this.params.season = result.data.season
            window.user = result.data.user
            window.season = result.data.season
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    }
})