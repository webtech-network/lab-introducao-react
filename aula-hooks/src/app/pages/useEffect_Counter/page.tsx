"use client";
import { useEffect, useState } from "react";
import ControlPageHooks from "@/app/components/_controlPageHooks";

export default function UseEffectComponent() {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("useEffect !!! value: " + value + " checked: " + checked);
  }, [value]);

  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center ">
        useEffect with counter
      </h2>
      <p className="fixed top-60 text-2xl text-center">Veja o console:</p>
      <div className="flex flex-col gap-4 justify-center mt-24">
        <div className="flex gap-2 justify-center items-center">
          <button onClick={() => setValue(value + 1)}>Incrementar</button>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p>Contagem: {value}</p>
            <p>Checked: {checked ? "Sim" : "Não"}</p>
          </div>
      </div>
    </ControlPageHooks>
  );
}
