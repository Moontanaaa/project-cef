<template>
  <div class="both">
      <div class="skills-container">
        <h3>Mes Compétences en Développement Web Front-End</h3>
        <div v-for="skill in skills1" :key="skill.name" class="skill">
          <div class="skill-name">{{ skill.name }}</div>
          <div class="skill-bar">
            <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
          </div>
          <div class="skill-percentage">{{ skill.level }}%</div>
        </div>
      </div>
      <div class="skills-container">
        <h3>Mes Compétences en Développement Web Back-End</h3>
        <div v-for="skill in skills2" :key="skill.name" class="skill">
          <div class="skill-name">{{ skill.name }}</div>
          <div class="skill-bar">
            <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
          </div>
          <div class="skill-percentage">{{ skill.level }}%</div>
        </div>
      </div>
  </div>

  </template>
  
  <script>
  export default {
    name: "graphskill",
    data() {
      return {
        skills1: [
          { name: 'HTML 5', level: 90 },
          { name: 'CSS 3', level: 95 },
          { name: 'JavaScript', level: 70 },
          { name: 'Vue.js', level: 65 },
          { name: 'React et React Native', level: 55 },
          { name: 'Wordpress', level: 50 },
          { name: 'Tailwind', level: 20 },
          { name: 'Bootstrap 5', level: 70 },
        ],
        skills2: [
          { name: 'SQL', level: 70 },
          { name: 'pyhton', level: 15 },
          { name: 'django', level: 15 },
          { name: 'Node.js', level: 50 },
          { name: 'Express.js', level: 10 },
          { name: 'GitHub', level: 90 },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .both{
    display: flex;
    flex-direction: row;
  }
  h3{
    color: black;
    font-size: xx-large;
    text-align: center;
  }
  .skills-container {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: 30px auto;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .skill {
    margin-bottom: 20px;
  }
  
  .skill-name {
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }
  
  .skill-bar {
    width: 100%;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-level {
    height: 20px;
    background:linear-gradient(90deg, #007BFF, rgb(0, 54, 250));
    border-radius: 4px 0 0 4px;
    transition: width 0.3s ease;
  }
  
  .skill-percentage {
    text-align: right;
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
  </style>