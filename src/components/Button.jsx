import React from "react";
import { motion } from "framer-motion";

export default function Button({ title, onClick }) {
  return (
    <motion.button
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{
        scale: 1.1,
        rotate: [5, -5, 5, 0],
        transition: { rotate: { duration: 0.25 } },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="text-white bg-[#2D0EC6] p-1 px-3 rounded-[8px] flex justify-center items-center"
    >
      <p>{title}</p>
    </motion.button>
  );
}
