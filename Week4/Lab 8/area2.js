var dataArray =[14,35,56,67,99, 122, 150,160,233,400,322,360];
var dataMonths = [1,2,3,4,5,6,7,8,9,10,11,12];

var height = 400;
var width = 1000;

// var area = d3.area()
//             .x(function(d,i) {return i*20 +50})
//             .y0(height)
//             .y1(function(d) {return height -d;});
var svg = d3.select('body')
            .append('svg')
            .attr('height','100%')
            .attr('width', '100%')

// var grp = svg.append('g')
//              .attr('transform','translate(0,0)')

// grp.append('path')
// .attr('fill','none')
// .attr('stroke','black')
// .attr('stroke-width' ,1)
// .attr('d',area(dataArray))

// grp.selectAll('circle')
// .data(dataArray)
// .enter()
// .append('circle')
// .attr('cx',function(d,i) {return i*20+50;})
// .attr('cy',function(d) {return height -d;})
// .attr('r','2')


var crvTypes = [d3.curveCardinal,d3.curveBasis,d3.curveLinear,d3.curveStep,d3.
                curveNatural,d3.curveBundle];

for (var t =0; t<5; t++){
    var area = d3.area()
            .x(function(d,i) {return i*20 +50})
            .y0(height)
            .y1(function(d) {return height -d;})
            .curve(crvTypes[t]);

    var grp = svg.append('g')
            .attr('transform','translate('+t*250+',0)')

    grp.append('path')
            .attr('fill','none')
            .attr('stroke','black')
            .attr('stroke-width' ,1)
            .attr('d',area(dataArray))

    grp.selectAll('circle.grpcircle'+t)
            .data(dataArray)
            .enter()
            .append('circle')
            .attr('class', function(d,i){return "gepcircle"+t;})
            .attr('cx',function(d,i) {return i*20+50;})
            .attr('cy',function(d) {return height -d;})
            .attr('r','2') 
}