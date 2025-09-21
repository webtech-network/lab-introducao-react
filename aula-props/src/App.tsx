import Saudacao from "./Saudacao";

export function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-100">
      <div className="border border-gray-300 p-5 rounded-lg shadow-lg bg-white">
      <h1 className="text-center text-xl font-bold mb-5">Exemplo de Props com Tipos</h1>

      {/* Passando valores diferentes para o mesmo componente */}
      <Saudacao nome="Eduarda" idade={20} altura={1.59} />
      <Saudacao nome="Artur" idade={25} />
      <Saudacao nome="João" idade={30} />
      </div>
    </div>
  );
}