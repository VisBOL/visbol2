const defaultString = `
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     width="6"
     height="16"
     glyphtype="Protein Cleavage Site"
     soterms="SO:0001956"
     parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_before=2;pad_after=2;pad_top=3;pad_bottom=3;height=16;width=6">

  <!-- Zigzag stem path -->
  <path id="location-stem-path"
        parametric:d="m {baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      c {0.5*width},-2 {0.5*width},{2 + (height - 0.5*width)/3} 0,{(height - 0.5*width)/3}
                      {0.5*width},-2 {0.5*width},{2 + (height - 0.5*width)/3} 0,{(height - 0.5*width)/3}
                      {0.5*width},-2 {0.5*width},{2 + (height - 0.5*width)/3} 0,{(height - 0.5*width)/3}"
        d="m 3.0,-13.0 c 3.0,-2 3.0,6.33 0,4.33 3.0,-2 3.0,6.33 0,4.33 3.0,-2 3.0,6.33 0,4.33"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <!-- Top crossed lines -->
  <path id="location-top-path-1"
        parametric:d="M{baseline_x + pad_before},{baseline_y - baseline_offset - height}
                      L{baseline_x + pad_before + width},{baseline_y - baseline_offset - height + width}"
        d="M0,-16.0 L6.0,-10.0"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="location-top-path-2"
        parametric:d="M{baseline_x + pad_before},{baseline_y - baseline_offset - height + width}
                      L{baseline_x + pad_before + width},{baseline_y - baseline_offset - height}"
        d="M0,-10.0 L6.0,-16.0"
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
};
