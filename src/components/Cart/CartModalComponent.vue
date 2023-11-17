<template>
    <div class="Cart">
        <h1 class="Cart__Title">Purchase made successfully</h1>
        <p class="Cart__Total">Total: {{ total }} or 10X {{ (total / 10 * 1.1).toFixed(2) }}</p>
        <ButtonComponent content="Confirm" @click="() => this.$emit('onClose')"/>
    </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
export default{
    name:"CartModalComponent",
    components:{
        ButtonComponent
    },
    props:{
        total: Number
    },
    emits:[
        'onClose'
    ],

}
</script>

<style scoped lang="scss">
@import '../../utils/index.scss';
.Cart{
    background-color: $White;
    padding: 1rem;
    width: 30%;
    height: 30%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @include pequeno{
        justify-content: space-between;
    }

    &__Title{
        @include kumbh-sans-700;
        color: $Orange;
        @include pequeno{
            font-size: 1.4rem;
    }
    }
    &__Total{
        font-size: 1.2rem;
        @include kumbh-sans-400;
        color: $Orange;
        margin-bottom: 1rem;
    }
}
</style>