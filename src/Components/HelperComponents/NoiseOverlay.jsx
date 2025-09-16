// NoiseOverlay.jsx
import React from "react";

export default function NoiseOverlay({ opacity = 0.12, blend = "overlay" }) {
  // Using an inline SVG element as overlay. The rectangle is filtered with feTurbulence.
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        mixBlendMode: blend,
        opacity,
      }}
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          {/* -> make alpha channel thin so overlay is subtle */}
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.25" />
          </feComponentTransfer>
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
