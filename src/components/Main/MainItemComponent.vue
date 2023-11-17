<template>
    <li class="Main__Item">
        <img class="Main__Img" 
            :src="item?.img.img1" 
            alt="" 
            @click="() => {this.$router.push(`/produto/${item.id}`)}">
        <figcaption class="Main__Caption">
            <legend class="Main__Name">{{ item?.name }}</legend>
            <div class="Main__ConteinerPrice">
                <p class="Main__PriceAfter">${{ (item?.price * item?.discount) / 100 }}</p>
                <p class="Main__PriceBefore">${{ item?.price }}</p>
            </div>
            <ButtonComponent content="Add to Cart" @click="AddOrUpdate(item,this.quantity,this.Carrinho)">
                <img class="Modal__Cart" src="../../assets/images/icon-White-cart.svg" alt="">
            </ButtonComponent>
        </figcaption>
    </li>
</template>

<script>
import { useStore } from 'vuex';
import ButtonComponent from '../ButtonComponent.vue';
import { computed, ref } from 'vue';
import Add from '@/functions/add.js'
export default{
    name: 'MainItemComponent',
    props:{
        Produto: Array,
        item: Object
    },
    components:{
        ButtonComponent
    },
    setup(){
        const store = useStore()
        const Carrinho = computed(() => store.state.Carrinho)
        const quantity = ref(1)
        return{
            Carrinho,
            quantity

        }
    },
    methods:{
        AddOrUpdate(produto,quantity,carrinho){
            if(quantity == 0){
                return
            }
            const Carrinho = Add(produto,quantity,carrinho);
            if(Carrinho.id == undefined){
                this.$store.dispatch('adicionarNoCarrinho',Carrinho)
            }else{
                this.$store.dispatch('atualizarCarrinho',Carrinho)
            }
        },
    }
}

</script>

<style lang="scss">
@import '../../utils/index.scss';
.Main{
    &__Item{
        width: calc(33.33% - 0.70rem);
        //border: $Orange solid 2px;
        border-radius: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        &:nth-child(3n){
            margin-right: 0;
        }
        @include medio{
            width: calc(50% - 0.5rem);
            &:nth-child(3n){
                margin-right: 1rem;
        }
            &:nth-child(2n){
                margin-right: 0;
        }
        }
        @include pequeno{
            width: 100%;
            margin-right: 0rem;
            &:nth-child(3n){
                margin-right: 0rem;
        }
    }

    }
    &__Img{
        @include cursor-pointer;
        width: 100%;
        border-top-left-radius: 0.90rem;
        border-top-right-radius: 0.90rem;
    }
    &__Caption{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        background-color: $Light-grayish-blue;
        border-bottom-left-radius: 0.90rem;
        border-bottom-right-radius: 0.90rem;
        height: 150px;
    }
    &__Name{
        @include kumbh-sans-700;
        color: $Very-dark-blue;
        font-size: 1.2rem;
        margin-bottom: 1rem
    }
    &__ConteinerPrice{
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
    }
    &__PriceAfter{
        @include kumbh-sans-700;
        padding-right: 1rem;
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
}

</style>