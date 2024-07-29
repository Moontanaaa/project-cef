<template>
  <div>
    <nav class="nav-1">
      <img src="./assets/img/logoFabio.png" alt="Fabio Montana">
      <div>
        <router-link class="link" to="/">Acceuil</router-link>
        <router-link class="link" to="">A Propos de moi</router-link>
        <router-link class="link" to="">Me Contacter</router-link>
      </div>
    </nav>
      <router-view></router-view>
  </div>
  
</template>

<script>
    export default {
      name : "app"
    }
</script>

<style>
  *{
    padding: 0px;
    margin: 5px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    transition: 0.4s;
  }

  .nav-1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .link{
    color: black;
    text-decoration: none;
    margin-right: 55px;
  }
  .link:hover{
    color: grey;
  }

  .nav-1 img{
    height: 100px;
    width: 100px;
  }
  
</style>
