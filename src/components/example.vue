<template>
    <div class="exampleContainer">
        <a :href="url">
            <div
                class="exampleImage"
                :style="'background-image:url(img/' + img + ')'"
            >
                <span class="tag">{{ tag }}</span>
            </div>

            <div class="exampleText">
                <h2>
                    {{ title }}
                </h2>

                <p class="description">
                    {{ description }}
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        img: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>
a {
    text-decoration: none;
}

a:hover h2 {
    text-decoration: underline;
}

.tag {
    position: absolute;
    top: 10px;
    left: 10px;
    color: rgb(50,50,50);
    text-transform: uppercase;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 2px;
    text-decoration: none;
    border: 1px solid rgb(150,150,150);
    background-color: white;
}

.exampleContainer {
    /* border: 1px solid rgb(200,200,200); */
    margin-bottom: 5px;
    /*
    float: left;
    width: 22%; */
    width: 100%;
    padding: 1%;
    background-color: white;
    border-radius: 2px;
    margin-bottom: 15px;
    border: 1px solid rgb(200,200,200);
}

.exampleImage {
    position: relative;
    width: 25%;
    height: 180px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-size 0.5s;
    /* margin-top: 8px; */
    float: left;
    border-radius: 2px;
    filter: grayscale(30%);
}

a:hover .exampleImage {
    filter: grayscale(0%);
}

.exampleText {
    float: left;
    width: 63%;
    padding-left: 2%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}

h2 {
    /*
    font-size: 16px;
    height: 50px;
    */
    font-size: 150%;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    margin-top: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
}

.exampleContainer:after {
    content: "";
    display: table;
    clear: both;
}

.description {
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
}

@media (max-width: 800px) {
    .exampleContainer {
        /*
        width: 47%;
        */
        padding: 1%;
    }
}

@media (max-width: 650px) {
    .exampleContainer {
        float: none;
        width: 100%;
        padding: 0;
    }

    .description {
        font-size: 13px;
    }

    .exampleImage,
    .exampleText {
        width: 100%;
        float: none;
    }

    .exampleText {
        margin-top: 10px;
    }

    .tag {
        line-height: 25px;
    }
}
</style>
