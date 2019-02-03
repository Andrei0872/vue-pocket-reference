<template>
    <div>
        <p>Current length : {{ len }}</p>
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(post, index) in posts"
                :key="index"
                @click="deleteItem(index)"
            >{{ post }}</li>
        </ul>
        <hr>
        <button @click="addItem" class="btn btn-primary">Add</button>
        <button @click="update(13)" class="btn btn-primary">Update Counter</button>
        <button @click="update2(20)" class="btn btn-primary">Update Counter 2</button>
        <button @click="assignValueCount(39)">Assign value 39</button>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapActions, mapGetters } = createNamespacedHelpers('counter');

    export default {
        computed: {
            // counter/posts/...
            ...mapGetters({
                posts: 'posts/getPosts',
                len: 'posts/nrPosts'
            })
        },
        methods: {
            // import { mapActions, mapGetters } from 'vuex';
            // ...mapActions({
            //     addItem: 'counter/posts/add',
            //     deleteItem: 'counter/posts/delete',
            //     update: 'counter/updateVal',
            //     update2: 'counter/posts/updateVal'
            // })

            // OR

            ...mapActions({
                addItem: 'posts/add',
                deleteItem: 'posts/delete',
                update: 'updateVal',
                update2: 'posts/updateVal',
                assignValueCount: 'posts/assignValueCount'
            })

        }
    }
</script>