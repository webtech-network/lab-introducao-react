"use client";

import React from "react";
import SelectHookComponent from "./pages/page";



export default function Home() {
  return (
      <div className="flex justify-center items-center min-h-screen flex-col bg-amber-200">
        <h1 className="text-3xl font-bold mb-10 text-[#332264] ">
          Guia de Desenvolvimento Fron-End: React Hooks
        </h1>
        <div className="grid grid-cols-3 px-50 grid-rows-3 gap-6 bg-gradient-to-r from-amber-50 via-teal-50 to-indigo-50 p-12 rounded-4xl">
            <SelectHookComponent/>
        </div>
      </div>
  );
}
