import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Background from "./assets/images/background.jfif";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  const [showAdvice, setShowAdvice] = useState(false);
  const [loading, setLoading] = useState(false);
  const advice = useRef(null);
  useEffect(() => {
    getNewAdvice();
  }, [showAdvice]);

  const getNewAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice.current = data.slip.advice;
  };
  function toggleShowAdvice() {
    setShowAdvice(!showAdvice);
  }
  const showNewAdvice = () => {
    setLoading(true);
    getNewAdvice();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <img
        src={Background}
        alt=""
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        draggable={false}
        className="fixed h-full w-full opacity-50 -z-1"
      />
      <AnimatePresence mode="wait" initial="false">
        {showAdvice === false ? (
          <FirstPage toggleScreen={toggleShowAdvice} key="first" />
        ) : (
          loading === false && (
            <SecondPage
              toggleScreen={showNewAdvice}
              key="second"
              advice={advice.current}
            />
          )
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
