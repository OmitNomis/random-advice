import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "../assets/icons/uparrow.svg";
import Button from "./Button";

function SecondPage({ toggleScreen, advice, newAdvice }) {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, duration: 0.25 },
      }}
      transition={{ duration: 0.5 }}
      exit={{ y: "100vh", opacity: 0 }}
      className=" min-h-[100vh] w-full flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center min-h-[100vh]s text-[#2D0EC6] text-[22px] z-10">
        <h1 className="font-semibold mb-2 text-[24px]  w-full text-center">
          {advice}
        </h1>
        <h2 className=" mb-2 text-[18px] w-full text-center">
          Think this advice is 'meh'? Test your luck again!
        </h2>
        <div>
          <Button title={"Another Spin"} onClick={newAdvice} />
        </div>
      </div>
    </motion.div>
  );
}

export default SecondPage;
