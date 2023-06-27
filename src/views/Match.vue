<script setup>
import { onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useMatchStore } from "../stores/match";
import { useLeagueStore } from "../stores/league";


const route = useRoute()
const store = useMatchStore()
const params = useLeagueStore();
const { getTranslation } = storeToRefs(params);

const match = computed(() =>{
  return store.match
})

onMounted(() => {
  store.fetchMatch(route.params.id);
});
</script>

<template>
  <main>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6" @click="$router.push({ name: 'Competition', params: { id: match.competition_id }})" style="{background:rgba(68,68,68,0.9)}">
        <div class="plain header seconde text-center stadium zelda" :style="{ background: `url(${stadiumImage}) center center`, backgroundSize: 'cover'}">
          <h4>{{match.leaguename}}</h4>
          <h3 v-if="match.competition_name==match.season">{{match.competition_name}} </h3>
          <h3 v-else>{{match.season}} - {{match.competition_name}}</h3>
          <h3>{{match.started}}</h3><br />
        </div>
      </div>
    </div>
    <div v-if="match.team_1_score!=null" class="row no-gutters">
      <div class="col-md-6">
        <Helmet class="helmet left" :race="match.teams[0].param_id_race" :logo="match.teams[0].logo" :colours="[match.team_1_color_1,match.team_1_color_2]" />
        <div class="plain prime content noselect text-right" :style="{'border-color': match.team_1_color_1}">
          <h2 class="zelda" :style="{color: match.team_1_color_1}" @click="$router.push({ name: 'Team', params: { id: match.teams[0].id }})">{{match.teams[0].name}}</h2>
          <div class="scoreBoard">
            <div class="teamBoard">
              <h3 :style="{color: match.team_1_color_1}"><span>{{ getTranslation(match.team_1_race) }}</span></h3>
              <h3>coaché par <span :style="{color: match.team_1_color_1}">{{match.coach_1_name}}</span></h3>
              <h3>
                <div v-for="index in match.teams[0].popularitybeforematch" :key="index" class="star" :style="{color: match.team_1_color_1}">&#9733;</div>
                <span v-if="match.teams[0].popularitygain"> + <div class="star">&#9733;</div></span>
              </h3>
              <h3 v-if="match.teams[0].popularitybeforematch==0 && match.teams[0].popularitygain==0"><br/>
              </h3>
              
            </div>
            <div v-if="match.team_1_score != null" class="score align-self-baseline" :style="{color: match.team_1_color_1}">{{match.team_1_score}}</div>
          </div>
        </div>
      </div>
      <div v-if="match.team_1_score!=null" class="col-md-6">
        <Helmet class="helmet right" :race="match.teams[1].param_id_race" :logo="match.teams[1].logo" :colours="[match.team_2_color_1,match.team_2_color_2]" />
        <div class="plain prime content noselect text-left" :style="{'border-color': match.team_2_color_1}">
          <h2 class="zelda" :style="{color: match.team_2_color_1}" @click="$router.push({ name: 'Team', params: { id: match.teams[1].id }})">{{match.teams[1].name}}</h2>
          <div class="scoreBoard">
            <div v-if="match.team_1_score != null" class="score align-self-baseline" :style="{color: match.team_2_color_1}">{{match.team_2_score}}</div>
            <div class="teamBoard">
              <h3 :style="{color: match.team_2_color_1}"><span>{{ getTranslation(match.teams[1].param_id_race)}}</span></h3>
              <h3>coachés par <span :style="{color: match.team_2_color_1}">{{match.coaches[1].coachname}}</span></h3>
              <h3>
                <div v-for="index in match.teams[1].popularitybeforematch" :key="index" class="star" :style="{color: match.team_2_color_1}">&#9733;</div>
                <span v-if="match.teams[1].popularitygain"> + <div class="star">&#9733;</div></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="match.team_1_score != null" class="row no-gutters ">
      <div class="col-md-4"></div>
      <div class="col-md-4 d-none d-xxl-block" style="{background:rgba(68,68,68,0.9)}">
        <div class="plain conf seconde">
          <p>Assistez à la conférence de presse des coachs et venez commenter sur le forum.</p>
          <Button :id="'Seconde'" :text="'Forum'" @clicked="viewForum()" />
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row">
      <div class="plain prime">
        {{ match }}
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  $prime-color: #008822;
  $prime-bg: rgba(0, 11, 3, 0.95);
  $seconde-color: #289256;
  $seconde-bg: rgba(37, 48, 40, 0.9);
  $focus-bg: rgba(0, 136, 34, 0.8);
  $focus-color: #EEE;
  $prime-text:#EEE;
  $seconde-text:#CCC;
  $shadow: rgba(0, 0, 0, 0.90);
  $link-contrast: #000;
  $error: #C00;
  $error-85: rgba(212, 0, 0, 0.85);
  $success: #00A300;
  .conf {
    padding-bottom: 30px;
    p {
      color: $prime-text;
      padding: 0 5rem;
      text-align: center;;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  .scoreBoard {
    display: inline-flex;
    .score {
      align-self: flex-end;
      padding: 0 20px;
      font-family: 'Teko';
      font-size: 120px;
      text-shadow: $prime-text 2px 2px;
    }
  }
  .teamBoard {
    font-weight: 600;
    text-shadow: 0 2px 5px $shadow;
    h3 {
      color: $prime-text;
      font-family: "Mulish";
      span {
        font-family: 'Teko';
      }
    }
  }
  .stadium {
    padding-bottom: 10px;
    text-shadow: 0 2px 5px $shadow;

  }
  .helmet {
    position: absolute;
    bottom:0;
    width:300px;
    height:300px;
    z-index:2;
  }
  .left {
    transform: rotateY(180deg);
  }
  .right {
    right:0;
  }
  @media (max-width: 1439px) {
    .helmet {
      bottom:-35px;
      width:250px;
      height:250px;
    }
  }
  @media (max-width: 1200px) {
    .helmet {
      width:175px;
      height:175px;
    }
  }
  .stats {
    column-count: 1;
    span {
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1820px) {
    .stats {

      column-count: 2;
    }
  }
  .background {
    position: absolute;
    top: 10%;
    left: 25%;
    height: 80%;
    width: 50%;
    img {
      width: auto;
      height: 100%;
      opacity: 0.15;
    }
  }
</style>
