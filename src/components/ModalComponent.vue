<template>
    <div class="Modal" @click="teste()" :class="{'fade-in' : Active,'fade-out' : !Active, 'displayMedio' : isImg}">
        <div class="Modal__Close" @click="close">
        </div>
        <slot></slot>
    </div>
</template>
<!-- :class="isImg ? 'displayMedio' : ''" -->
<script>
import { ref } from 'vue';
    export default{
        name:"ModalComponent",
        emits:[
            'onClose'
        ],
        setup(){
            const Active = ref(false)
            const Modal = ref(true)
            return{
                Active,
                Modal
            }
        },
        mounted(){
            this.Active = true
        },
        methods:{
            close(){
                this.Active = !this.Active
                setTimeout(()=>{this.$emit("OnClose")},1000)

            },
            teste(){
                console.log(this.isImg)
            }
        },
        props:{
            Produto: Array,
            modalActivate: Boolean,
            isImg:{
                type: Boolean,
                default: true
            }
        },

    }
</script>

<style scoped lang="scss">
@import '../utils/index.scss';
.Modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: calc(100vw - 1rem);
    height: calc(100vh + 6rem);
    background-color: #000000bb;
    z-index: 1;


    &__Close{
        width: 14px;
        height: 15px;
        margin-left: 33%;
        margin-bottom: 1rem;
        background: url('../assets/images/icon-close.svg');
        &:hover{
            background: url('../assets/images/icon-closeHover.svg');
            cursor: pointer;
        }
    }
}
.fade-in{
    animation: fade-in 1s ease-in-out forwards;
}
.fade-out{
    animation: fade-out 1s ease-in-out forwards;
}
.displayMedio{
    @include medio{
        display: none;
    }
}
</style>