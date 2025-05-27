"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Dua Lipa",
    title: "FUTURE NOSTALGIA",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Dua Lipa, a British pop sensation, is known for her vibrant and
          danceable music style. Born in London, she has taken the global music
          scene by storm with her empowering anthems and retro-inspired beats.{" "}
          <br /> <br /> Drawing from disco, pop, and electronic influences, her
          album Future Nostalgia became a cultural phenomenon, blending
          nostalgia with modern flair. Dua Lipa continues to dominate charts,
          earning critical acclaim and a massive global fanbase.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "DAWN FM",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          The Weeknd, a Canadian singer and producer, is celebrated for his
          dark, cinematic R&B sound. Born Abel Tesfaye in Toronto, he has
          redefined modern pop with his haunting vocals and introspective
          lyrics. <br /> <br /> His album Dawn FM explores themes of
          existentialism and rebirth, blending synth-pop with his signature
          moody aesthetic. The Weeknd has earned numerous awards and a loyal
          fanbase for his innovative contributions to music.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "WHEN WE ALL FALL ASLEEP",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Billie Eilish, an American singer-songwriter, is known for her
          hauntingly minimalist pop style. Born in Los Angeles, she rose to fame
          with her unique sound and dark, introspective themes. <br /> <br />{" "}
          Her debut album, When We All Fall Asleep, Where Do We Go?, blends
          eerie production with raw emotion, resonating with a global audience.
          Billie has become a voice of her generation, earning multiple Grammys
          and widespread acclaim.
        </p>
      );
    },
  },
  {
    description: "Taylor Swift",
    title: "FOLKLORE",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Taylor Swift, an American singer-songwriter, is renowned for her
          storytelling and genre-spanning music. Born in Pennsylvania, she has
          evolved from country roots to a global pop icon. <br /> <br /> Her
          album Folklore, a surprise release, embraces indie-folk with
          introspective and poetic lyrics, showcasing her versatility. Taylor
          Swift continues to break records, earning critical praise and a
          devoted fanbase worldwide.
        </p>
      );
    },
  },
];
const useOutsiderClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

export default function LayoutCards() {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsiderClick(() => setCurrent(null));

  return (
    <div className="py-40 bg-gray-100 min-h-screen relative">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        />
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[600px] w-80 fixed inset-0 z-20 m-auto bg-white rounded-2xl border border-neutral-200 p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-between items-start gap-2 py-4 w-full">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="h-40 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent,black_20%)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200 cursor-pointer"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-xl"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
