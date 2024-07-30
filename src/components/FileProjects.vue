<template>
    <div class="projects">
      <h2>Mes Projets</h2>
      <div class="project-list">
        <div class="project" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">Voir le projet</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FileProjects',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Projet 1',
            description: 'Description du projet 1',
            link: '#'
          },
          {
            id: 2,
            title: 'Projet 2',
            description: 'Description du projet 2',
            link: '#'
          },
          {
            id: 3,
            title: 'Projet 3',
            description: 'Description du projet 3',
            link: '#'
          },
          {
            id: 4,
            title: 'Projet 4',
            description: 'Description du projet 4',
            link: '#'
          },
          {
            id: 5,
            title: 'Projet 5',
            description: 'Description du projet 5',
            link: '#'
          },
          {
            id: 6,
            title: 'Projet 6',
            description: 'Description du projet 6',
            link: '#'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .projects {
    text-align: center;
    padding: 20px;
  }
  
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .project {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .project:hover {
    transform: translateY(-10px);
  }
  
  .project h3 {
    margin: 0 0 10px;
  }
  
  .project p {
    font-size: 1em;
    color: #555;
  }
  
  .project a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    color: #fff;
    background-color:#007BFF;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .project a:hover {
    background: black;
  }
  
  @media (max-width: 600px) {
    .project {
      width: 90%;
    }
  }
  </style>