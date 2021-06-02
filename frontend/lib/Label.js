import React from 'react';

import { text_length } from './properties';
import { text_size } from './properties';
import { font } from './properties';

function truncateName(name, length) {
    if(name.length <= length) {
        return name;
    }
    var truncated = '';
    for(let i = 0; i < length - 3; i += 1) {
        truncated += name.charAt(i);
    }
    for(let i = 0; i < 3; i += 1) {
        truncated += '.';
    }
    return truncated;
}

function Label(props) {
    var rotate = 0;
    var rotate_offset_x = 0;
    if (props.strand === "negative") {
        rotate = 180;
        rotate_offset_x = 11;
    }
        
    return (
        <text 
        fontFamily={font} 
        fontSize={`${text_size}px`}
        transform={`rotate(${rotate},${props.x - 1.5 + rotate_offset_x},${props.y - 2.5})`}
        x={props.x + 1}
        y={props.y - 1.5}>
            {truncateName(props.name, text_length)}
        </text>
    )
}

export default Label;