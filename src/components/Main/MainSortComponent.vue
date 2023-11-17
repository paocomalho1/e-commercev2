<template>
    <div class="Sort">
        <div class="Sort__Conteiner">
            <div class="Sort__Conteiner">
                <input class="Sort__Input" placeholder="Search" type="text" @change="((e) => $emit('onInput',e.target.value))">
                <button class="Sort__Button" @change="(() => $emit('onInput',input))" >Search</button>
            </div>
        </div>
        <div class="Sort__Conteiner">
            <select class="Sort__Select" name="" id="" @change="(e) => $emit('onSort',e.target.value)">
                <option value="" selected disabled hidden>Sort</option>
                <optgroup label="Alphabetical order">
                    <option class="Sort__Option" value="Ascending">Ascending order</option>
                    <option class="Sort__Option" value="Descending">Descending order</option>
                </optgroup>
                <optgroup label="Price order">
                    <option class="Sort__Option" value="Expensive">Most expensive</option>
                    <option class="Sort__Option" value="Cheapest">Cheapest</option>
                </optgroup>
            </select>
            <select class="Sort__Select" name="" id="" @change="(e) => $emit('onPagination',e.target.value)">
                <option value="" selected disabled hidden>Show</option>
                <option class="Sort__Option" value="20">20 per page</option>
                <option class="Sort__Option" value="50">50 per page</option>
                <option class="Sort__Option" value="100">100 per page</option>
            </select>
        </div>
    </div>
</template>

<script>

export default{
    name: 'MainSortComponent',
    emits: [
        'onSort',
        'onPagination',
        'onInput'
    ],
}
</script>

<style lang="scss">
@import '../../utils/index.scss';

.Sort{
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    @include medio{
        flex-direction: column;
    }
    &__Conteiner{
        display: flex;
        align-items: center;
        @include medio{
            margin-bottom: 0.5rem;
            width: 100%;
        }
    }
    &__Title{
        margin-left: 0.5rem;
        @include  kumbh-sans-700;
    }
    &__Input{
        margin-right: 0.5rem;
        padding: 0.6rem;
        border-radius: 0.5rem;
        outline: 0;
        border: solid $Grayish-blue 1px;
        appearance: none;
        @include  kumbh-sans-700;
        color: $Dark-grayish-blue;
        @include medio{
            width: 80%;
        }
    }
    &__Button{
        display: flex;
        align-items: center;
        @include kumbh-sans-700;
        color: $White;
        background-color: $Orange;
        border: none;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        justify-content: center;
        width: 100%;
        &:hover{
            opacity: 0.7;
        }
        @include cursor-pointer;
        @include medio{
            width: 20%;
        }
    }

    &__Select{
        padding: 0.6rem;
        border-radius: 0.5rem;
        border: solid $Orange 2px;
        background-color: $Orange;
        @include  kumbh-sans-700;
        color: $White;
        appearance: none;
        outline: 0;
        margin-right: 1rem;
        option{
            border: none;
            color: $Orange;
            background-color: $White;
        }
        &:last-child{
                margin-right: 0rem;
            }
        @include medio{
            width: 50%;
        }
    }
    &__Option{
        padding: 0.5rem;
        border: none;

    }
}
</style>