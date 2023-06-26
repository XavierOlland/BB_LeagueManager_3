<script async setup>
  import Preview from '../components/match/Preview.vue'

  const props = defineProps({
    day: {},
    competition: {}
  });

</script>

<template>
  <div class="plain prime" :class="{ 'current': day.round == day.currentRound && competition.active==1 && competition.format != 'ladder'}">
    <h3>Journée {{ day.round }}</h3>
    <div class="row between-xs">
      <Preview v-for="match in day.matchs" :match="match"/>
    </div>
  </div>
</template>

<style scoped>
.current {
  background-color: var(--prime-color);
}

</style>
