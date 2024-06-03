import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="cdtIn section" id="credit-widget">
          <div className="widget HTML" id="HTML88">
            <div className="fotCd notranslate">
              <span className="credit">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  &#169;
                </span>
                <bdi>
                  <Link href="/">
                    NDH Testing
                    <svg viewBox="0 0 24 24">
                      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path>
                    </svg>
                  </Link>
                </bdi>
              </span>
              <span className="creator pSml">
                Made with love by <Link href="https://ndh.io.vn">NDH</Link>
              </span>
            </div>
          </div>
          <div className="widget PageList" id="PageList88">
            <input className="ftI hidden" id="offFot" type="checkbox" />
            <label className="ftL" htmlFor="offFot">
              <svg className="line" viewBox="0 0 24 24">
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                <line className="svgC" x1="8" x2="16" y1="12" y2="12"></line>
              </svg>
              <svg className="line u" viewBox="0 0 24 24">
                <g transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)">
                  <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0"></path>
                </g>
              </svg>
            </label>
            <ul className="ftMn">
              <li>
                <Link href="/">Terms of Use</Link>
              </li>
              <li>
                <span>Disclaimer</span>
              </li>
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
            <label className="fCls" htmlFor="offFot"></label>
          </div>
          <div className="widget LinkList" id="LinkList88">
            <ul className="mSoc">
              <li>
                <Link
                  aria-label="Facebook"
                  className="a tIc bIc"
                  href="/"
                  rel="noopener"
                  role="button"
                  target="_blank"
                >
                  <svg viewBox="0 0 32 32">
                    <path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Zm3,21a3,3,0,0,1-3,3H17V18h4a1,1,0,0,0,0-2H17V14a2,2,0,0,1,2-2h2a1,1,0,0,0,0-2H19a4,4,0,0,0-4,4v2H12a1,1,0,0,0,0,2h3v9H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Instagram"
                  className="a tIc bIc"
                  href="/"
                  rel="noopener"
                  role="button"
                  target="_blank"
                >
                  <svg viewBox="0 0 32 32">
                    <path d="M22,3H10a7,7,0,0,0-7,7V22a7,7,0,0,0,7,7H22a7,7,0,0,0,7-7V10A7,7,0,0,0,22,3Zm5,19a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5V10a5,5,0,0,1,5-5H22a5,5,0,0,1,5,5Z"></path>
                    <path
                      className="svgC"
                      d="M16,9.5A6.5,6.5,0,1,0,22.5,16,6.51,6.51,0,0,0,16,9.5Zm0,11A4.5,4.5,0,1,1,20.5,16,4.51,4.51,0,0,1,16,20.5Z"
                    ></path>
                    <circle className="svgC" cx="23" cy="9" r="1"></circle>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Twitter"
                  className="a tIc bIc"
                  href="/"
                  rel="noopener"
                  role="button"
                  target="_blank"
                >
                  <svg viewBox="0 0 32 32">
                    <path d="M13.35,28A13.66,13.66,0,0,1,2.18,22.16a1,1,0,0,1,.69-1.56l2.84-.39A12,12,0,0,1,5.44,4.35a1,1,0,0,1,1.7.31,9.87,9.87,0,0,0,5.33,5.68,7.39,7.39,0,0,1,7.24-6.15,7.29,7.29,0,0,1,5.88,3H29a1,1,0,0,1,.9.56,1,1,0,0,1-.11,1.06L27,12.27c0,.14,0,.28-.05.41a12.46,12.46,0,0,1,.09,1.43A13.82,13.82,0,0,1,13.35,28ZM4.9,22.34A11.63,11.63,0,0,0,13.35,26,11.82,11.82,0,0,0,25.07,14.11,11.42,11.42,0,0,0,25,12.77a1.11,1.11,0,0,1,0-.26c0-.22.05-.43.06-.65a1,1,0,0,1,.22-.58l1.67-2.11H25.06a1,1,0,0,1-.85-.47,5.3,5.3,0,0,0-4.5-2.51,5.41,5.41,0,0,0-5.36,5.45,1.07,1.07,0,0,1-.4.83,1,1,0,0,1-.87.2A11.83,11.83,0,0,1,6,7,10,10,0,0,0,8.57,20.12a1,1,0,0,1,.37,1.05,1,1,0,0,1-.83.74Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Tiktok"
                  className="a tIc bIc"
                  href="/"
                  rel="noopener"
                  role="button"
                  target="_blank"
                >
                  <svg viewBox="0 0 32 32">
                    <path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Zm3,21a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3Z"></path>
                    <path
                      className="svgC"
                      d="M22,12a3,3,0,0,1-3-3,1,1,0,0,0-2,0V19a3,3,0,1,1-3-3,1,1,0,0,0,0-2,5,5,0,1,0,5,5V13a4.92,4.92,0,0,0,3,1,1,1,0,0,0,0-2Z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
