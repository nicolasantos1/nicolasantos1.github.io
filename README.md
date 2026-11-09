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

## Projetos

Em `/projetos`, Debinatos, Frattellianos e IwetI aparecem em seções sempre
expandidas, nessa ordem. Cada seção apresenta descrição, tecnologias, links para
o site e o código, além de capturas reais em molduras de notebook e celular.
A partir de 768 px, os dispositivos ficam lado a lado; abaixo disso, empilhados.

### Capturas dos projetos

As seis imagens WebP ficam em `public/images/projects/`, com os sufixos
`-desktop` e `-mobile`. Foram capturadas no Chrome em **18/10/2026**, nas
versões publicadas, com viewports de **1440 × 900** e **390 × 844**:

| Projeto | URL solicitada | Página capturada |
| --- | --- | --- |
| Debinatos | https://debinatos.com | https://debinatos.com/ |
| Frattellianos | https://frattellianos.com | https://frattellianos.com/historia |
| IwetI | https://iweti.com | https://iweti.com/ |

O Debinatos estava acessível na sessão do navegador utilizada para a captura,
mas uma requisição sem sessão redirecionou para a autenticação da Vercel.
O link público foi preservado; a configuração de acesso pertence ao projeto de origem.

Para atualizar as imagens, abra a mesma página em cada viewport, aguarde as
fontes e imagens carregarem e capture o início da página. Quando a janela física
limitar a captura, exporte a página completa e recorte o primeiro viewport.
Normalize a escala da captura para as dimensões acima e exporte como WebP
(qualidade 88), sem esticar ou recortar o layout para simular outra largura.
Os dados, resumos e textos alternativos ficam em `src/app/projetos/_data.ts`,
compartilhados pela página inicial e pela página de projetos. A home destaca
Debinatos ao lado da apresentação e mostra os demais projetos logo abaixo.
A exportação estática usa arquivos locais e não depende dos sites de origem
para exibir as prévias. As imagens das seções seguintes têm carregamento lazy.

### Validação do portfólio

```sh
npm run lint
npm run build
python3 scripts/check_export.py
```

O último comando verifica links locais, âncoras e imagens no HTML exportado,
incluindo o PDF do currículo. Requer Python 3, sem pacotes adicionais.

No navegador, confira também:

- Em 320 e 390 px, currículo visível com menu fechado e conteúdo sem corte horizontal.
- Menu abre com teclado, fecha com Escape devolvendo foco ao botão e fecha ao navegar.
- Página atual indicada no menu; voltar/avançar atualiza a indicação.
- Screenshots junto ao respectivo projeto no celular e lado a lado no desktop.
- “Copiar e-mail” confirma “E-mail copiado”; com permissão de área de transferência
  bloqueada, orienta a selecionar o endereço. O link de e-mail continua disponível.
- Com movimento reduzido, transições de página desativadas.

## API Playground (arquivado)

O código do playground de Cadastro de Leads permanece em
`src/app/projetos/_api-playground/`, sem exibição na página atual.
O portfólio continua sendo exportado como site estático; ele não executa o
backend nem guarda tokens. A configuração arquivada mantém a URL base vazia,
deixando a execução de requisições desabilitada.

Os endpoints permitidos ficam em `src/app/projetos/_api-playground/_config.ts`.
Para adicionar um endpoint, inclua seu método, caminho, descrição, campos e
exemplo nesse arquivo. Outras APIs podem usar a mesma estrutura de configuração
no painel de outros projetos. O serviço `_service.ts` faz o `fetch`; o componente
`ApiPlayground.tsx` gerencia o endpoint e os estados de loading e resposta.
