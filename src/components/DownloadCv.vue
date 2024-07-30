<template>
    <div class="download-cv">
      <button @click="downloadCv">Plus sur moi</button>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadCv',
    // methods: {
    //   downloadCv() {
    //     const link = document.createElement('a');

    //     link.href = require('../assets/cv.pdf'); 
    //     link.download = 'cv.pdf'; 
    //     link.click();
    //   }
    // }
  };
  </script>
  
  <style scoped>
  .download-cv {
    text-align: center;
    margin: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: black;
  }
  
  </style>