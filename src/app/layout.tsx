import type { Metadata } from "next";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolasantos1.github.io"),
  title: "Nicolas Santos | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Nicolas Santos, estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web e backend.",
  keywords: [
    "Nicolas Santos",
    "desenvolvedor web",
    "desenvolvedor full-stack",
    "Next.js",
    "JavaScript",
    "Java",
  ],
  authors: [{ name: "Nicolas Santos" }],
  creator: "Nicolas Santos",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nicolas Santos | Desenvolvedor Full-Stack",
    description:
      "Projetos, competências e trajetória de Nicolas Santos em desenvolvimento web e backend.",
    url: "/",
    siteName: "Portfólio de Nicolas Santos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-white px-4 py-2 font-semibold text-slate-950 transition focus:translate-y-0"
        >
          Ir para o conteúdo
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.13),transparent_28%),radial-gradient(circle_at_85%_28%,rgba(99,102,241,0.16),transparent_30%),linear-gradient(180deg,#07111f_0%,#0a1423_48%,#07111f_100%)]"
        />
        <div aria-hidden="true" className="grid-mask pointer-events-none fixed inset-0 -z-10" />
        <SiteHeader />
        <main id="conteudo" className="min-h-[calc(100vh-146px)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
