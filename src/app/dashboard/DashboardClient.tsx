"use client";

import { useState } from "react";
import { FileText, FileVideo, Search, Filter } from "lucide-react";

export default function DashboardClient({ presentations }: { presentations: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filtering
  const filtered = presentations.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || item.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  // Sorting
  const sortedAndFiltered = filtered.sort((a, b) => {
    if (sortBy === "title-asc") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "title-desc") {
      return b.title.localeCompare(a.title);
    }
    
    // Default to newest (we use string comparison for dates or assume it's created_at ISO)
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return sortBy === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Extract unique types for the filter dropdown
  const uniqueTypes = Array.from(new Set(presentations.map((p) => p.type.toLowerCase())));

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FileText className="text-teal-400" />
          Your Documents & Presentations
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white w-full sm:w-64 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Filter Type */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 appearance-none w-full sm:w-32"
            >
              <option value="all">All Types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>{t.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 w-full sm:w-auto"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>
      </div>

      {sortedAndFiltered.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700 border-dashed">
          <p className="text-gray-400">No documents found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setFilterType("all"); }}
            className="mt-4 text-sky-400 hover:text-sky-300 text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAndFiltered.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.type.toLowerCase() === 'spreadsheet' || item.type.toLowerCase() === 'pdf' ? '_blank' : '_self'}
              rel="noreferrer"
              className="block p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-sky-500/50 hover:bg-gray-800/80 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-900/50 transition-colors">
                  {item.type.toLowerCase() === 'web' ? (
                    <FileVideo className="text-sky-400" size={24} />
                  ) : (
                    <FileText className="text-teal-400" size={24} />
                  )}
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                  {item.type.toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2 truncate" title={item.title}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
