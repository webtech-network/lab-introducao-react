'use client';
import { useState } from 'react';
import ControlPageHooks from '@/app/components/_controlPageHooks';

export default function useStateComponent() {
    const [count, setCount] = useState(0);

    function incrementar() {
        setCount(count + 1);
    }

    function decrementar() {
        setCount(count - 1);
    }

    return (
        <ControlPageHooks>
            <h2 className="fixed top-40 text-4xl text-center">useState</h2>
            <div className="flex flex-col gap-4 justify-center mt-24 items-center-safe">
                <p>Contagem: {count}</p>
                <div className="flex gap-2">
                    <button onClick={incrementar}>Incrementar</button>
                    <button onClick={decrementar}>decrementar</button>
                    <button onClick={() => setCount(0)}>Resetar</button>
                </div>
            </div>
        </ControlPageHooks>
    );
}
