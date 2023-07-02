<script async setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  match: {}
});
</script>

<template>
  <div class="match" @click="router.push({ name: 'match', params: { id: match.id } })" :title="match.name_1+' VS ' + match.name_2">
    <img :src="'https://bbbl.fr/img/logos/Logo_' + match.logo_1 + '.png'">
    <img class="versus" v-if="match.score_1 == null" src="../../assets/images/Versus.png">
      <span class="score" v-else > <span :class="{'winner': match.score_1 >match.score_2 }">{{match.score_1}}</span> - <span :class="{'winner': match.score_1 < match.score_2 }">{{match.score_2}}</span> </span>
    <img :src="'https://bbbl.fr/img/logos/Logo_' + match.logo_2 + '.png'">    
  </div>
</template>

<style lang="scss" scoped>
  .match {
    color: $prime-text;
    vertical-align: middle;
    text-align: center;
    margin: 0.5rem 0;
    padding: 1rem 0.2rem !important;
    border-radius: 5px;
    border: 1px solid transparent;
    span {
      vertical-align: middle;
      display: inline-block;
    }
    img {
      height: 3rem;
      display: inline;
      vertical-align: middle;
    }
    p {
      font-family: 'Mulish';
      color: $prime-text;
      margin: 0;
    }
    hr {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      border-top: 1px solid $prime-color;
      width: 75%;
    }
    .versus {
      height: 1.75rem;
    }
    .score {
      font-family: 'Akashi';
      font-size: 1.3rem;
      line-height: 1.6rem !important;
      font-weight: 400;
      letter-spacing: -0.15rem;
      margin: 0 0.5rem;
    }
    .winner {
      color: $prime-color;
      font-size: 1.7rem;
    }
  }
  .match:hover {
    background: $prime-bg;
    border: 1px solid $prime-color;
    .winner {
      color: $prime-color;
    }
  }
  .current {
    hr {
      border-color: $link-contrast;
    }
    .winner {
      color: $link-contrast;
    }
    .match:hover{
      hr {
        border-color: $prime-color;
      }
    }
  }
</style>
