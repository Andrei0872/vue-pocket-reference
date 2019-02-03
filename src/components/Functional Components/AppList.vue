
<template>
    <div>
        <div class="list-container">
            <render-func style="margin-top: 100px;" :items="items"></render-func>
        </div>
    </div>    
</template>


<script>
import RenderFunc from './RenderFunc.vue';

export default {
    data() {
        return {
            selected: false,
            elem: '',
            info: {nume: 'andrei'},
            items: [
                { title: 'Link 1', img:'image_src1' },
                { title: 'Link 2', img:'image_src2' },
                { title: 'Link 3', img:'image_src3' },
                { title: 'Link 4', img:'image_src4' },
            ]
        }
    },
    components: {
        'render-func': RenderFunc
    },
}
</script>


<style>
    .list-container {
        padding: 10px;
    }
    
    .list-container-item {
        margin: 10px;
    }

    .list-container-item:hover {
        text-decoration: underline;
    }


    /* Fade Transition */
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s ease;
    }

    .fade-leave {}

    .fade-leave-active {
        opacity: 0;
        transition: opacity 1s ease;
    }

</style>
