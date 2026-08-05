import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";

export const metadata: Metadata = {
  title: "Contato | Nicolas Santos",
  description: "Entre em contato com Nicolas Santos.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-teal-300/20 bg-gradient-to-br from-teal-300/12 via-indigo-400/8 to-transparent px-6 py-16 sm:px-12 sm:py-20">
        <div aria-hidden="true" className="absolute -left-20 -top-32 size-72 rounded-full bg-teal-300/15 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="section-kicker">Contato</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Vamos transformar estudo em impacto real.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Procuro oportunidade como desenvolvedor júnior ou estagiário. Se sua
            equipe busca alguém curioso, responsável e persistente, quero conhecer
            o desafio.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:nicolassantos011@gmail.com"
            className="surface group p-6 transition hover:-translate-y-1 hover:border-teal-300/25"
          >
            <span className="text-sm text-slate-500">E-mail</span>
            <strong className="mt-3 block break-all text-white group-hover:text-teal-200">
              nicolassantos011@gmail.com
            </strong>
          </a>
          <a
            href="https://github.com/nicolassantos1"
            target="_blank"
            rel="noreferrer"
            className="surface group p-6 transition hover:-translate-y-1 hover:border-teal-300/25"
          >
            <span className="text-sm text-slate-500">GitHub</span>
            <strong className="mt-3 block text-white group-hover:text-teal-200">
              @nicolassantos1 ↗
            </strong>
          </a>
          <a
            href="/documents/curriculo-nicolas-santos.pdf"
            download
            className="surface group p-6 transition hover:-translate-y-1 hover:border-teal-300/25"
          >
            <span className="text-sm text-slate-500">Currículo</span>
            <strong className="mt-3 block text-white group-hover:text-teal-200">
              Baixar PDF ↓
            </strong>
          </a>
        </div>
      </div>
      </section>
    </PageTransition>
  );
}
