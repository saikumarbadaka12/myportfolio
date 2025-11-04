import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // optional: npm install emailjs-com

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS usage (replace serviceID, templateID, userID)
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          alert("Message sent — thanks!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send, try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 text-center mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl grid gap-5"
        >
          <input
            name="from_name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Your Name"
          />

          <input
            name="reply_to"
            type="email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Your Email"
          />

          <textarea
            name="message"
            rows="5"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            placeholder="Message"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white py-3 rounded-lg font-medium shadow-lg transition-all duration-200"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Or email me directly at{" "}
          <a
            className="text-indigo-500 dark:text-indigo-400 underline hover:text-indigo-600"
            href="mailto:saikumarbadaka2@gmail.com"
          >
            saikumarbadaka2@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
