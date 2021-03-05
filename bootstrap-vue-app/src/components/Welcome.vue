<template>
    <div>
        <b-btn variant="secondary">S'inscrire</b-btn>
        <b-btn variant="secondary">Se connecter</b-btn>

        <b-row>
          <b-form class="col-6">
              <b-form-group label="Nom d'utilisateur :" placeholder="Vos nom et prénom ou votre pseudo">
              <b-form-input type="text" required>
              </b-form-input>
              </b-form-group>
              <b-form-group label="Email :" placeholder="Nous ne partagerons jamais votre addresse mail.">
              <b-form-input type="email" required>
              </b-form-input>
              </b-form-group>
              <b-form-group label="Mot de passe :">
              <b-form-input required>
              </b-form-input>
              </b-form-group>
              <b-btn variant="secondary" type="submit">Inscription</b-btn>
          </b-form>

          <b-form class="col-6">
              <p>Connexion</p>
              <b-form-group label="Email :">
              <b-form-input type="email" required>
              </b-form-input>
              </b-form-group>
              <b-form-group label="Mot de passe :">
              <b-form-input required>
              </b-form-input>
              </b-form-group>
              <b-btn variant="secondary" type="submit">Connexion</b-btn>
          </b-form>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss">

</style>