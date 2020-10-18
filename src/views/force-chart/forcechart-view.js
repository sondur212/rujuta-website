import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './forcechart-view.scss';

const dataf = {
  nodes: [
    {
      id: 1,
      name: 'A',
    },
    {
      id: 2,
      name: 'B',
    },
    {
      id: 3,
      name: 'C',
    },
    {
      id: 4,
      name: 'D',
    },
    {
      id: 5,
      name: 'E',
    },
    {
      id: 6,
      name: 'F',
    },
    {
      id: 7,
      name: 'G',
    },
    {
      id: 8,
      name: 'H',
    },
    {
      id: 9,
      name: 'I',
    },
    {
      id: 10,
      name: 'J',
    },
    {
      id: 11,
      name: 'K',
    },
    {
      id: 12,
      name: 'L',
    },
    {
      id: 13,
      name: 'M',
    },
    {
      id: 14,
      name: 'N',
    },
    {
      id: 15,
      name: 'O',
    },
  ],
  links: [
    {
      source: 1,
      target: 2,
    },
    {
      source: 1,
      target: 5,
    },
    {
      source: 1,
      target: 6,
    },

    {
      source: 2,
      target: 3,
    },
    {
      source: 2,
      target: 7,
    },
    {
      source: 3,
      target: 4,
    },
    {
      source: 8,
      target: 3,
    },
    {
      source: 4,
      target: 5,
    },
    {
      source: 4,
      target: 9,
    },
    {
      source: 5,
      target: 10,
    },
    {
      source: 6,
      target: 11,
    },
    {
      source: 7,
      target: 12,
    },
    {
      source: 8,
      target: 13,
    },
    {
      source: 9,
      target: 14,
    },
    {
      source: 10,
      target: 15,
    },
  ],
};

const ForceChartView = () => {
  const width = 800;
  const height = 600;
  const svgref = useRef(null);

  const simulation = d3
    .forceSimulation()
    .force(
      'link',
      d3.forceLink().id(function (d) {
        return d.id;
      })
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    //const width = +svg.attr('width');
    //const height = +svg.attr('height');
    const svg = d3.select(svgref.current);

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(dataf.links)
      .enter()
      .append('line')
      .attr('stroke-width', function (d) {
        return Math.sqrt(d.value);
      });

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(dataf.nodes)
      .enter()
      .append('g');

    node
      .append('circle')
      .attr('r', 5)
      .attr('fill', function (d) {
        return color(d.group);
      })
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    node
      .append('text')
      .text((d) => d.id)
      .attr('x', 6)
      .attr('y', 3);

    node.append('title').text((d) => d.id);

    const ticked = () => {
      link
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

      node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    };

    simulation.nodes(dataf.nodes).on('tick', ticked);

    simulation.force('link').links(dataf.links);
  }, []);

  const dragstarted = (event, d) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  };

  const dragged = (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
  };

  const dragended = (event, d) => {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  };

  return (
    <div className="layout-view">
      <svg ref={svgref} width={width} height={height}></svg>
    </div>
  );
};

ForceChartView.Url = '/forcechart';

export default ForceChartView;
