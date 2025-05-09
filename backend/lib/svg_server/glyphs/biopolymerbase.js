const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="DNA Location"
      soterms="SO:0001236,SO:0000699"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;stem_height=10;top_width=6">

<path
      id="location-top-path" 
      parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))} C{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))-(top_width/1.5)} {baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))-(top_width/1.5)} {baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))} C{baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))+(top_width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))+(top_width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height+(top_width*0.5))} Z" 
      d="M2,12.0 C2,8.0 8,8.0 8,12.0 C8,16.0 2,16.0 2,12.0 Z" 
      fill="rgb(230,230,230)"
      fill-rule="nonzero"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="miter"
      stroke-linecap="butt"/>

<path
      id="location-stem-path" 
      parametric:d="M{baseline_x+pad_before+(top_width*0.5)},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+(top_width*0.5)},{(baseline_y-baseline_offset)-stem_height}" 
      d="M5.0,25 L5.0,15" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

</svg>`;

const dimensions = [10.2, 17];
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
}
