import Button from "@/components/Button";
import React from "react";

export default function Basic() {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgba(6,182,212,0.2) 0.5px,transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="[perspective::1000px] h-screen w-full bg-neutral-950 flex items-center justify-center"
    >
      <Button />
    </div>
  );
}
