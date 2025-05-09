const defaultString = `
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     width="6"
     height="16"
     glyphtype="RNA Location"
     soterms="SO:0001236,SO:0000699"

parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;stem_height=16;top_width=6">

  <path id="location-stem-path-1"
        parametric:d="m {baseline_x+pad_before+(top_width*0.5)}, {(baseline_y-baseline_offset) - (2*(stem_height-top_width*0.5)/3)} 
                      c {(stem_height-top_width*0.5)/6}, {-((stem_height-top_width*0.5)/6)} 
                        {-((stem_height-top_width*0.5)/6)}, {-((stem_height-top_width*0.5)/6)} 
                        0, {-((stem_height-top_width*0.5)/3)}"
        d="m 3.0, -8.66666666667 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="location-stem-path-2"
        parametric:d="m {baseline_x+pad_before+(top_width*0.5)}, {(baseline_y-baseline_offset) - ((stem_height-top_width*0.5)/3)} 
                      c {(stem_height-top_width*0.5)/6}, {-((stem_height-top_width*0.5)/6)} 
                        {-((stem_height-top_width*0.5)/6)}, {-((stem_height-top_width*0.5)/6)} 
                        0, {-((stem_height-top_width*0.5)/3)}"
        d="m 3.0, -4.33333333333 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="location-stem-path-3"
        parametric:d="m {baseline_x+pad_before+(top_width*0.5)}, {(baseline_y-baseline_offset)} 
                      c {(stem_height-top_width*0.5)/6}, {-((stem_height-top_width*0.5)/6)} 
                        {-((stem_height-top_width*0.5)/6)}, {-((stem_height-top_width*0.5)/6)} 
                        0, {-((stem_height-top_width*0.5)/3)}"
        d="m 3.0, 0 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

<path id="location-top-path"
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height - top_width*0.5)} 
                      C{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height - top_width*1.1667)} 
                       {baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height - top_width*1.1667)} 
                       {baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height - top_width*0.5)} 
                      C{baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height - top_width*-0.1667)} 
                       {baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height - top_width*-0.1667)} 
                       {baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height - top_width*0.5)} Z"
        d="M0,-13.0 C0,-17.0 6.0,-17.0 6.0,-13.0 C6.0,-9.0 0,-9.0 0,-13.0 Z"
        fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />
</svg>`;

const dimensions = [10.2, 17];
const inset = 0;

module.exports = {
  defaultString,
  dimensions,
  inset,
};
