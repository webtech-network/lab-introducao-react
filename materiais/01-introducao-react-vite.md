# Criando um Projeto React com Vite

## Objetivo

Neste tutorial, vamos aprender a criar um projeto **React** utilizando o **Vite**, configurando com **TypeScript** e deixando tudo pronto para começar o desenvolvimento.

---

## O que é React?

O **React** é uma biblioteca JavaScript criada pelo Facebook (atual Meta) em 2013. Ele nasceu para resolver o problema de **atualizações de interface de forma eficiente** em aplicações web modernas.

### Principais vantagens

-   **Componentização** → podemos dividir a UI em partes reutilizáveis.
-   **Virtual DOM** → atualiza apenas o que mudou na tela, de forma rápida.
-   **Comunidade e ecossistema** → ampla adoção, milhares de bibliotecas de apoio.
-   **Reutilização de código** → lógica compartilhada entre web, mobile (React Native) e até desktop.

---

## O que é o Vite?

O **Vite** é um bundler moderno que substitui ferramentas mais antigas como o Webpack.  
Foi criado para resolver a lentidão de desenvolvimento em projetos grandes, oferecendo:

-   **Build extremamente rápido**
-   **Hot Module Replacement (HMR)** → recarrega só o que mudou
-   **Suporte nativo a TypeScript, JSX, CSS Modules, etc.**
-   **Configuração simples** → já vem pronto para projetos React

---

## Criando o Projeto com Vite

Para criar o projeto, use o comando:

```bash
npm create vite@latest my-app
```

Depois, responda as perguntas do prompt:

1. **Project name** → `my-app`
2. **Select a framework** → `React`
3. **Select a variant** → `TypeScript`

---

## Estrutura de Arquivos Padrão

Após a criação, você terá algo assim:

```bash
my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Limpando o Projeto

Queremos começar do zero com um **Hello World**.

1. Abra o arquivo `src/App.tsx`  
   Apague tudo e deixe apenas:

```tsx
export function App() {
    return <h1>Hello World</h1>;
}
```

2. No arquivo `src/main.tsx`, ajuste o import para:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

3. Opcional: você pode excluir os arquivos que não serão usados inicialmente:
    - `src/assets/react.svg`
    - `src/App.css`
    - `src/index.css`

E remover as importações correspondentes em `main.tsx`.

---

## `export default` vs `export` nomeado

No JavaScript/TypeScript, temos duas formas principais de exportar código de um módulo:

### `export default`

-   Só pode haver **um** por arquivo.
-   O import pode ter qualquer nome.

```tsx
// App.tsx
export default function App() {
    return <h1>Hello World</h1>;
}

// main.tsx
import MeuApp from './App'; // nome arbitrário
```

### `export` nomeado

-   Pode haver **vários exports** em um mesmo arquivo.
-   O import precisa usar o mesmo nome.

```tsx
// App.tsx
export function App() {
    return <h1>Hello World</h1>;
}

// main.tsx
import { App } from './App';
```

👉 **Recomendação:** usar **exports nomeados**, pois:

-   Evita renomeações confusas.
-   Facilita auto-complete no editor.
-   Mantém consistência quando há vários exports.

---

## Rodando o Projeto

Instale as dependências:

```bash
cd my-app
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço exibido no terminal (geralmente http://localhost:5173).

---

## Conclusão

Agora você tem um projeto React + Vite com TypeScript configurado, limpo e usando **export nomeado** para o componente principal. Esse será o ponto de partida para explorarmos componentes, hooks e o restante do ecossistema React.

---
