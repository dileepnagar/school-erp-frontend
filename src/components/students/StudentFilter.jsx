import React from "react";

export default function StudentFilter({ filters, onChange, grades, sections }) {
  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={onChange}
        placeholder="Search by name"
        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      />
      <select
        name="grade"
        value={filters.grade}
        onChange={onChange}
        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Grades</option>
        {grades.map((g) => (
          <option key={g} value={g}>
            Grade {g}
          </option>
        ))}
      </select>
      <select
        name="section"
        value={filters.section}
        onChange={onChange}
        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Sections</option>
        {sections.map((s) => (
          <option key={s} value={s}>
            Section {s}
          </option>
        ))}
      </select>
    </form>
  );
}
