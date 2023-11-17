<template>
    <div class="Login">
        <h1 class="Login__Title">Login</h1>
        <div class="Login__Form">
            <input class="Login__Input" type="email" v-model="email" placeholder="Jonas@hotmail.com">
            <input class="Login__Input" type="password" v-model="senha" name="" id="" placeholder="Jonas">
            <ButtonComponent content="Login" @click="teste()" :class="error ? 'Error' : ''"/>
        </div> 
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default{
    name: "LoginView",
    components:{
        ButtonComponent
    },
    setup(){
        const store = useStore()
        const error = ref(false)
        const autenticated = ref(false)
        const email = ref('')
        const senha = ref('')
        const Usuario = computed(() => store.state.Usuario)
        return{
            email,
            senha,
            Usuario,
            error,
            autenticated
        }
    },
    methods:{
        teste(){
            const usuario = {
                email: this.email,
                senha: this.senha
            }
            this.$store.dispatch('autenticar',usuario).then(resposta => {
                if(resposta.data != 0){
                    this.$store.commit('adicionarUsuario', resposta.data);
                    this.$router.push('/')
                    this.autenticated = true
                }
            })
            if(!this.autenticated){
                this.error = true
            }
        }
    }
}

</script>

<style lang="scss">
@import '../utils/index.scss';
.Login{
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__Title{
        @include kumbh-sans-700;
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    &__Form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    &__Input{
        outline: 0;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        width: calc(100% - 1.3rem);
        font-size: 1.25rem;
        @include kumbh-sans-700;
    }
}
.Error{
    background-color: red;
}
</style>