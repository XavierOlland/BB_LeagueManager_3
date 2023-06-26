<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <a class="" href="steam://run/1016950">Jouer</a>
        <img class="logo" src="@/assets/images/Logo.png" />
        <a  href="Forum" >Forum</a>
        <a class="" href="discord://" >Discord</a>
    </nav>    
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:75px;
  background: #000;
  justify-content:center;
  display: flex;
  border-top: 3px solid var(--prime-color)
}

nav {
  width: 80%;
  display: flex;
  justify-content:space-around;
  place-items: center;
  font-family: Teko;
  font-size: 2rem;
  line-height: 1.5;
  color: var(--prime-text);
  height:inherit
}

.logo {
  top:10px;
  height: 100px;
}



header a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

</style>
