import { education, courses } from "@/data/formacao";
import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Formação | Nicolas Santos",
  description: "Formação acadêmica e cursos de Nicolas Santos.",
  alternates: { canonical: "/formacao" },
};

export default function EducationPage() {
  return (
    <PageTransition>
      <div>
      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
        <div>
          <p className="section-kicker">Formação</p>
          <h1 className="mt-4 text-balance text-4xl font-[510] tracking-tight text-white sm:text-5xl">
            Base técnica em evolução constante.
          </h1>
          <p className="mt-5 leading-7 text-fog">
            Formação acadêmica acompanhada de estudo prático e projetos próprios.
          </p>
        </div>
        <ol className="border-l border-white/10">
          {education.map((item) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-mist ring-4 ring-void" />
              <p className="font-mono text-sm text-mist">{item.period}</p>
              <h2 className="mt-2 text-2xl font-[510] text-white">{item.title}</h2>
              <p className="mt-2 text-fog">{item.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div>
            <p className="section-kicker">Cursos</p>
            <h2 className="mt-4 text-3xl font-[510] tracking-tight text-white sm:text-4xl">
              Aprendizado além da graduação.
            </h2>
          </div>
          <ul className="grid gap-4">
            {courses.map((course) => (
              <li key={course} className="surface flex items-start gap-4 p-5 text-mist">
                <span aria-hidden="true" className="mt-1 text-mist">
                  ◆
                </span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="surface grid gap-8 p-7 sm:grid-cols-1 sm:p-9">
          <div>
            <h2 className="font-[510] text-white">Proatividade</h2>
            <p className="mt-2 leading-7 text-fog">
              Iniciativa para resolver problemas e aprender tecnologias.
            </p>
          </div>
          <div>
            <h2 className="font-[510] text-white">Responsabilidade</h2>
            <p className="mt-2 leading-7 text-fog">
              Comprometimento com prazos e tarefas assumidas.
            </p>
          </div>
          <div>
            <h2 className="font-[510] text-white">Persistência</h2>
            <p className="mt-2 leading-7 text-fog">
              Foco e dedicação diante de desafios e dificuldades.
            </p>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
