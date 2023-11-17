<template>
    <div class="Menu">
        <nav :class="isClosedScoped ? 'leftToRight': 'rightToRight'" class="Menu__Nav">
            <img src="../assets/images/icon-close.svg" class="Menu__Close" @click="Close" alt="fechar" >
            <slot></slot>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default{
        props:{
            closeModal:{
                type: Boolean,
                default: false
            }
        },
        mounted(){
            this.isClosedScoped = !this.isClosedScoped
        },
        setup(){
            const isClosedScoped = ref(false)
            return{
                isClosedScoped
            }
        },
        name: "MenuComponent",

        emits:[
            "OnClose"
        ],
        methods: {
            Close(){
                this.isClosedScoped = !this.isClosedScoped
                setTimeout(() =>{this.$emit("OnClose")}, 300);
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../utils/index.scss';
.Menu{
    display:none;
    @include medio{
    display: block !important;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000bb;
    z-index: 2;

    &__Nav{
        height: calc(100vh - 3rem);
        width: calc(66.66vw - 3rem);
        background-color: white;
        padding: 1.5rem;
    }

    &__Close{
        margin-bottom: 2rem;

        @include cursor-pointer;
    }

}
}

//animations
.leftToRight{
    animation: moveRight 200ms linear;
}

.rightToRight{
    animation: moveLeft 300ms forwards;
}

</style>