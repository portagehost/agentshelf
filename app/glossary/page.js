export default function Glossary() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">AI Glossary for Real Estate</h1>
        <p className="text-lg text-gray-600 mb-8">
          Essential AI and technology terms that every real estate professional
          should know.
        </p>

        <div className="space-y-6">
          {/* Sample glossary entries */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold">
              Artificial Intelligence (AI)
            </h3>
            <p className="text-gray-600 mt-2">
              Technology that enables machines to perform tasks that typically
              require human intelligence, such as learning, reasoning, and
              problem-solving.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold">Machine Learning (ML)</h3>
            <p className="text-gray-600 mt-2">
              A subset of AI that allows computers to learn and improve from
              data without being explicitly programmed for each task.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold">Virtual Staging</h3>
            <p className="text-gray-600 mt-2">
              Using AI and digital technology to add furniture and décor to
              photos of empty properties, helping buyers visualize the space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
