<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2>Contactez-moi</h2>
      <p><strong>Localisation :</strong>Ain, France</p>
      <p><strong>Adresse :</strong> 4 rue de la liberte 01200 Valserhône</p>
      <p><strong>Téléphone :</strong> +33 7 68 60 69 17</p>
      <div id="map"></div>
    </div>
    <div class="contact-form">
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="statusMessage">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name : "ContacForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      statusMessage: ''
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_lk7d4xq';
      const templateID = 'template_83vejav';
      const userID = 'montanafabio';

      emailjs.send(serviceID, templateID, this.form, userID)
        .then(response => {
          this.statusMessage = 'E-mail envoyé avec succès !';
          this.clearForm();
        })
        .catch(error => {
          this.statusMessage = 'Erreur lors de l\'envoi de l\'e-mail : ' + error.text;
        });
    },
    clearForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
    initMap() {
      const location = { lat: 46.100000, lng: 5.816667 }; 
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
      });
      const marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-info {
  flex: 1;
  min-width: 250px;
  margin-right: 20px;
}

.contact-form {
  flex: 2;
  min-width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input{
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}


button {
  padding: 10px 20px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: black
}

#map {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}

/* Media query for responsive design */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-info {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>