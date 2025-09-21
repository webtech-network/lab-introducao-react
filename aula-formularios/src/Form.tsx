import { useState } from "react";
import { useForm } from "react-hook-form";

type User = {
  name: string;
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const [users, setUsers] = useState<User[]>([]);

  // função chamada quando o form é enviado
  const onSubmit = (data: User) => {
    setUsers([...users, data]); // adiciona novo usuário
    reset(); // limpa os campos do form
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-100">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Cadastro
        </h2>
        <p className="text-center text-gray-500">Aula sobre React Hook Form</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <label className="flex flex-col text-gray-700 font-medium">
            Nome:
            <input
              type="text"
              {...register("name", { required: "O nome é obrigatório" })}
              className="border border-violet-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </label>

          <label className="flex flex-col text-gray-700 font-medium">
            Email:
            <input
              type="email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um email válido",
                },
              })}
              className="border border-violet-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
          >
            Enviar
          </button>
        </form>

        {users.length > 0 && (
          <div className="mt-4 p-2 bg-purple-100 rounded">
            <p className="text-gray-700">
              <strong>Lista de cadastrados:</strong>
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              {users.map((u, index) => (
                <li key={index}>
                  {u.name} - {u.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}