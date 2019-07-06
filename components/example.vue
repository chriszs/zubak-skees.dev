<template>
    <div class="exampleContainer">
        <div class="tag">{{ tag }}</div>

        <a
            :href="url"
            class="exampleLink"
        >
            <!--
            <a
                :href="url"
                class="example"
                :style="'background-image:url(img/' + img + ')'"
            />
            -->
            <h2>{{ title }}</h2>
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
h2 {
    margin: 0;
    padding-top: 10px;
    margin-bottom: 5px;
    font-size: 15px;
    width: 90%;
}

.exampleContainer {
    position: relative;
    /* background-color: rgb(250,250,250); */
    margin-bottom: 5px;
    float: left;
    width: 25%;
    height: 320px;
}

.exampleLink {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.exampleContainer p {
    margin: 0;
    color: rgb(100, 100, 100);
    font-size: 14px;
    display: none;
}

.exampleContainer:after {
    content: "";
    display: table;
    clear: both;
}

.example {
    display: block;
    width: 90%;
    /* float: left; */
    height: 200px;
    background-size: 180% auto;
    background-repeat: no-repeat;
    // margin-left: 25px;
    // margin-top: 25px;
    transition: background-size 0.5s;
    margin-right: 20px;
}

.tag {
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    display: inline-block;
    border-radius: 2px;
    background-color: rgb(50, 50, 50);
    margin-bottom: 5px;
    color: white;
}

/*
.example:hover {
    background-color: red;
    border: 3px solid rgb(100,100,100);
    background-size: 190% auto;
}
*/

@media (max-width: 1000px) {
    .exampleContainer {
        width: 50%;
    }
}

@media (max-width: 650px) {
    .exampleContainer {
        float: none;
        width: 100%;
    }

    .example {
        margin-left: 0;
    }
}
</style>
