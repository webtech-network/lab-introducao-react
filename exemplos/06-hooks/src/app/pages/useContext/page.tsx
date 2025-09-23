"use client";
import { createContext, useContext, useState } from "react";
import ControlPageHooks from "@/app/components/_controlPageHooks";

// Tipo do contexto
type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

// Criando o contexto com valores padrão
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export default function UseContextComponent() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ControlPageHooks>
        <h2 className="fixed top-40 text-4xl text-center">useContext</h2>
        <ThemeCard />
      </ControlPageHooks>
    </ThemeContext.Provider>
  );
}

// Componente que usa o contexto e muda as cores do card
function ThemeCard() {
  const { theme, setTheme } = useContext(ThemeContext);

  // classes dinâmicas do Tailwind baseadas no tema
  const cardClasses =
    theme === "light"
      ? "bg-white text-gray-900 border border-gray-300 shadow-md"
      : "bg-gray-900 text-white border border-gray-700 shadow-lg";

  return (
    <div
      className={`p-6 rounded-xl transition-colors duration-300 ${cardClasses}`}
    >
      <p className="mb-4">
        Tema atual: <strong>{theme}</strong>
      </p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Alternar Tema
      </button>
    </div>
  );
}
