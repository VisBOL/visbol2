import React, { useState } from 'react';
import Navigator from './Navigator';
import Backbone from './Backbone';
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';
import styles from './visbol.module.css';

function Rendering(props) {
    const display = props.display;
    if (props.toLog)
        console.log(props.toLog);
    display.renderGlyphs();
    const [size, setSize] = useState(props.size ? props.size : 3);
    const [safety, setSafety] = useState(25);
    const [truncate, setTruncate] = useState(true);
    const backboneY = (display.height - display.largestInset);
    const rendering = getRendering(display, backboneY, props.selection, props.mouseEvent, props.customTooltip, truncate);
    const backbones = getBackbones(display, backboneY, safety, setSafety);
    return (
        <div className={styles.visbolreact}>
            {!props.hideNavigation && <Navigator size={size} setSize={setSize} truncate={truncate} setTruncate={setTruncate} />}
            <div className={styles.rendering}>
                <svg className={styles.viewport} width={(display.width + safety) * size} height={(display.height + display.largestInset + safety) * size} style={{ padding: (10 * size) + 'px' }}>
                    <g transform={`scale(${size}) translate(${safety / 3}, ${display.largestInset + safety / 2})`}>
                        {backbones}
                        {rendering}
                    </g>
                </svg>
            </div>               
        </div>
    )
}

const getRendering = (display, backboneY, selectionID, mouseEvent, customTooltip, truncate) => {
    let index = -1;
    const rendering = display.toPlace.map(item => {
        if (item.isGlyph) {
            index += 1;
            return <GlyphRenderer
                key={index}
                defaultString={item.defaultString}
                coords={item.coords}
                name={item.name}
                tooltip={item.tooltip}
                uri={item.uri}
                id={item.id}
                inset={item.inset}
                labelLocation={item.labelLocation}
                isComposite={item.isComposite}
                strand={item.strand}
                width={item.dimensions[0]}
                backboneY={backboneY}
                selectionID={selectionID}
                dimensions={item.dimensions}
                ranges={item.ranges}
                mouseEvent={mouseEvent}
                customTooltip={customTooltip}
                truncate={truncate}
            />;
        }
        else {
            index += 1;
            return <HookRenderer
                key={index}
                defaultString={item.defaultString}
                start={item.start}
                tip={item.tip}
                rotation={item.rotation}
                backboneY={backboneY}
                direction={item.direction}
            />;
        }
    });
    return rendering;
}

const getBackbones = (display, backboneY, safety, setSafety) => {
    let index = -1;
    const backbones = display.backbones.map(backbone => {
        if (backbone.end === undefined)
            return null;
        index += 1;
        return <Backbone stroke={1} length={backbone.end + safety / 4} x={backbone.start} y={backboneY} topologies={backbone.topologies} setSafety={setSafety} key={index}/>;
    });
    return backbones;
}

export default Rendering;