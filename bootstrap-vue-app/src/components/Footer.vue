<template>
    <footer class="row">
        <b-col id="footer-col-1" class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <p>Openclassrooms - Projet 7</p>
        </b-col>
        <b-col id="footer-col-2" class="col-12 col-md-4 d-flex justify-content-around align-items-center">
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-facebook-square"></i></a>
        </b-col>
        <b-col id="footer-col-3" class="col-12 col-md-4 d-flex flex-column justify-content-end align-items-center">
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
footer {
    background: #343a40;
    color: white;
    #footer-col-2 a i {
        font-size: 4rem;
        text-decoration: none;
        color: #DABBBC;
    }
    #footer-col-3 {
        font-size: 0.8rem;
    }
}
</style>