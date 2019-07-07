<template>
    <div>
        <top />

        <div class="container">
            <h1>{{ name }}</h1>

            <titles :titles="titles" />

            <links :links="links" />

        </div>

        <examples :examples="examples" />
    </div>
</template>

<script>
import config from '~/assets/config.yml';
import examples from '~/components/examples.vue';
import top from '~/components/top.vue';
import links from '~/components/links.vue';
import titles from '~/components/titles.vue';

export default {
    components: {
        examples,
        top,
        links,
        titles
    },
    data() {
        return {
            ...config
        };
    }
};
</script>

<style lang="less">
h1 {
    margin: 0;
    margin-bottom: 0;
    line-height: 110%;
    margin-bottom: 5px;
}

.container {
    padding-top: 30px;
    padding-bottom: 15px;
    max-width: 1050px;
    /* max-width: 940px; */
    margin-right: auto;
    margin-left: auto;
    color: rgb(50, 50, 50);
    font-size: 200%;
    text-align: center;
}
</style>
