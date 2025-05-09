const defaultString = `
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:parametric="https://parametric-svg.github.io/v0.2"
     width="6"
     height="16"
     glyphtype="DNA Stop Site"
     soterms="SO:0000616"
     parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;height=16;width=6">

  <!-- Top Path (closed loop) -->
  <path id="location-top-path"
        parametric:d="M{baseline_x + pad_before},{baseline_y - baseline_offset - height + width - 0.5*width}
                      C{baseline_x + pad_before},{baseline_y - baseline_offset - height + width - 1.16666666666667*width}
                       {baseline_x + pad_before + width},{baseline_y - baseline_offset - height + width - 1.16666666666667*width}
                       {baseline_x + pad_before + width},{baseline_y - baseline_offset - height + width - 0.5*width}
                      C{baseline_x + pad_before + width},{baseline_y - baseline_offset - height + width + 0.166666666666667*width}
                       {baseline_x + pad_before},{baseline_y - baseline_offset - height + width + 0.166666666666667*width}
                       {baseline_x + pad_before},{baseline_y - baseline_offset - height + width - 0.5*width} Z"
        d="M0,-13.0 C0,-17.0 6.0,-17.0 6.0,-13.0 C6.0,-9.0 0,-9.0 0,-13.0 Z"
        fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

  <!-- Stem -->
  <path id="location-stem-path"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset}
                      L{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + width}"
        d="M3.0,0 L3.0,-10.0"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <!-- Star tips -->
  <path id="star-1"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      L{baseline_x + pad_before + 0.5*width + 0.58778525229*(0.2*width)},
                       {baseline_y - baseline_offset - height + 0.5*width + 0.80901699437*(0.2*width)}"
        d="M3.0,-13.0 L3.7053,-12.0292"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="star-2"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      L{baseline_x + pad_before + 0.5*width + 0.95105651629*(0.2*width)},
                       {baseline_y - baseline_offset - height + 0.5*width - 0.30901699437*(0.2*width)}"
        d="M3.0,-13.0 L4.1413,-13.3708"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="star-3"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      L{baseline_x + pad_before + 0.5*width},
                       {baseline_y - baseline_offset - height + 0.5*width - (0.2*width)}"
        d="M3.0,-13.0 L3.0,-14.2"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="star-4"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      L{baseline_x + pad_before + 0.5*width - 0.95105651629*(0.2*width)},
                       {baseline_y - baseline_offset - height + 0.5*width - 0.30901699437*(0.2*width)}"
        d="M3.0,-13.0 L1.8587,-13.3708"
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

  <path id="star-5"
        parametric:d="M{baseline_x + pad_before + 0.5*width},{baseline_y - baseline_offset - height + 0.5*width}
                      L{baseline_x + pad_before + 0.5*width - 0.58778525229*(0.2*width)},
                       {baseline_y - baseline_offset - height + 0.5*width + 0.80901699437*(0.2*width)}"
        d="M3.0,-13.0 L2.2947,-12.0292"
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
