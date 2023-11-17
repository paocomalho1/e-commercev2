<template>
    <div class="Produto__ConteinerImg">
        <div class="Produto__ConteinerArrow">
            <img class="Produto__Arrow Produto__ArrowLeft" :class="modalActivate && Modal ? '':'displayNone'" @click="previous()" src="../../assets/images/icon-previous.svg" alt="">
            <img class="Produto__Img" :class="modalActivate && Modal ? 'cursorAuto':''" :src="imgSelected" alt="" @click="() => {this.$emit('onModalActive')}">
            <img class="Produto__Arrow Produto__ArrowRight" :class="modalActivate && Modal ? '':'displayNone'" @click="next()" src="../../assets/images/icon-next.svg" alt="">
        </div>
        <ul class="Produto__Items">
            <li class="Produto__Item" :class="{Produto__Selected : this.Selected == 1}" @click="show(1)"><img class="Produto__ImgList" :src="this.Produto.img.img1" alt=""></li>
            <li class="Produto__Item" :class="{Produto__Selected : this.Selected == 2}" @click="show(2)"><img class="Produto__ImgList" :src="this.Produto.img.img2" alt=""></li>
            <li class="Produto__Item" :class="{Produto__Selected : this.Selected == 3}" @click="show(3)"><img class="Produto__ImgList" :src="this.Produto.img.img3" alt=""></li>
            <li class="Produto__Item" :class="{Produto__Selected : this.Selected == 4}" @click="show(4)"><img class="Produto__ImgList" :src="this.Produto.img.img4" alt=""></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "ProdutoImgComponent",
        props:{
            Produto: Array,
            modalActivate: Boolean,
            Modal: {
                type: Boolean,
                default: false,
            } 
        },
        computed: {
            imgSelected() {
                switch (this.Selected) {
                    case 1:
                        return this.Produto.img.img1
                    case 2:
                        return this.Produto.img.img2
                    case 3:
                        return this.Produto.img.img3
                    case 4:
                        return this.Produto.img.img4
                    default:
                        return this.Produto.img.img4
                }
            }
        },
        data(){
            return{
                Selected: 1
            }
        },
        
        emits:[
            'onModalActive'
        ],
        methods:{
            previous(){   
                if(this.Selected < 2){
                    return
                }
                this.Selected--
                
            },
            next(){
                if(this.Selected > 3){
                    return
                }
                this.Selected++
                
            },
            show(numero){
                this.Selected = numero

            },
        }
    }
</script>

<style scoped lang="scss">
@import '../../utils/index.scss';
.Produto{
    &__ConteinerImg{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @include medio{
        width: 100%;
    }
    }
    &__ConteinerArrow{
        display: flex;
        align-items: center;
        justify-content: center;
        @include cursor-pointer;

    }
    &__Img{
        width: 100%;
        height: 360px;
        border-radius: 1rem;
        animation: fade-in 300ms ease-in-out forwards;  


        @include medio{
            border-radius: 0rem;
            cursor: auto;
        }
    }
    &__Arrow{
        z-index: 1;
        padding: 1rem;
        background-color: $White;
        border-radius: 50%;
        position: relative;
        @include medio{
            display:flex !important;
            position: absolute;
    }
        @include cursor-pointer;
    }
    &__ArrowRight{
        right: 1.5rem;
    }
    &__ArrowLeft{
        left: 1.5rem;
    }

    &__Items{

        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
        align-items: center;

        @include medio{
            display: none;
        }   

    }
    
    &__Item{
        display: flex;
        justify-content: center;
        width: 20%;
        border-radius: 1.15rem;
        box-sizing: border-box;
    }
    &__Selected{
        box-sizing: border-box;
        outline: none;
        border: solid 2px $Orange;
        opacity: 0.7;
    }

    &__ImgList{
        width: 100%;
        border-radius: 1rem;
        @include cursor-pointer;
        &:hover{
            opacity: 0.7;
        }
    }
}
.displayNone{
    display:none;
}
.cursorAuto{
    &:hover{
        cursor: auto;
    }
}
</style>