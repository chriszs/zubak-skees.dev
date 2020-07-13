<template>
    <div>
        <a
            v-for="link in links"
            :key="link.title"
            :href="link.url"
        >
            <i
                :class="'fa fa-' + link.icon + ' fa-lg'"
                :title="link.title"
            />
        </a>
    </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>
a {
    color: rgb(50, 50, 50);
}

a:hover {
    color: rgb(100, 100, 100);
}

.fa {
    font-size: 90%;
}

i {
    padding-left: 5px;
    padding-right: 5px;
}
</style>
