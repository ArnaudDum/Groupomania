<template>
    <div class="m-3 d-flex justify-content-around align-items-center flex-wrap">
        <b-card
            class="post-card col-12 col-md-5 col-lg-3 mx-3 my-3 my-md-4 p-0"
            :key="item.id" v-for="item in posts"
        >
            <b-card-title class="post-title">{{ item.post_title }}</b-card-title>
            <h6 class="post-info">Un article de {{ item.name }}</h6>
            <b-card-text class="post-text">{{ item.post_text }}</b-card-text>
            <router-link :to="{name: 'Article', params: {id: item.id}}" class="post-btn btn stretched-link">VOIR L'ARTICLE</router-link>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostCard',
    props: ['id', 'post_title', 'name', 'post_date', 'post_text'],
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/posts')
            .then(response => (this.posts = response.data))
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';

.post-card{
    position: relative;
    border: 0;
    border-radius: 0;
    box-shadow: 2px 6px 4px 8px rgba(0, 0, 0, 0.08);
    background: $blue-light-2;
    transform: scale(1);
    transition: transform 300ms ease-out;
    &:hover {
        transform: scale(1.03);
    }
    .post-text {
        overflow: hidden;
        max-height: 40%;
    }
    .post-btn {
        position: absolute;
        bottom: 20px;
        color: white;
        background: $red-btn;
        letter-spacing: 0.2rem;
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
    .post-title {
        max-height: 20%;
        overflow: hidden;
    }
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