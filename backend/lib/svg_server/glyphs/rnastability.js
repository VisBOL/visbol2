const defaultString = `
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     width="6"
     height="16"
     glyphtype="RNA Stability Element"
     soterms="SO:0001979"
     parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;stem_height=16;top_width=6">

  <!-- Stem Segments (3 curved stems) -->
  <path id="location-stem-path-1"
        parametric:d="m {baseline_x+pad_before+0.5*top_width}, {(baseline_y-baseline_offset) - 2*(stem_height - top_width/2)/3}
                      c {(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        {-(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        0,{-(stem_height - top_width/2)/3}"
        d="m 3.0, -8.6667 c 2.1667,-2.1667 -2.1667,-2.1667 0,-4.3333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="location-stem-path-2"
        parametric:d="m {baseline_x+pad_before+0.5*top_width}, {(baseline_y-baseline_offset) - (stem_height - top_width/2)/3}
                      c {(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        {-(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        0,{-(stem_height - top_width/2)/3}"
        d="m 3.0, -4.3333 c 2.1667,-2.1667 -2.1667,-2.1667 0,-4.3333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="location-stem-path-3"
        parametric:d="m {baseline_x+pad_before+0.5*top_width}, {(baseline_y-baseline_offset)}
                      c {(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        {-(stem_height - top_width/2)/6},{-(stem_height - top_width/2)/6}
                        0,{-(stem_height - top_width/2)/3}"
        d="m 3.0, 0 c 2.1667,-2.1667 -2.1667,-2.1667 0,-4.3333"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <!-- Top Path (flag) -->
  <path id="location-top-path"
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height)} 
                      L{baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height)} 
                      L{baseline_x+pad_before+top_width},{(baseline_y-baseline_offset)-(stem_height - top_width + 0.3*top_width)} 
                      L{baseline_x+pad_before+0.5*top_width},{(baseline_y-baseline_offset)-(stem_height - top_width)} 
                      L{baseline_x+pad_before},{(baseline_y-baseline_offset)-(stem_height - top_width + 0.3*top_width)} Z"
        d="M0,-16.0 L6.0,-16.0 L6.0,-11.8 L3.0,-10.0 L0,-11.8 Z"
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
