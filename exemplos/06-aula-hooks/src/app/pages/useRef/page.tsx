"use client";
import { useEffect, useRef, useState } from "react";
import ControlPageHooks from "@/app/components/_controlPageHooks";

export default function UseRefComponent() {
  const [name, setName] = useState("");
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center">useRef</h2>
      <div className="flex gap-4 justify-center mt-24">
        <input
          value={name}
          type="text"
          placeholder="Digite algo"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center mt-24">
        <p>Hello! My name is {name}</p>
        <p>Render count: {renders.current}</p>
      </div>
    </ControlPageHooks>
  );
}
