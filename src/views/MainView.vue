<template>
    <main class="Main">
        <section class="Main__Section">
            <MenuComponent @onClose="() => close = !close" v-if="!close">
                <MainFilterComponent @onPrice="(price) => this.price = price" @onTheme="Theme"/>
                <ButtonComponent content="Apply Filter" @click="() => close = !close"/>
            </MenuComponent>
            <div class="Main__FilterConteiner">
                <MainFilterComponent @onPrice="(price) => this.price = price" @onTheme="Theme"/>
            </div>
            <div class="Main__ItemsComponent">
                <div>
                    <button class="Main__Filter" @click="() => close = !close">Filter by</button>
                </div>
                <MainSortComponentVue @onInput="(input) => this.input = input" @onSort="(type) => this.sortType = type" @onPagination="(pagination) => this.pagination = pagination"/>
                <MainItemsComponentVue
                    :Produto="Produto" 
                    :key="item"
                />
            </div>
        </section>
    </main>
</template>

<script>
import { useStore } from 'vuex';
import MainSortComponentVue from '@/components/Main/MainSortComponent.vue';
import MainItemsComponentVue from '@/components/Main/MainItemsComponent.vue';
import MainFilterComponent from '@/components/Main/MainFilterComponent.vue';
import { ref, computed} from 'vue';
import MenuComponent from '../components/MenuComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue';


    export default{
        name: 'MainView',
        setup(){
            function wtf(Produto){
                return Produto
    
            }
            
            const store = useStore()
            const sortType = ref('Ascending')
            const theme = ref(['Men','Woman'])
            const pagination = ref(20)
            const price = ref(500)
            const input = ref('')
            const close = ref(true)
            const Produto = computed(() => wtf(store.state.Produto.filter(i => (i.theme == theme.value[0] || i.theme == theme.value[1]) && i.price <= price.value && i.name.toUpperCase().includes(input.value.toUpperCase()))).slice(0,pagination.value).sort(function(a,b){
                switch (sortType.value) {
                    case 'Ascending':
                        if(a.name > b.name){
                                return 1
                            }
                            else if(a.name < b.name){
                                return -1
                            }   
                            return 0
                    case 'Descending':
                        if(a.name < b.name){
                                return 1
                            }
                            else if(a.name > b.name){
                                return -1
                            }   
                            return 0
                    case 'Expensive':
                        if(a.price < b.price){
                                return 1
                            }
                            else if(a.price > b.price){
                                return -1
                            }   
                            return 0
                    case 'Cheapest':
                        if(a.price > b.price){
                                return 1
                            }
                            else if(a.price < b.price){
                                return -1
                            }   
                            return 0
                    default:
                        break;
                }
            }))
            
            return {
                close,
                Produto,
                price,
                theme,
                sortType,
                pagination,
                input

            }
        },
        methods:{
            Theme(theme){
                if(this.theme.includes(theme)){
                    this.theme.splice(this.theme.findIndex(t => t == theme),1)
                }else{
                    this.theme.push(theme)
                }
            }
        },
        components: {
    MainItemsComponentVue,
    MainFilterComponent,
    MainSortComponentVue,
    MenuComponent,
    ButtonComponent
}
    }

</script>

<style scoped lang="scss">
@import '../utils/index.scss';
.Main{
    @include medio{
            padding: 0% 5%;
        }
    margin: 2rem 0;
    &__Section{
        display: flex;
    }

    &__FilterConteiner{
        background-color: $White;
        @include medio{
            display: none;
        }
    }
    &__Filter{
        display:none;
        margin-bottom: 1rem;
        padding: 0.55rem;
        width: 100%;
        background-color: $White;
        border: $Grayish-blue solid 1px;
        border-radius: 0.5rem;
        @include kumbh-sans-700;
        color:$Dark-grayish-blue;
        @include cursor-pointer;
        @include medio{
            display: block
        }
    }
    &__ItemsComponent{
        width: 100%;
    }
}   

</style>