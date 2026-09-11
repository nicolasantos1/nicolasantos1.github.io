import { projects } from "@/data/projetos";
import type { Metadata } from "next";
import Image from "next/image";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de desenvolvimento web e backend de Nicolas Santos.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">Projetos</p>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-[510] tracking-tight text-white sm:text-5xl">
            Aprendizado transformado em entregas.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-fog">
            Projetos desenvolvidos para praticar interfaces, lógica, integração de
            dados e organização de código.
          </p>
        </div>
        <a
          href="https://github.com/nicolasantos1"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-[510] text-mist"
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
            className="surface group flex min-h-50 flex-col gap-6 p-6 transition hover:-translate-y-1 hover:border-smoke md:flex-row"
          >
            {project.image && (
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-void md:w-1/2">
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
              <h2 className="text-2xl font-[510] tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-fog">{project.description}</p>
              <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={"Tecnologias de " + project.title}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/6 px-3 py-1.5 text-xs text-mist">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://github.com/nicolasantos1/${project.nome}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 font-[510] text-mist"
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
