const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="3' Sticky Restriction Site"
      soterms="SO:0001976"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=10;pad_after=2;pad_before=2;width=17">

<path
      id="sticky-restriction-site-background" 
      parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-pad_top-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} Z" 
      d="M2,21.0 L17,18.0 L17,29.0 L2,29.0 Z"
      fill="rgb(255,255,255)"
fill-rule="nonzero"
stroke="none" />

<path
      id="sticky-restriction-site-path" 
      parametric:d="M{baseline_x+pad_before+(width*0.15)},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before+(width*0.15)},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+(width*0.85)},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+(width*0.85)},{(baseline_y-baseline_offset)-(height*0.5)}" 
      d="M4.25,29.0 L4.25,25 L14.75,25 L14.75,21.0" 
      fill="none"
stroke="black"
stroke-width="1pt"
stroke-linejoin="round"
stroke-linecap="round" />

</svg>`;

const dimensions = [11.9, 10];
const inset = 5;

module.exports = {
    defaultString,
    dimensions,
    inset,
}
