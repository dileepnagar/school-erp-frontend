import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ModalWrapper from "../UI/ModalWrapper";

const StudentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  grade: Yup.string().required("Grade is required"),
  section: Yup.string().required("Section is required"),
  email: Yup.string().email("Invalid email format"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be exactly 10 digits")
    .nullable()
    .notRequired(),
  dob: Yup.date()
    .max(new Date(), "DOB must be in the past")
    .nullable()
    .notRequired(),
  guardianName: Yup.string(),
  address: Yup.string(),
});

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
      };

  return (
    <ModalWrapper show={show} onClose={onClose}>
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {editingStudent ? "Edit Student" : "Add New Student"}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={StudentSchema}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values, editingStudent?.id || null);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name<span className="text-red-600">*</span>
                </label>
                <Field
                  name="name"
                  placeholder="Enter name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="grade" className="block font-medium mb-1">
                    Grade<span className="text-red-600">*</span>
                  </label>
                  <Field
                    as="select"
                    name="grade"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Grade</option>
                    {uniqueGrades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="grade"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="section" className="block font-medium mb-1">
                    Section<span className="text-red-600">*</span>
                  </label>
                  <Field
                    as="select"
                    name="section"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Section</option>
                    {uniqueSections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="section"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-1">
                  Phone
                </label>
                <Field
                  name="phone"
                  placeholder="Enter 10 digit phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block font-medium mb-1">
                  Date of Birth
                </label>
                <Field
                  name="dob"
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="guardianName"
                  className="block font-medium mb-1"
                >
                  Guardian Name
                </label>
                <Field
                  name="guardianName"
                  placeholder="Enter guardian name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="guardianName"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="address" className="block font-medium mb-1">
                  Address
                </label>
                <Field
                  name="address"
                  as="textarea"
                  rows="3"
                  placeholder="Enter address"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {editingStudent ? "Update" : "Add"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
}
