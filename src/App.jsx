import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Background from "./assets/images/background.jfif";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import BackButton from "./components/BackButton";

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

    fetch("https://askbuddha.ai/api/chat", {
      method: "POST",
      body: JSON.stringify({
        text: "hi",
        chats: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  function toggleShowAdvice() {
    setShowAdvice(!showAdvice);
  }
  const showNewAdvice = () => {
    setLoading(true);
    getNewAdvice();
    setTimeout(() => {
      setLoading(false);
    }, 750);
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
      <AnimatePresence>
        {showAdvice === true && <BackButton onClick={toggleShowAdvice} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showAdvice === false ? (
          <FirstPage toggleScreen={toggleShowAdvice} key="first" />
        ) : (
          loading === false && (
            <SecondPage
              toggleScreen={toggleShowAdvice}
              newAdvice={showNewAdvice}
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
