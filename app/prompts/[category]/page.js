import { getPromptsByCategory, getAllCategories } from '../../lib/prompts';
import Link from 'next/link';
import CopyButton from '../../components/CopyButton';

// Tell Next.js which category pages to generate
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export default function CategoryPage({ params }) {
  const prompts = getPromptsByCategory(params.category);
  const categories = getAllCategories();
  const currentCategory = categories.find(cat => cat.slug === params.category);

  if (!currentCategory) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Category Not Found</h1>
          <Link href="/prompts" className="text-blue-600 hover:text-blue-800">
            ← Back to All Prompts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/prompts" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to All Prompts
        </Link>

        <div className="mb-8">
          <div className="text-5xl mb-4">{currentCategory.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{currentCategory.name}</h1>
        </div>

        {prompts.length > 0 ? (
          <div className="space-y-6">
            {prompts.map((prompt) => (
              <div key={prompt.slug} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
                <h2 className="text-2xl font-bold mb-2">{prompt.title}</h2>
                <p className="text-gray-600 mb-4">{prompt.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Best used with: </span>
                  <span className="text-sm font-semibold text-blue-600">{prompt.aiTool}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-300 mb-4">
                  <pre className="whitespace-pre-wrap font-mono text-sm">{prompt.content}</pre>
                </div>
                <CopyButton text={prompt.content} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-500">
              No prompts in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
