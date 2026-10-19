import type { Metadata } from "next";
import type { ReactNode } from "react";
import Html5OriginalIcon from "react-devicons/html5/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import ReactOriginalIcon from "react-devicons/react/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TailwindcssOriginalIcon from "react-devicons/tailwindcss/original";
import GoOriginalIcon from "react-devicons/go/original";
import PythonOriginalIcon from "react-devicons/python/original";
import FastapiOriginalIcon from "react-devicons/fastapi/original";
import SqliteOriginalIcon from "react-devicons/sqlite/original";
import JavaOriginalIcon from "react-devicons/java/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import GitOriginalIcon from "react-devicons/git/original";
import GithubOriginalIcon from "react-devicons/github/original";
import DockerOriginalIcon from "react-devicons/docker/original";
import CsharpOriginalIcon from "react-devicons/csharp/original";
import { FiberIcon, RestApiIcon } from "./_components/technology-icons";
import { DirectionalLink } from "../_components/directional-link";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Sobre | Nicolas Santos",
  description: "Trajetória, competências, formação acadêmica e cursos de Nicolas Santos em desenvolvimento de software.",
  alternates: { canonical: "/sobre" },
};

const skillGroups: {
  title: string;
  skills: { name: string; icon: ReactNode; lightBackground?: boolean }[];
  description?: string;
}[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <Html5OriginalIcon size={28} /> },
      { name: "CSS", icon: <Css3OriginalIcon size={28} /> },
      { name: "JavaScript", icon: <JavascriptOriginalIcon size={28} /> },
      { name: "TypeScript", icon: <TypescriptOriginalIcon size={28} /> },
      { name: "React", icon: <ReactOriginalIcon size={28} /> },
      { name: "Next.js", icon: <NextjsOriginalIcon size={28} className="invert" /> },
      { name: "Tailwind CSS", icon: <TailwindcssOriginalIcon size={28} /> },
    ],
  },
  {
    title: "Backend e dados",
    skills: [
      { name: "Go", icon: <GoOriginalIcon size={28} /> },
      { name: "Python", icon: <PythonOriginalIcon size={28} /> },
      { name: "Fiber", icon: <FiberIcon />, lightBackground: true },
      { name: "FastAPI", icon: <FastapiOriginalIcon size={28} /> },
      { name: "SQLite", icon: <SqliteOriginalIcon size={28} />, lightBackground: true },
      { name: "APIs REST", icon: <RestApiIcon /> },
      { name: "Java", icon: <JavaOriginalIcon size={28} />, lightBackground: true },
      { name: "MySQL", icon: <MysqlOriginalIcon size={28} />, lightBackground: true },
    ],
  },
  {
    title: "Ferramentas e jogos",
    skills: [
      { name: "Git", icon: <GitOriginalIcon size={28} /> },
      { name: "GitHub", icon: <GithubOriginalIcon size={28} className="invert" /> },
      { name: "Docker", icon: <DockerOriginalIcon size={28} /> },
      { name: "C#", icon: <CsharpOriginalIcon size={28} /> },
    ],
    description: "Usei C# em jogos e Tkinter em interfaces desktop.",
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
        <section aria-labelledby="about-title" className="grid gap-8 py-10 ">
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
                Hoje desenvolvo interfaces com React, Next.js e TypeScript, e
                APIs com Go e Python.
              </p>
              <p>
                Já trabalhei com cadastros, validação de dados, autenticação por
                token e SQLite. Também escrevi testes automatizados e usei Docker
                para rodar as APIs.
              </p>
              <p>
                Também fiz integrações com APIs de localização e serviços de IA,
                cuidando das requisições, das respostas e do tratamento de erros.
              </p>
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
              Na tecnologia desde <span className="text-slate-200">2021</span>
            </p>
          </div>
        </section>

        <section id="competencias" aria-labelledby="skills-title" className="scroll-mt-4 border-t border-white/10 py-8 lg:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 id="skills-title" className="text-2xl font-semibold tracking-tight text-white">
              Tecnologias
            </h2>
            <DirectionalLink
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-teal-200 transition hover:translate-x-1"
            >
              Ver projetos <span aria-hidden="true">→</span>
            </DirectionalLink>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div key={group.title} className={`min-w-0 ${index > 0 ? "md:border-l md:border-white/10 md:pl-5" : ""}`}>
                <h3 className="text-sm font-medium text-slate-400">{group.title}</h3>
                <ul
                  className="mt-3 grid grid-cols-4 gap-x-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4"
                  aria-label={`Tecnologias: ${group.title}`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex min-w-0 flex-col items-center gap-1.5 text-center text-[11px] leading-4 text-slate-300">
                      <span aria-hidden="true" className={`flex size-8 items-center justify-center rounded-md ${skill.lightBackground ? "bg-slate-100" : ""}`}>
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
                {group.description && (
                  <p className="mt-3 text-xs leading-5 text-slate-500">{group.description}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
            Testes, documentação e automação:{" "}
            <span className="text-slate-300">pytest · Vitest · Swagger/OpenAPI · GitHub Actions.</span>
          </p>
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
