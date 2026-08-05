import type { Metadata } from "next";
import { DirectionalLink } from "../_components/directional-link";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Sobre | Nicolas Santos",
  description: "Trajetória e competências de Nicolas Santos em desenvolvimento de software.",
  alternates: { canonical: "/sobre" },
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "C#",
  "MySQL",
  "Git & GitHub",
  "APIs REST",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
        <div>
          <p className="section-kicker">Sobre mim</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Curiosidade virou caminho profissional.
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            Minha jornada na programação começou pelo interesse em desenvolver
            jogos. Construct 3 apresentou lógica por eventos, variáveis e
            condições. Depois, Unity e C# trouxeram desafios maiores, como
            mecânicas, menus, fases e organização de sistemas.
          </p>
          <p>
            Ao migrar para desenvolvimento web, percebi que essa base lógica
            acelerava meu aprendizado em HTML, CSS e JavaScript. Hoje estudo
            aplicações web e backend, incluindo APIs, bancos de dados e integração
            entre sistemas.
          </p>
          <p>
            Busco oportunidade para aplicar esse conhecimento, aprender com uma
            equipe experiente e contribuir em produtos usados por pessoas reais.
          </p>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="surface p-6">
              <strong className="block text-3xl text-white">2021</strong>
              <span className="mt-2 block text-sm text-slate-400">Início na tecnologia</span>
            </div>
            <div className="surface p-6">
              <strong className="block text-3xl text-white">2026</strong>
              <span className="mt-2 block text-sm text-slate-400">Conclusão prevista ADS</span>
            </div>
            <div className="surface p-6">
              <strong className="block text-3xl text-white">PT · EN</strong>
              <span className="mt-2 block text-sm text-slate-400">Inglês técnico intermediário</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
        <div>
          <p className="section-kicker">Competências</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ferramentas que uso para construir e aprender.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Base prática em frontend, lógica, banco de dados e versionamento.
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-3" aria-label="Tecnologias">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-medium text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
          <DirectionalLink
            href="/projetos"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-teal-200 transition hover:translate-x-1"
          >
            Veja essas competências em projetos →
          </DirectionalLink>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
