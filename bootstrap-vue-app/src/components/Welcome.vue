<template>
      <b-row id="form-line">
        <b-card title="Inscription" class="form-card center col-12 col-md-5">
          <b-card-body>
            <b-form>
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
        <b-card title="Connexion" class="form-card center col-12 col-md-5">
          <b-card-body>
            <b-form>
              <b-form-group label="Votre email">
                <b-form-input></b-form-input>
              </b-form-group>
              <b-form-group label="Votre mot de passe">
                <b-form-input></b-form-input>
              </b-form-group>
              <b-btn type="submit">Se connecter</b-btn>
            </b-form>
          </b-card-body>
        </b-card>
      </b-row>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss">
#form-line {
  justify-content: space-around;
}
.form-card {
    border: 5px solid black;
    border-radius: 10px;
  }
</style>