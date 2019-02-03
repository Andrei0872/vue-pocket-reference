
<template>
    <div>
        <div>
            <p
                v-for="item in list"
                :key="item.id"
            >
                <slot
                    name="link"
                    :link="item"
                    :bookmark="bookmark"
                    :removeBookmark="removeBookmark"
                    :bookmarkAttrs="bookmarkAttrs(item)"
                    :bookmarkEvents="bookmarkEvents(item)"
                ></slot>
            </p>
        </div>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                    { id: 1, name: 'website 1', href: 'link to website1', bookmarked: false },
                    { id: 2, name: 'website 2', href: 'link to website2', bookmarked: false },
                    { id: 3, name: 'website 3', href: 'link to website3', bookmarked: false },
                ],
        }
    },
    methods: {
        bookmark (link) {
            link.bookmarked = true
        },
        removeBookmark (link) {
            link.bookmarked = false
        },
        bookmarkAttrs (link) {
            return  {
                style: [ link.bookmarked ? { color: 'green' } : { color: 'red' } ],
                class: [ link.bookmarked ? 'bookmarked' : 'unbookmarked']
            }
        },
        bookmarkEvents (link) {
            return {
                click: () => link.bookmarked ? this.removeBookmark(link) : this.bookmark(link)
            }
        },
    },
}
</script>

<style scoped>
    
    .bookmarked {
        text-decoration: underline;
    }

    .unbookmarked {
        text-decoration: line-through;
    }

</style>