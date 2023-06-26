<script async setup>
import { onMounted, computed } from "vue";
import { useLeagueStore } from "../stores/league";

const store = useLeagueStore();

const league = computed(() => {
  return store.league;
});
onMounted(() => {
  store.fetchLeague();
});
</script>

<template>
  <div class="plain seconde">
          <h3>La BBBL c'est</h3><br/>
          
            <h3>{{league.coachs}}</h3> coachs actifs,<br/>
            <h3>{{league.matches}}</h3> matchs,<br/>
            <h3>{{league.TD}}</h3> touchdowns,<br/>
            <h3>{{league.casualties}}</h3> sorties<br/>
            et <h3>{{league.death}}</h3> morts...<br/>
          
          <p>La BBBL c'est du sang, de la violence, des indiens... Chaque jour que les dieux font, nous nous echarpons joyeusement sur les terrains.<br/></p>
          <p>Mais toi le visiteur, toi le coach, toi le paria, toi aussi tu peux venir cramponner dans nos rangs.</p><br/>
          <p>Il te suffit de t'inscrire sur notre forum et de remplir le formulaire 22X47B, ainsi que l'appendice 42 et verser les 51 pièces d'or nécessaires au gobelin comptable de permanence.</p>
        </div>
</template>

<style scoped>
  h3 {
    color: var(--seconde-color);
    display: inline;
  }
</style>
