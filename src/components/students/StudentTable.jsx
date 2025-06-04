import React from "react";

export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border border-gray-300 text-left">Name</th>
          <th className="p-2 border border-gray-300 text-left">Grade</th>
          <th className="p-2 border border-gray-300 text-left">Section</th>
          <th className="p-2 border border-gray-300 text-left">Email</th>
          <th className="p-2 border border-gray-300 text-left">Phone</th>
          <th className="p-2 border border-gray-300 text-left">DOB</th>
          <th className="p-2 border border-gray-300 text-left">Address</th>
          <th className="p-2 border border-gray-300 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 && (
          <tr>
            <td colSpan="8" className="p-4 text-center">
              No students found.
            </td>
          </tr>
        )}
        {students.map((student) => (
          <tr key={student.id} className="hover:bg-gray-50">
            <td className="p-2 border border-gray-300">{student.name}</td>
            <td className="p-2 border border-gray-300">{student.grade}</td>
            <td className="p-2 border border-gray-300">{student.section}</td>
            <td className="p-2 border border-gray-300">{student.email}</td>
            <td className="p-2 border border-gray-300">{student.phone}</td>
            <td className="p-2 border border-gray-300">{student.dob}</td>
            <td className="p-2 border border-gray-300">{student.address}</td>
            <td className="p-2 border border-gray-300 space-x-2">
              <button
                onClick={() => onEdit(student)}
                className="bg-yellow-400 px-2 py-1 rounded text-white hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="bg-red-600 px-2 py-1 rounded text-white hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
