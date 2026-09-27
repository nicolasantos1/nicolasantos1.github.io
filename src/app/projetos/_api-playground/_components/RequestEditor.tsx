import type { EndpointConfig } from "../_types";

type RequestEditorProps = {
  endpoint: EndpointConfig;
  value: string;
  disabled: boolean;
  error: string;
  onChange: (value: string) => void;
};

export function RequestEditor({
  endpoint,
  value,
  disabled,
  error,
  onChange,
}: RequestEditorProps) {
  return (
    <div className="surface min-w-0 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={
            endpoint.method === "POST"
              ? "rounded-lg bg-amber-300/10 px-2.5 py-1 font-mono text-xs font-semibold text-amber-200"
              : "rounded-lg bg-teal-300/10 px-2.5 py-1 font-mono text-xs font-semibold text-teal-200"
          }
        >
          {endpoint.method}
        </span>
        <code className="break-all text-lg text-white">{endpoint.path}</code>
      </div>
      <h4 className="mt-5 text-xl font-semibold text-white">{endpoint.name}</h4>
      <p className="mt-2 leading-7 text-slate-400">{endpoint.description}</p>

      {endpoint.exampleBody ? (
        <>
          <p className="mt-6 text-sm text-slate-300">
            Obrigatórios: {endpoint.requiredFields?.join(", ")}
            {endpoint.optionalFields?.length
              ? " · Opcionais: " + endpoint.optionalFields.join(", ")
              : ""}
          </p>
          <label
            htmlFor="request-body"
            className="mt-4 block text-sm font-medium text-slate-200"
          >
            Request body · JSON
          </label>
          <textarea
            id="request-body"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={disabled}
            spellCheck={false}
            rows={11}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "request-error" : undefined}
            className="mt-2 block w-full min-w-0 resize-y rounded-xl border border-white/15 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100"
          />
          {error && (
            <p id="request-error" role="alert" className="mt-3 text-sm text-rose-300">
              {error}
            </p>
          )}
        </>
      ) : (
        <p className="mt-6 rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-400">
          Este endpoint não recebe request body.
        </p>
      )}
    </div>
  );
}
