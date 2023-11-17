<template>
    <li class="Modal__Item" v-for="item in Carrinho" :key="item.id">
        <img class="Modal__Img" :src="item.img" alt="">
        <div class="Modal__Conteiner">
            <h3>{{ item.name }} ${{ item.price }} <strong v-if="Modal">x {{ item.quantity }}</strong>${{ item.quantity * item.price }}</h3>
            <div class="Modal__ConteinerQuantity">
                <QuantityComponent v-if="!Modal" :QuantityProps="item.quantity" @onQuantity="(quantity) => {item.quantity = quantity;}"/>
                <img class="Modal__Delete" @click="() => {this.$store.dispatch('removeCarrinho', item.id)}" src="../../../assets/images/icon-delete.svg" alt="">
            </div>
        </div>
    </li>
</template>

<script>
import QuantityComponent from '@/components/Produto/QuantityComponent.vue';

export default{
    name: 'ModalItemComponent',
    props: {
        Carrinho: Array,
        Modal:{
            type: Boolean,
            default: false
        },
    },
    components: { QuantityComponent }
}
</script>

<style scoped lang="scss">
@import '../../../utils/index.scss';
.Modal{
    &__Item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__Img{
        width: 50px;
        height: 50px;
        border-radius: 0.25rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    &__Conteiner{
        width: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        @include kumbh-sans-400;
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
        flex-grow: 0.5;
        @include medio{
            justify-content: space-between;
            width: 100%;
        }
    }
    &__ConteinerQuantity{
        display: flex;
        align-items: center;
    }
    &__Delete{
        @include cursor-pointer;
        margin-left: 0.25rem;
        @include medio{
            margin-bottom: 1rem;
            margin-left: 1rem;
        }
    }
}
</style>