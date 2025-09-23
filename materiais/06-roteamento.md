# Roteamento no React com React Router DOM

## Objetivo

Neste tutorial, vamos aprender a configurar **roteamento** em um projeto **React com Vite + TypeScript**, utilizando a biblioteca **React Router DOM**.  
Vamos entender o que é uma **rota**, como ela funciona e, em seguida, configurar nosso projeto para navegar entre diferentes páginas.

---

## O que é Roteamento?

O **roteamento** é o mecanismo que define **quais componentes devem ser renderizados** de acordo com a URL acessada no navegador.

👉 Em projetos simples com HTML e CSS, o roteamento geralmente é feito por arquivos.  
Por exemplo: `meusite.com/home.html` ou `meusite.com/contato.html`.  
Isso deixa a rota **feia e pouco flexível**, pois mostra diretamente o nome do arquivo.

Já no **React**, o roteamento é controlado por código.  
Isso significa que podemos ter rotas **mais limpas e organizadas**, como:

-   `/` → página inicial (Home)
-   `/contato` → página de contato
-   `/sobre` → página sobre a empresa
-   `/filmes/10` → detalhes de um filme com ID **10**

👉 Uma das grandes vantagens do React é justamente esse tipo de **roteamento declarativo e dinâmico**, que melhora a experiência do usuário.

---

## Instalando o React Router DOM

Primeiro, vamos instalar a biblioteca:

```bash
npm install react-router-dom
```

Essa é a biblioteca oficial para roteamento em projetos React.

---

## Estruturando o Projeto

Para manter o código organizado, **não é boa prática** colocar todas as rotas dentro do `App.tsx`.  
No mercado, geralmente criamos um arquivo separado, por exemplo `src/routes.tsx`, onde ficará toda a configuração de rotas.

Além disso, vamos criar uma pasta `pages` para armazenar as páginas da nossa aplicação:

```bash
src/
├── pages/
│   ├── home/
│   │   └── index.tsx
│   ├── films/
│   │   ├── index.tsx
│   │   └── [id].tsx
│   └── not-found/
│       └── index.tsx
├── App.tsx
├── routes.tsx
```

> **Nota:**  
> Uma abordagem moderna e escalável é criar uma pasta para cada página, utilizando um arquivo `index.tsx` dentro de cada pasta.  
> Assim, a navegação fica mais intuitiva e organizada, e você pode adicionar facilmente arquivos auxiliares para cada página, se necessário.

---

## Usando a tag `<Link />` para Navegação

No React Router DOM, a navegação entre páginas é feita utilizando o componente `<Link />`.  
Diferente da tag `<a>`, o `<Link />` não recarrega a página, proporcionando uma navegação mais fluida.

Veja como criar uma lista de navegação na página inicial:

```tsx
// src/pages/home/index.tsx
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <ul>
                <li>
                    <Link to="/films">Ir para Lista de Filmes</Link>
                </li>
                <li>
                    <Link to="/films/123">Ver Detalhes do Filme 123</Link>
                </li>
                <li>
                    <Link to="/qualquercoisa">Página Inexistente (404)</Link>
                </li>
            </ul>
        </div>
    );
}
```

---

## Estrutura dos Arquivos de Página

Com a abordagem de pastas para cada página, os arquivos ficam assim:

```bash
src/
├── pages/
│   ├── home/
│   │   └── index.tsx
│   ├── films/
│   │   ├── index.tsx
│   │   └── [id].tsx
│   └── not-found/
│       └── index.tsx
```

-   `home/index.tsx`: Página inicial.
-   `films/index.tsx`: Lista de filmes.
-   `films/[id].tsx`: Detalhes de um filme específico.
-   `not-found/index.tsx`: Página de erro 404.

---

## Criando o `App.tsx`

O `App.tsx` ficará bem limpo, apenas chamando as rotas:

```tsx
// src/App.tsx
import { AppRoutes } from './routes';

export function App() {
    return <AppRoutes />;
}
```

---

## Criando o `routes.tsx`

Aqui vamos configurar o **BrowserRouter** e nossas rotas, agora utilizando a estrutura de pastas para as páginas:

```tsx
// src/routes.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Films } from './pages/films';
import { FilmDetails } from './pages/films/[id]';
import { NotFound } from './pages/not-found';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Página inicial */}
                <Route path="/" element={<Home />} />

                {/* Lista de filmes */}
                <Route path="/films" element={<Films />} />

                {/* Detalhes de um filme específico */}
                <Route path="/films/:id" element={<FilmDetails />} />

                {/* Página não encontrada */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
```

---

## Criando as Páginas

Agora vamos criar nossas páginas dentro de `src/pages/`, cada uma em sua respectiva pasta:

```tsx
// src/pages/home/index.tsx
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <ul>
                <li>
                    <Link to="/films">Ir para Lista de Filmes</Link>
                </li>
                <li>
                    <Link to="/films/123">Ver Detalhes do Filme 123</Link>
                </li>
                <li>
                    <Link to="/qualquercoisa">Página Inexistente (404)</Link>
                </li>
            </ul>
        </div>
    );
}
```

```tsx
// src/pages/films/index.tsx
export function Films() {
    return <h1>Lista de Filmes</h1>;
}
```

```tsx
// src/pages/films/[id].tsx
import { useParams } from 'react-router-dom';

export function FilmDetails() {
    const { id } = useParams();
    return <h1>Detalhes do Filme {id}</h1>;
}
```

```tsx
// src/pages/not-found/index.tsx
export function NotFound() {
    return <h1>Erro 404 - Página não encontrada</h1>;
}
```

---

## Testando o Roteamento

Agora rode o projeto:

```bash
npm run dev
```

E acesse no navegador:

-   `/` → Página inicial
-   `/films` → Lista de filmes
-   `/films/123` → Detalhes do filme com ID **123**
-   `/qualquercoisa` → Página de erro 404

---

## Conclusão

Com isso, você configurou o **React Router DOM** em seu projeto React.  
Aprendemos a:

-   Entender o que é **roteamento**
-   Instalar o **React Router DOM**
-   Separar as rotas em um arquivo próprio (`routes.tsx`)
-   Organizar as páginas em pastas, cada uma com seu `index.tsx`
-   Utilizar o componente `<Link />` para navegação interna
-   Implementar uma rota de erro **404**

Esse será nosso ponto de partida para construir aplicações React com várias páginas e navegação fluida.

---
