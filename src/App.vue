<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header v-if="$route.fullPath.indexOf('iframe')==-1">
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <a class="" href="steam://run/1016950">Jouer</a>
      <img class="logo" src="@/assets/images/Logo.png" />
      <a  href="https://bbbl.fr/Forum" >Forum</a>
      <a class="" href="discord://" >Discord</a>
    </nav>    
  </header>
  <RouterView />
</template>

<style lang="scss">
  header {
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:75px;
    background: #000;
    justify-content:center;
    display: flex;
    border-top: 2px solid #000;
    border-bottom: 1px solid #000;
    @include borders($prime-color);
    z-index:5;
    a {
      display: inline-block;
      padding: 0 1rem;
    }
    nav {
      width: 80%;
      display: flex;
      justify-content:space-around;
      place-items: center;
      font-family: Teko;
      font-size: 2rem;
      line-height: 1.5;
      color: $prime-text;
      height: inherit;
      a:first-of-type {
        border: 0;
      }
      .logo {
        margin-top:20px;
        height: 100px;
      }
    }
  }
</style>
