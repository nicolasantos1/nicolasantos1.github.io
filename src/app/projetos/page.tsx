import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de desenvolvimento web e backend de Nicolas Santos.",
  alternates: { canonical: "/projetos" },
};

const projects = [
  {
    number: "01",
    title: "Sistema de cadastro de usuários",
    description:
      "Aplicação com autenticação, persistência de dados e integração com banco relacional.",
    tags: ["Java", "MySQL", "SQL"],
  },
  {
    number: "02",
    title: "Aplicação web responsiva",
    description:
      "Interface responsiva com manipulação do DOM, consumo de API REST e versionamento com Git.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Portfólio pessoal",
    description:
      "Evolução do primeiro portfólio estático para uma experiência moderna, acessível e responsiva.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">Projetos</p>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Aprendizado transformado em entregas.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Projetos desenvolvidos para praticar interfaces, lógica, integração de
            dados e organização de código.
          </p>
        </div>
        <a
          href="https://github.com/nicolassantos1"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-medium text-teal-200"
        >
          Ver GitHub
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.number}
            className="surface group flex min-h-80 flex-col p-6 transition hover:-translate-y-1 hover:border-teal-300/25"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-teal-300">/{project.number}</span>
              <span aria-hidden="true" className="text-xs text-slate-600">
                ◆
              </span>
            </div>
            <h2 className="mt-10 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label={"Tecnologias de " + project.title}
            >
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-white/6 px-3 py-1.5 text-xs text-slate-300">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      </section>
    </PageTransition>
  );
}
