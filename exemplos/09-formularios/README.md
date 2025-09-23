# Guia de como usar formulário com React Hook Form no React

## O que é o React Hook Form?

O React Hook Form é uma biblioteca leve e eficiente para gerenciar formulários no React. Ele utiliza os hooks do React para fornecer uma maneira simples e performática de lidar com validação, coleta de dados e manipulação de formulários.

## Por que usar o React Hook Form?

- **Performance**: Minimiza re-renderizações desnecessárias.
- **Fácil de usar**: API simples e intuitiva.
- **Validação integrada**: Suporte para validação com bibliotecas como `Yup` ou validação personalizada.
- **Leve**: Tamanho reduzido comparado a outras bibliotecas de formulários.

## Como instalar

Para começar, instale o React Hook Form no seu projeto:

```bash
npm install react-hook-form
```

## Exemplo básico de uso

Aqui está um exemplo simples de como criar um formulário com React Hook Form:

```jsx
import React from "react";
import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome:</label>
                <input {...register("nome", { required: "O nome é obrigatório" })} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "O email é obrigatório",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email inválido",
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default App;
```

## Explicação do exemplo

1. **`useForm`**: Hook principal da biblioteca que fornece métodos para gerenciar o formulário.
2. **`register`**: Registra os campos do formulário para que o React Hook Form possa controlá-los.
3. **`handleSubmit`**: Função que lida com o envio do formulário.
4. **`formState.errors`**: Contém os erros de validação dos campos.

## Integração com Yup para validação

Você pode usar o Yup para validação de esquemas:

```bash
npm install @hookform/resolvers yup
```

Exemplo:

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
});

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome:</label>
                <input {...register("nome")} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default App;
```

## Conclusão

O React Hook Form é uma ferramenta poderosa para gerenciar formulários no React. Ele simplifica o processo de validação e coleta de dados, tornando o desenvolvimento mais eficiente e organizado.

Para mais informações, consulte a [documentação oficial](https://react-hook-form.com/).