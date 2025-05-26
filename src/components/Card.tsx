"use client";
import {
  IconBug,
  IconCloud,
  IconCode,
  IconDatabase,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Card() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {/* When u have a boolean based render so we have to wrap with AnimatePresence ,this ensures when its going to unmount exit animation will run */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              // It works when component unmounts
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-72 h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col text-black bg-white"
          >
            <h2 className="font-bold text-[10px]">DevTools</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A set of powerful tools to supercharge your development workflow
            </p>
            <div className="flex items-center justify-center">
              <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1.5">
                <Image
                  width={15}
                  height={15}
                  alt="logo"
                  src={"/logo.png"}
                  className="rounded-xl"
                />
                DevKit
                <IconX
                  className="h-3 w-3 text-neutral-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </button>
            </div>
            <div className="relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-gray-200">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute inset-0 h-full w-full bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconCode className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Code Formatter
                    </p>
                    <p className="text-[8px] mt-0.5 text-neutral-400">
                      Format your code in a click
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconDatabase className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                       Mock API Server
                    </p>
                    <p className="text-[8px] mt-0.5 text-neutral-400">
                       Quick setup for testing APIs
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconBug className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Bug Tracker
                    </p>
                    <p className="text-[8px] mt-0.5 text-neutral-400">
                      Track and fix issues fast
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconCloud className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Deployment Manager
                    </p>
                    <p className="text-[8px] mt-0.5 text-neutral-400">
                      Easy and fast deployments
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="h-4 w-4 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconPlus className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Add Tool
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
