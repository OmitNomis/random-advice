import React, { useState } from "react";
import Background from "./assets/large.jfif";

function App() {
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <>
      <div className=" min-h-[100vh] w-full flex flex-col justify-center items-center">
        <img
          src={Background}
          alt=""
          className="fixed h-full w-full opacity-50 -z-1"
        />

        <div className="flex flex-col items-center justify-center min-h-[100vh]s text-[#2D0EC6] text-[22px] z-10">
          <h1 className="font-semibold mb-2 text-[24px]">
            Feeling unsure? Let us give you a questionable decision.
          </h1>
          <h2 className=" mb-2">Advice so bad, it’s good.</h2>
          <h2 className=" mb-11">
            Ready for taste of mediocrity? Press the button for a little
            surprise.
          </h2>

          <button className="text-white bg-[#2D0EC6] p-1 px-3 rounded-[8px] flex justify-center items-center">
            <p>Why not?</p>
          </button>
        </div>
      </div>

      <div className="min-h-[100vh] w-full flex flex-col justify-center items-center"></div>
    </>
  );
}

export default App;
