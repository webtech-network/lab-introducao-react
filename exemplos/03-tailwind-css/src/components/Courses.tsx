import { CourseCard } from './CourseCard';

const courses = [
    {
        id: 1,
        title: 'Programação Web',
        description: 'Aprenda HTML, CSS, JavaScript e comece sua jornada como desenvolvedor.',
        img: 'https://embarcados.com.br/wp-content/uploads/2020/11/imagem-de-destaque-64-850x510.png',
    },
    {
        id: 2,
        title: 'Design Gráfico',
        description: 'Crie artes incríveis para redes sociais, marcas e projetos pessoais.',
        img: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238',
    },
    {
        id: 3,
        title: 'Marketing Digital',
        description: 'Aprenda estratégias para crescer negócios e engajar seu público.',
        img: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a',
    },
];

export function Courses() {
    return (
        <section id="cursos" className="max-w-6xl mx-auto px-6 py-20">
            <h3 className="text-3xl font-bold text-center text-gray-900">Nossos Cursos</h3>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>
        </section>
    );
}
