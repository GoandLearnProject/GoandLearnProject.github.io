import React from "react";
import Link from "next/link";

const Tags = () => {
  return (
    <div className="section" id="notif-widget">
      <div className="widget LinkList" id="LinkList001">
        <nav className="navS scrlH">
          <div className="secIn">
            <ul>
              <li>
                <Link
                  aria-label="Art"
                  className="l"
                  data-text="Art"
                  href="/tag/Art"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Travel"
                  className="l"
                  data-text="Travel"
                  href="/tag/Travel"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Life Style"
                  className="l"
                  data-text="Life Style"
                  href="/tag/Life%20Style"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Photography"
                  className="l"
                  data-text="Photography"
                  href="/tag/Photography"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Nature"
                  className="l"
                  data-text="Nature"
                  href="/tag/Nature"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Food"
                  className="l"
                  data-text="Food"
                  href="/tag/Food"
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Adventure"
                  className="l"
                  data-text="Adventure"
                  href="/tag/Adventure"
                ></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="widget HTML" id="HTML0">
        <input className="ntfI hidden" id="forNft" type="checkbox" />
        <div className="ntfC">
          <div className="ntfT">
            <div className="ntfA">
              <span>
                Website đang trong quá trình phát triển{" "}
                <Link href="https://telegram.me/sunliteiv" target="_blank">
                  Liên hệ
                </Link>
              </span>
              <Link href="https://telegram.me/sunliteiv" target="_blank">
                Bạn muốn đóng góp?
              </Link>
            </div>
          </div>
          <label aria-label="Close Menu" className="c" htmlFor="forNft"></label>
        </div>
      </div>
    </div>
  );
};

export default Tags;
