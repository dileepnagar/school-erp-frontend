import React from "react";
import ModalWrapper from "../UI/ModalWrapper";
import StudentForm from "./StudentForm";

export default function StudentFormModal({
  show,
  onClose,
  onSubmit,
  editingStudent,
  gradeSections,
}) {
  // Extract unique grades and sections for selects
  const uniqueGrades = [...new Set(gradeSections.map((gs) => gs.grade))];
  const uniqueSections = [...new Set(gradeSections.map((gs) => gs.section))];

  const initialValues = editingStudent
    ? {
        name: editingStudent.name || "",
        grade: editingStudent.grade || "",
        section: editingStudent.section || "",
        email: editingStudent.email || "",
        phone: editingStudent.phone || "",
        dob: editingStudent.dob || "",
        address: editingStudent.address || "",
        guardianName: editingStudent.guardianName || "",
        gender: editingStudent.gender || "",
        district: editingStudent.district || "",
        aadharNumber: editingStudent.aadharNumber || "",
        aadhar: editingStudent.aadhar || null,
      }
    : {
        name: "",
        grade: "",
        section: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        guardianName: "",
        gender: "",
        district: "",
        aadharNumber: "",
        aadhar: null,
      };

  return (
    <ModalWrapper show={show} onClose={onClose}>
      <div className="max-w-xl w-full p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {editingStudent ? "Edit Student" : "Add New Student"}
        </h2>
        <StudentForm
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values, editingStudent?.id || null)}
          onCancel={onClose}
          uniqueGrades={uniqueGrades}
          uniqueSections={uniqueSections}
          isEdit={!!editingStudent}
        />
      </div>
    </ModalWrapper>
  );
}
