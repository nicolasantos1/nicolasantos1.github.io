import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "@/styles/globals.css";

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
          className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-white px-4 py-2 font-[510] text-void transition focus:translate-y-0"
        >
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="min-h-[calc(100vh-146px)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
