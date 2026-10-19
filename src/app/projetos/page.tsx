import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";
import {
  FeaturedProjects,
  type FeaturedProject,
} from "./_components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de Nicolas Santos: Debinatos, Frattellianos e IwetI.",
  alternates: { canonical: "/projetos" },
};

const featuredProjects: FeaturedProject[] = [
  {
    nome: "debinatos",
    title: "Debinatos",
    description:
      "Protótipo de loja virtual de artesanatos e itens personalizados, com catálogo, carrinho, checkout demonstrativo e painel de gestão.",
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

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Projetos</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Projetos que desenvolvi.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore o design em diferentes telas e abra cada site para conhecer
              a experiência completa.
            </p>
          </div>
          <a
            href="https://github.com/nicolasantos1"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-teal-200"
          >
            Ver GitHub
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="mt-10 sm:mt-14">
          <FeaturedProjects projects={featuredProjects} />
        </div>
      </section>
    </PageTransition>
  );
}
