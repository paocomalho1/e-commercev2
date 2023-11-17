<template>
  <HeaderComponent/>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import HeaderComponent from './components/Header/HeaderComponent.vue';
  export default{
    components:{
      HeaderComponent,
    },
    setup(){
      const store = useStore()
      store.dispatch('obterProdutos')
    }
    
  }

</script>

<style lang="scss">
@import './utils/reset.scss';
@import './utils/index.scss';

body{
  margin-right: 12%;
  margin-left: 12%;


  @include medio{
    margin-right: 0%;
    margin-left: 0%;   
  }

}
</style>
