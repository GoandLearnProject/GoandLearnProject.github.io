"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { darkMode } from "../public/js/main";

const darkClick = () => {
  darkMode();
};

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="headCn">
        <div className="headD headL">
          <div className="headIc">
            <label className="tNav tIc bIc" htmlFor="offNav">
              <svg className="line" viewBox="0 0 24 24">
                <g className="h1">
                  <path d="M 3 18 H 14 M 10 6 H 21"></path>
                  <line className="svgC" x1="3" x2="21" y1="12" y2="12"></line>
                </g>
                <g
                  className="h2"
                  transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)"
                >
                  <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0"></path>
                </g>
                <g
                  className="h3"
                  transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)"
                >
                  <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0"></path>
                </g>
              </svg>
            </label>
          </div>
          <div className="headN section" id="header-title">
            <div className="widget Header" id="Header1">
              <Link href="/">
                <Image
                  height={58}
                  src="/logo.svg"
                  width={255}
                  alt="Go and Learn"
                />
              </Link>
              <div className="headInnr hidden">
                <h1 className="headH notranslate">
                  <bdi>
                    <Link className="headTtl" href="/">
                      NDH Testing
                    </Link>
                  </bdi>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="headD headR">
          <div className="headI">
            <div className="headS section" id="header-search">
              <div className="widget BlogSearch" id="BlogSearch1">
                <form action="/search" className="srchF" target="_top">
                  <input
                    aria-label="Tìm kiếm blog này"
                    id="searchIn"
                    minLength={3}
                    name="q"
                    placeholder="Try &#39;Adventure&#39;"
                    defaultValue=""
                  />
                  <span className="sb">
                    <svg className="line" viewBox="0 0 24 24">
                      <g>
                        <circle
                          cx="11.36167"
                          cy="11.36167"
                          r="9.36167"
                        ></circle>
                        <line
                          className="svgC"
                          x1="22"
                          x2="19.9332"
                          y1="22"
                          y2="19.9332"
                        ></line>
                      </g>
                    </svg>
                  </span>
                  <button
                    aria-label="Clear"
                    className="sb"
                    data-text="âœ•"
                    type="reset"
                  ></button>
                  <span className="fCls"></span>
                </form>
              </div>
            </div>
            <div className="headP section" id="header-icon">
              <div className="widget TextList" id="TextList000">
                <ul className="headIc">
                  <li className="isSrh">
                    <label
                      aria-label="Search"
                      className="tSrch tIc bIc"
                      htmlFor="searchIn"
                    >
                      <svg className="line" viewBox="0 0 24 24">
                        <g>
                          <circle
                            cx="11.36167"
                            cy="11.36167"
                            r="9.36167"
                          ></circle>
                          <line
                            className="svgC"
                            x1="22"
                            x2="19.9332"
                            y1="22"
                            y2="19.9332"
                          ></line>
                        </g>
                      </svg>
                    </label>
                  </li>
                  <li className="isBkm">
                    <label
                      aria-label="Bookmark"
                      className="tBkmt tIc bIc n"
                      htmlFor="offBkm"
                    >
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z"></path>
                        </g>
                      </svg>
                    </label>
                  </li>
                  <li className="isDrk">
                    <label
                      aria-label="Mode"
                      className="navM tDark tIc tDL bIc"
                      htmlFor="onMode"
                      role="button"
                      onClick={darkClick}
                    >
                      <svg className="line" viewBox="0 0 24 24">
                        <g className="d1">
                          <path
                            d="M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z"
                            transform="translate(-169.3959 -166.45548)"
                          ></path>
                        </g>
                        <g className="d2">
                          <path
                            className="f"
                            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                          ></path>
                          <path
                            className="svgC"
                            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                            strokeWidth={2}
                          ></path>
                        </g>
                      </svg>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
