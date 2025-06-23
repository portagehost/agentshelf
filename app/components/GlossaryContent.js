"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

export default function GlossaryContent({ glossaryData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [expandedTerms, setExpandedTerms] = useState({});

  // Generate alphabet for letter filter
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter terms based on search and letter
  const filteredTerms = glossaryData.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLetter =
      selectedLetter === "All" ||
      term.term.charAt(0).toUpperCase() === selectedLetter;

    return matchesSearch && matchesLetter;
  });

  // Sort terms alphabetically
  const sortedTerms = filteredTerms.sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  // Toggle term expansion
  const toggleTerm = (termId) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [termId]: !prev[termId],
    }));
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search glossary terms..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Letter Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter by Letter</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedLetter("All")}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              selectedLetter === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}>
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                selectedLetter === letter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {sortedTerms.length > 0 ? (
          sortedTerms.map((term) => (
            <div key={term.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleTerm(term.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <h3 className="text-lg font-semibold">{term.term}</h3>
                {expandedTerms[term.id] ? (
                  <ChevronUp className="text-gray-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>

              {expandedTerms[term.id] && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{term.definition}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              No terms found matching your criteria.
            </p>
            <button
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              onClick={() => {
                setSearchQuery("");
                setSelectedLetter("All");
              }}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
