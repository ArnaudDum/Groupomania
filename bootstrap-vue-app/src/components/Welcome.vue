<template>
      <b-row id="welcome-line">
        <b-col id="col-1" class="col-12 col-md-6">
          <h1>Bienvenue dans votre réseau Groupomania</h1>
          <p>Connectez-vous et commencez à échanger avec vos collègues</p>
        </b-col>
        <b-col id="col-2" class="col-12 col-md-6">

                <b-card id="signup-form" title="Inscription" class="form-card shadow-lg h-75">
                  <b-card-body>
                    <b-form class="forms">
                      <b-form-group label="Votre nom">
                        <b-form-input></b-form-input>
                      </b-form-group>
                      <b-form-group label="Votre email">
                        <b-form-input></b-form-input>
                      </b-form-group>
                      <b-form-group label="Votre mot de passe">
                        <b-form-input></b-form-input>
                      </b-form-group>
                      <b-btn type="submit">S'inscrire</b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

                <b-card id="login-form" title="Connexion" class="form-card shadow-lg h-75">
                  <b-card-body>
                    <b-form class="forms">
                      <b-form-group label="Votre email">
                        <b-form-input></b-form-input>
                      </b-form-group>
                      <b-form-group label="Votre mot de passe">
                        <b-form-input></b-form-input>
                      </b-form-group>
                      <b-btn class="px-auto" type="submit">Connexion</b-btn>
                    </b-form>
                  </b-card-body>
                </b-card>

        </b-col>
      </b-row>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss">
#welcome-line {
  justify-content: space-around;
  height: 90vh;
  #col-1 {
    background-color: #848CA4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: 'Roboto', sans-serif;
      color: #565656;
    }
    p {
      font-size: 1.7rem;
      font-weight: bold;
      color: #DABBBC;
    }
  }
  #col-2 {
    background: url('../assets/logos/icon.png') center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    #signup-form {
      background: #1B2D4A;
      color: white;
      &:hover, &:focus {
        background-color: #C15960;
        border: solid 5px #1B2D4A;
      }
    }
    #login-form {
      background: #1B2D4A;
      color: white;
      &:hover, &:focus {
        background-color: #8494A4;
        border: solid 5px #1B2D4A;
      }
    }
    .form-card {
      border: solid 5px #8494A4;
      transform: scale(1);
      transition: transform 500ms ease-in-out;
      .forms {
        height: 100%;
      }
      &:hover, &:focus {
        transform: scale(1.02);
      }
    }
  }
}
</style>