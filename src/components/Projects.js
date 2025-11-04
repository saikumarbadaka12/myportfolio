import React, { useState } from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 'hrbp',
    title: "HRBP - Human Resource Basic Payroll System",
    technologies: "React.js, React Native, Java, Spring Boot, MySQL",
    description: "Comprehensive HRBP system: attendance, leave, payroll, reports. Cross-platform mobile app and React web portal.",
    contributions: [
      "Cross-platform mobile app for employee self-service (React Native).",
      "Interactive dashboards for HR personnel and payroll.",
      "Performance optimization, lazy loading, RESTful APIs (Axios/Fetch)."
    ],
    image: ""
  },
  {
    id: 'erms',
    title: "ERMS - Employee Role Management System",
    technologies: "React.js, React Native, Spring Boot, MySQL",
    description: "Web-based Employee Role Management system with multi-level role-based logins and dashboards.",
    contributions: [
      "Role-based access control (RBAC) using React.",
      "Data visualization with charts & dynamic dashboards.",
      "State management with context / secure route handling."
    ],
    image: ""
  },
  {
    id: 'school',
    title: "School Management System (Web & Mobile)",
    technologies: "React.js, React Native, Java, Spring Boot, MySQL",
    description: "Complete school management for academics, attendance, transport, fees, and reports with role-based access.",
    contributions: [
      "Dynamic dashboards for principals & admins.",
      "React Native apps for teachers & parents with attendance & notices.",
      "Transport and inventory modules, REST API integration."
    ],
    image: ""
  }
];

export default function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-indigo-400 text-center mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((p) => (
            <motion.div
  key={p.id}
  whileHover={{
    scale: 1.05,
    rotate: 1,
    boxShadow:
      "0 10px 25px rgba(99,102,241,0.2), 0 0 30px rgba(236,72,153,0.15)",
  }}
  className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-indigo-400/20
             p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
>
  {/* Title with same color in light & dark */}
  <h3 className="text-xl font-semibold text-indigo-500 mb-2">{p.title}</h3>

  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">{p.technologies}</div>
  <div className="flex gap-3">
    {/* Button with same colors in light & dark */}
    <button
      onClick={() => setModal(p)}
      className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
    >
      Details
    </button>
  </div>
</motion.div>

          ))}
        </div>

        {/* Modal */}
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl"
>
  <div className="flex justify-between items-start">
    {/* Keep title color same in dark mode */}
    <h3 className="text-xl font-bold text-indigo-500">{modal.title}</h3>

    <button
      onClick={() => setModal(null)}
      className="text-gray-600 hover:text-gray-900 transition"
    >
      Close
    </button>
  </div>

  <p className="mt-3 text-gray-700">{modal.description}</p>

  <div className="mt-4">
    <h4 className="font-semibold text-gray-800">Key Contributions</h4>
    <ul className="list-disc pl-5 mt-2 text-gray-700">
      {modal.contributions.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
  </div>

  <div className="mt-6 flex justify-end">
    <button
      onClick={() => setModal(null)}
      className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
    >
      Close
    </button>
  </div>
</motion.div>

          </motion.div>
        )}
      </div>
    </section>
  );
}
