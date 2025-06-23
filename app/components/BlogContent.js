"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function BlogContent({ posts }) {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  // Get unique categories and levels for the dropdown options
  const categories = [...new Set(posts.map((post) => post.category))];
  const levels = [...new Set(posts.map((post) => post.skillLevel))];

  // Filter posts based on search query and filters
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || post.category === categoryFilter;
    const matchesLevel = levelFilter === "" || post.skillLevel === levelFilter;

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

  return (
    <div>
      {/* Search and Filters Section */}
      <div className="mb-12 bg-white rounded-lg shadow-md p-6">
        {/* Search Box */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
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

      {/* Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              {/* Featured Image */}
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Date and Category with Icons */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Tag size={16} className="mr-1" />
                  <span>{post.category}</span>
                </div>

                {/* Skill Level Badge */}
                <div className="mb-4 flex">
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full ${getSkillLevelColor(
                      post.skillLevel
                    )}`}>
                    {post.skillLevel}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 flex-grow">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6">{post.excerpt}</p>

                {/* Author and Read Button */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                      <Image
                        src={post.authorAvatar}
                        alt={post.authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-gray-700 text-sm">
                      {post.authorName}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    Read <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            No articles found matching your criteria.
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
