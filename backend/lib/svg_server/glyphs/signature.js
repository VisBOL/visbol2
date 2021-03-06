const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="30"
      height="30"
      glyphtype="Signature"
      soterms="SO:0001978"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=10;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=20">


<path
      id="signature-box-path" 
      parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-height} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-height} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)} {baseline_x+pad_before},{(baseline_y-baseline_offset)} Z" 
      d="M2,15 L22,15 L22,25 2,25 Z" 
      fill="rgb(230,230,230)"
fill-rule="nonzero"
stroke="black"
stroke-width="1pt"
stroke-linejoin="miter"
stroke-linecap="butt"/>

<path
      id="signature-cross-path1" 
      parametric:d="M{baseline_x+pad_before+(height*0.3)},{(baseline_y-baseline_offset)-height+(height*0.3)} L{baseline_x+pad_before+(height*0.7)},{(baseline_y-baseline_offset)-height+(height*0.7)}" 
      d="M5.0,18.0 L9.0,22.0" 
      fill="none"
stroke="black"
stroke-width="1pt"
stroke-linejoin="round"
stroke-linecap="round" />

<path 
      id="signature-cross-path2" 
      parametric:d="M{baseline_x+pad_before+(height*0.3)},{(baseline_y-baseline_offset)-(height*0.3)} L{baseline_x+pad_before+(height*0.7)},{(baseline_y-baseline_offset)-(height*0.7)}" 
      d="M5.0,22.0 L9.0,18.0" 
      fill="none"
stroke="black"
stroke-width="1pt"
stroke-linejoin="round"
stroke-linecap="round" />

<path 
      id="signature-line-path" 
      parametric:d="M{baseline_x+pad_before+height},{(baseline_y-baseline_offset)-(height*0.3)} L{baseline_x+pad_before+width-(height*0.3)},{(baseline_y-baseline_offset)-(height*0.3)}" 
      d="M12,22.0 L19.0,22.0" 
      fill="none"
stroke="black"
stroke-width="1pt"
stroke-linejoin="round"
stroke-linecap="round" />

</svg>`;

const dimensions = [20, 10];
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
}