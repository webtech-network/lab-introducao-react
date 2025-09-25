"use client";
import ControlPageHooks from "@/app/components/_controlPageHooks";
import useCounter from "@/app/hooks/userCounter";

// Vamos tranformar a logica de incremento e decremento em um hook separado
export default function useCriadoComponent() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center">
        Hook criado (useCounter)
      </h2>
      <div className="flex flex-col gap-4 justify-center mt-24 items-center-safe">
        <p>Contagem: {count}</p>
        <div className="flex gap-2">
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>decrementar</button>
          <button onClick={reset}>Resetar</button>
        </div>
      </div>
    </ControlPageHooks>
  );
}
