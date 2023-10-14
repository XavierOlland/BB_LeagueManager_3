<script setup>
import League from '../components/League.vue'
import Standing from '../components/Standing.vue'
import Calendar from '../components/Calendar.vue'

const user = window.user
</script>

<template>
  <main>
    <div class="row">
      <div v-if="user.user_id<1" class="col-xs-3">
        
        <League />
      </div>
      <div class="col-xs-8" :class="{'col-xs-6':user.user_id<1}">
        <div class="plain seconde text-center">
          <h1>Automne 2523</h1>
          
        </div>
        <div class="plain prime">
          <Standing :competition="338" :details="true" :limit="14"/>
        </div>
      </div>
      <div class="col-xs-4" :class="{'col-xs-3':user.user_id<1}">
        <Calendar :competitionID="338"/>
      </div>
    </div>
  </main>
</template>
