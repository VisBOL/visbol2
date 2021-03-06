const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Spacer"
      soterms=""
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=12;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=20">

    <path
        id="non-coding-rna-path" 
        parametric:d="M{(baseline_x+pad_before)},{(baseline_y-baseline_offset)} L{(baseline_x+pad_before)},{(baseline_y-baseline_offset)-(height*0.7)} C{(baseline_x+pad_before)+(width*0.15)},{(baseline_y-baseline_offset)-(height*1.2)} {(baseline_x+pad_before)+(width*0.18)},{(baseline_y-baseline_offset)-(height*0.1)} {(baseline_x+pad_before)+(width*(5.0/15.0))},{(baseline_y-baseline_offset)-(height*0.7)} C{(baseline_x+pad_before)+(width*(0.15+(5.0/15.0)))},{(baseline_y-baseline_offset)-(height*1.2)} {(baseline_x+pad_before)+(width*(0.18+(5.0/15.0)))},{(baseline_y-baseline_offset)-(height*0.1)} {(baseline_x+pad_before)+(width*(10.0/15.0))},{(baseline_y-baseline_offset)-(height*0.7)} C{(baseline_x+pad_before)+(width*(0.15+(10.0/15.0)))},{(baseline_y-baseline_offset)-(height*1.2)} {(baseline_x+pad_before)+(width*(0.18+(10.0/15.0)))},{(baseline_y-baseline_offset)-(height*0.1)} {(baseline_x+pad_before)+(width*(15.0/15.0))},{(baseline_y-baseline_offset)-(height*0.7)} L{(baseline_x+pad_before)+width},{(baseline_y-baseline_offset)} Z" 
        d="M2,25 L2,16.6 C5.0,10.600000000000001 5.6,23.8 8.666666666666666,16.6 C11.666666666666666,10.600000000000001 12.266666666666666,23.8 15.333333333333332,16.6 C18.333333333333332,10.600000000000001 18.933333333333334,23.8 22.0,16.6 L22,25 Z" 
        fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

</svg>`;

const dimensions = [20, 10];
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
}