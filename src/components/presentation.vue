<template>
    <div class="profile">
      <h1 class="fullname">{{ title }}</h1>
      <p class="description">{{ description }}</p>
      <router-link to="/ContactForm" >
        <button>Contactez-moi</button>
      </router-link> 
    </div>
  </template>
  
  <script>
  export default {
    name: "presentation",
    data() {
      return {
        title: 'Qui suis-je ?',
        description: 'Je suis un développeur full stack junior passionné par le développement web et prêt à apporter mes compétences pour servir votre projet. J\'ai une expérience dans la création d\'applications web avec des technologies modernes et je suis toujours prêt à apprendre et à m\'adapter aux nouvelles tendances.',
      };
    },
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30px;
    padding: 20px;
    gap: 50px;
    background: linear-gradient(90deg, #007BFF, rgb(0, 54, 250)) ;
    color: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .fullname{
    font-size: 60px;
    color: white
  }
  .description{
    font-size: x-large;
  }
  
  button {
    font-size: 1.2em;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background-color: white
  }
  button:hover{
    background-color: black;
    color: white;
  }
  </style>