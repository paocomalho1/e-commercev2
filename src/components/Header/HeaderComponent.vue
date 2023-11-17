<template>
    <header class="Header">
        <div class="Header__Conteiner">
            <img src="../../assets/images/icon-menu.svg" @click="() => {isClosed = !isClosed}" class="Header__Hamburger" alt="Menu">
            <h1 class="Header__Title" @click="(e) => goTo(e,'')">sneakers</h1>
            <nav class="Header__Menu">
                <ul class="Header__Items">
                    <li class="Header__Item"><a class="Header__Link" @click="(e) => goTo(e,'')" href="">Collections</a></li>
                    <li class="Header__Item"><a class="Header__Link" @click="(e) => goTo(e,'men')" href="">Men</a></li>
                    <li class="Header__Item"><a class="Header__Link" @click="(e) => goTo(e,'woman')" href="">Women</a></li>
                    <li class="Header__Item"><a class="Header__Link" @click="(e) => goTo(e,'about')" href="">About</a></li>
                    <li class="Header__Item"><a class="Header__Link" @click="(e) => goTo(e,'contact')" href="">Contact</a></li>
                    <li class="Header__Item" v-if="role == 'adm'"><a class="Header__Link" @click="(e) => goTo(e,'administrator')" href="">Administrator</a></li>
                </ul>
            </nav>
        </div>
        <div class="Header__Conteiner">
            <img class="Header__Icon" @click="Modal(1)" src="../../assets/images/icon-cart.svg" alt="Carrinho">
            <p v-if="quantity > 0 " class="Header__Notification">{{ quantity }}</p>
            <img class="Header__Img" :src="userImg || 'http://localhost:8080/img/user.c1d1a307.png'" @click="Modal(2)">
        </div>
    </header>
    <ModalComponent :closed="closed" :content="this.history == 1 ? 'Cart' : 'User'" :activate="activate" >
        <ModalItemsComponent v-if="this.history == 1" @onCheckout="() => closed = !closed"/>
        <ModalUsuarioComponent v-if="this.history == 2"/>
    </ModalComponent>
    <MenuComponent v-if="isClosed" @OnClose="() => {isClosed = !isClosed}">
        <MenuLinkComponent @onClose="() => {isClosed = !isClosed}"/>
    </MenuComponent>
</template>

<script>
import ModalComponent from './Modal/ModalComponent.vue'
import MenuLinkComponent from './MenuLinkComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import ModalItemsComponent from './Modal/ModalItemsComponent.vue'
import ModalUsuarioComponent from './Modal/ModalUsuarioComponent.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
    export default{
        name: "HeaderComponent",
        components:{
            MenuComponent,
            ModalComponent,
            ModalItemsComponent,
            ModalUsuarioComponent,
            MenuLinkComponent
        },
        computed:{  
        },
        setup(){
            const closed = ref(true)
            const isClosed = ref(false)
            const store = useStore()
            const history = ref(0)
            const activate = ref(false)
            const quantity = computed(() => store.state.Carrinho.length)
            const userImg = computed(() => store.state.Usuario[0]?.img)
            const role = computed(() => store.state.Usuario[0]?.role)
            store.dispatch('obterCarrinhos')
            return{
                closed,
                isClosed,
                quantity,
                userImg,
                history,
                activate,
                role
            }
        },
        methods:{
            goTo(e,param){
                e.preventDefault()
                this.$router.push(`/${param}`)
            },
            Modal(numero){
                if(numero == this.history){
                    this.activate = false
                    setTimeout(() => {
                        this.history = 0
                        this.closed = true
                    }, 300);
                } else{
                    this.history = numero
                    this.closed = false
                    this.activate = true
                }
                
            },
        }
    }
</script>

<style scoped lang="scss">
@import '../../utils/index.scss';

.Header{

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 0;
    border-bottom: 3px $Light-grayish-blue solid;

    @include medio{
        padding: 1rem;
        }
        
    &__Conteiner{
        display: flex;
        align-items: center;
    }
    
    &__Hamburger{

        display: none;
        padding-top: 0.5rem;
        margin-right: 1rem;
        @include cursor-pointer;

        @include medio{
            display: block;
        }
        
    }

    &__Title{
        font-size: 2rem;
        @include kumbh-sans-700;
        margin-right: 3rem;

        @include medio{
            margin-right: 1.5rem;
        }

        @include cursor-pointer;

    }

    &__Menu{
        display: flex;
    }
    
    &__Items{ 
        display: flex;

        @include medio{
            display: none;
        }
    }
    
    &__Item{ 
        margin-right: 1.5rem;

        @include medio{
            margin-right: 1rem;
        }

    }

    &__Link{
        @include kumbh-sans-400;
        text-decoration: none;
        position: relative;
        padding-bottom: 2.5rem;

        &:hover{
            border-bottom: 4px solid $Orange;
        }
    }

    &__Icon{
        @include cursor-pointer;

        @include medio{
            margin-right: 1.5rem;
        }
    }
    &__Notification{
        position: relative;
        right: 0.6rem;
        bottom: 0.5rem;
        padding: 0.2rem 0.35rem;
        background-color: $Orange;
        border-radius: 50%;
        font-size: 0.75rem;
        @include kumbh-sans-700;
        color: $White;
        @include medio{
            right: 2.0rem;
        }
    }
    &__Img{
        margin-left: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-sizing: border-box;

        &:hover{
            border: solid 2px $Orange;
        }
        @include cursor-pointer;

        @include medio{
            width: 30px;
            height: 30px;

        }
    }

}

</style>