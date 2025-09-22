export function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Aprenda novas habilidades <span className="text-sky-700">100% online</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Cursos acessíveis e de qualidade para transformar sua carreira.
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="#cursos" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
            Ver Cursos
          </a>
          <a href="#sobre" className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-50 transition">
            Saiba Mais
          </a>
        </div>
      </div>
      <img
        src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/media/Desenvolvedorweboquevoceprecisasaberarespeito.jpeg"
        alt="Estudante"
        className="w-full rounded-xl shadow-lg object-cover"
      />
    </section>
  );
}
