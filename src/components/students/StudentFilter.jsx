import React from "react";
import { motion } from "framer-motion";

export default function StudentFilter({
  filters,
  onChange,
  grades,
  sections,
  onClear,
}) {
  return (
    <motion.div
      className="mb-4 flex flex-wrap gap-2 items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Filter by name"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.name}
        onChange={onChange}
      />

      <select
        name="grade"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.grade}
        onChange={onChange}
      >
        <option value="">All Grades</option>
        {grades.map((grade, idx) => (
          <option key={idx} value={grade}>
            {grade}
          </option>
        ))}
      </select>

      <select
        name="section"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.section}
        onChange={onChange}
      >
        <option value="">All Sections</option>
        {sections.map((section, idx) => (
          <option key={idx} value={section}>
            {section}
          </option>
        ))}
      </select>

      <button
        onClick={onClear}
        className="ml-2 px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        aria-label="Clear all filters"
        type="button"
      >
        Clear Filters
      </button>
    </motion.div>
  );
}
