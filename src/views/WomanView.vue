<template>
    <h1>Woman</h1>
    <MainItemsComponent :Produto="Produto"/>
</template>

<script>
import { useStore } from 'vuex';
import MainItemsComponent from '../components/Main/MainItemsComponent.vue'
import { computed } from 'vue';
export default{
    name: 'MenView',
    components:{
        MainItemsComponent
    },
    setup(){
        const store = useStore()
        const Produto = computed(() => store.state.Produto.filter(i => i.theme == 'Woman'))
        return{
            Produto,
        }
    }
}
</script>

<style scoped lang="scss">
@import '../utils/index.scss';
h1{
    @include kumbh-sans-700;
    font-size: 2rem;
    margin: 2rem 0;
    padding-bottom: 0.2rem;
    border-bottom: solid 3px $Light-grayish-blue;
}
</style>