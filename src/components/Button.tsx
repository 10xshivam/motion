import React from "react";
import * as motion from "motion/react-client";

export default function Button() {
  return (
    <>
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="[transfrom-style:preserve-3d] group relative text-neutral-500 px-12 py-4 rounded-lg bg-black cursor-pointer shadow-[0px_1px_4px_0px_rgb(255,255,255,0.1)_inset,_0px_0px_0px_rgb(255,255,255,0.1)_inset]
"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Follow me
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 m-auto" />
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full m-auto blur-md" />
      </motion.button>
    </>
  );
}
