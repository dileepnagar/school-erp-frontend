import React, { useEffect, useState } from "react";
import ModalWrapper from "../UI/ModalWrapper";

export default function StudentFormModal({
  show,
  onClose,
  onSubmit,
  editingStudent,
  gradeSections,
}) {
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

  const [errors, setErrors] = useState({});

  const uniqueGrades = [...new Set(gradeSections.map((gs) => gs.grade))];
  const uniqueSections = [...new Set(gradeSections.map((gs) => gs.section))];

  useEffect(() => {
    if (editingStudent) {
      setForm({
        name: editingStudent.name,
        grade: editingStudent.grade,
        section: editingStudent.section,
        email: editingStudent.email || "",
        phone: editingStudent.phone || "",
        dob: editingStudent.dob || "",
        address: editingStudent.address || "",
        guardianName: editingStudent.guardianName || "",
      });
    } else {
      resetForm();
    }
  }, [editingStudent, show]);

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
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    const newErrors = { ...errors };

    switch (name) {
      case "name":
        newErrors.name =
          value.length < 3 ? "Name must be at least 3 characters" : "";
        break;
      case "grade":
        newErrors.grade = !value ? "Grade is required" : "";
        break;
      case "section":
        newErrors.section = !value ? "Section is required" : "";
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
          value && dobDate >= today ? "DOB must be in the past" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, editingStudent?.id || null);
  };

  return (
    <ModalWrapper show={show} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold">
          {editingStudent ? "Edit Student" : "Add New Student"}
        </h2>

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
            className="border p-2 rounded"
            required
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
            className="border p-2 rounded"
            required
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
            type="date"
            name="dob"
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

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="border p-2 rounded col-span-2 md:col-span-3"
          />
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingStudent ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}
