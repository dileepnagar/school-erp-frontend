import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  UserIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  PaperClipIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function StudentForm({
  initialValues,
  onSubmit,
  onCancel,
  uniqueGrades,
  uniqueSections,
  isEdit,
}) {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    grade: Yup.string().required("Grade is required"),
    section: Yup.string().required("Section is required"),
    email: Yup.string().email("Invalid email format"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone must be 10 digits")
      .nullable()
      .notRequired(),
    dob: Yup.date().max(new Date(), "DOB must be in the past").nullable().notRequired(),
    guardianName: Yup.string(),
    address: Yup.string(),
    aadharNumber: Yup.string()
      .matches(/^\d{12}$/, "Aadhar number must be 12 digits")
      .required("Aadhar number is required"),
    aadhar: Yup.mixed().nullable().notRequired(),
    district: Yup.string().required("District is required"),
  });

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values, errors, touched }) => (
          <Form className="space-y-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-base font-bold text-primary mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter student name"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.name && touched.name
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                  </div>
                  <ErrorMessage name="name" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* Gender */}
                <div>
                  <label className="block font-medium mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <Field type="radio" name="gender" value="Male" className="accent-blue-600" />
                      Male
                    </label>
                    <label className="flex items-center gap-2">
                      <Field type="radio" name="gender" value="Female" className="accent-pink-600" />
                      Female
                    </label>
                    <label className="flex items-center gap-2">
                      <Field type="radio" name="gender" value="Other" className="accent-green-600" />
                      Other
                    </label>
                  </div>
                  <ErrorMessage name="gender" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* DOB */}
                <div>
                  <label htmlFor="dob" className="block font-medium mb-1">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      name="dob"
                      type="date"
                      placeholder="dd/mm/yyyy"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.dob && touched.dob
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                  </div>
                  <ErrorMessage name="dob" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* District */}
                <div>
                  <label htmlFor="district" className="block font-medium mb-1">
                    District <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="district"
                    type="text"
                    placeholder="Enter district"
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                      errors.district && touched.district
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  />
                  <ErrorMessage name="district" component="div" className="text-red-600 text-xs mt-1" />
                </div>
              </div>
            </div>

            {/* Academic Info */}
            <div>
              <h3 className="text-base font-bold text-primary mb-2">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Grade */}
                <div>
                  <label htmlFor="grade" className="block font-medium mb-1">
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <UserGroupIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      as="select"
                      name="grade"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.grade && touched.grade
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    >
                      <option value="">Select Grade</option>
                      {uniqueGrades.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <ErrorMessage name="grade" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* Section */}
                <div>
                  <label htmlFor="section" className="block font-medium mb-1">
                    Section <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <UserGroupIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      as="select"
                      name="section"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.section && touched.section
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    >
                      <option value="">Select Section</option>
                      {uniqueSections.map((section) => (
                        <option key={section} value={section}>
                          {section}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <ErrorMessage name="section" component="div" className="text-red-600 text-xs mt-1" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-bold text-primary mb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter email (optional)"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.email && touched.email
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-600 text-xs mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Optional</p>
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-medium mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <DevicePhoneMobileIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      name="phone"
                      type="text"
                      placeholder="10 digit phone (optional)"
                      className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 pl-10 transition ${
                        errors.phone && touched.phone
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-primary"
                      }`}
                    />
                  </div>
                  <ErrorMessage name="phone" component="div" className="text-red-600 text-xs mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Optional</p>
                </div>
              </div>
            </div>

            {/* Guardian & Address */}
            <div>
              <h3 className="text-base font-bold text-primary mb-2">Guardian & Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Guardian Name */}
                <div>
                  <label htmlFor="guardianName" className="block font-medium mb-1">
                    Guardian Name
                  </label>
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <Field
                      name="guardianName"
                      placeholder="Enter guardian name"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pl-10 transition"
                    />
                  </div>
                  <ErrorMessage name="guardianName" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* Address */}
                <div className="xl:col-span-2">
                  <label htmlFor="address" className="block font-medium mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <HomeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    <Field
                      name="address"
                      as="textarea"
                      rows="2"
                      placeholder="Enter address"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pl-10 transition"
                    />
                  </div>
                  <ErrorMessage name="address" component="div" className="text-red-600 text-xs mt-1" />
                </div>
              </div>
            </div>

            {/* Aadhar Details */}
            <div>
              <h3 className="text-base font-bold text-primary mb-2">Aadhar Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Aadhar Number */}
                <div>
                  <label htmlFor="aadharNumber" className="block font-medium mb-1">
                    Aadhar Number <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="aadharNumber"
                    type="text"
                    placeholder="Enter 12 digit Aadhar number"
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                      errors.aadharNumber && touched.aadharNumber
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  />
                  <ErrorMessage name="aadharNumber" component="div" className="text-red-600 text-xs mt-1" />
                </div>
                {/* Aadhar Attachment */}
                <div className="xl:col-span-2">
                  <label htmlFor="aadhar" className="block font-medium mb-1">
                    Aadhar ID Attachment
                  </label>
                  <div className="relative">
                    <PaperClipIcon className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto pointer-events-none" />
                    <input
                      id="aadhar"
                      name="aadhar"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pl-10 transition file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700"
                      onChange={(event) => {
                        setFieldValue("aadhar", event.currentTarget.files[0]);
                      }}
                    />
                    {values.aadhar && (
                      <span className="block text-xs text-gray-500 mt-1">{values.aadhar.name}</span>
                    )}
                  </div>
                  <ErrorMessage name="aadhar" component="div" className="text-red-600 text-xs mt-1" />
                  <p className="text-xs text-gray-400 mt-1">Accepted formats: PDF, JPG, PNG</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-4 sticky bottom-0 bg-white z-10">
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg text-gray-700 font-semibold transition"
              >
                <XCircleIcon className="w-5 h-5 mr-2" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {isSubmitting ? (
                  <>
                    <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {isEdit ? "Update" : "Add"}
                  </>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
