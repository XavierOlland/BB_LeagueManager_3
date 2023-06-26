<script setup>
import League from '../components/League.vue'
import Standing from '../components/Standing.vue'
import Calendar from '../components/Calendar.vue'

</script>

<template>
  <main>
    <div class="row">
      <div class="col-xs-3">
        <League />
      </div>
      <div class="col-xs-6">
        <div class="plain seconde text-center">
          <h1>Printemps 2523</h1>
        </div>
        <div class="plain prime">
          <Standing :competition="337" :details="true" :limit="14"/>
        </div>
      </div>
      <div class="col-xs-3">
        <Calendar :competitionID="337"/>
      </div>
    </div>
  </main>
</template>
