"use client";

import ScrollToTop from "react-scroll-to-top";

function ButtonScrollToTop() {
  return (
    <ScrollToTop
      smooth
      component={
        <svg
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5289 10L18 8.51275L9.98258 0.412044C9.85411 0.281465 9.70134 0.177836 9.53307 0.107121C9.3648 0.0364052 9.18434 0 9.00208 0C8.81983 0 8.63937 0.0364052 8.4711 0.107121C8.30282 0.177836 8.15006 0.281465 8.02159 0.412044L0 8.51275L1.47109 9.9986L9 2.39552L16.5289 10Z"
            fill="#1D3149"
          />
        </svg>
      }
    />
  );
}

export default ButtonScrollToTop;
