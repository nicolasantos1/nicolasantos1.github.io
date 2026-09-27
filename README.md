This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Playground

Em `/projetos`, os três projetos em destaque ficam na coluna esquerda. A
seleção de Cadastro de Leads mostra, à direita, o painel que envia requisições
diretamente do navegador à API hospedada separadamente. Os outros dois projetos
reservam essa área para visuais futuros. O portfólio continua sendo exportado
como site estático; ele não executa o backend nem guarda tokens.

1. Configure `NEXT_PUBLIC_CADASTRO_LEADS_API_URL` em `.env.local` para
   desenvolvimento, por exemplo `http://localhost:3001`.
2. Para publicar a integração, configure a variável de repositório
   `CADASTRO_LEADS_API_URL` no GitHub Actions com a URL HTTPS da API e gere
   um novo build. Sem essa variável, o playground ainda aparece quando
   Cadastro de Leads é selecionado, mas a execução fica desabilitada.
3. Permita a origem do portfólio em `CORS_ALLOWED_ORIGINS` no backend. O
   backend controla autenticação, validação, limites de requisições e os dados.

Os endpoints permitidos ficam em `src/app/projetos/_api-playground/_config.ts`.
Para adicionar um endpoint, inclua seu método, caminho, descrição, campos e
exemplo nesse arquivo. Outras APIs podem usar a mesma estrutura de configuração
no painel de outros projetos. O serviço `_service.ts` faz o `fetch`; o componente
`ApiPlayground.tsx` gerencia o endpoint e os estados de loading e resposta.
Não coloque credenciais em variáveis `NEXT_PUBLIC_`: seus valores são enviados
ao navegador.
