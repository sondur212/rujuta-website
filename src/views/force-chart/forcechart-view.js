import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './forcechart-view.scss';

const dataf = {
  nodes: [
    {
      id: 1,
      name: 'A',
      group: 1,
    },
    {
      id: 2,
      name: 'B',
      group: 1,
    },
    {
      id: 3,
      name: 'C',
      group: 1,
    },
    {
      id: 4,
      name: 'D',
      group: 1,
    },
    {
      id: 5,
      name: 'E',
      group: 1,
    },
    {
      id: 6,
      name: 'F',
      group: 2,
    },
    {
      id: 7,
      name: 'G',
      group: 2,
    },
    {
      id: 8,
      name: 'H',
      group: 2,
    },
    {
      id: 9,
      name: 'I',
      group: 2,
    },
    {
      id: 10,
      name: 'J',
      group: 2,
    },
    {
      id: 11,
      name: 'K',
      group: 3,
    },
    {
      id: 12,
      name: 'L',
      group: 3,
    },
    {
      id: 13,
      name: 'M',
      group: 3,
    },
    {
      id: 14,
      name: 'N',
      group: 3,
    },
    {
      id: 15,
      name: 'O',
      group: 3,
    },
  ],
  links: [
    {
      source: 1,
      target: 2,
      group: 1,
    },
    {
      source: 1,
      target: 5,
      group: 1,
    },
    {
      source: 1,
      target: 6,
      group: 2,
    },

    {
      source: 2,
      target: 3,
      group: 1,
    },
    {
      source: 1,
      target: 7,
      group: 2,
    },
    {
      source: 3,
      target: 4,
      group: 1,
    },
    {
      source: 1,
      target: 8,
      group: 3,
    },
    {
      source: 4,
      target: 5,
      group: 1,
    },
    {
      source: 1,
      target: 9,
      group: 2,
    },
    {
      source: 1,
      target: 10,
      group: 3,
    },
    {
      source: 9,
      target: 11,
      group: 3,
    },
    {
      source: 9,
      target: 12,
      group: 3,
    },
    {
      source: 9,
      target: 13,
      group: 3,
    },
    {
      source: 9,
      target: 14,
      group: 3,
    },
    {
      source: 9,
      target: 15,
      group: 3,
    },
  ],
};

