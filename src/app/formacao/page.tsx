import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Formação | Nicolas Santos",
  description: "Formação acadêmica e cursos de Nicolas Santos.",
  alternates: { canonical: "/formacao" },
};

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

export default function EducationPage() {
  return (
    <PageTransition>
      <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
        <div>
          <p className="section-kicker">Formação</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Base técnica em evolução constante.
          </h1>
          <p className="mt-5 leading-7 text-slate-400">
            Formação acadêmica acompanhada de estudo prático e projetos próprios.
          </p>
        </div>
        <ol className="border-l border-white/10">
          {education.map((item) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-teal-300 ring-4 ring-[#07111f]" />
              <p className="font-mono text-sm text-teal-300">{item.period}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-slate-400">{item.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div>
            <p className="section-kicker">Cursos</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Aprendizado além da graduação.
            </h2>
          </div>
          <ul className="grid gap-4">
            {courses.map((course) => (
              <li key={course} className="surface flex items-start gap-4 p-5 text-slate-300">
                <span aria-hidden="true" className="mt-1 text-teal-300">
                  ◆
                </span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="surface grid gap-8 p-7 sm:grid-cols-3 sm:p-9">
          <div>
            <h2 className="font-semibold text-white">Proatividade</h2>
            <p className="mt-2 leading-7 text-slate-400">
              Iniciativa para resolver problemas e aprender tecnologias.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Responsabilidade</h2>
            <p className="mt-2 leading-7 text-slate-400">
              Comprometimento com prazos e tarefas assumidas.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Persistência</h2>
            <p className="mt-2 leading-7 text-slate-400">
              Foco e dedicação diante de desafios e dificuldades.
            </p>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
