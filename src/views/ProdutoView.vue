<template>
    <main class="Produto">
        <ProdutoImgComponent 
            :Produto="Produto" 
            @onModalActive="modal" 
            :modalActivate="modalActivate"
        />
        <ModalComponent 
            v-if="modalActivate" 
            :modalActivate="modalActivate" 
            :Produto="Produto" 
            @onClose="modal"
        >
            <ProdutoImgComponent :Produto="Produto" :modalActivate="modalActivate" :Modal="true"/>
        </ModalComponent>
        <div class="Produto__ConteinerText">
            <p class="Produto__Company">SNEAKER COMPANY</p>
            <h1 class="Produto__Title">{{Produto.name}}</h1>
            <p class="Produto__Text">{{Produto.description}}</p>
            <div class="Produto__ConteinerBefore">
                <div class="Produto__ConteinerPriceAfter">
                    <h2 class="Produto__PriceAfter">${{(Produto.price.toFixed(2) * Produto.discount) / 100}}</h2>
                    <p class="Produto__Discount">{{Produto.discount}}%</p>
                </div>
                <p class="Produto__PriceBefore">${{Produto.price.toFixed(2)}}</p>
            </div>
            <div class="Produto__ConteinerBQ">
                <QuantityComponent @onQuantity="changeQuantity" />
                <ButtonComponent content="Add to cart" @click="Add(Produto,this.quantity,this.Carrinho)" >
                    <img class="Produto__Cart" src="../assets/images/icon-White-cart.svg" alt="">
                </ButtonComponent>
            </div>
        </div>
    </main>

</template>

<script>

import { useStore } from 'vuex'
import ProdutoImgComponent from '../components/Produto/ProdutoImgComponent.vue'
import QuantityComponent from '../components/Produto/QuantityComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import ModalComponent from '../components/ModalComponent.vue'
import AddCarrinho from '../functions/add.js'


    export default{
        name:"ProdutoView",
        setup(){
            const store = useStore()
            const Carrinho = computed(() => store.state.Carrinho)
            const modalActivate = ref(false)
            const quantity = ref(0)
            const ProdutoIndex = computed(() => store.state.Produto.findIndex(item => item.id == useRoute().params.id))
            const Produto = computed(() => store.state.Produto[ProdutoIndex.value])
            return{
                Produto,
                modalActivate,
                quantity,
                Carrinho
            }
        },
        components:{
    QuantityComponent,
    ProdutoImgComponent,
    ButtonComponent,
    ModalComponent
},
        methods:{
            modal(){
                this.modalActivate = !this.modalActivate;
            },
            changeQuantity(quantity){
                this.quantity = quantity
            },
            Add(produto,quantity,carrinho){
                if(quantity == 0){
                    return
                }
                const Carrinho = AddCarrinho(produto,quantity,carrinho)
                if(Carrinho.id == undefined){
                    console.log(Carrinho)
                    this.$store.dispatch('adicionarNoCarrinho',Carrinho)
                }else{
                    this.$store.dispatch('atualizarCarrinho',Carrinho)
                }
                
        },
        }
        }
    

</script>

<style scoped lang="scss">
@import '../utils/index.scss';

.Produto{
    display: flex;
    margin: 5rem 2rem;
    justify-content: space-between;

    @include medio{
        flex-direction: column;
        margin: 0;
    }

    &__ConteinerText{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include medio{
            margin: 2rem;
            width: calc(100% - 4rem);
        }
    }

    &__Company{
        @include kumbh-sans-700;
        color: $Orange;
        letter-spacing: 0.05rem;
        margin-bottom: 1rem;
    }

    &__Title{
        @include kumbh-sans-700;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    &__Text{
        @include kumbh-sans-400;
        margin-bottom: 1.5rem;
        line-height: 1.5rem;

    }

    &__ConteinerBefore{
        @include medio{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__ConteinerPriceAfter{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    &__PriceAfter{
        font-size: 1.7rem;
        @include kumbh-sans-700;
        padding-right: 1rem;
    }

    &__Discount{
        @include kumbh-sans-700;
        color: $Orange;
        background-color: #ffa50022;
        padding: 0.2rem 0.35rem;
        border-radius: 4px;
    }

    &__PriceBefore{
        @include kumbh-sans-400;
        color: $Grayish-blue;
        text-decoration: line-through;
        margin-bottom: 1.5rem;
        @include medio{
            margin-bottom: 1rem;
        }
    }

    &__ConteinerBQ{
        display: flex;
        align-items: center;
        @include medio{
            flex-direction: column;
        }
    }
    &__Cart{
        margin-right: 1rem;
    }


}

</style>