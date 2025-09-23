# Usando Props no React com TypeScript

## O que são Props?

Props são dados enviados de um componente pai para um componente filho no React.

## Exemplo Simples

```tsx
import React from 'react';

type GreetingProps = {
    name: string;
};

const Greeting = ({ name }: GreetingProps) => {
    return <h1>Olá, {name}!</h1>;
};

const App = () => {
    return <Greeting name="Eduarda" />;
};

export default App;
```

## Props Opcionais

```tsx
type GreetingProps = {
    name?: string;
};

const Greeting = ({ name = 'Visitante' }: GreetingProps) => {
    return <h1>Olá, {name}!</h1>;
};
```

## Props com Números

```tsx
type CounterProps = {
    count: number;
};

const Counter = ({ count }: CounterProps) => {
    return <p>Contagem atual: {count}</p>;
};

const App = () => {
    return <Counter count={10} />;
};

export default App;
```

## Props com Valores Opcionais e Default

```tsx
type UserProps = {
    name: string;
    age?: number;
};

const UserInfo = ({ name, age = 18 }: UserProps) => {
    return (
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
        </div>
    );
};

const App = () => {
    return <UserInfo name="Eduarda" />;
};

export default App;
```

## Props com Variantes

```tsx
type ButtonProps = {
    label: string;
    variant: 'primary' | 'secondary';
};

const Button = ({ label, variant }: ButtonProps) => {
    const style =
        variant === 'primary'
            ? { backgroundColor: 'blue', color: 'white' }
            : { backgroundColor: 'gray', color: 'black' };
    return <button style={style}>{label}</button>;
};

const App = () => {
    return (
        <>
            <Button label="Salvar" variant="primary" />
            <Button label="Cancelar" variant="secondary" />
        </>
    );
};

export default App;
```

## Conclusão

Props ajudam a passar dados entre componentes. Com TypeScript, você define os tipos para evitar erros. Além disso, você pode trabalhar com valores opcionais, números e até variantes para criar componentes mais dinâmicos e reutilizáveis.
