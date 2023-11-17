<template>
    <div class="Produto__ConteinerQuantity">
        <img class="Produto__Icon" @click="Decrement" src="../../assets/images/icon-minus.svg" alt="">
        <p class="Produto__Quantity">{{Quantity}}</p>
        <img class="Produto__Icon" @click="Increment" src="../../assets/images/icon-plus.svg" alt="">
    </div>
</template>

<script>
    export default{
        name:"QuantityComponent",
        emits:[
            'onQuantity'
        ],
        props:{
            QuantityProps:{
                type: Number,
                default: 0
            }
        },
        methods:{
            Increment(){
                this.Quantity++
                this.$emit('onQuantity',this.Quantity)
            },
            Decrement(){
                if(this.Quantity <= 0){
                    return
                }
                this.Quantity--
                this.$emit('onQuantity',this.Quantity)

                
            }
        },
        data(){
            return{
                Quantity: this.QuantityProps || 0
            }
        }
    }
</script>

<style lang="scss">
@import '../../utils/index.scss';
.Produto{
    &__ConteinerQuantity{
        background-color: $Light-grayish-blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem;
        border-radius: 0.5rem;
        margin-right: 1.5rem;
        @include medio{
            width: calc(100% - 2.5rem);
            margin-right: 0rem;
            margin-bottom: 1rem;
        }
    }

    &__Icon{
        &:hover{
            cursor: pointer;
            opacity: 0.7;
        }
    }

    &__Quantity{
        @include kumbh-sans-700;
        padding: 0rem 2rem;
    }
}
</style>