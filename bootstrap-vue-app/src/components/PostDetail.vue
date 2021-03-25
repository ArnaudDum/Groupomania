<template>

    <div>
        <h1>{{ post_title }}</h1>
        <p>Posté par {{ post_name }}, le {{ post_date }}.</p>
        <p>{{ post_text }}</p>
        <div>
            <b-form>
                <b-form-group>
                    <b-form-input placeholder="Ajouter un commentaire..."></b-form-input>
                </b-form-group>
                <b-button type="submit">Envoyer</b-button>
            </b-form>
          </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'PostDetail',
    props: ['post_title', 'post_text', 'post_name', 'post_date'],
    data() {
        return {
            post: [],
            comments: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/posts/:id')
            .then(response => (this.post = response.data))
    }
}
</script>

<style lang="scss">

</style>