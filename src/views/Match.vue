<script setup>
  import { onMounted, computed } from "vue";
  import { useRoute } from 'vue-router'
  import { useMatchStore } from "../stores/match"
  import Team from "../components/match/Team.vue"
  import Update from "../components/match/Update.vue"

  const route = useRoute()
  const store = useMatchStore()
  const user = window.user
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
  
  function postToForum(forum) {
    window.open(import.meta.env.VITE_FORUM_URL + "/posting.php?mode=post&f=" + forum + "&match=" + route.params.id, "_blank" )
  }

  function viewForum(url) {
    window.open( url, "_blank" )
  }

  function updateMatch(){
    store.fetchMatch(route.params.id)
  } 

  onMounted(() => {
    store.fetchMatch(route.params.id)
  });
</script>

<template>
  <main>
    <div class="row center-xs">
      <div class="col-xs-5" @click="$router.push({ name: 'home' })">
        <div class="plain header seconde text-center zelda">
          <h3 v-if="match.competition_name==match.season">{{match.competition_name}}</h3>
          <h3 v-else>{{match.season}} - {{match.competition_name}}</h3>
          <h3 v-if="match.team_1_score!=null">{{match.started}}</h3>
          <h3 v-else-if="match.started">Match prévu le {{ match.started }}</h3>
          <h3 v-else>Match non joué</h3>
        </div>
      </div>
    </div>
    <div class="row middle-xs">
      <Team v-if="team_1" :team="team_1" :score="match.team_1_score" :order="1" :colour_1="match.team_1_color_1" :colour_2="match.team_1_color_2"/>
      <div v-if="match.team_1_score==null" class="col-xs-2 center-xs versus">
        <img src="../assets/images/Versus.png">
      </div>
      <Team v-if="team_2" :team="team_2" :score="match.team_2_score" :order="2" :colour_1="match.team_2_color_1" :colour_2="match.team_2_color_2"/>
    </div>
    <div class="row center-xs">
      <div v-if="match.team_1_score != null" class="col-xs-4">
        <div class="plain conf seconde zelda" @click="viewForum(match.forum_url)">
          <p>Assistez à la conférence de presse des coachs et venez commenter sur le forum.</p>
          <button v-if="match.forum_url == null" @click="postToForum(match.forum)">Poster</button>
        </div>
      </div>
      <div v-else-if="match.team_1_score==null && (user.coach_id==match.coach_id_1 || user.coach_id==match.coach_id_2 || admin==1)" class="col-xs-6 plain seconde">
        <h2>Enregistrement du match</h2>
        <Update :match="match" @submit="updateMatch"></Update>
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
  button {
    background-color: $prime-color;
    color: $prime-text;
    border:1px solid $prime-text;
    padding: 0.2rem;
    font-family: Teko;
    font-size: 1.6rem;
    font-weight: 400;
    cursor: pointer;
  }
</style>
