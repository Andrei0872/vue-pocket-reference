
function getTitle (vm) {
    const { title } = vm.$options;

    return typeof title === 'function'
        ? title.call(vm)
        : title
}

export default {
    created () {
        const title = getTitle(this);

        if (title) {
            document.title = title;
        }
    }
}