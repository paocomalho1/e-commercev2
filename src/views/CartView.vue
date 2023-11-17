<template>
    <div class="Cart">
        <div class="Cart__Conteiner">
            <h1 class="Cart__Title">Carrinho</h1>
            <ModalItemsComponent :Modal="false" :total="total"/>
        </div>
        <div class="Cart__Conteiner">
            <h1 class="Cart__Title">Total</h1>
            <p class="Cart__Text">Price: $ {{total}}</p>
            <p class="Cart__Text">Or 10X of {{((total / 10) * 1.1).toFixed(2)}}</p>
            <ButtonComponent content="Buy" @click="() => active = !active"/>
            <ModalComponent 
                v-if="active"
                @onClose="() => {active = !active}"
                :isImg=false
            >
                <CartModalComponent :total="total" @onClose="() => active = !active"/>
            </ModalComponent>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CartModalComponent from '@/components/Cart/CartModalComponent.vue';
import ModalItemsComponent from '@/components/Header/Modal/ModalItemsComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default{
    name: 'CartView',
    components: { ModalItemsComponent, ButtonComponent, ModalComponent, CartModalComponent },
    setup(){
        const store = useStore()
        const total = computed(() => store.state.Carrinho.reduce((acumulador, item) => {
            return acumulador + item.price * item.quantity;
        },0))
        const active = ref(false)
        return{
            total,
            active
        }
    }
}
</script>

<style lang="scss">
@import '../utils/index.scss';
.Cart{
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    &__Conteiner{
        &:first-child{
            width: 75%;
        }
        &:last-child{
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }
        @include medio{
        padding-right: 6%;
        padding-left: 6%;
    }
    }
    &__Title{
        @include kumbh-sans-700;
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    &__Text{
        @include kumbh-sans-700;
        color: $Orange;
        margin-bottom: 1rem;
    }
}
</style>