var temperature = [3, 6, 15, 23, 29, 32, 33, 32, 27, 19, 10, 4];
var svg = d3.select("body")
            .append("svg")
            .attr('height','100%')
            .attr('width', '100%');


svg.selectAll('rect')
   .data(temperature)
   .enter()
   .append('rect')
   .attr('fill','#96d82a')
   .attr('height', function(d,i){return (d*10);})
   .attr('width', '30')
   .attr('x', function(d,i){return 40*i;})
   .attr('y', function(d,i){return (380-d*10);});



var max_temperature = [8, 9, 13, 19, 24, 27, 32, 32, 28, 23, 17, 11]
var min_temperature = [1, 2, 5, 11, 16, 21, 25, 25, 21, 15, 9, 3]


// var fixedX = 0;
// svg.selectAll('circle')
//    .data(max_temperature)
//    .enter().append('circle')
//             .attr('fill','#ffbca4')
//             .attr('cx',function(d,i){fixedX += d*3+i*10; return fixedX;})
//             .attr('cy', '500')
//             .attr('r',function(d,i){return d*2});


var fixedX = 0;
svg.selectAll('circle.groupa')
   .data(max_temperature)
   .enter().append('circle')

            .attr('fill','#ffbca4')
            .attr('class','groupa')
            .attr('cx',function(d,i){fixedX += d*3+i*10; return fixedX;})
            .attr('cy', '500')
            .attr('r',function(d,i){return d*2});

var fixedX = 10;
svg.selectAll('circle.groupb')
   .data(min_temperature)
   .enter().append('circle')

            .attr('fill','#a4e7ff')
            .attr('class','groupb')
            .attr('cx',function(d,i){fixedX += d*3+i*10; return fixedX;})
            .attr('cy', '700')
            .attr('r',function(d,i){return d*2});



var ug_number = [247, 325, 318, 407, 358, 408]
var fixedX = 600;
svg.selectAll('line')
   .data(ug_number)
   .enter().append('line')
   .attr('stroke','#a4baff')
   .attr('stroke-width', '5')
   //.style('stroke','blue')
   .attr('x1', fixedX)
   .attr('y1', function(d,i){return (100+i*50);})
   .attr('x2', function(d){return fixedX+d;})
   .attr('y2', function(d,i){return (100+i*50);});

           
svg.append('text')
      .attr('x',600)
      .attr('y',70)
      .text('trying to add text!')
      .style("fill", "black")
      .style("stroke", "red")
      .attr('font-size',25);

var fixedX = 1320;
svg.append('text')
    .attr('x',fixedX)
    .attr('y',175)
    .attr('text-anchor', 'start')
    .attr('font-size',50)
    .style("fill", "#ff90ab")
    .text('DKU');
svg.append('text')
    .attr('x',fixedX)
    .attr('y',225)
    .attr('text-anchor', 'middle')
    .attr('font-size',50)
    .style("fill", "#ff7d9c")
    .text('DKU');
svg.append('text')
    .attr('x',fixedX)
    .attr('y',270)
    .attr('text-anchor', 'end')
    .attr('font-size',50)
    .style("fill", "#ff698d")
    .text('DKU');



// Exercise 1
var fixedX =1040
var textArray = ['senior', 'junior', 'frshman', 'sophomore']

svg.append('text').selectAll('tspan')
        .data(textArray)
        .enter().append('tspan')
        .attr('x',fixedX)
        .attr('y', function(d,i){return (200+i*50);})
        .attr('font-size','30')
        .attr('fill','#a4baff')
        .text(function(d) {return d;});


// Exercise 2



var fixedXX = 1500
const rings = [
    { cx: 100, cy: 100, color: "blue" },
    { cx: 150, cy: 130, color: "yellow" },
    { cx: 200, cy: 100, color: "black" },
    { cx: 250, cy: 130, color: "green" },
    { cx: 300, cy: 100, color: "red" },
];


svg.selectAll("circle.groupc")
    .data(rings)
    .enter()
    .append("circle")
    .attr("cx", d => d.cx+fixedXX)
    .attr("cy", d => d.cy)
    .attr("r", 40)
    .attr("fill", "none")
    .attr("stroke", d => d.color)
    .attr("stroke-width", 7);

// svg.append('circle')
//    .attr('fill', "none")
//    .attr('cx','1500')
//    .attr('cy','100')
//    .attr('r',40)
//    .attr('stroke','blue')
//    .attr("stroke-width", 8);
// svg.append('circle')
//    .attr('fill', "none")
//    .attr('cx','1600')
//    .attr('cy','100')
//    .attr('r',40)
//    .attr('stroke','black')
//    .attr("stroke-width", 8);

