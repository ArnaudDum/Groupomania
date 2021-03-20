<template>
    <b-card>
        <b-card-title>{{ PostTitle }}</b-card-title>
        <h4>Un article de {{ PostUser }}, écrit le {{ PostDate }}.</h4>
        <b-card-text>{{ PostText }}</b-card-text>
        <b-btn>Voir l'article</b-btn>
    </b-card>
</template>

<script>
export default {
    name: 'PostCard',
    props: ['PostTitle', 'PostUser', 'PostDate', 'PostText']
}
</script>

<style lang="scss">

</style>