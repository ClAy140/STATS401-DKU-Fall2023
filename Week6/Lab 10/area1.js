let data = [], width = 600, height = 400, numPoints = 100;
let quadtree = d3.quadtree()
.x(function(d) { return d.x; })
.y(function(d) { return d.y; });

let hoveredId;
function updateData() {
    data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1 + Math.random() * 20
        });
    }
}

function handleMousemove(e) {
    let pos = d3.pointer(e, this);
    let d = quadtree.find(pos[0], pos[1], 20);
    hoveredId = d ? d.id : undefined;
    update();
}

function initEvents () {
    d3.select('svg')
    .on('mousemove', handleMousemove);
}

function updateQuadtree() {
    quadtree.addAll(data);
}

function update () {
    d3.select('svg')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', function(d) { return d.r; })
    .style('fill', function(d) { return d.id === hoveredId ? 'red' : null; });
}

updateData();
updateQuadtree();
update();
initEvents();