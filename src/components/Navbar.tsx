"use client"
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  const [hover,setHovered] = useState<number | null>(null)
  return (
    <div className="py-40">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
        {navItems.map((item,idx) => (
          <Link
          onMouseEnter={()=> setHovered(idx)}
          onMouseLeave={()=> setHovered(null)}
            className="w-full inline-block group text-center text-xs text-neutral-500 relative  py-3"
            key={item.title}
            href={item.href}
          >
            {hover === idx && (
                <motion.div layoutId="hover" className="absolute inset-0 rounded-full w-full h-full bg-black/80"/>
            )}
            <span className="relative group-hover:text-white">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
