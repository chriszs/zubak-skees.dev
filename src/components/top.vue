<template>
    <div class="top" />
</template>

<script>
// import * as d3 from 'd3';

export default {
    /*
    mounted() {
        let top = d3.select('.top');
        let body = d3.select('body');

        let width = body.node().offsetWidth;
        let height = body.node().offsetHeight;

        let hueScale = d3.scaleLinear()
            .domain([0, height])
            .range([0, 360]);

        let saturationScale = d3.scaleLinear()
            .domain([0, width])
            .range([0.3, 1]);

        body.on('mousemove', () =>
            top.style(
                'background-color',
                d3.hsl(
                    hueScale(d3.event.pageY),
                    saturationScale(d3.event.pageX),
                    0.5
                )
            )
        );

        body.on('touchmove', () =>
            top.style(
                'background-color',
                d3.hsl(
                    hueScale(document.body.scrollTop),
                    saturationScale(d3.event.pageX),
                    0.5
                )
            )
        );

        body.on('scroll', () =>
            top.style(
                'background-color',
                d3.hsl(
                    hueScale(document.body.scrollTop),
                    saturationScale(d3.event.pageX),
                    0.5
                )
            )
        );
    }
    */
};
</script>

<style>
.top {
    width: 100%;
    height: 11px;
    /* background-color: #4eff6e; */
    background: #70e1f5; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #70e1f5, #ffd194); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #70e1f5, #ffd194); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
