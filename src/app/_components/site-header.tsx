"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DirectionalLink } from "./directional-link";

const navigation = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/80 backdrop-blur-xl">
      <HeaderNavigation key={pathname} pathname={pathname} />
    </header>
  );
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <div
      className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 px-5 py-4 sm:px-8 md:flex md:justify-between md:gap-4"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          event.preventDefault();
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <DirectionalLink
        href="/"
        className="group flex shrink-0 items-center gap-3 rounded-full text-sm font-semibold tracking-wide text-white"
        aria-label="Página inicial"
        aria-current={pathname === "/" ? "page" : undefined}
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src="/images/nicolas-logo1.png"
          alt=""
          width={40}
          height={40}
          priority
          className="size-10 rounded-full ring-1 ring-white/15 transition-transform group-hover:rotate-6"
        />
        <span>Nicolas Santos</span>
      </DirectionalLink>

      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-white transition hover:border-teal-300/40 hover:bg-white/5 md:hidden"
      >
        Menu
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className={`size-4 transition-transform ${menuOpen ? "rotate-180" : ""}`}
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav
        id="site-navigation"
        className={`${menuOpen ? "block" : "hidden"} col-span-2 mt-4 min-w-0 border-t border-white/10 pt-3 md:mt-0 md:block md:border-0 md:pt-0`}
        aria-label="Navegação principal"
      >
        <ul className="flex flex-col gap-1 text-sm text-slate-300 md:flex-row md:items-center md:gap-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <DirectionalLink
                className={`nav-link min-h-11 items-center ${pathname === item.href ? "bg-teal-300/10 text-teal-200" : ""}`}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </DirectionalLink>
            </li>
          ))}
          <li>
            <a
              href="/documents/NicolasSantosDoNascimento.pdf"
              className="mt-2 inline-flex min-h-11 items-center rounded-full border border-teal-300/40 px-4 py-2 font-medium text-teal-200 transition hover:border-teal-200 hover:bg-teal-300/10 md:ml-1 md:mt-0"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
