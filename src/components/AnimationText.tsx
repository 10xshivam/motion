"use client";
import { stagger } from "motion";
import { useAnimate, motion } from "motion/react";
import React, { useEffect } from "react";

export default function AnimationText() {
  const text =
    "Believe in your journey, even when the road gets tough — every challenge shapes who you become.Let your passion guide you, and write each line of code like it's building the future you dream of.";
  const [scope, animate] = useAnimate(); // scope ? ye batata hai ki animate function kis scope me kam krna chahiye

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 1, ease: "easeInOut", delay:stagger(0.02) }
    );
  };

  return (
    <div
      ref={scope} // is div ke jo bhi children hai unpr kam krega jobhi animation set krenge
      className="text-white max-w-4xl mx-auto font-bold text-4xl"
    >
        {/* <button
        onClick={() => startAnimating()}
        className="bg-neutral-800 px-4 py-2 rounded-md cursor-pointer active:scale-110 transition duration-200 block mb-5"
      >
        Want Motivation ?
      </button> */}
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            key={index}
            style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            className="inline-block"
          >
            {word} &nbsp;
          </motion.span>
        );
      })}
    </div>
  );
}
