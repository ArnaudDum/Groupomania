<template>
    <footer class="row">
        <b-col id="footer-col-1" class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <p>Openclassrooms - Projet 7</p>
        </b-col>
        <b-col id="footer-col-2" class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <a href="#" class="mx-3"><i class="fab fa-twitter-square"></i></a>
            <a href="#" class="mx-3"><i class="fab fa-facebook-square"></i></a>
        </b-col>
        <b-col id="footer-col-3" class="col-12 col-md-4 d-flex flex-column justify-content-end align-items-center pt-2 pt-md-3">
            <h6>Contactez-nous :</h6>
            <div class="d-flex">
                <p class="ml-3">00 00 00 00 00</p>
            </div>
            <div class="d-flex">
                <p class="ml-3">contact@groupo-network.frr</p>
            </div>
        </b-col>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
footer {
    background-color: #C6CAD2;
    #footer-col-2 a i {
        font-size: 3rem;
        text-decoration: none;
        color: #384761;
    }
    #footer-col-3 {
        font-size: 0.8rem;
    }
}
</style>