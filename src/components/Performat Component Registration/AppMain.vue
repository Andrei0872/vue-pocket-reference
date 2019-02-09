<!-- Dynamic imports + <component /> = MAGIC! -->

<template>
    <div>
        <button @click='isCompanyCopy = !isCompanyCopy'>Toggle</button>

        <!-- :is can contain either the name of a registerd component -->
        <!-- or a component's options object -->
        <component :is="computedInstance" />
        
    </div>    
</template>

<script>

export default {
    props: {
        isCompany: { type: Boolean, default: false },
    },
    data: () => ({
        isCompanyCopy: null
    }),
    computed: {
        computedInstance () {
            const name = this.isCompanyCopy ? 'CompanyInfo': 'UserInfo';

            // import() - returns a Promise
            // It will load the desired module at runtime if the Promise resolves
            return () => import(`./${name}`)
        },
    },
    created () {
        this.isCompanyCopy = this.isCompany
    },
}
</script>

<!-- 
Caution:
Webpack will create a chunk file for every file matching the expression inside the `import` function

A possible workaround:
Split the components in a folder called /components/chunks or /components/bundles, se
we can know which components Webpack is splitting
-->