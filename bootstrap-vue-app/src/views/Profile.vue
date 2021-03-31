<template>
  <b-container fluid>

    <Nav/>

    <b-row id="row profile-row">
      <b-col id="profile-col-1" class="col-12 col-md-2">
        <h2 class="my-3 my-md-5">Ici, vous pouvez modifier votre profil</h2>
        <p class="my-3 my-md-5">Mettez à jour et enregistrez votre profil. Vos collègues vous reconnaîtront plus facilement lors de vos échanges.</p>
      </b-col>
      <b-col id="profile-col-2" class="col-12 col-md-10 mx-auto px-2 px-md-5 my-5">
        <div id="profil-area" class="p-3 p-md-5">
          <h1 class="my-3 my-md-5">Mon profil</h1>
          <b-form class="px-lg-5">
            <b-form-group class="px-lg-5">
              <label class="h5">Votre nom :</label>
              <b-form-input placeholder="Prénom Nom"></b-form-input>
            </b-form-group>
            <b-form-group class="px-lg-5">
              <label class="h5">Votre addresse email :</label>
              <b-form-input placeholder="Email"></b-form-input>
            </b-form-group>
            <b-form-group class="px-lg-5">
              <label class="h5">Votre mot de passe :</label>
              <b-form-input placeholder="Mot de passe"></b-form-input>
            </b-form-group>
            <b-form-group class="px-lg-5">
              <label class="h5">Veuillez confirmer le mot de passe :</label>
              <b-form-input placeholder="Mot de passe"></b-form-input>
            </b-form-group>
            <b-button type="submit" class="profil-btn mx-lg-5 px-5 my-3 my-md-4">ENREGISTRER</b-button>
            <b-button class="profil-btn mx-lg-5 px-5 my-3 my-md-4"><i class="fas fa-trash-alt"></i>SUPPRIMER CE COMPTE</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>

    <Footer/>

  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Profile',
    components: {
      Nav,
      Footer
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
@media (min-width: 768px) {
  #profile-row {
    height: 90vh;
  }
}
#profile-col-1 {
  background: #1B2D4A;
  color: white;
}
#profile-col-2 {
  #profil-area {
    background: $blue-light-2;
  }
  .profil-btn {
    background: #C15960;
    letter-spacing: 0.2rem;
    i {
      margin-right: 1rem;
    }
  }
}
</style>