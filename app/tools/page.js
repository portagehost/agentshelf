export default function Tools() {
  // Tool categories and data
  const toolCategories = [
    {
      name: "Chatbots & LLMs",
      description: "AI conversational assistants and large language models",
      tools: [
        {
          name: "ChatGPT",
          description: "OpenAI's powerful conversational AI for writing, analysis, and problem-solving",
          website: "https://chat.openai.com",
          logo: "/tools/chatgpt-logo.png"
        },
        {
          name: "Claude",
          description: "Anthropic's AI assistant known for nuanced, thoughtful responses",
          website: "https://claude.ai",
          logo: "/tools/claude-logo.png"
        },
        {
          name: "Perplexity",
          description: "AI-powered search engine that provides sourced answers",
          website: "https://perplexity.ai",
          logo: "/tools/perplexity-logo.png"
        },
        {
          name: "Gemini",
          description: "Google's multimodal AI for text, images, and more",
          website: "https://gemini.google.com",
          logo: "/tools/gemini-logo.png"
        }
      ]
    },
    {
      name: "Creative Tools",
      description: "Design, video editing, and content creation tools",
      tools: [
        {
          name: "Canva",
          description: "User-friendly graphic design platform with AI features",
          website: "https://canva.com",
          logo: "/tools/canva-logo.png"
        },
        {
          name: "CapCut",
          description: "Easy-to-use video editing app with AI effects",
          website: "https://capcut.com",
          logo: "/tools/capcut-logo.png"
        },
        {
          name: "InShot",
          description: "Mobile video and photo editor",
          website: "https://inshot.com",
          logo: "/tools/inshot-logo.png"
        }
      ]
    },
    {
      name: "Automation Tools",
      description: "Workflow automation and productivity enhancers",
      tools: [
        {
          name: "Zapier",
          description: "Connect your apps and automate workflows",
          website: "https://zapier.com",
          logo: "/tools/zapier-logo.png"
        },
        {
          name: "Make",
          description: "Visual platform for building automated workflows",
          website: "https://make.com",
          logo: "/tools/make-logo.png"
        },
        {
          name: "Copy.ai",
          description: "AI-powered copywriting and content generation",
          website: "https://copy.ai",
          logo: "/tools/copyai-logo.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h1 className="text-4xl font-bold mb-4">AI Tools Directory</h1>
          <p className="text-xl">
            Curated collection of AI tools to enhance your real estate business
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 text-lg">
                {category.description}
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Tool Logo */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
                    <span className="text-3xl">🤖</span>
                  </div>

                  {/* Tool Info */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {tool.description}
                  </p>

                  {/* Website Link */}
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
