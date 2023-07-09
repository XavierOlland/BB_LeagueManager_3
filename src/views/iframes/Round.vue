<script setup>
  import { onMounted, computed } from "vue";
  import { useRoute } from 'vue-router'
  import { useCompetitionStore } from "../../stores/competition";
  import Preview from '../../components/match/Preview.vue'

  const store = useCompetitionStore()
  const route = useRoute()

  const round = computed(() => {
    return store.competition.calendar.find((day) => day.round == route.params.day)
  });

  onMounted(() => {
    store.fetchCompetition(route.params.id)
  });
</script>

<template>
  <main>
    <div class="row center-xs">
      <div class="col-xs-10">
        <div class="row space-between">
          <Preview v-for="match in round.matchs" :match="match"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  body {
    background: transparent;
  }
  main {
    margin: 0;
  }
</style>
