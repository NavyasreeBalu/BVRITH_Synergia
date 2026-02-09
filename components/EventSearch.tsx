import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { EventCategory } from '../types';

interface EventSearchProps {
  onSearch: (query: string) => void;
  onFilterCategory: (category: EventCategory | 'all') => void;
  activeCategory: EventCategory | 'all';
  searchQuery: string;
}

const EventSearch: React.FC<EventSearchProps> = ({ 
  onSearch, 
  onFilterCategory, 
  activeCategory,
  searchQuery 
}) => {
  const categories = [
    { value: 'all', label: 'All Events' },
    { value: EventCategory.TECHNICAL, label: 'Technical' },
    { value: EventCategory.CULTURAL, label: 'Cultural' },
    { value: EventCategory.WORKSHOPS, label: 'Workshops' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24"
    >
      {/* Search Bar */}
      <div className="relative mb-6 md:mb-8">
        <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-fuchsia-400" />
        <input
          type="text"
          placeholder="Search events by name, host, or description..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 md:pl-16 pr-12 md:pr-16 py-5 md:py-7 rounded-2xl md:rounded-3xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 focus:bg-white/15 transition-all text-base md:text-lg font-medium shadow-xl"
        />
        {searchQuery && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onFilterCategory(cat.value as EventCategory | 'all')}
            className={`px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-base uppercase tracking-wider transition-all ${
              activeCategory === cat.value
                ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-2xl shadow-fuchsia-500/50 scale-105'
                : 'bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:scale-105'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default EventSearch;
