// For Client
// import { motion } from "motion/react"

// For Server
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="h-screen w-full pt-12">
      <h1 className="text-2xl text-center mb-20">Learning Motion</h1>
      {/* Intro */}
      {/* <motion.div
        initial={{
          x: 500,
        }}
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeIn",
        }}
        className="w-52 h-52 bg-amber-600 mb-10"
      /> */}

      {/* Key Frames */}
      {/* <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 5,
          // repeat:Infinity,
        }}
        className="w-52 h-52 bg-amber-400"
      /> */}

      {/* Hover and Click */}
      {/* <motion.div
        whileHover={{
          backgroundColor: "green",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="w-52 h-52 bg-amber-400"
      /> */}

      {/* Drag */}
      <motion.div
        drag
        whileDrag={{
          scale:0.8
        }}
        dragConstraints={{
          // boundaries of area to drag
          top:0,
          left:0,
          right:1000,
          bottom:500
        }}
        dragDirectionLock // makes draggable in only one direction
        className="w-52 h-52 bg-blue-400"
      />
    </div>
  );
}
