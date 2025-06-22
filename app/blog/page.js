import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          AI Tools for Real Estate Agents Blog
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay up-to-date with the latest AI tools and technology that can help
          you work more efficiently and serve your clients better.
        </p>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800">
                    {post.title}
                  </Link>
                </h2>
                <div className="text-gray-500 text-sm mb-3">
                  {post.date} • {post.category}
                </div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags &&
                    post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-500">
              No blog posts found. Create your first post by adding a markdown
              file to the content/blog folder!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
