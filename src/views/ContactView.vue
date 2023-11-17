<template>
    <div class="Contact">
        <img class="Contact__Img" src="../assets/images/Contact.jpg" alt="">
        <div class="Contact__Conteiner">
            <h1 class="Contact__Title">Contact</h1>
            <p class="Contact__Text">Email:<strong class="Contact__Strong"> sneaker@hotmail.com</strong></p>
            <p class="Contact__Text">Phone:<strong class="Contact__Strong"> 9999-9999</strong></p>
            <h1 class="Contact__Title">Local</h1>
            <iframe class="Contact__Map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d20077.639837145096!2d-46.567247711392206!3d-23.70240696355376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x94ce3fc6927dd0c3%3A0xcdcd0d550f9656cf!2sS%C3%A3o%20Bernardo%20do%20Campo%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!3m2!1d-23.7018047!2d-46.5536333!5e0!3m2!1spt-BR!2sbr!4v1696439128956!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
export default{
    name: 'ContactView'
}
</script>

<style lang="scss">
@import '../utils/index.scss';
.Contact{
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    &__Img{
        width: 48%;
    }
    &__Conteiner{
        width: 48%;
    }
    &__Title{
        @include kumbh-sans-700;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;

    }
    &__Text{
        @include kumbh-sans-700;
        margin-bottom: 1rem;
    }
    &__Strong{
        @include kumbh-sans-400;
    }
    &__Map{
        width: 100%;
    }
}
</style>