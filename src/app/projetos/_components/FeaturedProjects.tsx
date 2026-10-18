import Image from "next/image";

type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  nome: string;
  title: string;
  description: string;
  tags: string[];
  repository: string;
  liveUrl: string;
  desktopImage: ProjectScreenshot;
  mobileImage: ProjectScreenshot;
};

export function FeaturedProjects({
  projects,
}: {
  projects: readonly FeaturedProject[];
}) {
  return (
    <div className="grid min-w-0 gap-10 sm:gap-14">
      {projects.map((project, index) => (
        <article
          key={project.nome}
          aria-labelledby={`${project.nome}-title`}
          className="surface project-showcase min-w-0"
        >
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-end lg:p-10">
            <div className="max-w-2xl">
              <p className="section-kicker">
                Projeto /{String(index + 1).padStart(2, "0")}
              </p>
              <h2
                id={`${project.nome}-title`}
                className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                {project.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                {project.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`Tecnologias de ${project.title}`}
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 lg:shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir site ${project.title} (nova aba)`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
              >
                Abrir site <span aria-hidden="true">↗</span>
              </a>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${project.title} no GitHub (nova aba)`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:text-teal-200"
              >
                Ver código <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="project-devices">
            <figure className="project-desktop">
              <div className="project-laptop">
                <div className="project-browser" aria-hidden="true">
                  <span className="project-browser-dots"><i /><i /><i /></span>
                  <span>{new URL(project.liveUrl).hostname}</span>
                  <span className="project-browser-mark">↗</span>
                </div>
                <Image
                  src={project.desktopImage.src}
                  alt={project.desktopImage.alt}
                  width={1440}
                  height={900}
                  sizes="(min-width: 1152px) 760px, (min-width: 768px) 65vw, calc(100vw - 88px)"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="project-screen"
                />
              </div>
              <div className="project-laptop-base" aria-hidden="true" />
              <figcaption className="project-device-caption">Versão desktop</figcaption>
            </figure>

            <figure className="project-mobile">
              <div className="project-phone">
                <div className="project-phone-camera" aria-hidden="true" />
                <Image
                  src={project.mobileImage.src}
                  alt={project.mobileImage.alt}
                  width={390}
                  height={844}
                  sizes="(min-width: 1152px) 220px, (min-width: 768px) 20vw, 260px"
                  loading="lazy"
                  className="project-screen"
                />
                <div className="project-phone-home" aria-hidden="true" />
              </div>
              <figcaption className="project-device-caption">Versão mobile</figcaption>
            </figure>
          </div>
        </article>
      ))}
    </div>
  );
}
