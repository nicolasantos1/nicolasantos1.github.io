"use client";

import { useState } from "react";
import { ApiPlayground } from "../_api-playground/_components/ApiPlayground";
import { cadastroLeadsProject } from "../_api-playground/_config";

type FeaturedProject = {
  nome: string;
  title: string;
  description: string;
  tags: string[];
};

export function FeaturedProjects({
  projects,
}: {
  projects: readonly FeaturedProject[];
}) {
  const [selectedId, setSelectedId] = useState(projects[0].nome);
  const selectedProject =
    projects.find((project) => project.nome === selectedId) ?? projects[0];

  return (
    <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div
        role="radiogroup"
        aria-label="Projetos em destaque"
        className="flex min-w-0 flex-col gap-4"
      >
        {projects.map((project) => {
          const selected = project.nome === selectedProject.nome;

          return (
            <article
              key={project.nome}
              className={
                "surface group relative flex min-h-44 min-w-0 flex-col p-5 transition hover:ring-1 hover:ring-teal-300/20 focus-within:ring-2 focus-within:ring-teal-200/70 " +
                (selected ? "ring-1 ring-teal-300/50" : "")
              }
            >
              <input
                type="radio"
                name="featured-project"
                aria-label={"Selecionar " + project.title}
                aria-controls="featured-project-panel"
                checked={selected}
                onChange={() => setSelectedId(project.nome)}
                className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
              />
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
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
                  className="group/link relative z-10 inline-flex shrink-0 items-center gap-2 font-medium text-teal-200"
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
            </article>
          );
        })}
      </div>

      <section
        id="featured-project-panel"
        aria-label={
          selectedProject.nome === "cadastro-leads"
            ? "Playground de Cadastro de Leads"
            : "Visual de " + selectedProject.title
        }
        className="surface min-h-64 min-w-0 p-5 sm:p-6 lg:min-h-[36rem]"
      >
        {selectedProject.nome === "cadastro-leads" && (
          <ApiPlayground project={cadastroLeadsProject} />
        )}
      </section>
    </div>
  );
}
