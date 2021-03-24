<template>
    <div class="m-3 d-flex justify-content-around align-items-center flex-wrap">
        <b-card
            class="post-card col-12 col-md-5 col-lg-3 mx-3 my-3 my-md-4 p-0"
            :key="post.id_post" v-for="post in posts"
        >
            <b-card-title class="post-title">{{ post.post_title }}</b-card-title>
            <h6 class="post-info">Un article de {{ post.name }}, écrit le {{ post.post_date }}.</h6>
            <b-card-text class="post-text">{{ post.post_text }}</b-card-text>
            <a href="#" class="post-btn btn stretched-link">Voir l'article</a>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'PostCard',
    computed: {
        posts() {
            return this.$store.state.posts
        }
    },
    mounted() {
        this.$store.dispatch('getAllPosts')
    }
}
</script>

<style lang="scss">

.post-card{
    position: relative;
    border: 0;
    border-radius: 20px;
    box-shadow: 0px 6px 5px 5px rgba(0, 0, 0, 0.10);
    .post-text {
        overflow: hidden;
        max-height: 40%;
    }
    .post-btn {
        position: absolute;
        bottom: 20px;
        color: white;
        background: #C15960;
    }
}
@media (max-width: 767px) {
    .post-card {
        height: 200px;
        margin-top: 20px;
        .post-title {
            max-height: 20%;
            overflow: hidden;
        }
        .post-info {
            display: none;
        }
    }
}
@media (min-width: 768px) {
    .post-card {
        height: 260px;
    }
}
@media (min-width: 992px) {
    .post-card {
        height: 300px;
    }
}
</style>