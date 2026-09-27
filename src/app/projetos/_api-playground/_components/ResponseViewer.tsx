import type { RequestResult } from "../_types";

export function ResponseViewer({ result }: { result: RequestResult | null }) {
  return (
    <div className="surface flex min-w-0 flex-col p-4 sm:p-5" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-xl font-semibold text-white">Response</h4>
        {result && (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {result.kind === "http" ? (
              <span className={result.ok ? "text-teal-200" : "text-rose-300"}>
                {result.status} {result.statusText}
              </span>
            ) : (
              <span className="text-rose-300">Erro de rede</span>
            )}
            <span className="text-slate-400">{result.durationMs} ms</span>
          </div>
        )}
      </div>

      {result ? (
        <pre className="mt-6 min-h-64 flex-1 overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200">
          {result.kind === "http" ? result.body : result.message}
        </pre>
      ) : (
        <div className="mt-6 flex min-h-64 flex-1 items-center justify-center rounded-xl border border-dashed border-white/10 bg-slate-950/60 p-5 text-center text-sm text-slate-500">
          Execute uma requisição para ver a resposta da API.
        </div>
      )}
    </div>
  );
}
