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
