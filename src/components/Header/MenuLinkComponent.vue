<template>
    <ul class="Menu__Items">
        <li class="Menu__Item"><a href="" class="Menu__Link" @click="(e) => goTo(e,'/')">Collections</a></li>
        <li class="Menu__Item"><a href="" class="Menu__Link" @click="(e) => goTo(e,'men')">Men</a></li>
        <li class="Menu__Item"><a href="" class="Menu__Link" @click="(e) => goTo(e,'woman')">Woman</a></li>
        <li class="Menu__Item"><a href="" class="Menu__Link" @click="(e) => goTo(e,'about')">About</a></li>
        <li class="Menu__Item"><a href="" class="Menu__Link" @click="(e) => goTo(e,'contact')">Contact</a></li>
        <li class="Menu__Item" v-if="role == 'adm'"><a href="" class="Menu__Link" @click="(e) => goTo(e,'administrator')">Administrator</a></li>
    </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default{
    name:'MenuLinkComponent',
    emits:[
        'onClose'
    ],
    setup(){
        const store = useStore()
        const role = computed(() => store.state.Usuario[0]?.role)
        return{
            role
        }
    },
    methods:{
        goTo(e,path){
            e.preventDefault()
            this.$router.push(path)
            this.$emit('onClose')
        }
    }
}
</script>

<style lang="scss">
@import '../../utils/index.scss';
.Menu{
    display:none;

&__Item{
    margin-bottom: 1.2rem
}

&__Link{
    @include kumbh-sans-700;
    text-decoration: none;
}
}
</style>