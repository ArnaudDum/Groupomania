<template>
      <b-row id="welcome-line">
        <b-col id="col-1" class="col-12 col-lg-6">
          <div class="button-line">
            <b-button class="button-line-btn mr-md-5 mt-3" @click="showSignupForm = !showSignupForm; showLoginForm = false">INSCRIPTION</b-button>
            <b-button class="button-line-btn mt-3" @click="showLoginForm = !showLoginForm; showSignupForm = false">CONNEXION</b-button>
          </div>
          <h1 class="mt-3">Bienvenue dans votre réseau Groupomania</h1>
          <p class="mt-2">Connectez-vous et commencez à échanger avec vos collègues</p>
        </b-col>
        <b-col id="col-2" class="col-12 col-lg-6 py-5">
          
                <b-card v-if="showSignupForm" id="signup-form" title="Inscription" class="form-card shadow-lg">
                  <b-card-body>
                    <b-form class="forms text-center">
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-user"></i></span>
                        </div>
                        <b-form-input placeholder="Prénom Nom"></b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-at"></i></span>
                        </div>
                        <b-form-input placeholder="Email"></b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-key"></i></span>
                        </div>
                        <b-form-input placeholder="Mot de passe"></b-form-input>
                      </b-form-group>
                      <b-btn type="submit">
                        <router-link class="h-md-100 w-md-25 form-routes" to="/actualites">S'inscrire</router-link>
                      </b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

                <b-card v-if="showLoginForm" id="login-form" title="Connexion" class="form-card shadow-lg">
                  <b-card-body>
                    <b-form class="forms text-center">
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-at"></i></span>
                        </div>
                        <b-form-input placeholder="Email"></b-form-input>
                      </b-form-group>
                      <b-form-group class="form-group">
                        <div>
                          <span><i class="fas fa-key"></i></span>
                        </div>
                        <b-form-input placeholder="Mot de passe"></b-form-input>
                      </b-form-group>
                      <b-btn type="submit">
                        <router-link class="h-md-100 w-md-25 form-routes" to="/actualites">Connexion</router-link>
                      </b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

        </b-col>
      </b-row>
</template>

<script>
export default {
  name: 'WelcomePage',
  data() {
    return {
      showSignupForm: false,
      showLoginForm: false
    }
  }
}
</script>

<style lang="scss">
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
        background: linear-gradient(-115deg, #1B2D4A, 10%, #C15960);
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
      background: #1B2D4A;
      color: white;
      border: solid 5px #8494A4;
      transform: scale(1);
      transition: all 500ms ease-in-out;
      height: 75%;
      width: 50%;
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
        transform: scale(1.02);
        background-color: #8494A4;
        border: solid 5px #1B2D4A;
        color: black;
      }
    }
  }
}
</style>