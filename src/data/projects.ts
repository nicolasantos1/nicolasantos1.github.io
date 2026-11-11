type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  nome: string;
  title: string;
  category: string;
  summary: string;
  technicalFocus: string;
  description: string;
  tags: string[];
  repository: string;
  liveUrl: string;
  desktopImage: ProjectScreenshot;
  mobileImage: ProjectScreenshot;
};

export const featuredProjects: FeaturedProject[] = [
  {
    nome: "debinatos",
    title: "Debinatos",
    category: "Catálogo de artesanatos",
    summary: "Do catálogo ao carrinho, com atendimento pelo WhatsApp.",
    technicalFocus:
      "Favoritos e carrinho persistem no navegador. Os itens selecionados compõem a mensagem para combinar a compra, sem processar pagamentos no site.",
    description:
      "Catálogo de artesanatos e itens personalizados, com favoritos, carrinho e painel para gerenciar produtos e fotos. A compra é combinada pelo WhatsApp.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/iweti/Debinatos",
    liveUrl: "https://debinatos.com",
    desktopImage: {
      src: "/images/projects/debinatos-desktop.webp",
      alt: "Debinatos no desktop: navegação completa, apresentação da loja e artesanatos em destaque.",
    },
    mobileImage: {
      src: "/images/projects/debinatos-mobile.webp",
      alt: "Debinatos no celular: menu compacto e apresentação da loja reorganizada em uma coluna.",
    },
  },
  {
    nome: "frattellianos",
    title: "Frattellianos",
    category: "Site institucional",
    summary: "História, valores e mensagens de uma comunidade cristã.",
    technicalFocus:
      "Conteúdo e navegação se reorganizam entre desktop e celular, mantendo história, missão e mensagens acessíveis em telas menores.",
    description:
      "Site institucional da comunidade cristã Frattellianos, com história, missão, valores e mensagens bíblicas em uma experiência responsiva.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/iweti-com/Frattellianos",
    liveUrl: "https://frattellianos.com",
    desktopImage: {
      src: "/images/projects/frattellianos-desktop.webp",
      alt: "Frattellianos no desktop: mensagem de fé ao lado do símbolo de uma pessoa aos pés da cruz.",
    },
    mobileImage: {
      src: "/images/projects/frattellianos-mobile.webp",
      alt: "Frattellianos no celular: navegação e mensagem de fé adaptadas à tela estreita.",
    },
  },
  {
    nome: "iweti",
    title: "IwetI",
    category: "Serviços de tecnologia",
    summary: "Uma presença digital para apresentar serviços e soluções web.",
    technicalFocus:
      "HTML, CSS e JavaScript sem framework. O menu mobile responde ao teclado e o contato prepara uma mensagem no aplicativo de e-mail.",
    description:
      "Landing page da IwetI para apresentar soluções de tecnologia, serviços e portfólio, com identidade visual própria e navegação acessível.",
    tags: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/iweti/iweti",
    liveUrl: "https://iweti.com",
    desktopImage: {
      src: "/images/projects/iweti-desktop.webp",
      alt: "IwetI no desktop: navegação de serviços e chamada para experiências digitais em uma composição ampla.",
    },
    mobileImage: {
      src: "/images/projects/iweti-mobile.webp",
      alt: "IwetI no celular: menu compacto, título e ações ajustados à largura da tela.",
    },
  },
];
