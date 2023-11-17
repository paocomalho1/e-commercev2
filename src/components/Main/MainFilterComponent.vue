<template>
    <section class="Filter">
        <h3 class="Filter__H3">Filter by</h3>
        <div>
            <div>
                <div>
                    <h4 class="Filter__H4">Price equal or less than</h4>
                </div>
                <input v-model="price" class="range-slider" type="range" min="" max="1000" name="" id="" @change="$emit('onPrice',price)">
                <p class="Filter__Price">${{ price }}</p>
            </div>
            <div class="Filter__ConteinerH4" @click="() => {Active = !Active}">
                <h4 class="Filter__H4">Sex</h4>
                <svg v-if="Active" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="#ff791a"/></svg>
                <svg v-if="!Active" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="#ff791a"/></svg>
            </div>
            <div v-if="Active">
                <div class="Filter__ConteinerInput">
                    <label class="checkbox">
                        <input type="checkbox" v-model="woman" @click="$emit('onTheme','Woman')">
                        <span class="checkmark"></span>
                    </label>
                    <label class="Filter__Label" for="">Woman</label>
                </div>
                <div>
                    <label class="checkbox">
                        <input type="checkbox" v-model="men" @click="$emit('onTheme','Men')">
                        <span class="checkmark"></span>
                    </label>
                    <label class="Filter__Label" for="">Men</label>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';


export default{
    name:'MainFilterComponent',
    emits:[
        'onPrice',
        'onTheme'
    ],  
    setup(){
        const Active = ref(true)
        const price = ref(500)
        const men = ref(true)
        const woman = ref(true)
        return{
            Active,
            price,
            men,
            woman     
        }
    },
}
</script>

<style lang="scss">
@import '../../utils/index.scss';
.Filter{
    margin-right: 2rem;
    width: 90%;
    margin-bottom: 1rem;
    @include medio{
        width: 100%;
    }

    &__H3{
        @include kumbh-sans-700;
        margin-bottom: 1rem
    }

    &__Range{
        width: 100%;
        margin-bottom: 0.5rem;
    }
    &__Price{
        @include kumbh-sans-700;
        color: $Orange;
        text-align: center;
    }
    &__ConteinerH4{
        display: flex;
        justify-content: space-between;
        @include cursor-pointer;
    }
    &__H4{
        @include kumbh-sans-400;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    &__ConteinerInput{
        display: flex;
        align-items: start;
        margin-bottom: 1rem;
    }
    &__Label{
        @include kumbh-sans-400;
        
    }
}
/* Estilo padrão para o input range */
.range-slider {
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  outline: none;
}

/* Track do range */
.range-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 20px;
  background: $Orange; /* Cor de fundo do track (cinza) */
  border-radius: 5px;
}

/* Cor laranja para o thumb */
.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: $White; /* Cor laranja para o thumb */
  border-radius: 50%;
  cursor: pointer;
}

/* Hover e focus para melhorar a usabilidade */

.range-slider:focus::-webkit-slider-thumb {
  box-shadow: 0 0 5px rgba(255, 165, 0, 0.8); /* Sombra laranja quando focado */
}
/* Estilo básico para a checkbox */
.checkbox {
  position: relative;
  padding-left: 30px; /* Espaço para a caixa de marcação personalizada */
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  color: #333; /* Cor do texto */
}

/* Estilo do input (oculto) */
.checkbox input {
  position: absolute;
  opacity: 0; /* Tornar o input invisível */
  cursor: pointer;
}

/* Estilo da marca de seleção (checkmark) */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: $Orange; /* Cor laranja para a checkbox */
  border-radius: 3px;
}

/* Estilo da marca de seleção (checkmark) quando a checkbox está marcada */
.checkbox input + .checkmark::before{
  content: ""; /* Símbolo de checkmark Unicode */
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Cor do símbolo de checkmark */
  font-size: 14px;
}
.checkbox input:checked + .checkmark::before {
  content: "\2713"; /* Símbolo de checkmark Unicode */
}

/* Estilo da marca de seleção (checkmark) quando hover */
.checkbox:hover input + .checkmark {
  background-color: darkorange; /* Cor mais escura quando hover */
}

</style>