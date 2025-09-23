'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Film = {
    id: number;
    title: string;
    description: string;
    year: number;
};


export default function Home() {
    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        fetch('/api/films')
            .then((res) => res.json())
            .then((data) => setFilms(data));
    }, []);

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Lista de Filmes</h1>
            <ul className="space-y-2">
                {films.map((film) => (
                    <li key={film.id} className="border p-2 rounded">
                        <Link href={`/films/${film.id}`}>
                            <strong>{film.title}</strong> ({film.year})
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
