# Requisições HTTP no React: Fetch e Axios

## Objetivo

Neste tutorial, vamos aprender a consumir dados de uma **API** dentro de um projeto React.  
Primeiro, usaremos o **Fetch API**, que já vem nativo no navegador. Depois, vamos melhorar a implementação utilizando o **Axios**, uma biblioteca muito usada no mercado.

---

## O que é uma API?

Uma **API (Application Programming Interface)** é uma forma de comunicação entre sistemas.  
Quando falamos de **API REST**, geralmente significa que temos um servidor que disponibiliza informações em formato **JSON**, e o cliente (navegador, aplicativo mobile, etc.) pode **consumir esses dados**.

Exemplo: a API do **GitHub** fornece dados públicos de usuários.  
Se acessarmos a URL:

```
https://api.github.com/users/arturbomtempo-dev
```

Receberemos um JSON com informações como nome, bio, avatar, etc.

---

## O que é uma Requisição HTTP?

Quando o front-end precisa buscar dados de uma API, ele faz uma **requisição HTTP**.  
Os principais métodos são:

-   **GET** → buscar informações.
-   **POST** → enviar dados.
-   **PUT/PATCH** → atualizar dados.
-   **DELETE** → remover dados.

Neste projeto, vamos usar o método **GET** para buscar informações de um usuário no GitHub.

---

## Fetch API

O **Fetch** é a forma mais clássica de fazer requisições em JavaScript.  
Ele já vem nativo nos navegadores modernos. Porém, não é tão amigável, porque depende de **Promises** e exige mais código para tratar erros.

Exemplo básico:

```ts
fetch('https://api.github.com/users/arturbomtempo-dev')
    .then((response) => response.json())
    .then((data) => console.log(data));
```

---

## Estrutura do Projeto

Vamos criar toda a lógica na página principal `App.tsx`:

```bash
src/
├── App.tsx
```

---

## Criando a Página com Fetch

```tsx
// src/App.tsx
import { useState } from 'react';

type User = {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
};

export function App() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState<User | null>(null);

    async function handleSearch() {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
    }

    return (
        <div>
            <h1>Buscar Usuário do GitHub</h1>
            <input
                type="text"
                placeholder="Digite o username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width={100} />
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <p>
                        <strong>Login:</strong> {user.login}
                    </p>
                </div>
            )}
        </div>
    );
}
```

👉 Nesse exemplo, o usuário digita o nome, clica em **Buscar**, e a página exibe as informações.

---

## Melhorando com Axios

O **Axios** é uma biblioteca que facilita requisições HTTP.  
Principais vantagens em relação ao Fetch:

-   Sintaxe mais simples.
-   Melhor tratamento de erros.
-   Configurações globais (ex.: baseURL).
-   Interceptores para autenticação, logs, etc.

Instale com:

```bash
npm install axios
```

---

## Criando a Configuração do Axios

Por boas práticas, vamos criar uma pasta `lib/` e um arquivo `axios.ts`:

```bash
src/
├── lib/
│   └── axios.ts
├── App.tsx
```

```ts
// src/lib/axios.ts
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.github.com/',
});
```

---

## Reescrevendo a Página com Axios

Agora podemos simplificar a lógica da nossa página principal:

```tsx
// src/App.tsx
import { useState } from 'react';
import { api } from './lib/axios';

type User = {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
};

export function App() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState<User | null>(null);

    async function handleSearch() {
        try {
            const response = await api.get(`/users/${username}`);
            setUser(response.data);
        } catch (error) {
            alert('Usuário não encontrado!');
        }
    }

    return (
        <div>
            <h1>Buscar Usuário do GitHub</h1>
            <input
                type="text"
                placeholder="Digite o username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width={100} />
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <p>
                        <strong>Login:</strong> {user.login}
                    </p>
                </div>
            )}
        </div>
    );
}
```

---

## Testando a Aplicação

1. Rode o projeto com `npm run dev`.
2. Acesse a aplicação.
3. Digite, por exemplo, `torvalds` (criador do Linux).
4. Veja as informações carregadas na tela.

---

## Conclusão

Neste tutorial, aprendemos:

-   O que é uma **API** e como funcionam requisições HTTP.
-   Como buscar dados com o **Fetch API**.
-   Por que o **Axios** é mais prático e como configurá-lo em uma pasta `lib/`.
-   Como criar uma página que busca usuários no GitHub e exibe suas informações.

Esse é um exemplo simples, mas já mostra como integrar React com qualquer API pública.

---
