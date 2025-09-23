export function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 WebCursos. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Instagram</a>
          <a href="#" className="hover:text-gray-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
