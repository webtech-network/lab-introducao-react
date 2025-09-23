# Guia de Componentes React

## Como criar o projeto do zero

1. Crie o projeto dentro da sua pasta

```bash
npm create vite@latest .
```

2. Instale as dependências para poder rodar o projeto

```bash
npm i
npm run dev
```

## Estrutura de Componentes

### 1. Organização de Pastas

```
src/
  ├── components/          # Pasta principal de componentes
  │   ├── Button/         # Componente Button
  │   │   ├── index.tsx   # Código do componente
  │   │   └── styles.module.css  # Estilos do componente
  │   └── Card/           # Componente Card
  │       ├── index.tsx
  │       └── styles.module.css
  └── ...
```

### 2. Criando um Novo Componente

1. Crie uma nova pasta com o nome do componente dentro de `src/components`
2. Dentro da pasta do componente, crie dois arquivos:
    - `index.tsx`: para o código do componente
    - `styles.module.css`: para os estilos

#### Exemplo de Estrutura de Componente (TSX)

```tsx
// MeuComponente/index.tsx
import styles from './styles.module.css';

export function MeuComponente() {
    return (
        <div className={styles.container}>
            <h1>Meu Componente</h1>
        </div>
    );
}
```

#### Exemplo de Estilização (CSS Modules)

```css
/* MeuComponente/styles.module.css */
.container {
    /* Seus estilos aqui */
}
```

### 3. Boas Práticas

-   Use PascalCase para nomes de componentes (ex: `Button`, `CardList`)
-   Use CSS Modules para evitar conflitos de estilo
-   Cada componente deve ter sua própria pasta
-   Mantenha os componentes pequenos e focados em uma única responsabilidade
-   Exporte o componente como função nomeada

### 4. Usando o Componente

```tsx
import { MeuComponente } from './components/MeuComponente';

function App() {
    return (
        <div>
            <MeuComponente />
        </div>
    );
}
```
