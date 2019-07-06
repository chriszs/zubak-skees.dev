<template>
    <div class="exampleContainer">
        <a
            :href="url"
        >
            <span class="tag">{{ tag }}</span>

            <div
                class="exampleImage"
                :style="'background-image:url(img/' + img + ')'"
            >
            </div>

            <h2>
                    {{ title }}
            </h2>

        </a>
    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less">
a {
    text-decoration: none;
}

a:hover h2 {
    text-decoration: underline;
}

.tag {
    background-color: #323232;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 2px;
    text-decoration: none;
}

.exampleContainer {
    float: left;
    width: 100%;
    width: 22%;
    padding: 1%;
}

.exampleImage {
    width: 100%;
    height: 200px;
    background-size: 180% auto;
    background-repeat: no-repeat;
    transition: background-size .5s;
    margin-top: 8px;
}

h2 {
    font-size: 16px;
    height: 50px;
}


@media (max-width: 800px) {
    .exampleContainer {
        width: 47%;
        padding: 1%;
    }
}


@media (max-width: 650px) {
    .exampleContainer {
        float: none;
        width: 100%;
        padding: 0;
    }
}

</style>
