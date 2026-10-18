import Image from "next/image";
import { DirectionalLink } from "./_components/directional-link";
import { PageTransition } from "./_components/page-transition";

const selectedProjects = [
  {
    title: "Debinatos",
    category: "E-commerce · Protótipo",
    description: "Uma loja de artesanatos, do catálogo ao checkout demonstrativo.",
    image: "/images/projects/debinatos-desktop.webp",
    href: "https://debinatos.com",
  },
  {
    title: "Frattellianos",
    category: "Site institucional",
    description: "História, valores e mensagens de uma comunidade cristã.",
    image: "/images/projects/frattellianos-desktop.webp",
    href: "https://frattellianos.com",
  },
  {
    title: "IwetI",
    category: "Tecnologia · Landing page",
    description: "Uma presença digital para apresentar serviços e soluções web.",
    image: "/images/projects/iweti-desktop.webp",
    href: "https://iweti.com",
  },
] as const;

const destinations = [
  {
    href: "/sobre",
    title: "Além do código",
    description: "Minha trajetória, interesses e jeito de construir.",
    action: "Sobre mim",
  },
  {
    href: "/formacao",
    title: "Aprendizado em movimento",
    description: "A base acadêmica e técnica por trás da prática.",
    action: "Minha formação",
  },
] as const;

export default function Home() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section aria-labelledby="home-title" className="pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pt-24">
          <p className="section-kicker">Olá, sou Nicolas Santos</p>
          <h1
            id="home-title"
            className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
          >
            Ideias que ganham <span className="text-gradient">forma na web.</span>
          </h1>

          <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
            <p className="max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              Desenvolvedor full-stack em formação e estudante de ADS no
              Mackenzie. Construo aplicações web com atenção à experiência,
              organização e ao que acontece por trás da interface.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <DirectionalLink
                href="/projetos"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
              >
                Explorar projetos <span aria-hidden="true">↗</span>
              </DirectionalLink>
              <DirectionalLink
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              >
                Fale comigo
              </DirectionalLink>
            </div>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Foco</dt>
              <dd className="mt-2 text-sm text-slate-300">Desenvolvimento web & backend</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Tecnologias</dt>
              <dd className="mt-2 text-sm text-slate-300">JavaScript · TypeScript · Java</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Localização</dt>
              <dd className="mt-2 text-sm text-slate-300">São Paulo, Brasil</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="selected-projects-title" className="border-t border-white/10 py-10 sm:py-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Da ideia à prática</p>
              <h2 id="selected-projects-title" className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Projetos selecionados
              </h2>
            </div>
            <DirectionalLink
              href="/projetos"
              className="inline-flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-teal-200 transition hover:text-teal-100"
            >
              Ver projetos e código <span aria-hidden="true">→</span>
            </DirectionalLink>
          </div>

          <div className="mt-7 grid gap-8 md:grid-cols-3 md:gap-6">
            {selectedProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title} (nova aba)`}
                className="group min-w-0 rounded-xl"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`Página inicial do site ${project.title}`}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1152px) 336px, (min-width: 768px) 30vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                    className="aspect-[8/5] w-full object-cover object-top transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <p className="mt-5 text-xs text-slate-400">{project.category}</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-teal-200">
                    {project.title}
                  </h3>
                  <span aria-hidden="true" className="text-teal-200 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="trajectory-title" className="border-t border-white/10 py-10 sm:py-12">
          <h2 id="trajectory-title" className="section-kicker">Conheça minha trajetória</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-12">
            {destinations.map((item) => (
              <DirectionalLink
                key={item.href}
                href={item.href}
                className="group rounded-sm py-2"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-teal-200">
                  {item.action}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </DirectionalLink>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
