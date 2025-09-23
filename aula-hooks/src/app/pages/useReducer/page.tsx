"use client";
import ControlPageHooks from "@/app/components/_controlPageHooks";
import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default function useReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center">useReducer</h2>
      <div className="flex flex-col gap-4 justify-center mt-24 mb-2">
        <p>Contagem: {state.count}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Incrementar
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          decrementar
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Resetar</button>
      </div>
    </ControlPageHooks>
  );
}
