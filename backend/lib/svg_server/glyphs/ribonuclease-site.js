const defaultString = `
<svg xmlns="http://www.w3.org/2000/svg" 
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     version="1.1"
     width="100" 
     height="100" 
     glyphtype="RNA Cleavage Site" 
     soterms="SO:0001688,SO:0001687,SO:0001977"
     parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_before=2;pad_after=2;pad_top=3;pad_bottom=3;height=16;width=6">

    <path id="location-stem-path-1"
          parametric:d="m {baseline_x + pad_before + 0.5*width}, {(baseline_y - baseline_offset) - 2*(height - width/2)/3} 
                        c {(height - width/2)/6},{-(height - width/2)/6} {-(height - width/2)/6},{-(height - width/2)/6} 0,{-(height - width/2)/3}"
          d="m 3.0,8.66666666667 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
          fill="none"
          stroke="black"
          stroke-width="1pt"
          stroke-linejoin="round"
          stroke-linecap="round" />

    <path id="location-stem-path-2"
          parametric:d="m {baseline_x + pad_before + 0.5*width}, {(baseline_y - baseline_offset) - (height - width/2)/3} 
                        c {(height - width/2)/6},{-(height - width/2)/6} {-(height - width/2)/6},{-(height - width/2)/6} 0,{-(height - width/2)/3}"
          d="m 3.0,12.3333333333 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
          fill="none"
          stroke="black"
          stroke-width="1pt"
          stroke-linejoin="round"
          stroke-linecap="round" />

    <path id="location-stem-path-3"
          parametric:d="m {baseline_x + pad_before + 0.5*width}, {(baseline_y - baseline_offset)} 
                        c {(height - width/2)/6},{-(height - width/2)/6} {-(height - width/2)/6},{-(height - width/2)/6} 0,{-(height - width/2)/3}"
          d="m 3.0,17 c 2.16666666667,-2.16666666667 -2.16666666667,-2.16666666667 0,-4.33333333333"
          fill="none"
          stroke="black"
          stroke-width="1pt"
          stroke-linejoin="round"
          stroke-linecap="round" />

    <path id="location-top-path"
          parametric:d="M{baseline_x + pad_before}, {(baseline_y - baseline_offset) - height} 
                        L{baseline_x + pad_before + width}, {(baseline_y - baseline_offset) - height + width}"
          d="M2,9 L8,15"
          fill="none"
          stroke="black"
          stroke-width="1pt"
          stroke-linejoin="round"
          stroke-linecap="round" />

    <path id="location-top-path"
          parametric:d="M{baseline_x + pad_before}, {(baseline_y - baseline_offset) - height + width} 
                        L{baseline_x + pad_before + width}, {(baseline_y - baseline_offset) - height}"
          d="M2,15 L8,9"
          fill="none"
          stroke="black"
          stroke-width="1pt"
          stroke-linejoin="round"
          stroke-linecap="round" />

</svg>`;

const dimensions = [6, 21];  // width, height
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
};
