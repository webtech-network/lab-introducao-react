# Projeto de Filmes com Next.js

## Objetivo

Neste tutorial, vamos criar um projeto básico com **Next.js 15** para entender algumas de suas principais funcionalidades:

-   **Páginas** (App Router)
-   **API Routes** (criação de endpoints)
-   **Rotas dinâmicas**
-   Estilização com **Tailwind**

Nosso exemplo será um CRUD simples de **Filmes**.

---

## Criando o Projeto

Crie um novo projeto Next:

```bash
npx create-next-app@latest my-films
```

Responda às perguntas:

-   **TypeScript** → Yes
-   **ESLint** → Yes
-   **Tailwind** → Yes
-   **src directory** → Yes
-   **App Router** → Yes
-   **Import alias** → Yes

Depois, entre no projeto:

```bash
cd my-films
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) e veja a aplicação rodando.

---

## Configurando o Tailwind

O Tailwind já vem configurado automaticamente no `globals.css`.  
Podemos usar classes utilitárias diretamente nos componentes.

---

## Estrutura do Projeto

Vamos organizar assim:

```bash
src/
├── app/
│   ├── api/
│   │   └── films/
│   │       ├── route.ts       # POST e GET de filmes
│   ├── films/
│   │   └── [id]/page.tsx      # Página de detalhes
│   ├── page.tsx               # Página principal (lista de filmes)
│   └── layout.tsx             # Layout principal
```

---

## Criando o Endpoint de Filmes

Crie `src/app/api/films/route.ts`:

```ts
import { NextResponse } from 'next/server';

type Film = {
    id: number;
    title: string;
    description: string;
    year: number;
};

let films: Film[] = [];
let currentId = 1;

// POST → cadastrar filme
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

// GET → listar filmes
export async function GET() {
    return NextResponse.json(films);
}
```

---

## Página Principal (Lista de Filmes)

Crie `src/app/page.tsx`:

```tsx
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
```

---

## Página de Detalhes

Crie `src/app/films/[id]/page.tsx`:

```tsx
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
```

---

## Testando os Endpoints

1. Rode o projeto com `npm run dev`.
2. Para cadastrar filmes, use o **POST** em `/api/films`.  
   Exemplo com **Insomnia/Postman** ou `curl`:

```bash
curl -X POST http://localhost:3000/api/films   -H "Content-Type: application/json"   -d '{"title":"Matrix","description":"Um clássico de ficção científica","year":1999}'
```

3. Vá até `/` e veja a lista atualizada.
4. Clique em um filme para abrir `/films/[id]`.

---

## Conclusão

Neste projeto simples com Next.js 15, aprendemos a:

-   Criar um projeto com **Next.js + Tailwind**.
-   Criar **API Routes** (endpoints de GET e POST).
-   Listar filmes na página principal.
-   Criar uma **rota dinâmica** para exibir os detalhes de um filme.

Esse exemplo já mostra bem como o Next combina **frontend e backend** em um único projeto.

---
