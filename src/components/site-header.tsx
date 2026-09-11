import { DirectionalLink } from "./directional-link";

const navigation = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/formacao", label: "Formação" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <DirectionalLink href="/" className="brand" aria-label="Nicolas Santos — página inicial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V5l16 14V5M8 5h12M4 19h12" stroke="currentColor" strokeWidth="1.5" /></svg>
          <span>Nicolas Santos</span>
        </DirectionalLink>
        <nav aria-label="Navegação principal"><ul className="navigation">
          {navigation.map(item => <li key={item.href}><DirectionalLink className="nav-link" href={item.href}>{item.label}</DirectionalLink></li>)}
          <li><a href="/documents/NicolasSantosDoNascimento.pdf" className="button button-neutral" target="_blank" rel="noreferrer">Currículo <span aria-hidden="true">↗</span></a></li>
        </ul></nav>
      </div>
    </header>
  );
}
