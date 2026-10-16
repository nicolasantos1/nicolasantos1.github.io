import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";
import {
  FeaturedProjects,
  type FeaturedProject,
} from "./_components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos desenvolvidos na IwetI: Debinatos, Frattellianos e IwetI.",
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
    image: "/images/projects/debinatos.webp",
    imageAlt: "Marca Debinatos com mascote ruiva e joaninha",
  },
  {
    nome: "frattellianos",
    title: "Frattellianos",
    description:
      "Site institucional da comunidade cristã Frattellianos, com história, missão, valores e mensagens bíblicas em uma experiência responsiva.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/iweti-com/Frattellianos",
    image: "/images/projects/frattellianos.webp",
    imageAlt: "Página inicial do Frattellianos com mensagem de fé e símbolo aos pés da cruz",
  },
  {
    nome: "iweti",
    title: "IwetI",
    description:
      "Landing page da IwetI para apresentar soluções de tecnologia, serviços e portfólio, com identidade visual própria e navegação acessível.",
    tags: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/iweti/iweti",
    image: "/images/projects/iweti.webp",
    imageAlt: "Mascote da IwetI usando notebook ao lado da frase Tecnologia sem limites",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 py-5 sm:px-8 lg:py-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Projetos</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Projetos desenvolvidos na IwetI.
            </h1>
          </div>
          <a
            href="https://github.com/iweti"
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

        <div className="mt-12">
          <FeaturedProjects projects={featuredProjects} />
        </div>
      </section>
    </PageTransition>
  );
}
