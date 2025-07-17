import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Two-Column Section with Blue Background */}
      <section className="bg-custom-blue text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div>
              <h1 className="text-5xl font-bold mb-6">
                AI Tools for Real Estate Professionals
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Stay ahead of the curve with the latest AI technology and tools
                that help real estate agents work smarter, serve clients better,
                and grow their business.
              </p>
              <div className="space-y-4">
                <Link
                  href="/guides"
                  className="bg-white text-custom-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 inline-block mr-4">
                  Latest Guides
                </Link>
                <Link
                  href="/prompts"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-custom-blue inline-block">
                  Prompts
                </Link>
              </div>
            </div>

            {/* Right Column - Profile/Bio */}
            <div className="text-center lg:text-left">
              {/* Profile image */}
              <div className="w-32 h-32 bg-white rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center border-2 border-white border-opacity-30">
                <span className="text-2xl text-custom-blue font-bold">JH</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Jason Hernandez
              </h3>

              <p className="text-white mb-6 leading-relaxed">
                Real Estate Title Attorney & AI Enthusiast. I help real estate
                agents implement cutting-edge AI tools to work more efficiently
                and serve clients better.
              </p>

              <div className="space-y-2 text-sm text-white mb-6">
                <p>
                  <strong>Email:</strong> jason@crescenttitle.com
                </p>
                <p>
                  <strong>Phone:</strong> (504) 484-0700
                </p>
                <p>
                  <strong>Location:</strong> New Orleans, LA
                </p>
              </div>

              <div>
                <a
                  href="mailto:your.email@example.com"
                  className="bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
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
