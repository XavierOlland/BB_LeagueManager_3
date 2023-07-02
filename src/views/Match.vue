<script setup>
import { onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useMatchStore } from "../stores/match"
import { useLeagueStore } from "../stores/league"
import Team from "../components/match/Team.vue"


const route = useRoute()
const store = useMatchStore()
const params = useLeagueStore()
const { getTranslation } = storeToRefs(params)

const admin = window.admin

const match = computed(() =>{
  return store.match
})
const team_1 = computed(() =>{
  return store.team_1
})
const team_2 = computed(() =>{
  return store.team_2
})
function viewForum(url) {
  window.open( url, "_blank" )
}

onMounted(() => {
  store.fetchMatch(route.params.id)
});


</script>

<template>
  <main>
    <div class="row center-xs">
      <div class="col-xs-5" @click="$router.push({ name: 'Competition', params: { id: match.competition_id }})">
        <div class="plain header seconde text-center zelda">
          <h3 v-if="match.competition_name==match.season">{{match.competition_name}}</h3>
          <h3 v-else>{{match.season}} - {{match.competition_name}}</h3>
          <h3 v-if="match.team_1_score!=null">{{match.started}}</h3>
          <h3 v-else-if="match.started">Match prévu le {{ match.started }}</h3>
          <h3 v-else>Match non joué {{ admin }}</h3>
        </div>
      </div>
    </div>
    <div class="row middle-xs">
      <Team v-if="team_1" :team="team_1" :score="match.team_1_score" :order="1" :colour="match.team_1_color_1"/>
      <div v-if="match.team_1_score==null" class="col-xs-2 center-xs versus">
        <img src="../assets/images/Versus.png">
      </div>
      <Team v-if="team_2" :team="team_2" :score="match.team_2_score" :order="2" :colour="match.team_2_color_1"/>
    </div>
    <div v-if="match.team_1_score != null" class="row center-xs">
      <div class="col-xs-4">
        <div class="plain conf seconde zelda" @click="viewForum(match.forum_url)">
          <p>Assistez à la conférence de presse des coachs et venez commenter sur le forum.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .conf {
    padding-bottom: 30px;
    p {
      color: $prime-text;
      padding: 0 5rem;
      text-align: center;;
      font-size: 1.1rem;
    }
  }
</style>
