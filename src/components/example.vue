<template>
    <div class="exampleContainer">
        <a
            :href="url"
        >

            <div
                class="exampleImage"
                :style="'background-image:url(img/' + img + ')'"
            />

            <div class="exampleText">
                <span class="tag">{{ tag }}</span>

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
        },
        description: {
            type: String,
            default: ''
        }
    }
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
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 2px;
    text-decoration: none;
    background: #47b4b9;
}

.exampleContainer {
    /* border: 1px solid rgb(200,200,200); */
    margin-bottom: 5px;
    /*
    float: left;
    width: 22%; */
    width: 100%;
    padding: 1%;
}

.exampleImage {
    width: 25%;
    height: 180px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-size .5s;
    /* margin-top: 8px; */
    float: left;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15) inset;
    -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15) inset;
    -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15) inset;

}

.exampleText {
    float: left;
    width: 63%;
    padding-left: 2%;
}

h2 {
    /*
    font-size: 16px;
    height: 50px;
    */
    font-size: 160%;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    margin-top: 5px;
}

.exampleContainer:after {
    content: "";
    display: table;
    clear: both;
}

.description {
    font-size: 16px;
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

    .exampleImage, .exampleText {
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
