import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">
              Sai Kumar Badaka
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            A passionate <strong>Frontend Developer</strong> dedicated to crafting
            elegant, responsive, and high-performance web experiences using
            modern technologies like <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>,
            and <strong>Tailwind CSS</strong>. I love turning creative ideas into
            clean, maintainable, and scalable digital solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
           <motion.a
              href="/Saikumar_CV.pdf"
              download="SaiKumar_Badaka_CV.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99,102,241,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md transition-all"
            >
              Download Resume
            </motion.a>


            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-indigo-400 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-semibold"
            >
              See Projects
            </motion.a>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            className="mt-8 flex flex-wrap gap-6 items-center text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Phone */}
            <motion.a
              href="tel:+918639533802"
              whileHover={{ scale: 1.1, color: "#6366f1" }}
              className="flex items-center gap-2"
            >
              <FaPhoneAlt /> <span>+91 8639533802</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:saikumarbadaka2@gmail.com"
              whileHover={{ scale: 1.1, color: "#6366f1" }}
              className="flex items-center gap-2"
            >
              <FaEnvelope /> <span>saikumarbadaka2@gmail.com</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sai-kumar-badaka-114377154/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#6366f1" }}
              className="flex items-center gap-2"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-lg opacity-50"></div>
            <motion.img
              src={profile}
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
