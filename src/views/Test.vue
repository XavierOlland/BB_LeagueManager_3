<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from 'vue-router'
import { useMatchStore } from "../stores/match"

const route = useRoute()
const store = useMatchStore()

const admin = window.admin

const match = computed(() =>{
  return store.match
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
      <div class="col-xs-5 team_1" :class="{'col-xs-6': match.team_1_score!=null}">
        <div class="plain prime row end-xs">
          <div class="teamBoard">
            <h1 class="zelda color_1" > {{match.team_1_name}}</h1>
            <h3 class="color_1">{{ match.team_1_race }}<br/> 
            <span>coachés par </span>{{match.coach_1_name}}</h3>
          </div>
          <div v-if="match.team_1_score!=null" class="scoreBoard color_1 bottom-xs">{{match.team_1_score}}</div>
        </div>
      </div>
      
    </div>
    <div v-if="match.team_1_score == null" class="row center-xs">
      <div class="col-xs-4">
        <div class="plain conf seconde zelda" @click="viewForum(match.forum_url)">
          <p>Assistez à la conférence de presse des coachs et venez commenter sur le forum.</p>
          {{ match }}
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

  .teamBoard {
    h3 {
      span {
        color: $prime-text;
        font-family: "Mulish";
        font-size: 1.6rem;
      }
    }
  }
  .scoreBoard {
    width: 25%;
    background: $prime-text;  
    font-family: 'Teko';
    font-size: 10rem;
    line-height: 10rem;
    text-align: center;
    font-weight: 500;
    text-shadow: $shadow 2px 2px;
    padding-top: 1rem;
  }

  .team_1 {
    .color_1 {
      color:v-bind('match.team_1_color_1');
    }
    .plain.prime {
      padding:0;
      border-color:v-bind('match.team_1_color_1');
      .teamBoard {
        padding: 1.5rem 3rem;
      }
    }
  }
  .team_2 {
    .color_1 {
      color:v-bind('match.team_2_color_1');
    }
    .plain.prime {
      padding:0;
      border-color:v-bind('match.team_2_color_1');
      .teamBoard {
        padding: 1.5rem 0 1.5rem 3rem;
      }
    }
  }
    .teamBoard {
    h3 {
      span {
        color: $prime-text;
        font-family: "Mulish";
        font-size: 1.4rem;
      }
    }
  }
  .conf {
    padding-bottom: 30px;
    p {
      color: $prime-text;
      padding: 0 5rem;
      text-align: center;;
      font-size: 1.1rem;
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
