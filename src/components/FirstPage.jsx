import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

function FirstPage({ toggleScreen }) {
  return (
    <div className=" min-h-[100vh] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-[100vh]s text-[#2D0EC6] text-[22px] z-10">
        <motion.h1
          key={"h1"}
          initial={{ y: "-100vh", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ y: "100vh", opacity: 0.5 }}
          className="font-semibold mb-2 text-[24px]  w-full text-center"
        >
          Feeling unsure? Let us give you a questionable decision.
        </motion.h1>
        <motion.h2
          key={"h2"}
          initial={{ y: "-100vh", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" mb-2 w-full text-center"
        >
          Advice so bad, it’s good.
        </motion.h2>
        <motion.h2
          key={"h22"}
          initial={{ y: "-100vh", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className=" mb-11 w-full text-center"
        >
          Ready for taste of mediocrity? Press the button for a little surprise.
        </motion.h2>
        <motion.div
          key={"button"}
          initial={{ y: "-100vh", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Button title={"Why not?"} onClick={toggleScreen} />
        </motion.div>
      </div>
    </div>
  );
}

export default FirstPage;