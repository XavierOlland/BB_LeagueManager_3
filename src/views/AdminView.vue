<script setup>
  import MatchsAdd from '../components/admin/MatchsAdd.vue'
  const admin = window.user.admin
</script>

<template>
  <main v-if="admin==1">
    <div class="plain prime">
      <MatchsAdd />
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
