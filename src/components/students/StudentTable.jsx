import React from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow border border-gray-100 mt-6">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-blue-50 sticky top-0 z-10">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Grade</th>
            <th className="py-3 px-4 text-left font-semibold">Section</th>
            <th className="py-3 px-4 text-left font-semibold">Email</th>
            <th className="py-3 px-4 text-left font-semibold">Phone</th>
            <th className="py-3 px-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan={6} className="py-6 text-center text-gray-400">
                No students found.
              </td>
            </tr>
          )}
          {students.map((student, idx) => (
            <tr
              key={student.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="py-3 px-4">{student.name}</td>
              <td className="py-3 px-4">{student.grade}</td>
              <td className="py-3 px-4">{student.section}</td>
              <td className="py-3 px-4">
                {student.email || <span className="text-gray-300">—</span>}
              </td>
              <td className="py-3 px-4">
                {student.phone || <span className="text-gray-300">—</span>}
              </td>
              <td className="py-3 px-4 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(student)}
                  className="p-2 rounded hover:bg-blue-100 text-blue-600 transition"
                  title="Edit"
                >
                  <PencilSquareIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="p-2 rounded hover:bg-red-100 text-red-600 transition"
                  title="Delete"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
