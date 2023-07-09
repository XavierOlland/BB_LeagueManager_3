<script async setup>
  import { onMounted, reactive } from "vue";
  import { useMatchStore } from "../../stores/match"
  const store = useMatchStore()

  const emit = defineEmits(['submit'])
  const props = defineProps({
    match: {}
  });
  const stats = reactive({})

  function updateMatch() {
    stats.id = props.match.id
    store.updateMatch(stats).then(() => {
      emit('submit')
    });
  };
</script>

<template>
  <div class="row">
    <div class="col-xs-6">
      <h3>{{match.team_1_name}}</h3>
      <p>
        Touchdowns: <input type="number" v-model="stats.score_1"/><br/>
        Blessures infligées: <input type="number" v-model="stats.sustainedcasualties_2"/><br/>
        Blessures subies: <input type="number" v-model="stats.sustainedinjuries_1"/><br/>
        Morts subies: <input type="number" v-model="stats.sustaineddead_1"/><br/>
      </p>
    </div>
    <div class="col-xs-6">
      <h3>{{match.team_2_name}}</h3>
      <p>
        Touchdowns: <input type="number" v-model="stats.score_2"/><br/>
        Blessures infligées: <input type="number" v-model="stats.sustainedcasualties_1"/><br/>
        Blessures subies: <input type="number" v-model="stats.sustainedinjuries_2"/><br/>
        Morts subies: <input type="number" v-model="stats.sustaineddead_2"/><br/>
      </p>
    </div>
  </div>
  <div class="row center-xs">
    <button @click="updateMatch">Valider</button>
  </div>
</template>

<style lang="scss" scoped>
  p {
    line-height: 1.2rem;
  }
  button {
    background-color: $seconde-color;
    color: $prime-text;
    border:1px solid $prime-text;
    padding: 0.5rem;
    font-family: Mulish;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
</style>
