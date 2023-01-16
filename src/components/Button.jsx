import React from "react";
import { motion } from "framer-motion";

export default function Button({ title }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-white bg-[#2D0EC6] p-1 px-3 rounded-[8px] flex justify-center items-center"
    >
      <p>{title}</p>
    </motion.button>
  );
}
