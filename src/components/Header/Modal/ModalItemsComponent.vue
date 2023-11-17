<template>
    <ul class="Modal__Items">
        <h2 class="Modal__Text" v-if="this.Carrinho.length < 1">
            Your cart is empty.
        </h2>
        <ModalItemComponent 
            :Carrinho="Carrinho" 
            :Modal="Modal"
            />
    </ul>
    <ButtonComponent 
        v-if="this.Carrinho.length > 0 && Modal" 
        :content="'Checkout'" 
        @click="removeModalAndGoToCart()">
    </ButtonComponent>
    <ModalComponent 
        v-if="active" 
        @onClose="() => {active = !active}"
        :isImg=false
        >
        <CartModalComponent @onClose="() => active = !active" :total="total"/>
    </ModalComponent>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ModalItemComponent from './ModalItemComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue';
import CartModalComponent from '@/components/Cart/CartModalComponent.vue'
export default{
    name:'ModalItemsComponent',
    emits:[
        'onCheckout'
    ],
    props:{
        Modal:{
            type: Boolean,
            default: true
        },
        total: Number
    },
    methods:{
        removeModalAndGoToCart(){
            this.$router.push('/cart')
            this.$emit('onCheckout')
        }
    },
    setup(){
        const store = useStore()
        const Carrinho = computed(() => store.state.Carrinho)
        const active = ref(false)
        
        return{
            Carrinho,
            active,
        }
    }, 
    components:{
    ModalItemComponent,
    ButtonComponent,
    ModalComponent,
    CartModalComponent
}
}
</script>

<style scoped lang="scss">
@import '../../../utils/index.scss';
.Modal{
    &__Text{
        @include kumbh-sans-700;
        color: $Dark-grayish-blue;
        text-align: center;
        font-size: 0.95rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}
</style>