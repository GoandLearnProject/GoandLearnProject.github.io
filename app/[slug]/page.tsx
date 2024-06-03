// app/[slug]/page.tsx
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    displayName: string;
    url: string;
    image: {
      url: string;
    };
  };
  updated: string;
  labels: string[];
}

async function getPost(slug: string): Promise<{ items: Post[] }> {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/4491005031879174222/posts/search?key=AIzaSyAc_bDpxwf2RKBQy2kSjeX7k8EH2LGVn3U&q=${slug}`,
    { next: { revalidate: 60 } }, // Revalidate every 60 seconds
  );
  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }
  return res.json();
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { items } = await getPost(params.slug);
  const firstItem = items?.[0]; // Kiểm tra tồn tại và lấy phần tử đầu tiên
  if (!firstItem) {
    // Trường hợp không có items
    return <div>No post found.</div>;
  }

  return (
    <article className="ntry ps post">
      <h1 className="pTtl aTtl sml itm">
        <span>{firstItem.title.split("|")[1].trim()}</span>
      </h1>
      <div className="pInr">
        <div className="pEnt">
          <div className="pS post-body postBody">
            <div dangerouslySetInnerHTML={{ __html: firstItem.content }} />
          </div>
        </div>
        <div className="lbHt">
          {firstItem.labels.slice(0, 2).map((tag: string, index: number) => (
            <Link key={index} href={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
        </div>
        <div className="pInf pSml ps">
          <div className="pIm">
            <div
              className="im"
              style={{
                backgroundImage: `url("${firstItem.author.image.url}")`,
              }}
            ></div>
          </div>
          <div className="pNm">
            <a
              className="nm"
              data-text={firstItem.author.displayName}
              data-write="Published by"
              href={`${firstItem.author.url}`}
              target="_blank"
            ></a>
            <div className="pDr">
              <bdi className="pDt pIn">
                <time
                  className="aTtmp pTtmp upd"
                  data-date="Updated:"
                  data-text={firstItem.updated.split("T")[0]}
                ></time>
              </bdi>
              <div className="pRd pIn">
                <bdi id="rdTime">Current views: __ view</bdi>
              </div>
            </div>
          </div>
          <div className="pCm">
            <div className="pIc">
              <label style={{ padding: "4px" }} className="sh tIc">
                <svg className="line" viewBox="0 0 24 24">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"></path>
                  <path d="M8.46997 13.4599L12 9.93994L15.53 13.4599"></path>
                </svg>
              </label>
              <span>__</span>
              <label
                style={{ padding: "4px" }}
                className="sh tIc"
                htmlFor="forShare"
              >
                <svg className="line" viewBox="0 0 24 24">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"></path>
                  <path d="M8.46997 10.6399L12 14.1599L15.53 10.6399"></path>
                </svg>
              </label>
              <span>__</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
