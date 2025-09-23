# Guia de como usar Tailwind nos seus projetos

Comandos inicias para a criação do projeto

```bash
npm create vite@latest
```

Selecione React e depois TypeScript

```bash
# Entrar na pasta
cd .\aula-tailwind\

# Instalar as dependências do projeto
npm i

#Rodar para ver a aplicação
npm run dev
```

### Instalação do Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer

npm install tailwindcss @tailwindcss/vite
```

#### Altere o arquivo vite.config.ts

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
})

```

Crie o arquivo tailwind.config.js e coloque isso

```
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

Crie o arquivo ou altere o conteudo na `src/index.css`

```
@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Por fim importe no `main.jsx`

```
import './index.css'
```

## Como Usar Tailwind CSS

### 1. Conceitos Básicos

Tailwind CSS é um framework CSS utilitário que permite criar designs diretamente no HTML usando classes predefinidas.

### 2. Estrutura de Classes

As classes do Tailwind seguem um padrão lógico:

- `{propriedade}-{valor}` (ex: `text-red-500`, `bg-blue-300`)
- `{propriedade}-{breakpoint}-{valor}` para responsividade (ex: `md:text-lg`)

### 3. Principais Categorias de Classes

#### Layout e Espaçamento

```jsx
// Padding e Margin
<div className="p-4 m-2">        // padding: 1rem, margin: 0.5rem
<div className="px-6 py-3">      // padding horizontal e vertical
<div className="mt-8 mb-4">      // margin top e bottom

// Display
<div className="flex">           // display: flex
<div className="grid">           // display: grid
<div className="block">          // display: block
<div className="hidden">         // display: none
```

#### Cores

```jsx
// Background
<div className="bg-red-500">     // background vermelho
<div className="bg-blue-100">    // background azul claro
<div className="bg-gray-900">    // background cinza escuro

// Texto
<p className="text-white">       // texto branco
<p className="text-green-600">   // texto verde
```

#### Tipografia

```jsx
<h1 className="text-3xl font-bold">           // tamanho 3xl e negrito
<p className="text-sm text-gray-600">         // texto pequeno e cinza
<span className="uppercase tracking-wide">    // maiúsculo com espaçamento
```

#### Flexbox e Grid

```jsx
// Flexbox
<div className="flex justify-center items-center">
<div className="flex flex-col space-y-4">
<div className="flex-wrap justify-between">

// Grid
<div className="grid grid-cols-3 gap-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

#### Responsividade

```jsx
// Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
<div className="text-base md:text-lg lg:text-xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="hidden lg:block">  // Oculto até lg, depois visível
```

### 4. Exemplos Práticos

#### Card Simples

```jsx
function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Título do Card
      </h2>
      <p className="text-gray-600 mb-4">Descrição do conteúdo do card.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200">
        Clique aqui
      </button>
    </div>
  );
}
```

#### Navbar Responsiva

```jsx
function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Logo</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Sobre
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
```

#### Formulário

```jsx
function Form() {
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="seu@email.com"
        />
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
        Enviar
      </button>
    </form>
  );
}
```

### 5. Recursos Úteis

#### Documentação Oficial

- **Site Principal**: https://tailwindcss.com/
- **Documentação**: https://tailwindcss.com/docs
- **Playground**: https://play.tailwindcss.com/

#### Ferramentas de Busca

- **Tailwind CSS Cheat Sheet**: https://tailwindcomponents.com/cheatsheet/
- **Classes Search**: https://tailwindsearch.com/

#### Extensões VS Code

- **Tailwind CSS IntelliSense**: Autocomplete e sugestões
- **Headwind**: Organiza as classes automaticamente

### 6. Dicas Importantes

#### Ordem das Classes (recomendada)

```jsx
// Layout -> Spacing -> Sizing -> Typography -> Colors -> Effects
<div className="flex p-4 w-full text-lg text-white bg-blue-500 rounded shadow-lg">
```

#### Estados e Interações

```jsx
// Hover, focus, active
<button className="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 active:bg-blue-700">

// Dark mode
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
```

#### Customização no tailwind.config.js

```js
export default {
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1e40af",
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },
};
```

### 7. Padrões Comuns

#### Container Centralizado

```jsx
<div className="container mx-auto px-4 max-w-6xl">{/* Conteúdo */}</div>
```

#### Espaçamento Consistente

```jsx
<div className="space-y-4">  {/* Espaço vertical entre filhos */}
<div className="space-x-2">  {/* Espaço horizontal entre filhos */}
```

#### Transições Suaves

```jsx
<div className="transition duration-300 ease-in-out transform hover:scale-105">
```
