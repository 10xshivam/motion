"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IconStar, IconRocket, IconShield } from "@tabler/icons-react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  content: React.ReactElement;
}

const features: Feature[] = [
  {
    icon: <IconStar className="w-8 h-8 text-neutral-200" />,
    title: "Premium Quality",
    description: "Experience top-tier performance and reliability.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="Premium Quality Image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
    title: "Fast Performance",
    description: "Lightning-fast processing for seamless operations.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/art.jpeg"
          alt="Fast Performance Image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconShield className="w-8 h-8 text-neutral-200" />,
    title: "Enhanced Security",
    description: "Robust protection for your data and privacy.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-2.jpg"
          alt="Security Image"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];

export default function MotionHooks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // element = start, viewport = end ==> We want scroll tracking to start
    // element = end, viewport = start ==> We want scroll tracking to end
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#002137", "#200b0b", "#13232c"];
  const [background, setBackground] = useState(backgrounds[0]);
  // to track the motion value
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest)
    // scrollYProgress ki value 0.44 -->0.44*3 = 1.32 --> 1
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="flex flex-col gap-28 max-w-4xl mx-auto py-60">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // element = start, viewport = end ==> We want scroll tracking to start
    // element = end, viewport = start ==> We want scroll tracking to end
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} key={feature.title} className="grid grid-cols-2 gap-20">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-neutral-400 text-lg">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};
