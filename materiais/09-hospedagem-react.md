# Como hospedar um site React

## Objetivo

Explicar, de forma direta e prática, como publicar um projeto React (Vite ou Create React App) na web usando provedores populares: **Vercel, Netlify, GitHub Pages** e **Firebase Hosting**. Incluir checklist, comandos essenciais e dicas profissionais.

---

## Pré-requisitos (local)

1. Projeto React pronto e testado localmente.
2. Script de build no `package.json` (`npm run build` — Vite produz `dist`; CRA produz `build`).
3. Repositório Git (opcional para deploy via Git). Comandos básicos:
    ```bash
    git init
    git add .
    git commit -m "Initial"
    git remote add origin git@github.com:SEU-USER/SEU-REPO.git
    git push -u origin main
    ```

---

## 1) Vercel — deploy zero-config (recomendado para React)

Por que usar: detecta projetos React/Vite automaticamente, deploy contínuo a partir do Git, preview de PRs, configurações mínimas.

Passos rápidos:

1. Crie conta em vercel.com e conecte seu GitHub/GitLab/Bitbucket.
2. Clique em **New Project** → importe o repo. Vercel detecta framework (React/Cra/Vite).
    - Build command: `npm run build`
    - Output dir: `build` (CRA) ou `dist` (Vite)
3. Deploy automático ao fazer push.
4. (Opcional) Usar Vercel CLI:
    ```bash
    npm i -g vercel
    vercel --prod
    ```
5. Configurar domínio customizado pelo dashboard (aponta via DNS).

---

## 2) Netlify — simples e com drag-and-drop

Por que usar: deploy rápido, integração Git, suporte a redirects/rewrites fáceis (útil para SPAs).

Passos rápidos:

1. Crie conta em netlify.com.
2. **Opção A (Git):** New site → import from Git → configure build command `npm run build` e publish dir `build` ou `dist`.
3. **Opção B (Manual):** arraste a pasta `build`/`dist` para o painel (drag-and-drop) para um deploy rápido.
4. Para SPA, adicione um arquivo `_redirects` com:
    ```
    /*    /index.html   200
    ```

---

## 3) GitHub Pages — grátis para sites estáticos

Quando usar: sites estáticos simples (portfólio, docs) sem backend. Para apps SPA em CRA usa-se `gh-pages`.

Passos (CRA + gh-pages):

1. Instale `gh-pages`: `npm i --save-dev gh-pages`.
2. Em `package.json` adicione:
    ```json
    "homepage": "https://SEU-USER.github.io/SEU-REPO",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
3. `npm run deploy` publica em `gh-pages` branch.
4. Na aba _Settings → Pages_ do repo confirme o branch.

Obs: para Vite, configure `base` no `vite.config` se não estiver no root.

---

## 4) Firebase Hosting — robusto e com CLI

Quando usar: precisa de CDN, SSL automático, e integração com outras features do Firebase.

Passos rápidos:

1. Instale Firebase tools: `npm i -g firebase-tools`.
2. `firebase login` → `firebase init hosting` → escolha o projeto e a pasta `build`/`dist`.
3. `firebase deploy --only hosting`.

---

## Checklist mínimo antes do deploy

-   [ ] `npm run build` funciona localmente.
-   [ ] SPA: configurar fallback/rewrites (Netlify `_redirects`, Vercel `vercel.json`).
-   [ ] Variáveis de ambiente configuradas no painel do host.
-   [ ] Domínio e DNS (se for custom) prontos para apontar.
-   [ ] Testar página 404 / rotas dinâmicas.

---

## Comandos úteis

-   Build (Vite ou CRA):
    ```bash
    npm run build
    # Resultado: ./dist (Vite) ou ./build (CRA)
    ```
-   Vercel CLI deploy:
    ```bash
    npm i -g vercel
    vercel --prod
    ```
-   Netlify CLI (opcional):
    ```bash
    npm i -g netlify-cli
    netlify deploy --prod --dir=build
    ```
-   Firebase:
    ```bash
    npm i -g firebase-tools
    firebase init hosting
    firebase deploy --only hosting
    ```

---

## Problemas comuns e soluções rápidas

-   **Página branca ou erro 404 ao recarregar rota SPA:** faltou configurar fallback/rewrites.
-   **Build falhando no CI:** verifique NODE_VERSION.
-   **Assets quebrando em produção:** verifique `homepage` (CRA) ou `base` (Vite).
-   **CORS/API:** configure backend ou proxy no host.

---

## Resumo rápido por provider

-   **Vercel:** zero-config, ideal para React/Next.
-   **Netlify:** simples, ótimo para SPAs.
-   **GitHub Pages:** grátis para estáticos.
-   **Firebase Hosting:** CDN, SSL, CLI poderosa.

---
