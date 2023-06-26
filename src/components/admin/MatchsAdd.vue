<script async setup>
import { ref, onMounted, computed, reactive, watchEffect } from "vue";
import { useAdminStore } from "../../stores/admin";

const store = useAdminStore();

const competition = reactive({
    id:0,
    round:0,
    matchs: [{team_1:'',team_2:''}]
})

const competitions = computed(() => {
  return store.activeCompetitions;
});

const teams = computed(() => {
  return store.activeTeams;
});

const message = ref('');

function addMatchs() {
    store.addMatchs(competition).then((response) => {
        message.value = response;
    });
};

onMounted(() => {
  store.fetchActiveCompetitions();
  store.fetchActiveTeams();
  store.fetchActiveCoachs();
});

watchEffect( () => {
    var matchs = [];
    for (let i = 0; i < teams.value.length/2; i++) {
        matchs.push({team_1:'',team_2:''});
    }
    competition.matchs = matchs;
})
</script>

<template>
    <h2>Ajout de matchs</h2>
    <form>
        Competition :
        <select v-model="competition.id">
            <option v-for="competition in competitions" :key="competition.id" :value="competition.id" >{{ competition.site_name }}</option>
        </select>
        <br/>
        Round :
        <input type="number" v-model="competition.round" />
        <br/>
        
        <div class="row" v-for="(match,index) in competition.matchs" :key="index" >
            <div class="col-xs-2">
                <h4>Match {{index+1}}</h4>
            </div>
            <div class="col-xs-5">
                Equipe 1 :<br/>
                <select v-model="match.team_1">
                    <option disabled value="">Sélectionner</option>
                    <option v-for="team in teams" :key="team.id" :value="team.id">{{team.name}}</option>
                </select>
            </div>
            <div class="col-xs-5">
                Equipe 2 :<br/>
                <select v-model="match.team_2">
                <option disabled value="">Sélectionner</option>
                    <option v-for="team in teams" :key="team.id" :value="team.id">{{team.name}}</option>
                </select>
            </div>
        </div>
    </form>
    <br/>
    <button @click="addMatchs">Ajouter</button>
    <br/>
    {{ message }}
</template>

<style>
    form {
        line-height: 2rem;
    }

</style>