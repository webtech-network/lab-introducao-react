import { NextResponse } from 'next/server';

type Film = {
    id: number;
    title: string;
    description: string;
    year: number;
};

let films: Film[] = [];
let currentId = 1;

export async function POST(req: Request) {
    const body = await req.json();
    const newFilm: Film = {
        id: currentId++,
        title: body.title,
        description: body.description,
        year: body.year,
    };

    films.push(newFilm);

    return NextResponse.json(newFilm, { status: 201 });
}

export async function GET() {
    return NextResponse.json(films);
}
