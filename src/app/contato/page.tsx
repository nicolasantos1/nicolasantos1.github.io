import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Contato | Nicolas Santos",
  description: "Entre em contato com Nicolas Santos.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
      <div className="surface px-6 py-16 sm:px-12 sm:py-20">
        <div className="relative max-w-3xl">
          <p className="section-kicker">Contato</p>
          <h1 className="mt-5 text-balance text-4xl font-[510] tracking-tight text-white sm:text-5xl">
            Vamos transformar estudo em impacto real.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            Procuro oportunidade como desenvolvedor júnior ou estagiário. Se sua
            equipe busca alguém curioso, responsável e persistente, quero conhecer
            o desafio.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-1">
          <a
            href="mailto:nicolassantos011@gmail.com"
            className="contact-row group"
          >
            <span className="text-sm text-fog">E-mail</span>
            <strong className="mt-3 block break-all text-white group-hover:text-mist">
              nicolassantos011@gmail.com
            </strong>
          </a>
          <a
            href="https://github.com/nicolasantos1"
            target="_blank"
            rel="noreferrer"
            className="contact-row group"
          >
            <span className="text-sm text-fog">GitHub</span>
            <strong className="mt-3 block text-white group-hover:text-mist">
              @nicolasantos1 ↗
            </strong>
          </a>
          <a
            href="/documents/NicolasSantosDoNascimento.pdf"
            download
            className="contact-row group"
          >
            <span className="text-sm text-fog">Currículo</span>
            <strong className="mt-3 block text-white group-hover:text-mist">
              Baixar PDF ↓
            </strong>
          </a>
        </div>
      </div>
      </section>
    </PageTransition>
  );
}
