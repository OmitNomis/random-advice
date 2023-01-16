import React, { useState } from "react";
import Background from "./assets/images/background.jfif";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  const [showAdvice, setShowAdvice] = useState(false);

  function toggleShowAdvice() {
    setShowAdvice(!showAdvice);
  }

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

      {showAdvice === false ? (
        <FirstPage toggleScreen={toggleShowAdvice} />
      ) : (
        <SecondPage toggleScreen={toggleShowAdvice} />
      )}
    </>
  );
}

export default App;
