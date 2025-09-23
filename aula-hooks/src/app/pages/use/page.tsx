import ControlPageHooks from "@/app/components/_controlPageHooks";
import { use } from "react";

// Função que retorna uma promise
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!res.ok) {
    throw new Error("Error fetching user");
  }
  return res.json();
}

// Componente do servidor que já retorna os dados
function UserDetails() {
  const user = use(fetchUser()); // ✅ só Server Component pode usar use()
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Usuário</h2>
      <p>
        <strong>Nome:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

// Componente principal do servidor
export default function UseComponent() {
  return (
    <ControlPageHooks noBackButton={true}>
      <h1 className="text-2xl mb-4">Demo do novo `use()` Hook</h1>
      <UserDetails /> {/* Não precisa de Suspense no servidor */}
    </ControlPageHooks>
  );
}
