<template>
    <div class="examples">
        <example
            v-for="example in examples"
            :key="example.title"
            v-bind="example"
        />
    </div>
</template>

<script>
import example from '~/components/example.vue';

export default {
    props: {
        examples: {
            type: Array
        }
    },
    components: {
        example
    }
}
</script>

<style>
.examples {
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 25px;
    margin-bottom: 40px;
    padding-top: 25px;
}

.examples:after {
    content: "";
    display: table;
    clear: both;
}

@media (max-width: 650px) {
    .examples {
        padding-right: 0;
        width: 300px;
    }
}
</style>
