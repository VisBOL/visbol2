const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="OriginOfTransfer"
      soterms="SO:0000724"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;width=20">

    <path
        id="origin-of-transfer" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} C{baseline_x+pad_before},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)} C{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)+(width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)} Z" 
        d="M2,25 C2,11.666666666666666 22,11.666666666666666 22,25 C22,38.333333333333336 2,38.333333333333336 2,25 Z" 
        fill="#cceeee"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

    <path 
        id="origin-of-transfer-arrowbody" 
        parametric:d="M{baseline_x+pad_before+(width*0.5)},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width*0.5)}" 
        d="M12.0,25 L22,15.0" 
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

    <path
        id="origin-of-transfer-arrowhead" 
        parametric:d="M{baseline_x+pad_before+(width*0.85)},{(baseline_y-baseline_offset)-(width*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width*0.35)}" 
        d="M19.0,15.0 L22,15.0 L22,18.0" 
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

</svg>`;

const dimensions = [20, 20];
const inset = 10;

module.exports = {
    defaultString,
    dimensions,
    inset,
}