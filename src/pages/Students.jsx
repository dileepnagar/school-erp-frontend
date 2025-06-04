import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    grade: "",
    section: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    guardianName: "",
  });

  // const gradeOptions = ["1st", "2nd", "3rd", "4th", "5th"];
  // const sectionOptions = ["A", "B", "C", "D"];

  const [errors, setErrors] = useState({});

  const [editingId, setEditingId] = useState(null);

  const API = "http://localhost:8080/api/students";

  const [gradeSections, setGradeSections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/grades")
      .then((res) => setGradeSections(res.data))
      .catch((err) => console.error("Error fetching grade-section", err));
  }, []);

  useEffect(() => {
    fetchStudents();
  }, []);

  const uniqueGrades = [...new Set(gradeSections.map((gs) => gs.grade))];
  const uniqueSections = [...new Set(gradeSections.map((gs) => gs.section))];

  const fetchStudents = () => {
    axios
      .get(API)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate on change
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        newErrors.name =
          value.length < 3 ? "Name must be at least 3 characters" : "";
        break;
      case "grade":
        newErrors.grade = value.trim() === "" ? "Grade is required" : "";
        break;
      case "section":
        newErrors.section = value.trim() === "" ? "Section is required" : "";
        break;
      case "email":
        newErrors.email =
          value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? "Invalid email format"
            : "";
        break;

      case "phone":
        newErrors.phone =
          value && !/^\d{10}$/.test(value) ? "Phone must be 10 digits" : "";
        break;
      case "dob":
        const today = new Date();
        const dobDate = new Date(value);
        newErrors.dob =
          value && dobDate >= today ? "Date of birth must be in the past" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (form.name.trim().length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    if (!form.grade.trim()) {
      alert("Grade is required.");
      return;
    }

    if (!form.section.trim()) {
      alert("Section is required.");
      return;
    }

    if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      alert("Invalid email format.");
      return;
    }

    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      alert("Phone must be 10 digits.");
      return;
    }

    if (form.dob) {
      const dobDate = new Date(form.dob);
      const today = new Date();
      if (dobDate >= today) {
        alert("Date of birth must be in the past.");
        return;
      }
    }

    const payload = {
      ...form,
      dob: form.dob || null,
    };

    const request = editingId
      ? axios.put(`${API}/${editingId}`, payload)
      : axios.post(API, payload);

    request
      .then(() => {
        fetchStudents();
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (student) => {
    setForm({
      name: student.name,
      grade: student.grade,
      section: student.section,
      email: student.email || "",
      phone: student.phone || "",
      dob: student.dob || "",
      address: student.address || "",
      guardianName: student.guardianName || "",
    });
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      axios
        .delete(`${API}/${id}`)
        .then(() => fetchStudents())
        .catch((err) => console.error(err));
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      grade: "",
      section: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      guardianName: "",
    });
    setEditingId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-6 bg-white p-4 rounded shadow space-y-3"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
          {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
          <select
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Grade</option>
            {uniqueGrades.map((grade, idx) => (
              <option key={idx} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p className="text-red-600 text-xs">{errors.grade}</p>
          )}

          <select
            name="section"
            value={form.section}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Section</option>
            {uniqueSections.map((section, idx) => (
              <option key={idx} value={section}>
                {section}
              </option>
            ))}
          </select>
          {errors.section && (
            <p className="text-red-600 text-xs">{errors.section}</p>
          )}

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-xs">{errors.email}</p>
          )}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs">{errors.phone}</p>
          )}
          <input
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          {errors.dob && <p className="text-red-600 text-xs">{errors.dob}</p>}
          <input
            name="guardianName"
            value={form.guardianName}
            onChange={handleChange}
            placeholder="Guardian Name"
            className="border p-2 rounded"
          />
          {errors.guardianName && (
            <p className="text-red-600 text-xs">{errors.guardianName}</p>
          )}
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-600 text-xs">{errors.address}</p>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? "Update" : "Add"} Student
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <table className="w-full bg-white shadow rounded-lg text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Grade</th>
            <th className="p-2">Section</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">DOB</th>
            <th className="p-2">Guardian</th>
            <th className="p-2">Address</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 border-t">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.grade}</td>
              <td className="p-2">{student.section}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2">{student.dob}</td>
              <td className="p-2">{student.guardianName}</td>
              <td className="p-2">{student.address}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleEdit(student)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
