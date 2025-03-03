var matrix = [
    [0, 5871, 8916, 2868],
    [1951, 0, 2060, 6171],
    [8010, 16145, 0, 3045],
    [1013, 990, 940, 1540]
];

var colors = ["#f2808f", "#f2e380", "#c8f280", "#808ff2"]; 

var svg = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .append("g")
    .attr("transform", "translate(400,400)"); 

var res = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    (matrix);


// Step 4. Draw the entities/arcs
svg.datum(res)
    .append("g")
    .selectAll("g")
    .data(function(d) { return d.groups; })
    .enter()
    .append("g")
    .append("path")
    .style("fill", function(d, i) { return colors[i]; })
    .style("stroke", "none")
    .attr("d", d3.arc() 
        .innerRadius(300)
        .outerRadius(310));


// Step 5. Draw the links

svg.datum(res)
.append("g")
.selectAll("path")
.data(function(d) {return d;})
.enter()
.append("path")
.attr("d",d3.ribbon().radius(300))
.style("fill", function(d) { return(colors[d.source.index])})
.style('opacity',0.6)
.style("stroke", "none");