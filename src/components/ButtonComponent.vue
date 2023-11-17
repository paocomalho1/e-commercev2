<template>
    <button class="Modal__Button"><slot></slot> {{content}}</button>
</template>

<script>
export default{
    name:'ModalButtonComponent',
    props:{
        content: String
    }
}
</script>

<style lang="scss">
@import '../utils/index.scss';
.Modal{
    &__Button{
        display: flex;
        align-items: center;
        @include kumbh-sans-700;
        color: $White;
        background-color: $Orange;
        border: none;
        border-radius: 0.5rem;
        padding: 0.75rem 4rem;
        justify-content: center;
        width: 100%;
        &:hover{
            opacity: 0.7;
        }
        @include cursor-pointer;

        @include medio{
            width: 100%;
        }
    }
}
</style>