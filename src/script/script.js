(function () {
    var top = d3.select('.top'),
        body = d3.select('body');

    var width = body.node().offsetWidth,
        height = body.node().offsetHeight;

    var hueScale = d3.scale.linear()
                        .domain([0,height])
                        .range([0,360]);

    var saturationScale = d3.scale.linear()
                        .domain([0,width])
                        .range([0.3,1]);

    body.on('mousemove',function () {
        top.style('background-color',d3.hsl(hueScale(d3.event.pageY),saturationScale(d3.event.pageX),0.5));
    });

    body.on('touchmove',function () {
        top.style('background-color',d3.hsl(hueScale(document.body.scrollTop),saturationScale(d3.event.pageX),0.5));
    });

    body.on('scroll',function () {
        top.style('background-color',d3.hsl(hueScale(document.body.scrollTop),saturationScale(d3.event.pageX),0.5));
    });
})();