<script async setup>
  import Preview from './match/Preview.vue'

  const props = defineProps({
    day: {},
    competition: {}
  });

</script>

<template>
  <div class="plain prime" :class="{ 'current': day.round == day.currentRound && competition.active==1 && competition.format != 'ladder'}">
    <h3>Journée {{ day.round }}</h3>
    <div class="row around-xs">
      <Preview v-for="match in day.matchs" :match="match"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .current {
    @include borders($focus-bg);
    background: $focus-bg;
    h3 {
      color: $focus-color;
    }
  }
</style>
