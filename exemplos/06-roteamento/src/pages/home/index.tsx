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
