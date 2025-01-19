import React, { useEffect, useRef, useState } from "react";

const Infinite = ({ text }) => {
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(20);
  const repeatedText = `${text} `.repeat(50);

  useEffect(() => {
    const calculateDuration = () => {
      if (containerRef.current) {
        const contentWidth = containerRef.current.scrollWidth;
        const newDuration = (contentWidth / 500) * 3;
        setDuration(newDuration);
      }
    };

    calculateDuration();
    window.addEventListener("resize", calculateDuration);
    return () => window.removeEventListener("resize", calculateDuration);
  }, [text]);

  return (
    <div
      className="relative w-full h-16 overflow-hidden py-4"
      style={{ background: "rgba(33, 173, 243, 1)" }}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animation: `scroll ${duration}s linear infinite`,
        }}
      >
        <span className="text-2xl font-rfabb">{repeatedText}</span>
        <span className="text-2xl font-rfabb">{repeatedText}</span>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default Infinite;
