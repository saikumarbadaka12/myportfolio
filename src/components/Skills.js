import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Framer Motion",
  "Responsive Design",
  "Performance Optimization",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-transparent dark:from-gray-900 dark:via-gray-800"
    >
      {/* Subtle floating gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-indigo-400/30 via-pink-400/20 to-purple-400/30 rounded-full filter blur-3xl -top-20 -left-20 animate-[float_6s_ease-in-out_infinite]"
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 via-indigo-400/20 to-purple-500/20 rounded-full filter blur-3xl -bottom-32 -right-32 animate-[float2_8s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-10"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, rotate: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow:
                  "0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(236,72,153,0.3)",
              }}
              className="px-6 py-3 text-base font-medium rounded-full
                bg-gradient-to-r from-indigo-500/10 to-pink-500/10
                text-gray-800 dark:text-gray-200
                border border-indigo-400/30 dark:border-pink-400/20
                backdrop-blur-md shadow-md hover:shadow-xl
                transition-all duration-300 cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tailwind keyframe animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(20px) }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(-25px) }
          }
          .animate-[float_6s_ease-in-out_infinite] { animation: float 6s ease-in-out infinite; }
          .animate-[float2_8s_ease-in-out_infinite] { animation: float2 8s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
