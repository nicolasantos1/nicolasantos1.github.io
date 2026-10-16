"use client";

import { useState } from "react";
import Image from "next/image";

export type FeaturedProject = {
  nome: string;
  title: string;
  description: string;
  tags: string[];
  repository: string;
  image: string;
  imageAlt: string;
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
                  href={project.repository}
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
        aria-label={"Visual de " + selectedProject.title}
        className="surface min-h-64 min-w-0 p-5 sm:p-6 lg:min-h-[36rem]"
      >
        <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl bg-slate-950/50">
          <Image
            src={selectedProject.image}
            alt={selectedProject.imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, calc(100vw - 80px)"
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
