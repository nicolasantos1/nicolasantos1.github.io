# Portfólio · Nicolas Santos

Portfólio em português com Next.js App Router, React, TypeScript e Tailwind CSS v4. Exportação estática para GitHub Pages.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Validação

```sh
npm run lint
npm run build
npm run check
```

`check` verifica as cinco páginas exportadas, referências a arquivos públicos e links internos. Execute depois do build. A saída estática fica em `out/`; `next start` não serve esse formato.

## Estrutura

```text
src/
  app/          # Rotas, layout e metadados do Next.js
  components/   # Navegação, transições, cabeçalho e rodapé compartilhados
  data/         # Projetos, competências e formação
  styles/       # Tokens visuais, estilos globais e transições
public/
  documents/    # Currículo em PDF
  images/       # Marca e capturas reais dos projetos
scripts/        # Verificação da exportação estática
legacy/         # Versão original preservada como arquivo histórico
```

O alias `@/` aponta para `src/`. Componentes usados por várias rotas ficam em `components/`; conteúdo estático fica em `data/`. Arquivos de convenção do Next.js permanecem em `app/`.

## Direção visual

Referência Linear: canvas `#08090a`, superfícies `#0f1011`, bordas finas `#23252a`, texto branco/cinza e uma ação principal `#e4f222` na home. Tokens ficam em `src/styles/tokens.css`. Cards usam raio de 12px; botões, 6px. O espaçamento de layout segue 8/12/24/96px, sem alterar a escala numérica nativa do Tailwind.

A pilha tipográfica prioriza Inter e usa `system-ui` quando indisponível, conforme fallback da referência. Não exige download de fontes durante o build. Monoespaçada fica restrita a metadados técnicos. As transições respeitam `prefers-reduced-motion`.

## Publicação

O workflow `.github/workflows/deploy.yml` publica `out/` no GitHub Pages após push em `main` ou execução manual. Push em branches de trabalho não publica o site automaticamente.
