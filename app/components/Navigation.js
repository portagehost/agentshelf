import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="bg-gradient-to-b from-blue-100 to-white shadow-md">
      {/* Logo Section */}
      <div className="text-center py-3 px-4">
        <Link href="/" className="inline-block">
          <div className="overflow-hidden h-22 flex items-center justify-center mb-2">
            <Image
              src="/agentshelf-logo.png"
              alt="AgentShelf"
              width={300}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-base sm:text-xl text-gray-800 font-bold tracking-wide">
            AI Tools for Real Estate Agents
          </p>
        </Link>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-8">
            <Link
              href="/guides"
              className="px-3 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 font-medium">
              Guides
            </Link>
            <Link
              href="/prompts"
              className="px-3 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 font-medium">
              Prompts
            </Link>
            <Link
              href="/tools"
              className="px-3 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 font-medium">
              Tools
            </Link>
            <Link
              href="/blog"
              className="px-3 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 font-medium">
              Blog
            </Link>
            <Link
              href="/glossary"
              className="px-3 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 font-medium">
              Glossary
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}