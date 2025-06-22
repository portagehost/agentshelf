export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI Tools for Real Estate Professionals
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with the latest AI technology and tools that
            help real estate agents work smarter, serve clients better, and grow
            their business.
          </p>
          <div className="space-x-4">
            <a
              href="/blog"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Latest Articles
            </a>
            <a
              href="/glossary"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              AI Glossary
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Find Here
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Latest AI Tools</h3>
              <p className="text-gray-600">
                Discover cutting-edge AI applications specifically designed for
                real estate professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Implementation Guides
              </h3>
              <p className="text-gray-600">
                Step-by-step instructions on how to integrate AI tools into your
                daily workflow.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
              <p className="text-gray-600">
                Learn from real-world success stories and proven strategies from
                top-performing agents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
