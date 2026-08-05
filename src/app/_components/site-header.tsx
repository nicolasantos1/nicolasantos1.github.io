import Image from "next/image";
import { DirectionalLink } from "./directional-link";

const navigation = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/formacao", label: "Formação" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <DirectionalLink
          href="/"
          className="group flex shrink-0 items-center gap-3 rounded-full text-sm font-semibold tracking-wide text-white"
          aria-label="Página inicial"
        >
          <Image
            src="/images/nicolas-logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="size-10 rounded-full ring-1 ring-white/15 transition-transform group-hover:rotate-6"
          />
          <span className="hidden md:inline">Nicolas Santos</span>
        </DirectionalLink>

        <nav className="min-w-0 overflow-x-auto" aria-label="Navegação principal">
          <ul className="flex w-max items-center gap-1 text-sm text-slate-300 sm:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <DirectionalLink
                  className="nav-link"
                  href={item.href}
                >
                  {item.label}
                </DirectionalLink>
              </li>
            ))}
            <li>
              <a
                href="/documents/NicolasSantosDoNascimento.pdf"
                className="ml-1 inline-flex rounded-full border border-teal-300/40 px-4 py-2 font-medium text-teal-200 transition hover:border-teal-200 hover:bg-teal-300/10"
                target="_blank"
                rel="noreferrer"
              >
                Currículo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
