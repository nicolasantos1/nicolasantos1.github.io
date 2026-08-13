import type { Metadata } from "next";
import Image from "next/image";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de desenvolvimento web e backend de Nicolas Santos.",
  alternates: { canonical: "/projetos" },
};

const projects = [
  {
    nome: "cadastro-leads",
    title: "Sistema de cadastro de usuários",
    description:
      "Aplicação com autenticação, persistência de dados e integração com banco relacional.",
    tags: ["Java", "MySQL", "SQL"],
  },
  {
    nome: "login-system",
    title: "Aplicação web responsiva",
    description:
      "Sistema de login com interface responsiva, validação de campos e interações desenvolvidas com JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/login-system-responsive.png",
    imageAlt:
      "Interface do sistema de login adaptada para notebook, tablet e celular",
  },
  {
    nome: "nicolasantos1.github.io",
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
          href="https://github.com/nicolasantos1"
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

      <div className="mt-12 flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.nome}
            className="surface group flex min-h-50 flex-col gap-6 p-6 transition hover:-translate-y-1 hover:border-teal-300/25 md:flex-row"
          >
            {project.image && (
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, calc(100vw - 40px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex gap-2 min-w-0 flex-1 flex-col">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-auto flex justify-between items-center gap-4">
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={"Tecnologias de " + project.title}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/6 px-3 py-1.5 text-xs text-slate-300">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://github.com/nicolasantos1/${project.nome}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 font-medium text-teal-200"
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
            </div>
          </article>
        ))}
      </div>
      </section>
    </PageTransition>
  );
}
