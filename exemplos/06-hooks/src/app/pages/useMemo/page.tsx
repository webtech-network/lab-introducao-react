'use client';
import { useState, useMemo } from 'react';
import ControlPageHooks from '@/app/components/_controlPageHooks';

const slowFunction = (num: number) => {
    console.log('Slow function is being called!');
    for (let i = 0; i <= 1000000; i++) {}
    console.log('Slow function is done!');
    return num * 2;
};

export default function useMemoComponent() {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState('');

    const doubleNumber = useMemo(() => {
        return slowFunction(number);  
    }, [number]);

    return (
        <ControlPageHooks>
            <h2 className="fixed top-40 text-4xl text-center">useMemo</h2>
            <div className="flex flex-col gap-4 justify-center mt-24">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <button onClick={() => setNumber(number + 1)}>Increment</button>
                    <p>{number}</p>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <p>text: {text}</p>
                </div>
            </div>
        </ControlPageHooks>
    );
}
