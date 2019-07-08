<template>
    <p>
        <span
            v-for="(title,i) in titles"
            :key="title"
        >
            <span>{{ title }}</span>
            <span
                class="sep"
                v-if="i !== titles.length-1"
            > | </span>
        </span>
    </p>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array
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
