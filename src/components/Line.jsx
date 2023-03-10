import React, { useRef, useEffect } from 'react';

const Line = ({ from, to }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const fromRect = from.current.getBoundingClientRect();
    const toRect = to.current.getBoundingClientRect();

    const fromX = fromRect.x + fromRect.width / 2;
    const fromY = fromRect.y + fromRect.height / 2;
    const toX = toRect.x + toRect.width / 2;
    const toY = toRect.y + toRect.height / 2;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${fromX},${fromY} L${toX},${toY}`);
    path.setAttribute('stroke', 'black');
    path.setAttribute('stroke-width', '2');

    svg.appendChild(path);
  }, [from, to]);

  return (
    <svg ref={svgRef} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', pointerEvents: 'none' }} />
  );
};

export default Line;