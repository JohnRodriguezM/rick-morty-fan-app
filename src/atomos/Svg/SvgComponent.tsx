//!librerias

import React, { FC } from "react";

//!components
//!hooks
//!styles
//!firebase-
//!funciones
//!variables u otros
//!types

interface SVGInterface {
  className: string;
  xmlns: string;
  fill: string;
  viewBox: string;
  strokeWidth: string;
  stroke: string;
  ariaHidden: string;
  d: string;
}

type partialSVGInterface = Partial<SVGInterface>;

export const SvgComponent: FC<partialSVGInterface> = ({
  className = "h-6 w-6",
  xmlns = "http://www.w3.org/2000/svg",
  fill = "none",
  viewBox = "0 0 24 24",
  strokeWidth = "2",
  stroke = "currentColor",
  ariaHidden = true,
  d = "M4 6h16M4 12h16M4 18h16",
}) => {
  return (
    <>
      <svg
        className={className}
        xmlns={xmlns}
        fill={fill}
        viewBox={viewBox}
        strokeWidth={strokeWidth}
        stroke={stroke}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={d}
        />
      </svg>
    </>
  );
};
