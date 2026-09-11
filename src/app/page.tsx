import Image from "next/image";
import { DirectionalLink } from "@/components/directional-link";
import { PageTransition } from "@/components/page-transition";
import { skills } from "@/data/sobre";

const destinations = [
  { href: "/sobre", number: "01", title: "Sobre mim", description: "Trajetória, foco profissional e competências." },
  { href: "/projetos", number: "02", title: "Projetos", description: "Aplicações que transformam estudo em prática." },
  { href: "/formacao", number: "03", title: "Formação", description: "Base acadêmica, técnica e aprendizado contínuo." },
] as const;

export default function Home() {
  return (
    <PageTransition>
      <div>
        <section className="page-shell hero">
          <div className="hero-meta">
            <span className="pill">Disponível para estágio ou posição júnior</span>
            <span className="text-fog text-[13px]">São Paulo, Brasil</span>
          </div>
          <p className="section-kicker mt-12">Nicolas Santos · Desenvolvimento web & backend</p>
          <div className="hero-heading">
            <h1>Ideias claras.<br />Experiências <span className="text-fog">funcionais.</span></h1>
            <DirectionalLink href="/contato" className="text-link">Vamos conversar <span aria-hidden="true">↗</span></DirectionalLink>
          </div>
          <p className="hero-description">Sou Nicolas Santos, estudante de Análise e Desenvolvimento de Sistemas. Construo aplicações web e evoluo cada projeto com prática, organização e curiosidade.</p>
          <DirectionalLink href="/projetos" className="button button-primary mt-8">Conheça meus projetos <span aria-hidden="true">↗</span></DirectionalLink>
          <div className="hero-floor">
            <figure className="surface showcase">
              <figcaption className="showcase-bar"><span>Projeto em foco <span className="text-fog">/ login-system</span></span><span className="font-mono text-xs text-fog">HTML · CSS · JavaScript</span></figcaption>
              <div className="showcase-image"><Image src="/images/projects/login-system-responsive.png" alt="Sistema de login de Nicolas Santos em telas de notebook, tablet e celular" width={1440} height={810} priority sizes="(max-width: 1200px) 100vw, 1152px" className="h-auto w-full" /></div>
              <div className="showcase-bar"><span className="text-fog">Uma interface, diferentes telas.</span><a className="text-link" href="https://github.com/nicolasantos1/login-system" target="_blank" rel="noreferrer">Explorar código <span aria-hidden="true">↗</span></a></div>
            </figure>
          </div>
          <ul className="technology-strip" aria-label="Tecnologias">{skills.slice(0, 7).map(skill => <li key={skill}>{skill}</li>)}</ul>
        </section>
        <section className="page-shell portfolio-index">
          <div className="mb-12"><p className="section-kicker">Explore o portfólio</p><h2 className="mt-4 text-4xl font-[510] tracking-tight">Por trás de cada entrega.</h2></div>
          {destinations.map(item => <DirectionalLink key={item.href} href={item.href} className="index-row"><span className="font-mono text-xs text-fog">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span aria-hidden="true">↗</span></DirectionalLink>)}
        </section>
      </div>
    </PageTransition>
  );
}
