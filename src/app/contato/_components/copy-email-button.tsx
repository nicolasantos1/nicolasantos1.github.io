"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [feedback, setFeedback] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    if (resetTimer.current !== null) clearTimeout(resetTimer.current);
    setFeedback("idle");

    try {
      await navigator.clipboard.writeText(email);
      setFeedback("copied");
      resetTimer.current = setTimeout(() => setFeedback("idle"), 3000);
    } catch {
      setFeedback("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/5"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
        Copiar endereço
      </button>
      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`min-h-6 text-sm leading-6 sm:basis-full ${feedback === "error" ? "text-rose-200" : "text-teal-200"}`}
      >
        {feedback === "copied"
          ? "Endereço copiado"
          : feedback === "error"
            ? "Não foi possível copiar. Selecione o endereço acima."
            : ""}
      </p>
    </>
  );
}
