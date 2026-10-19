import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formação | Nicolas Santos",
  description: "A formação acadêmica e os cursos de Nicolas Santos estão na página Sobre.",
  alternates: { canonical: "/sobre" },
  robots: { index: false, follow: true },
};

export default function EducationPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/sobre#formacao" />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
        <h1 className="text-3xl font-semibold text-white">Formação e cursos</h1>
        <p className="mt-4 leading-7 text-slate-300">
          Minha formação agora faz parte da página Sobre.
        </p>
        <a
          href="/sobre#formacao"
          className="mt-6 inline-flex rounded-sm font-semibold text-teal-200 transition hover:text-teal-100"
        >
          Conheça minha formação →
        </a>
      </section>
    </>
  );
}
