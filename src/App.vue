<template>
  <div>
    <!-- NavBar fixed -->
    <nav class="nav-1">
      <router-link to="/">
      <img src="./assets/img/logoFabio.png" alt="Fabio Montana">
      </router-link>
      <div>
        <span>|</span>
        <router-link class="link" to="/">Acceuil</router-link>
        <span>|</span>
        <router-link class="link" to="/FileProject">Projets</router-link>
        <span>|</span>
        <router-link class="link" to="/contactform">Me Contacter</router-link>
      </div>
    </nav>

    <!-- rooter view -->
      <router-view></router-view>
      <!-- footer fixed -->
      <div class="footer">
        <p>&copy; {{ currentYear }} MONTANA Fabio. Tous droits réservés.</p>
        <p>Aujourd'hui, nous sommes le {{ currentDate }}</p>
    </div>
  </div>
  
</template>

<script>


    export default {

      name : "app",
      // date du jour en temps reel
      data() {
      return {
        currentYear: new Date().getFullYear(),
        currentDate: new Date().toLocaleDateString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }),
      }}}
    
</script>

<style>
  *{
    padding: 0px;
    margin: 5px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: 0.3s;
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
    color:#007BFF;
  }

  .nav-1 img{
    height: 100px;
    width: 100px;
  }
  .footer {
    background:linear-gradient(90deg, #007BFF, rgb(0, 54, 250));
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    bottom: 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .footer p {
    margin: 5px 0;
    font-size: 1em;
    color: white
  }

  hr{
    width: auto;
    height: 2px;
    background-color: black;
    margin: 50px;
  }

</style>
