import React from "react";
import {
  UserGroupIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { label: "Students", href: "/students", icon: UserGroupIcon },
  { label: "Teachers", href: "/teachers", icon: AcademicCapIcon },
  { label: "Grades", href: "/grades", icon: ChartBarIcon },
  { label: "Reports", href: "/reports", icon: ClipboardDocumentListIcon },
];

export default function DashboardLayout({ children }) {
  const activePath = window.location.pathname;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-10 text-blue-700 tracking-tight flex items-center space-x-2">
          <AcademicCapIcon className="w-8 h-8 text-blue-500" />
          <span>School ERP</span>
        </h2>
        <nav className="flex flex-col space-y-2 text-gray-700">
          {sidebarLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className={`flex items-center px-3 py-2 rounded-lg transition font-medium ${
                activePath === href
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Top navbar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <svg
                className="w-6 h-6 text-gray-600 hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 17h5l-1.405-1.405M19 13v-2a7 7 0 10-14 0v2m14 0H5"></path>
              </svg>
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 font-medium">Admin</span>
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-200"
              />
            </div>
          </div>
        </header>

        {/* Dashboard cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-xl shadow flex items-center space-x-4">
            <UserGroupIcon className="w-10 h-10 text-white opacity-80" />
            <div>
              <h2 className="text-lg font-semibold text-white">Total Students</h2>
              <p className="mt-2 text-3xl font-bold text-white">120</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-300 p-6 rounded-xl shadow flex items-center space-x-4">
            <AcademicCapIcon className="w-10 h-10 text-white opacity-80" />
            <div>
              <h2 className="text-lg font-semibold text-white">Active Grades</h2>
              <p className="mt-2 text-3xl font-bold text-white">8</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-red-400 p-6 rounded-xl shadow flex items-center space-x-4">
            <ClipboardDocumentListIcon className="w-10 h-10 text-white opacity-80" />
            <div>
              <h2 className="text-lg font-semibold text-white">Pending Reports</h2>
              <p className="mt-2 text-3xl font-bold text-white">3</p>
            </div>
          </div>
        </section>

        {/* Page content */}
        {children}
      </main>
    </div>
  );
}