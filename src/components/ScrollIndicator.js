import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "skills", "projects", "contact"];

export default function ScrollIndicator() {
  const [active, setActive] = useState("about");

  // Observe sections to update active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 } // adjust threshold for when section is "active"
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:block z-40">
      <div className="flex flex-col gap-4 items-center">
        {/* Animated indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-1 h-4 bg-indigo-400 rounded"
        />

        {/* Dynamic section text */}
        <a href={`#${active}`} className="text-xs text-gray-500 capitalize">
          {active}
        </a>
      </div>
    </div>
  );
}
