import React, { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", grade: "10", section: "A" },
    { id: 2, name: "Bob Smith", grade: "9", section: "B" },
    { id: 3, name: "Charlie Brown", grade: "11", section: "A" },
  ]);

  const [form, setForm] = useState({ name: "", grade: "", section: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      ...form,
    };
    setStudents([...students, newStudent]);
    setForm({ name: "", grade: "", section: "" }); // reset form
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-6 space-y-4 bg-white p-4 shadow rounded"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="border p-2 flex-1 rounded"
            required
          />
          <input
            type="text"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            placeholder="Grade"
            className="border p-2 w-32 rounded"
            required
          />
          <input
            type="text"
            name="section"
            value={form.section}
            onChange={handleChange}
            placeholder="Section"
            className="border p-2 w-32 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>
      </form>

      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Grade</th>
            <th className="py-2 px-4 border-b">Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.grade}</td>
              <td className="py-2 px-4 border-b">{student.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
