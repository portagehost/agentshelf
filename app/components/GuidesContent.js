"use client";

import Link from "next/link";
import { Calendar, Tag, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function GuidesContent({ guides }) {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  // Get unique categories and levels for the dropdown options
  const categories = [...new Set(guides.map((guide) => guide.category))];
  const levels = [
    ...new Set(
      guides.map(
        (guide) => guide.skillLevel || getSkillLevelFromTags(guide.tags)
      )
    ),
  ];

  // Function to determine skill level from tags if not explicitly set
  function getSkillLevelFromTags(tags) {
    if (tags?.includes("beginner")) return "Beginner";
    if (tags?.includes("advanced")) return "Advanced";
    return "Intermediate";
  }

  // Filter guides based on search query and filters
  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || guide.category === categoryFilter;
    const guideLevel = guide.skillLevel || getSkillLevelFromTags(guide.tags);
    const matchesLevel = levelFilter === "" || guideLevel === levelFilter;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setLevelFilter("");
  };

  // Function to get the right color for skill level badges
  const getSkillLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to get guide image
  // Function to get guide gradient background
  const getGuideGradient = (index) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-blue-600",
      "from-purple-500 to-pink-600",
      "from-orange-500 to-red-600",
      "from-teal-500 to-cyan-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div>
      {/* Search and Filters Section */}
      <div className="mb-12 bg-white rounded-lg shadow-md p-6">
        {/* Search Box */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search guides..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category
            </label>
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Level
            </label>
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}>
                <option value="">All Levels</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => {
            const skillLevel =
              guide.skillLevel || getSkillLevelFromTags(guide.tags);
            return (
              <article
                key={guide.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Featured Image */}
                <div
                  className={`h-48 bg-gradient-to-r ${getGuideGradient(
                    index
                  )} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <div className="text-4xl mb-2">🤖</div>
                    <h3 className="text-sm font-medium opacity-90">AI Guide</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Date and Category with Icons */}
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{guide.date}</span>
                    <span className="mx-2">•</span>
                    <Tag size={16} className="mr-1" />
                    <span>{guide.category}</span>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="mb-4 flex">
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded-full ${getSkillLevelColor(
                        skillLevel
                      )}`}>
                      {skillLevel}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 flex-grow">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors">
                      {guide.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6">{guide.excerpt}</p>

                  {/* Author and Read Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-custom-blue flex items-center justify-center text-white text-sm font-medium mr-2">
                        JH
                      </div>
                      <span className="text-gray-700 text-sm">
                        Jason Hernandez
                      </span>
                    </div>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-custom-blue hover:text-blue-800 font-medium text-sm flex items-center">
                      Read <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            No guides found matching your criteria.
          </p>
          <button
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
