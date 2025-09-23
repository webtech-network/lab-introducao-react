"use client";
// import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function selectHookComponent() {
  const buttons = [
    { title: "useState", href: "/pages/useState", color: "bg-teal-100" },
    {
      title: "useEffect 1",
      href: "/pages/useEffect_Time",
      color: "bg-indigo-100",
    },
    {
      title: "useEffect 2",
      href: "/pages/useEffect_Counter",
      color: "bg-indigo-200",
    },
    {
      title: "useEffect 3",
      href: "/pages/useEffect_fetch",
      color: "bg-indigo-300",
    },
    { title: "useContext", href: "/pages/useContext", color: "bg-amber-100" },
    { title: "useRef", href: "/pages/useRef", color: "bg-purple-100" },
    { title: "useReducer", href: "/pages/useReducer", color: "bg-purple-200" },
    { title: "use", href: "/pages/use", color: "bg-pink-100" },
    { title: "useMemo", href: "/pages/useMemo", color: "bg-pink-200" },
    { title: "Hook Criado", href: "/pages/useCriado", color: "bg-pink-300" },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <div
          key={btn.title}
          className={`w-48 h-32 ${btn.color} rounded-xl shadow-lg flex flex-col justify-center items-center p-6 transition-transform hover:scale-105`}
        >
          <h1 className="text-lg font-bold mb-4 text-gray-800">{btn.title}</h1>
          <Link
            href={btn.href}
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold shadow hover:from-amber-500 hover:to-amber-700 transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      ))}
    </>
  );
}
