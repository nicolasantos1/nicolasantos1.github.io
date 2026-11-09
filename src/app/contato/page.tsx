import type { Metadata } from "next";
import { PageTransition } from "../_components/page-transition";
import { CopyEmailButton } from "./_components/copy-email-button";

const email = "nicolasantos011@gmail.com";

export const metadata: Metadata = {
  title: "Contato | Nicolas Santos",
  description: "Entre em contato com Nicolas Santos.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:pt-8">
            <p className="section-kicker">Contato</p>
            <h1 id="contact-title" className="mt-5 max-w-md text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl">
              Vamos conversar?
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Quer conversar sobre um projeto, trocar ideias ou apresentar uma
              oportunidade? Entre em contato para conhecermos as possibilidades.
            </p>
          </div>

          <div className="min-w-0">
            <div className="relative isolate rounded-[2rem] border border-teal-300/25 bg-gradient-to-br from-teal-300/10 via-indigo-400/8 to-transparent p-6 sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
                <div className="absolute -right-16 -top-16 size-56 rounded-full bg-teal-300/10 blur-3xl" />
              </div>
              <div aria-hidden="true" className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-200">
                <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <h2 className="text-sm font-medium text-teal-200">Contato por e-mail</h2>
              <p className="mt-3 select-text text-base font-semibold tracking-tight text-white [overflow-wrap:anywhere] min-[375px]:text-lg sm:text-2xl lg:text-xl xl:text-2xl">
                {email}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
                >
                  Escrever um e-mail <span aria-hidden="true">↗</span>
                </a>
                <CopyEmailButton email={email} />
              </div>
            </div>

            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              <a
                href="https://github.com/nicolasantos1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub: explore meus repositórios e código (nova aba)"
                className="group flex items-center justify-between gap-5 rounded-sm py-6 transition hover:text-teal-200"
              >
                <div>
                  <h2 className="font-semibold text-white transition group-hover:text-teal-200">GitHub</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Explore meus repositórios e código.</p>
                </div>
                <span aria-hidden="true" className="text-teal-200 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
              <a
                href="/documents/curriculo-nicolas-santos.pdf"
                download
                className="group flex items-center justify-between gap-5 rounded-sm py-6 transition hover:text-teal-200"
              >
                <div>
                  <h2 className="font-semibold text-white transition group-hover:text-teal-200">Currículo</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Conheça minha formação e trajetória.</p>
                </div>
                <span aria-hidden="true" className="text-teal-200 transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
