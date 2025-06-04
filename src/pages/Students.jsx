import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import StudentFormModal from "../components/students/StudentFormModal";
import StudentFilter from "../components/students/StudentFilter";
import StudentTable from "../components/students/StudentTable";

const STUDENTS_API = "http://localhost:8080/api/students";
const GRADES_API = "http://localhost:8080/api/grades";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [gradeSections, setGradeSections] = useState([]);
  const [filters, setFilters] = useState({ name: "", grade: "", section: "" });
  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    axios.get(STUDENTS_API).then((res) => setStudents(res.data));
    axios.get(GRADES_API).then((res) => setGradeSections(res.data));
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      return (
        student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.grade === "" || student.grade === filters.grade) &&
        (filters.section === "" || student.section === filters.section)
      );
    });
  }, [students, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setShowModal(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios.delete(`${STUDENTS_API}/${id}`).then(() => {
        setStudents((prev) => prev.filter((s) => s.id !== id));
      });
    }
  };

  const handleFormSubmit = (formData, editingId) => {
    if (editingId) {
      // Update existing student
      axios.put(`${STUDENTS_API}/${editingId}`, formData).then((res) => {
        setStudents((prev) =>
          prev.map((s) => (s.id === editingId ? res.data : s))
        );
        setShowModal(false);
      });
    } else {
      // Add new student
      axios.post(STUDENTS_API, formData).then((res) => {
        setStudents((prev) => [...prev, res.data]);
        setShowModal(false);
      });
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </button>
      </div>

      <StudentFilter
        filters={filters}
        onChange={handleFilterChange}
        grades={[...new Set(gradeSections.map((gs) => gs.grade))]}
        sections={[...new Set(gradeSections.map((gs) => gs.section))]}
      />

      <StudentTable
        students={filteredStudents}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <StudentFormModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleFormSubmit}
        editingStudent={editingStudent}
        gradeSections={gradeSections}
      />
    </div>
  );
}
