import { getGuideBySlug, getAllGuides } from "../../lib/guides";
import Link from "next/link";

// This function tells Next.js which guide pages to generate
export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }) {
  const guide = await getGuideBySlug(params.slug);

  if (!guide) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Guide Not Found</h1>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            ← Back to Guides
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/guides"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Guides
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
            <div className="text-gray-500 mb-4">
              {guide.date} • {guide.category}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {guide.tags &&
                guide.tags.map((tag) => (
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
            dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}
