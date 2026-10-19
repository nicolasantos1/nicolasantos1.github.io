import type { Metadata } from "next";
import { DirectionalLink } from "../_components/directional-link";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Sobre | Nicolas Santos",
  description: "Trajetória, competências, formação acadêmica e cursos de Nicolas Santos em desenvolvimento de software.",
  alternates: { canonical: "/sobre" },
};

const skillGroups: {
  title: string;
  skills: string[];
  description?: string;
}[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend e dados",
    skills: ["Java", "MySQL", "APIs REST"],
  },
  {
    title: "Outras ferramentas",
    skills: ["Git & GitHub", "C#"],
    description: "Usei C# no desenvolvimento de jogos.",
  },
];

const education = [
  {
    period: "2024 — 2026",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Universidade Presbiteriana Mackenzie · cursando",
  },
  {
    period: "2021 — 2024",
    title: "Técnico em Informática",
    place: "Senac Aclimação · concluído",
  },
];

const courses = [
  "Fundamentos e lógica de programação · Fundação Bradesco",
  "Excel, lógica de dados e visualização · Fundação Bradesco",
  "JavaScript: lógica, DOM, funções e eventos · Curso em Vídeo",
  "Banco de dados · Udemy",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section aria-labelledby="about-title" className="grid gap-8 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:py-16">
          <div>
            <p className="section-kicker">Sobre mim</p>
            <h1 id="about-title" className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Um pouco sobre mim.
            </h1>
            <nav aria-label="Seções da página Sobre" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-teal-200">
              <a href="#competencias" className="rounded-sm transition hover:text-teal-100">Competências</a>
              <a href="#formacao" className="rounded-sm transition hover:text-teal-100">Formação e cursos</a>
            </nav>
          </div>

          <div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                Comecei a programar porque queria criar jogos. Usei Construct 3 e
                depois passei para Unity e C#, onde aprendi a trabalhar com lógica,
                mecânicas e organização do código.
              </p>
              <p>
                Depois fui para o desenvolvimento web. Hoje sou desenvolvedor
                full-stack e trabalho com interfaces, APIs e bancos de dados.
              </p>
              <p>
                Nos projetos que estão aqui no portfólio, fiz a maior parte do
                código sozinho.
              </p>
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
              Na tecnologia desde <span className="text-slate-200">2021</span>
            </p>
          </div>
        </section>

        <section id="competencias" aria-labelledby="skills-title" className="grid scroll-mt-4 gap-8 border-t border-white/10 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:py-16">
          <div>
            <p className="section-kicker">Tecnologias</p>
            <h2 id="skills-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              O que uso nos projetos.
            </h2>
          </div>
          <div>
            <div className="divide-y divide-white/10">
              {skillGroups.map((group) => (
                <div key={group.title} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias: ${group.title}`}>
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {group.description && (
                    <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                  )}
                </div>
              ))}
            </div>
            <DirectionalLink
              href="/projetos"
              className="mt-8 inline-flex items-center gap-2 rounded-sm font-semibold text-teal-200 transition hover:translate-x-1"
            >
              Ver meus projetos →
            </DirectionalLink>
          </div>
        </section>

        <section id="formacao" aria-labelledby="education-title" className="grid scroll-mt-4 gap-8 border-t border-white/10 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:py-16">
          <div>
            <p className="section-kicker">Formação</p>
            <h2 id="education-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Minha formação e cursos.
            </h2>
          </div>
          <div>
            <ol aria-label="Formação acadêmica" className="border-l border-white/10">
              {education.map((item) => (
                <li key={item.title} className="relative pb-8 pl-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-teal-300 ring-4 ring-[#07111f]" />
                  <p className="font-mono text-sm text-teal-300">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.place}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white">Cursos complementares</h3>
              <ul aria-label="Cursos complementares" className="mt-4 space-y-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <span aria-hidden="true" className="text-teal-300">·</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
