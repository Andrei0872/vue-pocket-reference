<template functional>
    <div class="c-modal" @click="parent.checkClickedOutside">
        <transition name="fade" appear tag="div">
            <div class="c-modal__container" v-if="props.showContainer">
                <div class="c-modal__body">
                    <div class="c-modal__header">
                        <slot name="header">Default Header</slot>
                        <div @click="parent.closeModal" class="c-modal__close">&times;</div>
                    </div>
                    <div class="c-modal__content">
                        <slot name="content">Default Content</slot>
                    </div>
                    <div class="c-modal__footer">
                        <slot name="footer">Default Footer</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: { showContainer: { type: Boolean, default: true } },
}
</script>

<style>
    .c-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .c-modal__container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 35rem;
        height: 15rem;
        background-color: #fff;
        transform: translate(-50%, -50%);
    }

    .c-modal__body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
    }

    .c-modal__header {
        flex: 0 0 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: .9rem;
    }

    .c-modal__content {
        flex: 0 0 60%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .c-modal__footer {
        flex: 0 0 20%;
    }

    .c-modal__close {
        font-size: 1.3rem;
        cursor: pointer;
    }

    /* ================================ */

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }


</style>

