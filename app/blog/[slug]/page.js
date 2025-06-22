import { getPostBySlug, getAllPosts } from "../../lib/posts";
import Link from "next/link";

// This function tells Next.js which blog post pages to generate
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-500 mb-4">
              {post.date} • {post.category}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags &&
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}
