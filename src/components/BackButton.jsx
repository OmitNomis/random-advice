import React from "react";
import Arrow from "../assets/icons/uparrow.svg";
import { AnimatePresence, motion } from "framer-motion";

function BackButton({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -500 }}
      animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, scale: 0, y: -500, transition: { duration: 1 } }}
      whileHover={{
        y: [-5, -10, -5, -10, -5, 0, 0, 0, 0, 0, 0, 0, 0],
        transition: { repeat: Infinity, duration: 1.5 },
      }}
      className=" absolute left-[5%] top-[5%] z-20 cursor-pointer"
      onClick={onClick}
    >
      <img src={Arrow} alt="" />
    </motion.div>
  );
}

export default BackButton;
