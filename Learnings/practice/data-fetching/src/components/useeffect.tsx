// import React, { useEffect } from 'react'

// export default function useeffect() {
//     useEffect(()=>{
//         console.log("hai")
//     },[])
//   return (
//     <div>useeffect</div>
//   )
// }

import { useEffect, useState } from "react";
// import "./App.css";

const EffectData: React.FC = () => {
  // State for tracking the value
  //Because of the TS <number> is written
  const [val, setVal] = useState<number>(0);

  // useEffect to log a message whenever 'val' changes
  useEffect(() => {
    console.log("hai");
  }, [val]);

  // Correctly typed and defined handleState function
  const handleState = () => {
    setVal(val + 1); // Increment the value by 1
  };

  return (
    <>
      {/* Button to trigger the handleState function on click */}
      <button onClick={handleState}>
        click
      </button>
    </>
  );
};

export default EffectData;
