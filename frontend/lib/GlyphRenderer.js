import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';
import Label from './Label';
import Composite from './Composite';
import Selection from './Selection';

function GlyphRenderer(props) {
    var baseline_y = props.backboneY - props.coords[1];
    var baseline_x = props.coords[0];
    if (props.coords[1] !== 0) { //glyph isn't on baseline
        baseline_y -= props.inset;
    }
    var composite = null;
    if(props.isComposite) {
        composite = <Composite baseline_x={baseline_x} baseline_y={baseline_y + props.inset} width={props.width}/>
    }
    var selectionHighlight = null;
    if(props.selectionID === props.id) {
        console.log("highlight");
        selectionHighlight = <Selection dimensions={props.dimensions} coords={props.coords} baseline_y={baseline_y + props.inset}/>
    }
    var rotate = 0;
    if(props.strand === 'negative') {
        rotate = 180;
    }
    if (!props.customTooltip) {
        return (
            <g
            data-toggle='tooltip'
            data-uri={props.uri}
            data-placement='top'
            title={props.tooltip}
            transform={`rotate(${rotate},${baseline_x + props.width / 2},${baseline_y})`}>
                {selectionHighlight}
                <Label name={props.name} x={props.labelLocation.x} y={props.backboneY - props.labelLocation.y} strand={props.strand}/>
                <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: baseline_x, baseline_y: baseline_y}} />
                {composite}
            </g>
        );
    }
    else {
        return (
            <g
            onMouseEnter={(event) => hoverOtherAnnotationRows(event, props.id, 1.0, true, props.tooltip)}
            onMouseLeave={(event) => hoverOtherAnnotationRows(event, props.id, 0.7, false, '')}
            onMouseDown={(e) => props.mouseEvent(e, props.id)}
            onMouseUp={(e) => props.mouseEvent(e, props.id)}
            onMouseMove={(e) => props.mouseEvent(e, props.id)}
            data-placement='top'
            title={props.tooltip}
            transform={`rotate(${rotate},${baseline_x + props.width / 2},${baseline_y})`}>
                {selectionHighlight}
                <Label name={props.name} x={props.labelLocation.x} y={props.backboneY - props.labelLocation.y} strand={props.strand}/>
                <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: baseline_x, baseline_y: baseline_y}} />
                {composite}
            </g>
        );
    }

}

function hoverOtherAnnotationRows(event, className, opacity, isTooltipShown, text) {
    event.stopPropagation();
    const elements = document.getElementsByClassName(className);
    if (isTooltipShown) {
        let view = document.getElementsByClassName('la-vz-seqviz')[0].getBoundingClientRect();

        let left = event.clientX - view.left;
        let top = event.clientY - view.top;
        let tooltip = document.getElementById("linear-tooltip");
        tooltip.innerHTML = text;
        tooltip.style.display = "block";
        tooltip.style.left = left + 20 + 'px';
        tooltip.style.top = top + 10 + 'px';
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].style.fillOpacity = opacity;
            elements[i].classList.add("hoveredannotation");
        }
    } else {
        let tooltip = document.getElementById("linear-tooltip");
        tooltip.style.display = "none";
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].style.fillOpacity = opacity;
            elements[i].classList.remove("hoveredannotation");
        }
    }
}

export {
    GlyphRenderer
}