<template>
      <b-row id="welcome-line">
        <b-col id="col-1" class="col-12 col-lg-6">
          <div class="button-line">
            <b-button class="button-line-btn mx-5 mt-3" @click="showSignupForm = true; showLoginForm = false">INSCRIPTION</b-button>
            <b-button class="button-line-btn mx-5 mt-3" @click="showLoginForm = true; showSignupForm = false">CONNEXION</b-button>
          </div>
          <h1 class="mt-3">Bienvenue dans votre réseau Groupomania</h1>
          <p class="mt-2">Connectez-vous et commencez à échanger avec vos collègues</p>
        </b-col>
        <b-col id="col-2" class="col-12 col-lg-6 py-5">
          
                <b-card v-if="showSignupForm" id="signup-form" title="Inscription" class="form-card shadow-lg">
                  <b-card-body>
                    <div v-if="valid == false">
                      <p>Mot de passe invalide. Votre mot de passe doit contenir au moins 8 caractères, dont 1 majuscule, 1 minuscule, 1 chiffre</p>
                    </div>
                    <b-form
                      class="forms text-center"
                      @submit.prevent="sendSignupForm">
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-user"></i></span>
                        </div>
                        <b-form-input
                          v-model="signup.signupName"
                          placeholder="Prénom Nom"
                          required>
                        </b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-at"></i></span>
                        </div>
                        <b-form-input
                          v-model="signup.signupEmail"
                          placeholder="Email"
                          required>
                        </b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-key"></i></span>
                        </div>

                        <b-form-input
                          v-model="signup.signupPassword"
                          type="password"
                          placeholder="Mot de passe"
                          aria-required>
                        </b-form-input>


                        <b-form-input
                          type="password"
                          v-model="signup.signupPasswordCheck"
                          placeholder="Confirmez le mot de passe"
                          aria-required>
                        </b-form-input>
                      </b-form-group>
                        <b-btn class="h-md-100 w-md-25 form-routes btn btn-secondary form-btn" type="submit">S'INSCRIRE</b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

                <b-card v-if="showLoginForm" id="login-form" title="Connexion" class="form-card shadow-lg">
                  <b-card-body>
                    <p id="message-nouveau" v-if="signupFormSent == true">Nouveau compte enregistré, vous pouvez maintenant vous connecter !</p>
                    <b-form
                      class="forms text-center"
                      @submit.prevent="sendLoginForm">
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-at"></i></span>
                        </div>
                        <b-form-input
                          v-model="login.loginEmail"
                          placeholder="Email"
                          required>
                        </b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-key"></i></span>
                        </div>
                        <b-form-input
                          type="password"
                          v-model="login.loginPassword"
                          placeholder="Mot de passe"
                          required>
                        </b-form-input>
                      </b-form-group>
                        <b-btn class="h-md-100 w-md-25 form-routes btn btn-secondary form-btn" type="submit">CONNEXION</b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

        </b-col>
      </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WelcomePage',
  data() {
    return {
      showSignupForm: false,
      showLoginForm: false,
      signupFormSent: false,
      valid: null,
      signup: {
        signupName: null,
        signupEmail: null,
        signupPassword: null,
        signupPasswordCheck: null,
      },
      login: {
        loginEmail: null,
        loginPassword: null
      }
    }
  },
  methods: {
    sendSignupForm() {
      function validPassword(value) {
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
            return true;
        } else {
            return false;
        }
      }
      if (validPassword(this.signup.signupPassword) == true) {
        let signupDatas = {
        name: this.signup.signupName,
        email: this.signup.signupEmail,
        password: this.signup.signupPassword  
        }
        if (this.signupPassword == this.signupPasswordCheck) {
          axios.post('http://localhost:3000/api/users/signup', signupDatas)
            .then(() => {
              this.signupFormSent = true;
              this.showLoginForm = true;
              this.showSignupForm = false;
          })
        }
      } else {
        this.valid = false;
      }
    },
    sendLoginForm() {
      let loginDatas = {
        email: this.login.loginEmail,
        password: this.login.loginPassword
      }
      axios.post('http://localhost:3000/api/users/login', loginDatas)
        .then(response => {
            localStorage.setItem('userId', response.data.userId)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.user)
            document.location.href="http://localhost:8080/actualites"
        })
    }
  }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
#welcome-line {
  justify-content: space-around;
  height: 90vh;
  #col-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .button-line {
      .button-line-btn {
        border: none;
        transform: scale(1);
        transition: transform 600ms ease-out;
        background: $bg-card;
        letter-spacing: 0.3rem;
        &:hover {
          transform: scale(1.20);
        }
      }
    }
    h1 {
      font-family: 'Roboto', sans-serif;
      color: #fff;
    }
    p {
      font-size: 1.7rem;
      font-weight: bold;
      color: #fff;
    }
  }
  #col-2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .form-card {
      border-radius: 0;
      background: $blue-dark;
      color: white;
      transform: scale(1);
      transition: all 500ms ease-in-out;
      height: 75%;
      width: 50%;
      #message-nouveau {
        font-size: 1.3rem;
      }
      .form-btn {
        letter-spacing: 0.3rem;
      }
      @media (max-width: 768px) {
        height: 100%;
        width: 100%;
      }
      .forms {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .form-routes {
          text-decoration: none;
          color: white;
          text-align: center;
        }
      }
      &:hover, &:focus {
        transform: scale(1.05);
        background-color: $blue-light-1;
        color: black;
      }
    }
  }
}
@media(max-width:500px) {
  .button-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>