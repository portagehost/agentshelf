import { getAllGuides } from "../lib/guides";
import GuidesContent from "../components/GuidesContent";

export default function Guides() {
  const guides = getAllGuides();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-custom-blue text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h1 className="text-4xl font-bold mb-4">AI Implementation Guides</h1>
          <p className="text-xl">
            Comprehensive step-by-step guides to help you implement AI tools in
            your real estate practice
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <GuidesContent guides={guides} />
      </div>
    </div>
  );
}
