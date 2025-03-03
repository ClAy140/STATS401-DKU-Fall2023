// alert("JavaScript file successfully linked to the HTML file!");
d3.csv("diabetes_data.csv")
.then(function(data) {
    console.log(data);  
    var height = 600;
    var width = 1200;

    var margin = {top: 50, right: 50, bottom: 50, left: 50};
    var plotWidth = width - margin.left - margin.right;
    var plotHeight = height - margin.top - margin.bottom;
    var xScale  = d3.scaleLinear()
                    .domain([0,d3.max(data, d =>d.AGE)])
                    .range([margin.left,width-margin.right]);
    const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.BMI)])
            .range([height - margin.bottom, margin.top]);
    var colorScale = d3.scaleOrdinal()
                        .domain(["F","M"])
                        .range(["pink","blue"]);
    var meanBMI = d3.mean(data, d => d.BMI);


    var svg = d3.select("#scatter-plot")
                .append("svg")
                .attr('height',height)
                .attr('width',width);

    

    svg.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScale(d.AGE))
        .attr("cy", d => yScale(d.BMI))
        .attr("r", 5)
        .attr("fill", d => colorScale(d.Gender))
        .append("title")
        .text(d => `Age: ${d.AGE}, BMI: ${d.BMI}`);

    svg.append("line")
        .attr("x1", margin.left)
        .attr("y1", yScale(meanBMI))
        .attr("x2", width - margin.right)
        .attr("y2", yScale(meanBMI))
        .attr("stroke", "black")
        .attr("stroke-dasharray", "4");

    svg.append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSizeOuter(0));

    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale).tickSizeOuter(0));

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - margin.bottom / 2)
        .attr("text-anchor", "middle")
        .text("AGE");

    svg.append("text")
        .attr("x", margin.left / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90," + margin.left/2 + "," + height/2 + ")")
        .text("BMI");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .text("Scatter Plot of AGE vs BMI by Gender");
    
});

