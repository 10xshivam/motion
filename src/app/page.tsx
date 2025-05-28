"use client"

// For Client
import { motion } from "motion/react"

// For Server
// import * as motion from "motion/react-client";
import Link from "next/link";

export default function Home() {
  const navItems = [
    {
      title: "Basic",
      href: "/basic",
    },
    {
      title: "Hover & Exit",
      href: "/content",
    },
    {
      title: "Variants",
      href: "/dashboard",
    },
    {
      title: "Hooks",
      href: "/motion-hooks",
    },
    {
      title: "Layouts",
      href: "/layout-example",
    },
    {
      title: "Animation-Sequences",
      href: "/animation-sequences",
    },
    {
      title: "Scroll-effect",
      href: "/scrollable",
    },
    {
      title: "Get Code",
      href: "https://github.com/10xshivam/motion",
    },

  ];
  return (
    <div className="relative h-screen w-full pt-24">
      <div className="fixed top-0 w-full h-20 bg-neutral-500/10 flex p-5 px-10 justify-between items-center">
      <h1 className="text-3xl">Motion</h1>
      <div className="flex gap-4 items-start justify-center">
        {navItems.map((item) => (
          <Link
            className=" group text-center  text-neutral-500 "
            key={item.title}
            href={item.href}
          >
            <span className="relative group-hover:text-white ">{item.title}</span>
          </Link>
        ))}
      </div>
      </div>
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
        className="w-52 h-52 bg-blue-600 p-10 flex text-3xl justify-center items-center text-center leading-relaxed font-medium rounded-xl"
      >Drag me 😊</motion.div>
    </div>
  );
}
