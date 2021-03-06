const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="3' Overhang Site"
      soterms="SO:0001933"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=5;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=15">

    <path
        id="overhang_site-background" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-pad_top-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} Z" 
        d="M2,22.5 L17,19.5 L17,27.5 L2,27.5 Z"
        fill="rgb(255,255,255)"
        fill-rule="nonzero"
        stroke="none" />

    <path
        id="overhang_site-path1" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(height*0.5)}" 
        d="M2,22.5 L17,22.5" 
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

    <path
        id="overhang_site-path1" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before+width-(width*0.4)},{(baseline_y-baseline_offset)+(height*0.5)}" 
        d="M2,27.5 L11.0,27.5" 
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

</svg>`;

const dimensions = [15, 8];
const inset = 4;

module.exports = {
    defaultString,
    dimensions,
    inset,
}