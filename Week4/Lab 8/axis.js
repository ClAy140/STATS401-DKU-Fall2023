let scale = d3.scaleLinear().domain([0,100]).range([0,500]);
let axis = d3.axisBottom(scale)
// axis.tickValues([0,25, 50 ,75, 100])


// axis.ticks(4,"$.2f")
// axis.ticks(4)
// .tickFormat(function(d){
//     return d +'%';
// });

.tickPadding(10)
.tickSize(10);

d3.select('svg g')
.call(axis);