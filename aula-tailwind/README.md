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
