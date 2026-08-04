"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

const routes = ["/", "/sobre", "/projetos", "/formacao", "/contato"] as const;

type Route = (typeof routes)[number];
type DirectionalLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: Route;
    children: ReactNode;
  };

export function DirectionalLink({ href, children, ...props }: DirectionalLinkProps) {
  const pathname = usePathname();
  const currentIndex = routes.indexOf(pathname as Route);
  const targetIndex = routes.indexOf(href);
  const direction =
    currentIndex === targetIndex
      ? undefined
      : targetIndex > currentIndex
        ? "nav-forward"
        : "nav-back";

  return (
    <Link
      href={href}
      transitionTypes={direction ? [direction] : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
