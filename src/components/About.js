import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-indigo-400 mb-6"
        >
          Profile Summary
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Frontend Developer specializing in building responsive, high-performance web applications using React.js and modern JavaScript (ES6+). 
          Passionate about crafting clean, maintainable code, translating UI/UX designs into dynamic user experiences, and delivering optimized solutions that enhance performance and accessibility. 
          Skilled in collaborating with cross-functional teams and integrating RESTful APIs with modern frontend workflows.
        </motion.p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow">
            <h4 className="font-semibold mb-3">Key Highlights</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Proficient in React.js and modular component architecture</li>
              <li>Expertise in responsive design and cross-browser compatibility</li>
              <li>Strong understanding of RESTful API integration and version control (Git/GitHub)</li>
              <li>Focus on performance optimization, clean UI, and accessibility</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow">
            <h4 className="font-semibold mb-3">Development Tools & Workflow</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>VS Code, Chrome DevTools, Postman</li>
              <li>Tailwind CSS, Framer Motion, React Hooks</li>
              <li>Agile workflow with version control and code reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
