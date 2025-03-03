let scale =d3.scaleLinear().domain([0,100]).range([0,400]);
let axisLeft = d3.axisLeft(scale);
let axisRight = d3.axisRight(scale);
let axisTop = d3.axisTop(scale);
let axisBottom = d3.axisBottom(scale);
d3.select('#left').call(axisLeft);
d3.select('#right').call(axisRight);
d3.select('#top').call(axisTop);
d3.select('#bottom').call(axisBottom)
