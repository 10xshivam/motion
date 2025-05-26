"use client";
import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";
import {motion} from "motion/react"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon className="w-4 h-4" />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartBarIcon className="w-4 h-4" />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <UserIcon className="w-4 h-4" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Cog6ToothIcon className="w-4 h-4" />,
    },
  ];

  const sidebarVariant = {
    open:{
        width:"16rem"
    },
    closed:{
        width:"4rem"
    }
  }

  const childVariants = {
    open:{
        opacity:1,
        y:0
    },
    closed:{
        opacity:0,
        y:-10
    }
  }

  const parentVariants = {
    open:{
        transition:{
            staggerChildren:0.07, // kitne duration me stagger hone chahiye
            delayChildren:0.2 // itne delay ke bad chlna chahiye
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1 //ulta jana chahiye
        }
    }
  }

  return (
    <motion.div
    initial={false}
      animate={isOpen ? "open" : "closed"}
    //   whileHover={"open"}
      transition={{
        duration:0.3
      }}
      className={`border-r border-neutral-200 h-full text-black transition-all duration-300`}
    >
      <motion.nav
      variants={sidebarVariant}
      className="bg-white shadow-sm h-full">
        <div className="p-4 flex justify-between items-center border-b border-neutral-100">
          <h2
            className={`text-xl font-semibold text-gray-800 transition-opacity duration-300 ${
              !isOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? (
              <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        <nav className="p-4">
          <motion.ul variants={parentVariants} className="space-y-1">
            {links.map((link) => (
              <motion.li variants={childVariants} key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 group ${
                    !isOpen ? "justify-center" : "gap-3"
                  }`}
                  title={!isOpen ? link.name : ""}
                >
                  <span className="flex-shrink-0">{link.icon}</span>
                  <span
                    className={`font-medium transition-opacity duration-300 ${
                      !isOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
