"use client";
import { useEffect, useRef, useState } from "react";

const Progressbar = ({ progress }: { progress: number }) => {
  const boundedProgress = Math.min(progress, 100);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={boundedProgress}
        className="relative h-2 w-70 overflow-hidden rounded-full border border-slate-300/30 bg-green-500 shadow shadow-slate-400/20"
      >
        <span
          style={{
            transform: `translateX(${boundedProgress - 100}%)`,
            transformOrigin: "0",
          }}
          className="absolute inset-0 h-full bg-blue-500 transition-transform duration-500"
        ></span>
      </div>
      <span>{progress < 100 ? `${progress}% Completed` : "Completed"}</span>
    </div>
  );
};

function ProgressbarContainer() {
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    progressIntervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (progressIntervalRef.current && prevProgress >= 100) {
          clearInterval(progressIntervalRef?.current);
          return 100;
        }

        const randomProgress = Math.floor(Math.random() * 20);
        return prevProgress + randomProgress;
      });
    }, 1000);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  console.log(progress);

  return <Progressbar progress={progress} />;
}

export default ProgressbarContainer;
