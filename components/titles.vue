<template>
    <p>
        <span
            v-for="(title,i) in titles"
            :key="title"
        >
            <span>{{ title }}</span>
            <span
                v-if="i !== titles.length-1"
                class="sep"
            > | </span>
        </span>
    </p>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>
p {
    font-size: 80%;
    margin: 0;
    margin-bottom: 20px;
}

.sep {
    color: rgb(150, 150, 150);
    font-size: 90%;
}
</style>
