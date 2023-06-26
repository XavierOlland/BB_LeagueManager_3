<script async setup>

const props = defineProps({
  match: {}
});
</script>

<template>
  <div class="match">
    <img :src="'https://bbbl.fr/img/logos/Logo_' + match.logo_1 + '.png'" :title="match.name_1">
    <img class="versus" v-if="match.score_1 == null" src="../../assets/images/vs.png">
      <span class="score" v-else > <span :class="{'winner': match.score_1 >match.score_2 }">{{match.score_1}}</span> - <span :class="{'winner': match.score_1 < match.score_2 }">{{match.score_2}}</span> </span>
    <img :src="'https://bbbl.fr/img/logos/Logo_' + match.logo_2 + '.png'" :title="match.name_2">    
  </div>
</template>

<style scoped>
  img {
    height: 3rem;
    display: inline;
      vertical-align: middle;
  }
  .versus {
    height: 2rem;
  }
  .match {
    color: var(--prime-text);
    vertical-align: middle;
    text-align: center;
    margin: 0.5rem 0;
    padding: 1rem 0.2rem !important;
    border-radius: 5px;
    border: 1px solid transparent;
  }
  span {
      vertical-align: middle;
      display: inline-block;
    }
    p {
      font-family: 'Mulish';
      color: var(--prime-text);
      margin: 0;
    }
    hr {
      margin: 0.5rem auto;
      border-top: 1px solid var(--prime-color);
      width: 75%;
    }
    .score {
      font-family: 'Teko';
      font-size: 1.5rem;
      line-height: 1.6rem !important;
      font-weight: 400;
      margin: 0 0.5rem;
    }
    .winner {
      color: var(--prime-color);
      font-size: 1.7rem;
      font-weight: 500;
    }
    .current .winner {
      color: var(--link-contrast)
    }
  .match:hover {
    background: var(--prime-bg);
    border: 1px solid var(--prime-color);
    .winner {
      color: var(--prime-color);
    }
  }
  .current {
    hr {
      border-color: var(--link-contrast);
    }
    .winner {
      color: var(--link-contrast);
    }
    .match:hover{
      hr {
        border-color: var(--prime-color);
      }
    }
  }
</style>
