"use client";
import debounce from "@/problems/javascript/debounce/debounce";
import React, { useCallback } from "react";

function Debounce() {
  const [count, setCount] = React.useState(0);
  const [btnCount, setBtnCount] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFunction = useCallback(
    // eslint-disable-next-line react-hooks/use-memo
    debounce(() => {
      setCount((prevCount) => prevCount + 1);
    }, 500),
    [],
  );

  const handleCount = () => {
    setBtnCount((prev) => prev + 1);
    debounceFunction();
  };

  return (
    <section className="flex flex-col items-center gap-y-2">
      <button className="btn-theme" onClick={handleCount}>
        Count {btnCount}
      </button>
      <span>Current Number is: {count}</span>
    </section>
  );
}

export default Debounce;
