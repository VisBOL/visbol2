const defaultString = `
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     version="1.1"
     width="100"
     height="100"
     glyphtype="InertDNASpacer"
     soterms="SO:0002223"
     parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_before=2;pad_after=2;width=10;height=10">

  <path id="baseline"
        parametric:d="M{baseline_x},{baseline_y - baseline_offset} L{baseline_x + width},{baseline_y - baseline_offset}"
        d="M0,25 L10,25"
        fill="none"
        stroke="black"
        stroke-width="1pt" />

  <path id="spacer-circle-path"
        parametric:d="M{baseline_x},{baseline_y - baseline_offset}
                      C{baseline_x},{(baseline_y - baseline_offset) - (width/1.5)} {baseline_x + width},{(baseline_y - baseline_offset) - (width/1.5)} {baseline_x + width},{baseline_y - baseline_offset}
                      C{baseline_x + width},{(baseline_y - baseline_offset) + (width/1.5)} {baseline_x},{(baseline_y - baseline_offset) + (width/1.5)} {baseline_x},{baseline_y - baseline_offset} Z"
        d="M0,25 C0,18.33 10,18.33 10,25 C10,31.67 0,31.67 0,25 Z"
        fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

  <path id="spacer-cross1-path"
        parametric:d="M{baseline_x + width/2 - (width/2 * -0.6669380616522619)},{(baseline_y - baseline_offset) - (width/2 * 0.7451131604793488)}
                      L{baseline_x + width/2 + (width/2 * -0.6669380616522619)},{(baseline_y - baseline_offset) + (width/2 * 0.7451131604793488)}"
        d="M8.33469030826,20.5294331976 L1.66530969174,29.4705668024"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="spacer-cross2-path"
        parametric:d="M{baseline_x + width/2 - (width/2 * -0.6669380616522619)},{(baseline_y - baseline_offset) + (width/2 * 0.7451131604793488)}
                      L{baseline_x + width/2 + (width/2 * -0.6669380616522619)},{(baseline_y - baseline_offset) - (width/2 * 0.7451131604793488)}"
        d="M8.33469030826,29.4705668024 L1.66530969174,20.5294331976"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

</svg>`;

const dimensions = [10, 15];
const inset = 0;

module.exports = {
  defaultString,
  dimensions,
  inset,
};
