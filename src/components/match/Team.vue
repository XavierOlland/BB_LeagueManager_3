<script async setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useParamStore } from "../../stores/params"
import Helmet from "../visuals/Helmet.vue"


const params = useParamStore()
const { getTranslation } = storeToRefs(params)

const router = useRouter()
const props = defineProps({
  team: {},
  score: Number,
  order: Number,
  colour_1: String,
  colour_2: String,
});
</script>

<template>
  <div class="col-xs-5 team_1" :class="{'col-xs-6': score!=null}">
    <div class="plain prime row" :class="{'end-xs':order==1,'start-xs':order!=1,'no-score': score==null}">
      <div v-if="score!=null" class="scoreBoard colour bottom-xs col-xs-3" :class="{'last-xs':order==1}">
        {{score}}
      </div>
      <div class="teamBoard  col-xs-9">
        <h1 class="zelda colour">{{team.name}}</h1>
        <h3 class="colour">{{ getTranslation(team.param_id_race) }}<br/> 
        <span>coachés par </span>{{team.coach}}</h3>
      </div>
      <div :class="{'first-xs':order==1,'forum':$route.fullPath.indexOf('iframe')==1}">
        <Helmet :race="team.param_id_race" :logo="team.logo" :colours="[colour_1,colour_2]"></Helmet>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .colour {
    color:v-bind('props.colour_1');
  }
  .plain.prime {
    padding:0;
    .teamBoard {
      padding: 1rem 1.5rem;
      h3 {
        span {
          color: $prime-text;
          font-family: "Mulish";
          font-size: 1.5rem;
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
  }
  .end-xs {
    @include advancedBorders(transparent,v-bind('props.colour_1'),#fff);
  }
  .start-xs {
    @include advancedBorders(#fff,v-bind('props.colour_1'),transparent);
  }

  .no-score {
    @include borders(v-bind('props.colour'));
  }

  .forum {
    position:absolute;
    top:-12rem;
    right:2rem;
  }
  .first-xs.forum {
    left:2rem;
  }
</style>
