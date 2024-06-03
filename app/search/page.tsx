"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Post {
  author: string;
  published: string;
  title: string;
  slug: string;
  tags: string[];
  imgThumb?: string;
  excerpt: string;
}

async function fetchSearchResults(query: string | null): Promise<Post[]> {
  if (!query) return []; // Return empty array if query is null or empty
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/4491005031879174222/posts/search?key=YOUR_API_KEY&q=${query}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  const processedPosts: Post[] = data.items
    ? data.items.map((item: any) => {
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

export default function SearchPage() {
  const searchParams = useSearchParams();
  const param = searchParams.get("q");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchResults(param);
        setPosts(result);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    if (param) {
      fetchData();
    }
  }, [param]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="blogPts">
        {posts.map((post) => (
          <article className="ntry" key={post.slug}>
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
                      aria-label={tag}
                      data-text={tag}
                      href={`/tag/${tag}`}
                      rel="tag"
                      key={`${tag}-${index}`}
                    />
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
                />
                <Link
                  aria-label="Đọc thêm"
                  className="pJmp"
                  data-text="Tiếp tục đọc"
                  href={`/${post.slug}`}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
