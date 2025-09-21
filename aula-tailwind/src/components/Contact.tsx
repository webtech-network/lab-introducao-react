export default function Contact() {
  return (
    <section id="contato" className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Entre em Contato</h3>
        <p className="mt-4 text-gray-600">Fale com nossa equipe e tire suas dúvidas.</p>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition cursor-pointer w-full font-semibold">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
