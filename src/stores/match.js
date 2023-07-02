import { defineStore } from 'pinia'
import axios from "axios"

const route = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_ROUTES

export const useMatchStore = defineStore("match",{
    state: () => ({
        match: Object,
        team_1: Object,
        team_2: Object
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
            this.team_1 = response.data.teams[0];
            this.team_2 = response.data.teams[1];
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})