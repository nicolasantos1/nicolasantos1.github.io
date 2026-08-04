import Image from "next/image";
import { DirectionalLink } from "./_components/directional-link";
import { PageTransition } from "./_components/page-transition";

const destinations = [
  {
    href: "/sobre",
    number: "01",
    title: "Sobre mim",
    description: "Conheça minha trajetória, foco profissional e competências.",
  },
  {
    href: "/projetos",
    number: "02",
    title: "Projetos",
    description: "Veja aplicações que transformaram estudo em prática.",
  },
  {
    href: "/formacao",
    number: "03",
    title: "Formação",
    description: "Confira minha base acadêmica, técnica e cursos.",
  },
] as const;

export default function Home() {
  return (
    <PageTransition>
      <div>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/6 px-4 py-2 text-sm font-medium text-teal-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-300 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-teal-300" />
            </span>
            Disponível para estágio ou posição júnior
          </div>

          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-indigo-300">
            Desenvolvedor full-stack em formação
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Transformo ideias em experiências web{" "}
            <span className="text-gradient">claras e funcionais.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            Sou Nicolas Santos, estudante de Análise e Desenvolvimento de
            Sistemas. Construo aplicações web, estudo backend e evoluo cada
            projeto com prática, organização e curiosidade.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <DirectionalLink
              href="/projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              Conheça meus projetos
              <span aria-hidden="true">↗</span>
            </DirectionalLink>
            <DirectionalLink
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Fale comigo
            </DirectionalLink>
          </div>
        </div>

        <aside className="surface float-slow relative mx-auto w-full max-w-md overflow-hidden p-6 lg:mx-0 lg:justify-self-end">
          <div className="absolute -right-16 -top-20 size-48 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative flex items-center gap-4 border-b border-white/10 pb-6">
            <Image
              src="/images/nicolas-logo.png"
              alt="Logo de Nicolas Santos"
              width={88}
              height={88}
              className="size-20 rounded-2xl shadow-2xl shadow-indigo-950/60 ring-1 ring-white/15"
            />
            <div>
              <p className="text-sm text-slate-400">Perfil</p>
              <p className="mt-1 text-xl font-semibold text-white">Nicolas Santos</p>
              <p className="mt-1 text-sm text-teal-200">São Paulo, Brasil</p>
            </div>
          </div>

          <dl className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Foco</dt>
              <dd className="mt-2 font-medium text-slate-200">Web & Backend</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Formação</dt>
              <dd className="mt-2 font-medium text-slate-200">ADS · Mackenzie</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Base</dt>
              <dd className="mt-2 font-medium text-slate-200">JavaScript & Java</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">Objetivo</dt>
              <dd className="mt-2 font-medium text-slate-200">Projetos reais</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <p className="section-kicker">Explore o portfólio</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {destinations.map((item) => (
              <DirectionalLink
                key={item.href}
                href={item.href}
                className="surface group p-6 transition hover:-translate-y-1 hover:border-teal-300/25"
              >
                <span className="font-mono text-sm text-teal-300">/{item.number}</span>
                <h2 className="mt-8 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                <span className="mt-8 inline-block text-teal-200 transition-transform group-hover:translate-x-1">
                  Abrir página →
                </span>
              </DirectionalLink>
            ))}
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
