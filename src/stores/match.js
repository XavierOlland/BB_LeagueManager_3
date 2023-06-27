import { defineStore } from 'pinia'
import axios from "axios"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useMatchStore = defineStore("match",{
    state: () => ({
        match: {}
    }),
    getters: {
      getMatch(state){
          return state.match
        }
    },
    actions: {
      async fetchMatch(id) {
        try {
            const response = await axios.post(route + 'match', {
              id: id
            })
            this.match = response.data;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})