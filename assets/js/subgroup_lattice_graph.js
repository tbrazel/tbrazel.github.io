(function() {
  async function render(el) {
    const jsonUrl = el.dataset.json;

    // Apply requested CSS height first (so measurements are accurate), then measure in pixels
    const requestedHeight = el.dataset.height || '75vh';
    el.style.height = requestedHeight;
    const rect = el.getBoundingClientRect();
    const width  = rect.width  || 800;
    const height = rect.height || 600;

    // Y-targets: top/middle/bottom; default to bottom if unspecified
    const yTarget = d => {
      switch (d.tier) {
        case 'top':    return height * 0.20;
        case 'near_top':    return height * 0.20;
        case 'middle': return height * 0.50;
        case 'bottom': return height * 0.80;
        default:       return height * 0.50; // default = middle
      }
    };

    const svg = d3.select(el)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('width', '100%')
      .style('height', '100%');

    // unique arrow id per graph (avoid clashes with multiple graphs)
    const arrowId = (el.id ? el.id : Math.random().toString(36).slice(2)) + '-arrow';

    svg.append('defs').append('marker')
      .attr('id', arrowId)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 16)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');

    const graph = await fetch(jsonUrl).then(r => r.json());

    const sim = d3.forceSimulation(graph.nodes)
      .force('link', d3.forceLink(graph.links).id(d => d.id).distance(l => 40 + 10*(l.weight || 1)))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width/2, height/2))
      .force('collision', d3.forceCollide(20))
      .force('yBias', d3.forceY(yTarget).strength(0.2));

    const g = svg.append('g');
    svg.call(d3.zoom().scaleExtent([0.2, 4]).on('zoom', (e) => g.attr('transform', e.transform)));

    const link = g.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(graph.links)
      .join('line')
      .attr('stroke-width', d => 1 + Math.sqrt(d.weight || 1))
      .attr('marker-end', `url(#${arrowId})`);

    const node = g.append('g')
      .selectAll('g.node')
      .data(graph.nodes)
      .join('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    node.append('circle').attr('r', 8).attr('fill', '#69b3a2');
    node.append('title').text(d => d.id);
    node.append('text').attr('x', 12).attr('y', '0.31em')
      .style('font', '12px system-ui, sans-serif').text(d => d.id);

    sim.on('tick', () => {
      link
        .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }

  // Auto-init any matching divs on the page
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.d3-graph[data-json]').forEach(render);
  });
})();