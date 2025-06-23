import { glossaryData } from "../data/glossaryData";
import GlossaryContent from "../components/GlossaryContent";

export default function Glossary() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h1 className="text-4xl font-bold mb-4">AI Glossary</h1>
          <p className="text-xl">
            Your comprehensive guide to understanding AI terminology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <GlossaryContent glossaryData={glossaryData} />
      </div>
    </div>
  );
}
