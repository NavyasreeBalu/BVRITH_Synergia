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
        <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-fuchsia-400" />
        <input
          type="text"
          placeholder="Search events by name, host, or description..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-16 md:pl-20 pr-16 md:pr-20 py-6 sm:py-7 md:py-9 rounded-2xl md:rounded-3xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 focus:bg-white/15 transition-all text-base sm:text-lg md:text-xl font-medium shadow-xl"
        />
        {searchQuery && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 md:gap-5 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onFilterCategory(cat.value as EventCategory | 'all')}
            className={`px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all ${
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
