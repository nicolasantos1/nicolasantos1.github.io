import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";
import { FeaturedProjects } from "./_components/FeaturedProjects";
import { featuredProjects } from "./_data";

export const metadata: Metadata = {
  title: "Projetos | Nicolas Santos",
  description: "Projetos de Nicolas Santos: Debinatos, Frattellianos e IwetI.",
  alternates: { canonical: "/projetos" },
};

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
