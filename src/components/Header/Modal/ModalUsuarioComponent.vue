<template>
    <p class="Modal__Name">
        <b class="Modal__B">Name:</b> {{ user?.name || 'User' }}
    </p>
    <p class="Modal__Email">
        <b class="Modal__B">E-mail:</b> {{ user?.email || 'User' }}
    </p>
    <ButtonComponent :content="content" @click="() => {
        this.$store.commit('adicionarUsuario',{});
        this.$router.push('login')
}">
        </ButtonComponent>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue'

export default{
    name:'ModalUsuarioComponent',
    components:{
        ButtonComponent
    },

    setup(){
        const store = useStore()
        const user = computed(() => store.state.Usuario[0])
        const content = computed(() => {
            if(store.state.Usuario[0]?.name == undefined){
                return 'Log-in'
            }
            return 'Log-out'
        })
        return{
            user,
            content
        }
    }
}
</script>

<style lang="scss">
@import '../../../utils/index.scss';
.Modal{
    &__B{
        @include kumbh-sans-400;
    }
    &__Name{
        @include kumbh-sans-400;
        margin-bottom: 0.25rem;
    }
    &__Email{
        @include kumbh-sans-400;
        margin-bottom: 1rem;
    }
}


</style>