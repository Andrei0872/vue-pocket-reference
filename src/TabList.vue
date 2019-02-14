<template>
    <div>

        <div class="tab_container">
            <ul class="tab_container__list">
                <li
                    v-for="tabName in tabNames"
                    :key="tabName"
                    :class="{ 
                        tab_container__item: true,
                        'tab_container__item--active': currentTab === tabName
                    }"
                    @click="currentTab = tabName"
                >
                    {{ tabName }}
                </li>
            </ul>
            
            <div class="tab_container__content">
                <p
                    v-for="tabName in tabNames"
                    :key="tabName"
                >
                    <slot 
                        :name="tabName"
                        v-if="currentTab === tabName"
                        :tabUpper="`This is the ${tabName} tab`"
                    ></slot>
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        currentTab: String
    },
    data: () => ({
        tabNames: ['home', 'about', 'contact']
    }),
}
</script>


<style scoped>

.tab_container {
    width: 25rem;
    height: 25rem;
    margin: 50px auto;
    border: 1px solid #ccc;
}

.tab_container__list {
    list-style: none;
    display: flex;
}

.tab_container__item {
    flex: 1 1 auto;
}

.tab_container__item:not(:last-child) {
    border-right: 1px solid #ccc;
}

.tab_container__item {
    cursor: pointer;
}

.tab_container__item--active {
    color: green;
}
</style>
