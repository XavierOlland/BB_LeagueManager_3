<script async setup>
import { ref, reactive, onMounted, computed, watchEffect } from "vue";
import { useCompetitionStore } from "../stores/competition";
import Round from '../components/Round.vue'

const props = defineProps({
  competitionID: Number
});

const store = useCompetitionStore();

const competition = computed(() => {
  return store.competition
});

onMounted( () => {
  store.fetchCompetition( props.competitionID );
});

</script>

<template>
  
    <Round v-for="day in competition.calendar.sort((a, b) => b.round - a.round)" :day="day" :competition="competition"></Round>

</template>

<style scoped>

</style>
