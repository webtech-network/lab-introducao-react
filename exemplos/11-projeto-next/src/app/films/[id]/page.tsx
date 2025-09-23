'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Film = {
    id: number;
    title: string;
    description: string;
    year: number;
};

export default function FilmDetailsPage() {
    const params = useParams();
    const id = params?.id as string;

    const [film, setFilm] = useState<Film | null>(null);

    useEffect(() => {
        fetch('/api/films')
            .then((res) => res.json())
            .then((data: Film[]) => {
                const found = data.find((f) => f.id === Number(id));
                setFilm(found || null);
            });
    }, [id]);

    if (!film) return <p>Carregando...</p>;

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">{film.title}</h1>
            <p>{film.description}</p>
            <p>
                <strong>Ano:</strong> {film.year}
            </p>
        </main>
    );
}
