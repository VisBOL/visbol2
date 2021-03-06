const defaultString = `
    <svg  version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:parametric="https://parametric-svg.github.io/v0.2"
        width="100"
        height="100"
        glyphtype="Promoter"
        soterms="SO:0000167"
        parametric:defaults="arrowbody_height=15;arrowbody_width=15;arrowhead_height=4;arrowhead_width=4;baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;">
        <g>
        <path
            id="promoter-body" 
            parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)-arrowbody_height} L{baseline_x+pad_before+arrowbody_width},{(baseline_y-baseline_offset)-arrowbody_height}" 
            d="M2,25 L2,10 L17,10" 
            fill="none"
            stroke="#03c03c"
            stroke-width="1pt"
            stroke-linejoin="round"
            stroke-linecap="round" />

        <path
            id="promoter-head" 
            parametric:d="M{baseline_x+pad_before+arrowbody_width-arrowhead_width},{(baseline_y-baseline_offset)-arrowbody_height-arrowhead_height} L{baseline_x+pad_before+arrowbody_width},{(baseline_y-baseline_offset)-arrowbody_height} L{baseline_x+pad_before+arrowbody_width-arrowhead_width},{(baseline_y-baseline_offset)-arrowbody_height+arrowhead_height}" 
            d="M13,6 L17,10 L13,14" 
            fill="none"
            stroke="#03c03c"
            stroke-width="1pt"
            stroke-linejoin="round"
            stroke-linecap="round" /> 
        </g>
    </svg>`;

const dimensions = [15, 20];
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
}