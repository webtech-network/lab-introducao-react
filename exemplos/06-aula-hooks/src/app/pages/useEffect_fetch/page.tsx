"use client";
import { useEffect, useState } from "react";
import ControlPageHooks from "@/app/components/_controlPageHooks";

export default function UseEffectComponent() {
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, [resourceType]);

  return (
    <ControlPageHooks>
      <h2 className="fixed top-40 text-4xl text-center">useEffect with fetch</h2>
      <div className="flex gap-4 justify-center mt-24">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <button onClick={() => setResourceType("todos")}>Todos</button>
      </div>
      <div className="mt-32">
        <h3 className="text-xl text-center mb-4">Itens:</h3>
        <ul>
          {items.slice(0, 10).map((item: any) => (
            <li key={item.id}>
              {item.title || item.name || item.body || JSON.stringify(item)}
            </li>
          ))}
        </ul>
      </div>
    </ControlPageHooks>
  );
}