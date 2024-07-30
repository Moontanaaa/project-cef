<!-- 404 not found page -->

<template>
    <div class="not-found">
      <h1>404</h1>
      <h2>Page non trouvée</h2>
      <p>Il semble que la page que vous cherchez n'existe pas.</p>
      <router-link to="/">Retour à la page d'accueil</router-link>
    </div>
  </template>

<script>

    export default {
        name : "NotFound",
    }
    

</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

.not-found h1 {
  font-size: 6em;
  margin: 0;
  color: #007BFF;
}

.not-found h2 {
  font-size: 2em;
  margin: 20px 0;
  color: #333;
}

.not-found p {
  font-size: 1.2em;
  margin: 20px 0;
  color: #555;
}

.not-found a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #007BFF;
  text-decoration: none;
  border-radius: 4px;
}

.not-found a:hover {
  background-color: black;
}

</style>