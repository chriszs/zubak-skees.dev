(function () {
    var top = d3.select('.top');

    var width = top.node().offsetWidth,
        height = top.node().offsetHeight;

    var hueScale = d3.scale.linear()
                        .domain([0,height])
                        .range([0,360]);

    var saturationScale = d3.scale.linear()
                        .domain([0,width])
                        .range([0.3,1]);

    top.on('mousemove',function () {
        top.style('background-color',d3.hsl(hueScale(d3.event.pageY),saturationScale(d3.event.pageX),0.5));
    });
})();