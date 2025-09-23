import { useParams } from 'react-router-dom';

export function FilmDetails() {
    const { id } = useParams();
    return <h1>Detalhes do Filme {id}</h1>;
}
