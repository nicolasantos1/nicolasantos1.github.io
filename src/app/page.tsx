import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <header className="flex flex-col items-start justify-start gap-4 p-8">
        <p className="text-2xl text-zinc-700 dark:text-zinc-400">
          Get started by editing&nbsp;
          <code className="rounded-md bg-zinc-100 p-1 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
            src/app/page.tsx
          </code>
        </p>
      </header>
    </div>
  );
}
