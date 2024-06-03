"use client";
import React from "react";
import Link from "next/link";

const WaveandBtop = () => {
  return (
    <>
      <div
        className="toTopB"
        id="backTop"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <svg viewBox="0 0 34 34">
          <circle className="b" cx="17" cy="17" r="15.92"></circle>
          <circle
            className="c scrollProgress"
            cx="17"
            cy="17"
            r="15.92"
          ></circle>
          <path className="line d" d="M15.07,21.06,19.16,17l-4.09-4.06"></path>
        </svg>
      </div>
      <div className="wvC">
        <div className="wvS">
          <svg
            className="waves"
            preserveAspectRatio="none"
            shapeRendering="auto"
            viewBox="0 24 150 28"
          >
            <defs>
              <path
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                id="wave-bg"
              ></path>
            </defs>
            <g className="plx">
              <use x="48" href="#wave-bg" y="0"></use>
              <use x="48" href="#wave-bg" y="3"></use>
              <use x="48" href="#wave-bg" y="5"></use>
              <use x="48" href="#wave-bg" y="7"></use>
            </g>
          </svg>
        </div>
        <div className="wvH"></div>
      </div>
    </>
  );
};

export default WaveandBtop;
