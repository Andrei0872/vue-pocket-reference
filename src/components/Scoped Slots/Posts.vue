<template>
    <div>
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="post in posts"
                :key="post.id"
            >
            <b>{{ pseudoSlot({ post }) }} </b>
            <span>
                <slot :post="post"></slot>
            </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['pseudoSlot'],
        data() {
            return {
                posts: [
                    { id: 1, content: 'content 1' },
                    { id: 2, content: 'content 2' },
                    { id: 3, content: 'content 3' },
                    { id: 4, content: 'content 4' },
                ]
            }
        },
    }
</script>