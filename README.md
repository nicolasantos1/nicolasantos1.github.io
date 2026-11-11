# Portfólio de Nicolas Santos

Site estático em Astro e Tailwind CSS 4, com Bun como gerenciador de dependências
e runtime das ferramentas. O deploy é feito pelo GitHub Actions no GitHub Pages.

## Desenvolvimento

Requisitos: Bun 1.4.4, GNU Make e Python 3 (para verificar links).

```sh
make install
make dev
```

Abra a URL informada pelo Astro (normalmente `http://localhost:4321`).
`make help` lista todos os comandos. Eles também estão disponíveis como scripts
em `package.json`, por exemplo `bun run dev` e `bun run build`. Os scripts
executam as ferramentas com `bun --bun`, usando Bun como runtime.

| Comando                             | Função                                                       |
| ----------------------------------- | ------------------------------------------------------------ |
| `make install`                      | Instala dependências e atualiza `bun.lock` quando necessário |
| `make ci`                           | Instala com `--frozen-lockfile`                              |
| `make dev`                          | Inicia o servidor de desenvolvimento                         |
| `make build`                        | Gera os arquivos estáticos em `dist/`                        |
| `make preview` / `make start`       | Serve o build para revisão local                             |
| `make lint` / `make lint-fix`       | Verifica / corrige problemas de ESLint                       |
| `make format` / `make format-check` | Formata / verifica com Prettier                              |
| `make typecheck`                    | Verifica TypeScript e componentes Astro                      |
| `make check`                        | Verifica formatação, lint e tipos                            |
| `make links`                        | Verifica links, âncoras e imagens no build existente         |
| `make validate`                     | Executa check, build e verificação de links                  |
| `make clean`                        | Remove `dist/` e `.astro/`                                   |

A formatação cobre os formatos suportados pelo Prettier, incluindo Astro,
TypeScript, CSS, JSON, Markdown e YAML. A pasta `legacy/` é preservada;
Python e Makefile não são formatados pelo Prettier.

## Estrutura e publicação

- `src/pages/`: início, sobre, projetos, contato e a rota de compatibilidade
  `/formacao`, que encaminha para `/sobre#formacao`.
- `src/layouts/Layout.astro`: layout, metadados Open Graph/Twitter e transições de navegação.
- `/404.html`: página de erro para o GitHub Pages.
- `/sitemap.xml` e `/robots.txt`: descoberta das quatro páginas principais, sem indexar
  a rota de compatibilidade ou a página de erro. Atualize a lista em
  `src/pages/sitemap.xml.ts` ao adicionar uma página pública.
- `src/components/`: cabeçalho, rodapé, projetos, cópia de e-mail e ícones.
- `src/data/projects.ts`: conteúdo compartilhado dos projetos.
- `src/data/site.ts`: nome, e-mail, GitHub, currículo e crédito de desenvolvimento.
- `src/styles.css`: Tailwind CSS 4 e estilos visuais preservados.
- `public/`: imagens e currículo em PDF, copiados sem depender de serviços externos.
- `legacy/`: versão histórica, fora do build.

React renderiza o grid de ícones somente no build, sem enviar runtime React
ao navegador. Menu móvel e cópia de e-mail usam scripts TypeScript leves; o
ClientRouter do Astro mantém navegação, histórico e transições com suporte a
movimento reduzido. As páginas e seus links também funcionam sem JavaScript;
no celular, um fallback CSS mantém a navegação acessível.

O workflow `.github/workflows/deploy.yml` instala com o `bun.lock` congelado,
executa `make validate` e publica `dist/`. O site publicado é estático e não
precisa de runtime em produção. O endereço canônico está em `astro.config.mjs`.

## Projetos

Em `/projetos`, Debinatos, Frattellianos e IwetI aparecem em seções sempre
expandidas, nessa ordem. Cada seção apresenta descrição, tecnologias, links para
o site e o código, além de capturas reais em molduras de notebook e celular.
A partir de 768 px, os dispositivos ficam lado a lado; abaixo disso, empilhados.
Os links “Ampliar captura” abrem os arquivos originais em outra aba. Os cards da
home mantêm o acesso aos sites e oferecem links internos para cada projeto.
A página Projetos termina com uma chamada para contato.

### Capturas dos projetos

As seis imagens WebP ficam em `public/images/projects/`, com os sufixos
`-desktop` e `-mobile`. Foram capturadas no Chrome em **18/10/2026**, nas
versões publicadas, com viewports de **1440 × 900** e **390 × 844**:

| Projeto       | URL solicitada            | Página capturada                   |
| ------------- | ------------------------- | ---------------------------------- |
| Debinatos     | https://debinatos.com     | https://debinatos.com/             |
| Frattellianos | https://frattellianos.com | https://frattellianos.com/historia |
| IwetI         | https://iweti.com         | https://iweti.com/                 |

O Debinatos estava acessível na sessão do navegador utilizada para a captura,
mas uma requisição sem sessão redirecionou para a autenticação da Vercel.
O link público foi preservado; a configuração de acesso pertence ao projeto de origem.

Para atualizar as imagens, abra a mesma página em cada viewport, aguarde as
fontes e imagens carregarem e capture o início da página. Quando a janela física
limitar a captura, exporte a página completa e recorte o primeiro viewport.
Normalize a escala da captura para as dimensões acima e exporte como WebP
(qualidade 88), sem esticar ou recortar o layout para simular outra largura.
Os dados, resumos e textos alternativos ficam em `src/data/projects.ts`,
compartilhados pela página inicial e pela página de projetos. A home destaca
Debinatos ao lado da apresentação e mostra os demais projetos logo abaixo.
A exportação estática usa arquivos locais e não depende dos sites de origem
para exibir as prévias. As imagens das seções seguintes têm carregamento lazy.

### Logo e compartilhamento

O cabeçalho usa `Image` do Astro para gerar WebP de 40, 80 e 120 px a partir
do logo original, mantendo o arquivo público e sua URL. O layout gera uma versão
PNG de 512 px para compartilhamento, usada no Open Graph e no cartão Twitter
`summary`. As transformações acontecem no build, sem serviço externo.

### Validação do portfólio

```sh
make validate
```

A validação verifica formatação, lint, tipos, build, links locais, âncoras e imagens no HTML exportado,
incluindo o PDF do currículo. Requer Python 3, sem pacotes adicionais.

No navegador, confira também:

- Em 320 e 390 px, currículo visível com menu fechado e conteúdo sem corte horizontal.
- Menu abre com teclado, fecha com Escape devolvendo foco ao botão e fecha ao navegar.
- Página atual indicada no menu; voltar/avançar atualiza a indicação.
- Screenshots junto ao respectivo projeto no celular e lado a lado no desktop.
- “Copiar e-mail” confirma “E-mail copiado”; com permissão de área de transferência
  bloqueada, orienta a selecionar o endereço. O link de e-mail continua disponível.
- Com movimento reduzido, transições de página desativadas.
