import Link from 'next/link';

export default function PromptsPage() {
  const categories = [
    {
      name: 'Listing Descriptions',
      slug: 'listing-descriptions',
      icon: '📝',
      description: 'Create compelling property descriptions that sell'
    },
    {
      name: 'Client Communication',
      slug: 'client-communication',
      icon: '💬',
      description: 'Professional messages for every client interaction'
    },
    {
      name: 'Social Media',
      slug: 'social-media',
      icon: '📱',
      description: 'Engaging posts that build your online presence'
    },
    {
      name: 'Lead Generation',
      slug: 'lead-generation',
      icon: '🎯',
      description: 'Attract and convert more potential clients'
    },
    {
      name: 'Market Analysis',
      slug: 'market-analysis',
      icon: '📊',
      description: 'Data-driven insights for clients and listings'
    },
    {
      name: 'Objection Handling',
      slug: 'objection-handling',
      icon: '🤝',
      description: 'Confident responses to common client concerns'
    },
    {
      name: 'Open Houses',
      slug: 'open-houses',
      icon: '🏠',
      description: 'Plan and promote successful open house events'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">AI Prompts for Real Estate Agents</h1>
        <p className="text-lg text-gray-600 mb-12">
          Ready-to-use AI prompts to streamline your workflow and impress your clients
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/prompts/${category.slug}`}
              className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h2 className="text-xl font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
