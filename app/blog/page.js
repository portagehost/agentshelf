import { getAllPosts } from "../lib/posts";
import BlogContent from "../components/BlogContent";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h1 className="text-4xl font-bold mb-4">AI for Real Estate Blog</h1>
          <p className="text-xl">
            The latest guides, tutorials, and insights on using AI to transform
            your real estate business
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <BlogContent posts={posts} />
      </div>
    </div>
  );
}
