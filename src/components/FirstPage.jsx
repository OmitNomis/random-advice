import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

function FirstPage({ toggleScreen }) {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, duration: 0.25 },
      }}
      transition={{ duration: 0.5 }}
      exit={{ y: "-100vh", opacity: 0 }}
      className=" min-h-[100vh] w-full flex flex-col justify-center items-center px-5"
    >
      <div className="flex flex-col items-center justify-center min-h-[100vh]s text-[#2D0EC6] text-[16px] sm:text-[22px] z-10">
        <h1 className="font-semibold mb-2 text-[18px] sm:text-[24px]  w-full text-center">
          Feeling unsure? Let us give you a questionable decision.
        </h1>
        <h2 className=" mb-2 w-full text-center">Advice so bad, it’s good.</h2>
        <h2 className=" mb-11 w-full text-center">
          Ready for taste of mediocrity? Press the button for a little surprise.
        </h2>
        <div>
          <Button title={"Why not?"} onClick={toggleScreen} />
        </div>
      </div>
    </motion.div>
  );
}

export default FirstPage;
