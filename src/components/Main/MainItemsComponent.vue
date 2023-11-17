<template>
    <ul class="Main__Items" @click="this.teste">
        <MainItemComponent 
            v-for="item in Produto" 
            :item="item" 
            :key="item.id"
        />
    </ul>
</template>

<script>
import MainItemComponent from './MainItemComponent.vue'
export default{
    name: 'MainItemsComponent',
    props:{
        Produto: Object,
    },
    components:{
        MainItemComponent
    },
}

</script>

<style lang="scss">
@import '../../utils/index.scss';
.Main{
    &__Items{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;

    }

}

</style>