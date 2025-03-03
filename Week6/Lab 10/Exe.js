const width = 800;
const height = 600;

function generateGraphData(nodeCount, linkCount) {
    const nodes = [];
    const links = [];

    const types = ['type1', 'type2', 'type3', 'type4', 'type5']; 


    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            id: `Node${i}`,
            type: types[Math.floor(Math.random() * types.length)]
        });
    }

   

    for (let i = 0; i < linkCount; i++) {
        links.push({
            source: nodes[Math.floor(Math.random() * nodeCount)].id,
            target: nodes[Math.floor(Math.random() * nodeCount)].id
        });
    }

    return {
        nodes: nodes,
        links: links
    };
}

const graph = generateGraphData(15, 50);

const color = d3.scaleOrdinal()
    .domain(['type1', 'type2', 'type3', 'type4', 'type5'])
    .range(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']); 


const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

const simulation = d3.forceSimulation(graph.nodes)
    .force('link', d3.forceLink(graph.links).id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-100))
    .force('center', d3.forceCenter(width / 2, height / 2));

const link = svg.append('g')
    .selectAll('line')
    .data(graph.links)
    .enter().append('line')
    .style('stroke', '#aaa');

const node = svg.append('g')
    .selectAll('circle')
    .data(graph.nodes)
    .enter().append('circle')
    .attr('r', 8)
    .style('fill', d => color(d.type))
    .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

node.append('title')
    .text(d => d.id);

simulation.on('tick', () => {
    link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
});

function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}
