import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          Agent Shelf
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-200">
            Blog
          </Link>
          <Link href="/glossary" className="hover:text-blue-200">
            Glossary
          </Link>
        </div>
      </div>
    </nav>
  );
}
