// Definindo os tipos que a prop vai receber
type SaudacaoProps = {
  nome: string;
  idade: number;
  altura?: number; // prop opcional
}

// Recebendo as props tipadas
export default function Saudacao({ nome, idade, altura }: SaudacaoProps) {
  return (
    <p className="text-md mb-2 text-center p-3 border border-gray-300 rounded-lg bg-purple-50">
      Olá, {nome}! Você tem {idade} anos.
      {altura && <span> Sua altura é {altura} metros.</span>}
    </p>
  );
}
