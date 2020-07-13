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
    components: {
        example
    },
    props: {
        examples: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>
.examples {
    max-width: 1050px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
    padding-top: 15px;
}

.examples:after {
    content: "";
    display: table;
    clear: both;
}

@media (max-width: 650px) {
    .examples {
        margin-left: 25px;
        margin-right: 25px;
        /* width: 300px; */
    }
}
</style>
