"use client";

import { useEffect, useRef, useState } from "react";
import { executeRequest } from "../_service";
import type { ApiProjectConfig, EndpointConfig, RequestResult } from "../_types";
import { EndpointSelector } from "./EndpointSelector";
import { RequestEditor } from "./RequestEditor";
import { ResponseViewer } from "./ResponseViewer";

function exampleBody(endpoint: EndpointConfig, email?: string) {
  if (!endpoint.exampleBody) return "";
  const body = { ...endpoint.exampleBody };
  if (endpoint.id === "create-lead" && email) body.email = email;
  return JSON.stringify(body, null, 2);
}

function newExampleEmail() {
  return "visitante+" + crypto.randomUUID().slice(0, 8) + "@example.com";
}

export function ApiPlayground({ project }: { project: ApiProjectConfig }) {
  const exampleEmail = useRef("visitante@example.com");
  const [endpointId, setEndpointId] = useState(project.endpoints[0].id);
  const endpoint =
    project.endpoints.find((item) => item.id === endpointId) ?? project.endpoints[0];
  const [requestBody, setRequestBody] = useState(exampleBody(endpoint));
  const [result, setResult] = useState<RequestResult | null>(null);
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const configured = Boolean(project.baseUrl);

  useEffect(() => {
    exampleEmail.current = newExampleEmail();
    setRequestBody(exampleBody(project.endpoints[0], exampleEmail.current));
  }, [project]);

  function changeEndpoint(id: string) {
    const nextEndpoint = project.endpoints.find((item) => item.id === id);
    if (!nextEndpoint) return;
    setEndpointId(id);
    setRequestBody(exampleBody(nextEndpoint, exampleEmail.current));
    setResult(null);
    setInputError("");
  }

  async function send() {
    if (loading || !configured) return;

    let parsedBody: unknown;
    if (endpoint.exampleBody) {
      try {
        parsedBody = JSON.parse(requestBody);
      } catch {
        setResult(null);
        setInputError("O request body precisa ser um JSON válido.");
        return;
      }
    }

    setInputError("");
    setResult(null);
    setLoading(true);
    try {
      const response = await executeRequest(project, endpoint, parsedBody);
      setResult(response);
      if (endpoint.id === "create-lead" && response.kind === "http" && response.ok) {
        exampleEmail.current = newExampleEmail();
        setRequestBody(
          JSON.stringify(
            { ...(parsedBody as Record<string, unknown>), email: exampleEmail.current },
            null,
            2,
          ),
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-w-0">
      <h3 className="text-xl font-semibold text-white">Teste a API</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Escolha um endpoint, envie uma requisição e veja a resposta.
      </p>
      <div className="mt-5">
        <EndpointSelector
          project={project}
          endpoint={endpoint}
          disabled={loading}
          onEndpointChange={changeEndpoint}
        />
      </div>

      {!configured && (
        <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm text-amber-100">
          A API ainda não foi configurada para este portfólio.
        </p>
      )}
      <p className="mt-5 text-sm leading-6 text-slate-400">
        Use somente dados fictícios: leads criados aqui são gravados e podem ser
        vistos por outros visitantes.
      </p>

      <div className="mt-6 grid min-w-0 gap-6">
        <div className="flex min-w-0 flex-col">
          <RequestEditor
            endpoint={endpoint}
            value={requestBody}
            disabled={loading}
            error={inputError}
            onChange={(value) => {
              setRequestBody(value);
              if (inputError) setInputError("");
            }}
          />
          <button
            type="button"
            onClick={send}
            disabled={loading || !configured}
            className="mt-5 self-start rounded-full bg-teal-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Executando..." : "Executar requisição"}
          </button>
        </div>
        <ResponseViewer result={result} />
      </div>
    </div>
  );
}
