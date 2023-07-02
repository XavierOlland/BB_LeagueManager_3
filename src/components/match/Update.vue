<script async setup>
  import { onMounted } from "vue";
import { useMatchStore } from "../../stores/match"
  const store = useMatchStore()

  const emit = defineEmits(['submit'])
  const props = defineProps({
    match: {},
  });
  function updateMatch() {
    store.updateMatch(props.match).then(() => {
      emit('submit')
    });
  };
</script>

<template>
  <div class="row">
    <div class="col-xs-6">
      <h3>{{match.team_1_name}}</h3>
      <p>
        Touchdowns: <input type="number" v-model="match.score_1"/><br/>
        Blessures infligées: <input type="number" v-model="match.sustainedcasualties_2"/><br/>
        Blessures subies: <input type="number" v-model="match.sustainedinjuries_1"/><br/>
        Morts subies: <input type="number" v-model="match.sustaineddead_1"/><br/>
      </p>
    </div>
    <div class="col-xs-6">
      <h3>{{match.team_2_name}}</h3>
      <p>
        Touchdowns: <input type="number" v-model="match.score_2"/><br/>
        Blessures infligées: <input type="number" v-model="match.sustainedcasualties_1"/><br/>
        Blessures subies: <input type="number" v-model="match.sustainedinjuries_2"/><br/>
        Morts subies: <input type="number" v-model="match.sustaineddead_2"/><br/>
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
    border:none;
    border-radius: 3px;
    padding: 0.5rem;
    font-family: Mulish;
    font-size: 1.2rem;
  }
</style>
