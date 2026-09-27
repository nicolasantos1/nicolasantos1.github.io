import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";
import { FeaturedProjects } from "./_components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de desenvolvimento web e backend de Nicolas Santos.",
  alternates: { canonical: "/projetos" },
};

type Project = {
  nome: string;
  title: string;
  description: string;
  tags: string[];
};

const featuredProjects: Project[] = [
  {
    nome: "cadastro-leads",
    title: "Cadastro de Leads",
    description:
      "API REST para gestão de leads, com filtros, autenticação, documentação e testes automatizados.",
    tags: ["Go", "Fiber", "SQLite"],
  },
  {
    nome: "backend-challenge-092025",
    title: "Análise de Sentimentos",
    description:
      "API que analisa mensagens para identificar sentimentos, engajamento, tendências e anomalias.",
    tags: ["Python", "FastAPI", "pytest"],
  },
  {
    nome: "nicolasantos1.github.io",
    title: "Portfólio pessoal",
    description:
      "Portfólio responsivo que reúne meus projetos e apresenta minha trajetória em desenvolvimento.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const moreProjects: Project[] = [
  {
    nome: "note-web",
    title: "Note Web",
    description:
      "Protótipo web para organizar treinos e registrar exercícios, com experimentos de armazenamento local.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    nome: "login-system",
    title: "Login System",
    description:
      "Aplicação desktop de cadastro e login com interface gráfica e dados armazenados em SQLite.",
    tags: ["Python", "Tkinter", "SQLite"],
  },
  {
    nome: "teste-tecnico",
    title: "HTML Analyzer",
    description:
      "Programa de linha de comando que identifica o texto mais profundo de uma página HTML a partir de uma URL.",
    tags: ["Java"],
  },
];

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h2>
      <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
      <div className="mt-auto flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <ul
          className="flex flex-wrap gap-2"
          aria-label={"Tecnologias de " + project.title}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/6 px-3 py-1.5 text-xs text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={"https://github.com/nicolasantos1/" + project.nome}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex shrink-0 items-center gap-2 font-medium text-teal-200"
        >
          Ver no GitHub
          <span
            aria-hidden="true"
            className="transition-transform group-hover/link:translate-x-1"
          >
            ↗
          </span>
        </a>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface group flex min-h-50 flex-col p-6 transition hover:-translate-y-1 hover:border-teal-300/25">
      <ProjectContent project={project} />
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 py-5 sm:px-8 lg:py-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Projetos</p>
            
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

        <div className="mt-12">
          <FeaturedProjects projects={featuredProjects} />
        </div>

        <details className="group mt-8">
          <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-teal-300/25 px-5 py-3 font-medium text-teal-200 transition hover:border-teal-300/50 hover:bg-teal-300/5 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Ver mais projetos</span>
            <span className="hidden group-open:inline">Ver menos projetos</span>
            <span
              aria-hidden="true"
              className="transition-transform group-open:rotate-180"
            >
              ↓
            </span>
          </summary>
          <div className="mt-8 flex flex-col gap-6">
            {moreProjects.map((project) => (
              <ProjectCard key={project.nome} project={project} />
            ))}
          </div>
        </details>
      </section>
    </PageTransition>
  );
}
