import React, { useState } from "react";
import Background from "./assets/images/background.jfif";
import { motion } from "framer-motion";
import Button from "./components/Button";

function App() {
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <>
      <div className=" min-h-[100vh] w-full flex flex-col justify-center items-center">
        <img
          src={Background}
          alt=""
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          draggable={false}
          className="fixed h-full w-full opacity-50 -z-1"
        />

        <div className="flex flex-col items-center justify-center min-h-[100vh]s text-[#2D0EC6] text-[22px] z-10">
          <motion.h1
            initial={{ y: "-100vh", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-semibold mb-2 text-[24px]"
          >
            Feeling unsure? Let us give you a questionable decision.
          </motion.h1>
          <motion.h2
            initial={{ y: "-100vh", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" mb-2"
          >
            Advice so bad, it’s good.
          </motion.h2>
          <motion.h2
            initial={{ y: "-100vh", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className=" mb-11"
          >
            Ready for taste of mediocrity? Press the button for a little
            surprise.
          </motion.h2>
          <motion.div
            initial={{ y: "-100vh", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Button title={"Why not?"} />
          </motion.div>
        </div>
      </div>
      {showAdvice === true && (
        <div className="min-h-[100vh] w-full flex flex-col justify-center items-center"></div>
      )}
    </>
  );
}

export default App;
