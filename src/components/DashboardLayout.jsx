// import React from "react";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
//         <h2 className="text-2xl font-bold mb-8">School ERP</h2>
//         <nav className="flex flex-col space-y-4 text-gray-700">
//           <a href="/students" className="hover:text-blue-600 font-semibold">
//             Students
//           </a>
//           <a href="/teachers" className="hover:text-blue-600 font-semibold">
//             Teachers
//           </a>
//           <a href="/grades" className="hover:text-blue-600 font-semibold">
//             Grades
//           </a>
//           <a href="/reports" className="hover:text-blue-600 font-semibold">
//             Reports
//           </a>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-8">
//         {/* Top navbar */}
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <button className="relative">
//               <svg
//                 className="w-6 h-6 text-gray-600 hover:text-gray-900"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M15 17h5l-1.405-1.405M19 13v-2a7 7 0 10-14 0v2m14 0H5"></path>
//               </svg>
//               <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
//             </button>
//             <div className="flex items-center space-x-3">
//               <span className="text-gray-700 font-medium">Admin</span>
//               <img
//                 src="https://i.pravatar.cc/40"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//             </div>
//           </div>
//         </header>

//         {/* Dashboard cards */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold text-gray-700">
//               Total Students
//             </h2>
//             <p className="mt-2 text-3xl font-bold text-blue-600">120</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold text-gray-700">
//               Active Grades
//             </h2>
//             <p className="mt-2 text-3xl font-bold text-green-600">8</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold text-gray-700">
//               Pending Reports
//             </h2>
//             <p className="mt-2 text-3xl font-bold text-red-600">3</p>
//           </div>
//         </section>

//         {/* Page content */}
//         {children}
//       </main>
//     </div>
//   );
// }
