import Image from "next/image";
import { DirectionalLink } from "./_components/directional-link";
import { PageTransition } from "./_components/page-transition";
import { featuredProjects } from "./projetos/_data";

export default function Home() {
  const [featured, ...otherProjects] = featuredProjects;

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section
          aria-labelledby="home-title"
          className="grid items-center gap-8 py-8 sm:gap-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20"
        >
          <div>
            <h1
              id="home-title"
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl"
            >
              Nicolas Santos
            </h1>
            <p className="mt-4 text-lg font-medium leading-7 text-slate-200 sm:text-2xl sm:leading-8">
              Desenvolvimento web e backend.
            </p>
            <p className="mt-4 max-w-lg text-pretty text-base leading-7 text-slate-300">
              Aplicações web com foco em usabilidade e integração.
              Estudante de ADS no Mackenzie, em São Paulo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <DirectionalLink
                href="/projetos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
              >
                Ver projetos
              </DirectionalLink>
              <DirectionalLink
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Contato
              </DirectionalLink>
            </div>
          </div>

          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir site ${featured.title} (nova aba)`}
            className="group min-w-0 rounded-2xl border border-white/10 bg-[#101c2d] transition-colors hover:border-white/30"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
              <span className="text-slate-300">Projeto em destaque</span>
              <span className="text-slate-400">{featured.category}</span>
            </div>
            <Image
              src={featured.desktopImage.src}
              alt={featured.desktopImage.alt}
              width={1440}
              height={900}
              sizes="(min-width: 1152px) 570px, (min-width: 1024px) 50vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              loading="eager"
              className="aspect-[8/5] w-full border-y border-white/10 object-cover object-top"
            />
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">{featured.title}</h2>
                <span className="text-sm font-medium text-teal-200">
                  Abrir site <span aria-hidden="true">↗</span>
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{featured.summary}</p>
            </div>
          </a>
        </section>

        <section aria-labelledby="selected-projects-title" className="border-t border-white/10 py-10 sm:py-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 id="selected-projects-title" className="text-3xl font-semibold tracking-tight text-white">
              Mais projetos
            </h2>
            <DirectionalLink
              href="/projetos"
              className="inline-flex min-h-11 w-fit items-center rounded-sm text-sm font-medium text-teal-200 transition-colors hover:text-teal-100"
            >
              Ver projetos e código
            </DirectionalLink>
          </div>

          <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-8">
            {otherProjects.map((project) => (
              <a
                key={project.nome}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title} (nova aba)`}
                className="group min-w-0 rounded-xl"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900 transition-colors group-hover:border-white/30">
                  <Image
                    src={project.desktopImage.src}
                    alt={project.desktopImage.alt}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1152px) 528px, (min-width: 768px) 45vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                    className="aspect-[8/5] w-full object-cover object-top"
                  />
                </div>
                <p className="mt-5 text-xs text-slate-400">{project.category}</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-teal-200">
                    {project.title}
                  </h3>
                  <span aria-hidden="true" className="text-teal-200">↗</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="trajectory-title" className="border-t border-white/10 py-10 sm:py-12">
          <h2 id="trajectory-title" className="section-kicker">Conheça minha trajetória</h2>
          <DirectionalLink
            href="/sobre"
            className="group mt-6 flex flex-col justify-between gap-5 rounded-sm py-2 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">Além do código</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Minha trajetória, competências e formação em um só lugar.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm text-teal-200">
              Sobre mim <span aria-hidden="true">→</span>
            </span>
          </DirectionalLink>
        </section>
      </div>
    </PageTransition>
  );
}
