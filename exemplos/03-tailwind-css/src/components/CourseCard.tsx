type CourseCardProps = {
  title: string;
  description: string;
  img: string;
}

export function CourseCard({ title, description, img }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 flex flex-col">
      <img src={img} className="h-40 w-full object-cover rounded-lg" alt={title} />
      <h4 className="mt-4 text-xl font-semibold text-gray-800">{title}</h4>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
      <a
        href="#contato"
        className="mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg text-center hover:bg-sky-700"
      >
        Inscreva-se
      </a>
    </div>
  );
}