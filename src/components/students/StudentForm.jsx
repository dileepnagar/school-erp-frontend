// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const StudentForm = ({ initialValues, onSubmit, onCancel }) => {
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, "Name must be at least 3 characters")
//       .required("Name is required"),
//     grade: Yup.string().required("Grade is required"),
//     section: Yup.string().required("Section is required"),
//     email: Yup.string().email("Invalid email format"),
//     phone: Yup.string()
//       .matches(/^\d{10}$/, "Phone must be 10 digits")
//       .nullable(),
//   });

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-6">
//         {initialValues.id ? "Edit Student" : "Add Student"}
//       </h2>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           onSubmit(values);
//           setSubmitting(false);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block font-medium mb-1">
//                 Name
//               </label>
//               <Field
//                 name="name"
//                 type="text"
//                 placeholder="Enter student name"
//                 className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-600 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="grade" className="block font-medium mb-1">
//                 Grade
//               </label>
//               <Field
//                 as="select"
//                 name="grade"
//                 className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option value="">Select Grade</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 {/* Add more grades */}
//               </Field>
//               <ErrorMessage
//                 name="grade"
//                 component="div"
//                 className="text-red-600 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="section" className="block font-medium mb-1">
//                 Section
//               </label>
//               <Field
//                 as="select"
//                 name="section"
//                 className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option value="">Select Section</option>
//                 <option value="A">A</option>
//                 <option value="B">B</option>
//                 {/* Add more sections */}
//               </Field>
//               <ErrorMessage
//                 name="section"
//                 component="div"
//                 className="text-red-600 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block font-medium mb-1">
//                 Email
//               </label>
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Enter email (optional)"
//                 className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-600 text-sm mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="phone" className="block font-medium mb-1">
//                 Phone
//               </label>
//               <Field
//                 name="phone"
//                 type="text"
//                 placeholder="10 digit phone (optional)"
//                 className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <ErrorMessage
//                 name="phone"
//                 component="div"
//                 className="text-red-600 text-sm mt-1"
//               />
//             </div>

//             <div className="flex justify-end space-x-3 pt-4">
//               <button
//                 type="button"
//                 onClick={onCancel}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 {initialValues.id ? "Update" : "Add"}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default StudentForm;