const ForceChartView = () => {
  const width = 800;
  const height = 600;
  const svgref = useRef(null);

  const circleGen = () => {
    //set defaults
    let r = (d) => {
        return d.radius;
      },
      x = (d) => {
        return d.x;
      },
      y = (d) => {
        return d.y;
      };

    //returned function to generate circle path
    const valConst = (x) => () => x;

    const circle = (d) => {
      const fx = typeof x === 'function' ? x : valConst(x);
      const fy = typeof y === 'function' ? y : valConst(y);
      const fmyr = typeof r === 'function' ? r : valConst(r);
      const cx = fx.call(this, d); //d3.functor(x).call(this, d),
      const cy = fy.call(this, d); //d3.functor(y).call(this, d),
      const myr = fmyr.call(this, d); //d3.functor(r).call(this, d);

      return (
        'M' +
        cx +
        ',' +
        cy +
        ' ' +
        'm' +
        -myr +
        ', 0 ' +
        'a' +
        myr +
        ',' +
        myr +
        ' 0 1,0 ' +
        myr * 2 +
        ',0 ' +
        'a' +
        myr +
        ',' +
        myr +
        ' 0 1,0 ' +
        -myr * 2 +
        ',0Z'
      );
    };

    //getter-setter methods
    circle.r = function (value) {
      if (!arguments.length) return r;
      r = value;
      return circle;
    };
    circle.x = function (value) {
      if (!arguments.length) return x;
      x = value;
      return circle;
    };
    circle.y = function (value) {
      if (!arguments.length) return y;
      y = value;
      return circle;
    };

    return circle;
  };

  const myC = circleGen()
    .x((d) => {
      return d.x;
    })
    .y((d) => {
      return d.y;
    })
    .r((d) => {
      return d.r;
    });

  var cdata = [
    { x: 300, y: 100, r: 50, fill: '#f5f5f5' },
    { x: 500, y: 100, r: 50, fill: '#f5f5f5' },
    { x: 400, y: 300, r: 50, fill: '#f5f5f5' },
  ];

  const simulation = d3.forceSimulation().force(
    'link',
    d3
      .forceLink()
      .id((d) => {
        return d.id;
      })
      //.distance((d) => (d.group % 2 === 0 ? 100 : 50))
      .strength(0.005)
  );
  // .force('charge', d3.forceManyBody())
  // .force('center', d3.forceCenter(width / 2, height / 2));

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    const svg = d3.select(svgref.current);
    // const dim = 200;
    // const circle = svg
    //   .append('path')
    //   .attr(
    //     'd',
    //     'M 40, ' +
    //       (dim / 2 + 40) +
    //       ' a ' +
    //       dim / 2 +
    //       ',' +
    //       dim / 2 +
    //       ' 0 1,0 ' +
    //       dim +
    //       ',0 a ' +
    //       dim / 2 +
    //       ',' +
    //       dim / 2 +
    //       ' 0 1,0 ' +
    //       dim * -1 +
    //       ',0'
    //   )
    //   .style('fill', '#f5f5f5');

    const circles = svg
      .selectAll('path.circle')
      .data(cdata)
      .enter()
      .append('path')
      .attr('class', 'circle')
      .attr('d', myC)
      .style('fill', (d) => {
        return d.fill;
      });

    const circleCoord = (node, index, num_nodes) => {
      const circumference = circles.nodes()[node.group - 1].getTotalLength();
      const pointAtLength = (l) =>
        circles.nodes()[node.group - 1].getPointAtLength(l);
      const sectionLength = circumference / num_nodes;
      const position = sectionLength * index + sectionLength / 2;
      return pointAtLength(circumference - position);
    };

    dataf.nodes.forEach((d, i) => {
      const coord = circleCoord(d, i, dataf.nodes.length);
      d.x = coord.x;
      d.y = coord.y;
    });

    let link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(dataf.links)
      .enter()
      .append('line')
      .attr('stroke-width', 1.5);

    let node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(dataf.nodes)
      .enter()
      .append('g')
      .attr('transform', (d) => {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

    node
      .append('circle')
      .attr('r', 6)
      .attr('fill', (d) => {
        return color(d.group);
      });
    // .call(
    //   d3
    //     .drag()
    //     .on('start', dragstarted)
    //     .on('drag', dragged)
    //     .on('end', dragended)
    // );

    node
      .append('text')
      .text((d) => d.id)
      .attr('x', 6)
      .attr('y', 3);

    node.append('title').text((d) => d.id);

    // const restart = () => {
    //   // Apply the general update pattern to the nodes.
    //   node = node.data(dataf.nodes, (d) => {
    //     return d.id;
    //   });
    //   node.exit().remove();
    //   node = node.enter().append('g').merge(node);

    //   node
    //     .append('circle')
    //     .attr('fill', (d) => color(d.group))
    //     .attr('r', (d) => d.group + 4)
    //     .call(
    //       d3
    //         .drag()
    //         .on('start', dragstarted)
    //         .on('drag', dragged)
    //         .on('end', dragended)
    //     );

    //   node
    //     .append('text')
    //     .text((d) => d.id)
    //     .attr('x', 6)
    //     .attr('y', 3);

    //   node.append('title').text((d) => d.id);

    //   // Apply the general update pattern to the links.
    //   link = link.data(dataf.links, (d) => {
    //     return d.source.id + '-' + d.target.id;
    //   });
    //   link.exit().remove();
    //   link = link.enter().append('line').attr('stroke-width', 1.5).merge(link);

    //   // Update and restart the simulation.
    //   simulation.nodes(dataf.nodes);
    //   simulation.force('link').links(dataf.links);
    //   simulation.alpha(1).restart();
    // };
    const ticked = () => {
      link
        .attr('x1', (d) => {
          return d.source.x;
        })
        .attr('y1', (d) => {
          return d.source.y;
        })
        .attr('x2', (d) => {
          return d.target.x;
        })
        .attr('y2', (d) => {
          return d.target.y;
        });

      node.attr('transform', (d) => {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    };

    simulation.nodes(dataf.nodes).on('tick', ticked);
    simulation.force('link').links(dataf.links);
    simulation.alpha(1).restart();

    // restart();

    //   d3.timeout(
    //     () => {
    //       dataf.nodes.pop(); // Remove c.
    //       dataf.links.pop(); // Remove c-a.
    //       restart();
    //     },
    //     2000,
    //     d3.now()
    //   );

    //   d3.timeout(
    //     () => {
    //       dataf.nodes.push({
    //         id: 15,
    //         name: 'O',
    //         group: 3,
    //       });
    //       dataf.links.push({ source: 9, target: 15, group: 3 });
    //       restart();
    //     },
    //     2000,
    //     d3.now() + 2000
    //   );
  }, []);

  // const dragstarted = (event, d) => {
  //   if (!event.active) simulation.alphaTarget(0.3).restart();
  //   d.fx = d.x;
  //   d.fy = d.y;
  // };

  // const dragged = (event, d) => {
  //   d.fx = event.x;
  //   d.fy = event.y;
  // };

  // const dragended = (event, d) => {
  //   if (!event.active) simulation.alphaTarget(0);
  //   d.fx = null;
  //   d.fy = null;
  // };

  return (
    <div className="layout-view">
      <svg ref={svgref} width={width} height={height}></svg>
    </div>
  );
};

ForceChartView.Url = '/forcechart';

export default ForceChartView;
