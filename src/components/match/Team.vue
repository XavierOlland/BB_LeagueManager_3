<script async setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useParamStore } from "../../stores/params"


const params = useParamStore()
const { getTranslation } = storeToRefs(params)

const router = useRouter()
const props = defineProps({
  team: {},
  score: Number,
  order: Number,
  colour: String
});
</script>

<template>
  <div class="col-xs-5 team_1" :class="{'col-xs-6': score!=null}">
    <div class="plain prime row" :class="{'end-xs':order==1}">
      <div v-if="score!=null" class="scoreBoard colour bottom-xs" :class="{'last-xs':order==1}">
        {{score}}
      </div>
      <div class="teamBoard">
        <h1 class="zelda colour">{{team.name}}</h1>
        <h3 class="colour">{{ getTranslation(team.param_id_race) }}<br/> 
        <span>coachés par </span>{{team.coach}}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .colour {
    color:v-bind('props.colour');
  }
  .plain.prime {
    padding:0;
    border-color:v-bind('props.colour');
    .teamBoard {
      padding: 1.5rem 3rem;
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
</style>
