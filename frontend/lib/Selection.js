import React from 'react';

const selectStyle = {
   stroke: "none",
   fill: "#DEF6FF",
   fillOpacity: "0.5",
   shapeRendering: "auto"
 };
 let edgeStrokeWidth = 1;
 const edgeStyle = {
   fill: "transparent",
   stroke: "black",
   strokeWidth: edgeStrokeWidth,
   shapeRendering: "auto"
 };

export default function Selection(props) {
   let height = props.dimensions[1] * 1.5;
   let width = props.dimensions[0] * 1.6;
   let xstart = props.coords[0] - width * 0.1;
   let ystart = props.baseline_y * 1.1;
   return (
      <g id="la-vz-visbol-selection">
         <rect x={xstart} y={ystart-height} width={width} height={height} {...selectStyle} />
         <line x1={xstart} y1={ystart} x2={xstart} y2={ystart - height} {...edgeStyle} />
         <line x1={xstart + width} y1={ystart} x2={xstart + width} y2={ystart - height} {...edgeStyle} />
      </g>
   )
}