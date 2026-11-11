import type { ReactNode } from "react";
import Html5OriginalIcon from "react-devicons/html5/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import ReactOriginalIcon from "react-devicons/react/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TailwindcssOriginalIcon from "react-devicons/tailwindcss/original";
import GoOriginalIcon from "react-devicons/go/original";
import PythonOriginalIcon from "react-devicons/python/original";
import FastapiOriginalIcon from "react-devicons/fastapi/original";
import SqliteOriginalIcon from "react-devicons/sqlite/original";
import JavaOriginalIcon from "react-devicons/java/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import GitOriginalIcon from "react-devicons/git/original";
import GithubOriginalIcon from "react-devicons/github/original";
import DockerOriginalIcon from "react-devicons/docker/original";
import CsharpOriginalIcon from "react-devicons/csharp/original";
import { FiberIcon, RestApiIcon } from "./technology-icons";

const skillGroups: {
  title: string;
  skills: { name: string; icon: ReactNode; lightBackground?: boolean }[];
  description?: string;
}[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <Html5OriginalIcon size={28} /> },
      { name: "CSS", icon: <Css3OriginalIcon size={28} /> },
      { name: "JavaScript", icon: <JavascriptOriginalIcon size={28} /> },
      { name: "TypeScript", icon: <TypescriptOriginalIcon size={28} /> },
      { name: "React", icon: <ReactOriginalIcon size={28} /> },
      {
        name: "Next.js",
        icon: <NextjsOriginalIcon size={28} className="invert" />,
      },
      { name: "Tailwind CSS", icon: <TailwindcssOriginalIcon size={28} /> },
    ],
  },
  {
    title: "Backend e dados",
    skills: [
      { name: "Go", icon: <GoOriginalIcon size={28} /> },
      { name: "Python", icon: <PythonOriginalIcon size={28} /> },
      { name: "Fiber", icon: <FiberIcon />, lightBackground: true },
      { name: "FastAPI", icon: <FastapiOriginalIcon size={28} /> },
      {
        name: "SQLite",
        icon: <SqliteOriginalIcon size={28} />,
        lightBackground: true,
      },
      { name: "APIs REST", icon: <RestApiIcon /> },
      {
        name: "Java",
        icon: <JavaOriginalIcon size={28} />,
        lightBackground: true,
      },
      {
        name: "MySQL",
        icon: <MysqlOriginalIcon size={28} />,
        lightBackground: true,
      },
    ],
  },
  {
    title: "Ferramentas e jogos",
    skills: [
      { name: "Git", icon: <GitOriginalIcon size={28} /> },
      {
        name: "GitHub",
        icon: <GithubOriginalIcon size={28} className="invert" />,
      },
      { name: "Docker", icon: <DockerOriginalIcon size={28} /> },
      { name: "C#", icon: <CsharpOriginalIcon size={28} /> },
    ],
    description: "Usei C# em jogos e Tkinter em interfaces desktop.",
  },
];

export default function TechnologySkills() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {skillGroups.map((group, index) => (
        <div
          key={group.title}
          className={`min-w-0 ${index > 0 ? "md:border-l md:border-white/10 md:pl-5" : ""}`}
        >
          <h3 className="text-sm font-medium text-slate-400">{group.title}</h3>
          <ul
            className="mt-3 grid grid-cols-4 gap-x-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4"
            aria-label={`Tecnologias: ${group.title}`}
          >
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex min-w-0 flex-col items-center gap-1.5 text-center text-[11px] leading-4 text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-8 items-center justify-center rounded-md ${skill.lightBackground ? "bg-slate-100" : ""}`}
                >
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
          {group.description && (
            <p className="mt-3 text-xs leading-5 text-slate-500">
              {group.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
