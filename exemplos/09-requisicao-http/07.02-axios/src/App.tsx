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
