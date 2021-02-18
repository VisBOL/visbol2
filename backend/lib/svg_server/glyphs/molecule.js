const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Molecule"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;width=5">
    <circle 
      parametric:cx="{baseline_x + width + 1}"
      parametric:cy="{baseline_y}"
      parametric:r="{width}"
      fill="rgb(133,193,233)"
      fill-rule="nonzero"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="miter"
      stroke-linecap="butt"
    />
</svg>`;

const dimensions = [10, 10];
const inset = 5;

module.exports = {
    defaultString,
    dimensions,
    inset,
}