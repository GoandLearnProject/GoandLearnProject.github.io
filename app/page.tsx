// /app/page.tsx
"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

async function getPosts({ date }: { date?: string }) {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/4491005031879174222/posts?key=AIzaSyAc_bDpxwf2RKBQy2kSjeX7k8EH2LGVn3U&maxResults=8${
      date ? `&endDate=${date}` : ""
    }`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  const processedPosts = data.items
    ? data.items.map((item) => {
        const imgThumb = item.content
          .match(/<img[^>]*>/g)?.[0]
          .match(/src="([^"]+)"/)?.[1];
        const excerpt = item.content.replace(/<[^>]+>/g, "").slice(0, 100);
        return {
          author: item.author,
          published: item.published,
          title: item.title.split("|")[1].trim(),
          slug: item.title.split("|")[0].trim(),
          tags: item.labels,
          imgThumb,
          excerpt,
        };
      })
    : [];
  return processedPosts;
}

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const postListRef = useRef(null);

  const fetchInitialPosts = async () => {
    const initialPosts = await getPosts({});
    setPosts(initialPosts);
    setHasMore(initialPosts.length === 8);
  };

  const loadMorePosts = async () => {
    setIsLoading(true);
    const lastPost = posts[posts.length - 1];
    const newPosts = await getPosts({ date: lastPost.published });
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setHasMore(newPosts.length === 8);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchInitialPosts();
  }, []);

  return (
    <>
      <div className="blogPts" ref={postListRef}>
        {posts.map((post) => (
          <>
            <article key={post.slug} className="ntry">
              <div className="pThmb">
                <Link className="thmb" href={`/${post.slug}`}>
                  <Image
                    width={300}
                    height={600}
                    className="imgThm"
                    src={post.imgThumb}
                    alt={post.title}
                  />
                </Link>
              </div>
              <div className="pCntn">
                <div className="pHdr pSml">
                  <div className="pLbls" data-text="in">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Link
                        key={tag}
                        aria-label={tag}
                        data-text={tag}
                        href={`/tag/${tag}`}
                        rel="tag"
                      ></Link>
                    ))}
                  </div>
                </div>
                <h2 className="pTtl aTtl sml">
                  <Link data-text={post.title} href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="pSnpt">{post.excerpt}</div>
                <div className="pInf pSml">
                  <time
                    className="aTtmp pTtmp pbl"
                    data-text={post.published.split("T")[0]}
                  ></time>
                  <Link
                    aria-label="Đọc thêm"
                    className="pJmp"
                    data-text="Tiếp tục đọc"
                    href={`/${post.slug}`}
                  ></Link>
                </div>
              </div>
            </article>
          </>
        ))}
      </div>
      <div className="blogPg">
        {isLoading ? (
          <p>Loading...</p>
        ) : hasMore ? (
          <button onClick={loadMorePosts}>Tải thêm bài đăng</button>
        ) : (
          <span style={{ backgroundColor: "gray" }}>Đã hết!</span>
        )}
      </div>
    </>
  );
}
