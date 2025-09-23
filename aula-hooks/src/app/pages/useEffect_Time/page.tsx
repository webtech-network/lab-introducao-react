"use client";
import { useEffect, useState } from "react";
import ControlPageHooks from "@/app/components/_controlPageHooks";

export default function UseEffectComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => {
      clearInterval(timer);
    }// cleanup
  }, []);


  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center ">useEffect with time</h2>
      <div>
        <p className="fixed text-2xl text-center">Tempo em segundos: {time}</p>

      </div>
    </ControlPageHooks>
  );
}