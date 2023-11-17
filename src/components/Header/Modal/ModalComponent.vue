<template>
    <div class="Modal" :class="!this.activate ? 'fade-out' : 'fade-in'" v-if="!this.closed">
        <header class="Modal__Header">
            <h1 class="Modal__Title">{{content}}</h1>
        </header>
        <main class="Modal__Main">
            <slot></slot>
        </main>
    </div>
</template>

<script>

export default{
    name: 'ModalComponent', 
    props:{
        closed: Boolean,
        content: String,
        activate: Boolean
    },
}
</script>

<style scoped lang="scss">
@import '../../../utils/index.scss';

.Modal{
    align-self: flex-end;
    width: 25%;
    border-radius: 0.25rem;
    box-shadow: 8px 15px 40px -9px rgba(0,0,0,0.75);
    position: absolute;
    left: 69%;
    background-color: $White;

    @include medio{
        width: 90%;
        left: 5%;
    }

    &__Header{
        padding: 1.25rem;
        border-bottom: 3px $Light-grayish-blue solid;
    }

    &__Title{
        @include kumbh-sans-700;
    }

    &__Main{
        padding: 1.25rem;
    }

    &__Text{
        @include kumbh-sans-700;
        color: $Dark-grayish-blue;
        text-align: center;
        font-size: 0.95rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
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
.fade-in{
    animation: fade-in 300ms ease-in-out forwards;
    z-index: 100;
}
.fade-out{
    animation: fade-out 300ms ease-in-out forwards;
}
</style>