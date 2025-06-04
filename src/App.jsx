import React from "react";
import Students from "./pages/Students";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

function Dashboard() {
  return <div>Welcome to the School ERP Dashboard!</div>;
}

// function Students() {
//   return <div>Manage your students here.</div>;
// }

function Teachers() {
  return <div>Manage your teachers here.</div>;
}

function Classes() {
  return <div>Manage classes here.</div>;
}

function Exams() {
  return <div>Manage exams here.</div>;
}

export default function App() {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/students", label: "Student Management" },
    { path: "/teachers", label: "Teacher Management" },
    { path: "/classes", label: "Class Management" },
    { path: "/exams", label: "Exam Management" },
  ];

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6 font-bold text-xl border-b">School ERP</div>
          <nav className="mt-6 flex flex-col">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-6 py-3 hover:bg-gray-200 focus:outline-none ${
                    isActive ? "bg-gray-300 font-semibold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/exams" element={<Exams />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
