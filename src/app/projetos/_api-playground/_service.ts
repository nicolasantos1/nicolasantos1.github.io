import type { ApiProjectConfig, EndpointConfig, RequestResult } from "./_types";

export async function executeRequest(
  project: ApiProjectConfig,
  endpoint: EndpointConfig,
  body?: unknown,
): Promise<RequestResult> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15_000);
  const startedAt = performance.now();

  try {
    const response = await fetch(project.baseUrl + endpoint.path, {
      method: endpoint.method,
      headers:
        endpoint.method === "POST"
          ? { "Content-Type": "application/json", Accept: "application/json" }
          : { Accept: "application/json" },
      body: endpoint.method === "POST" ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: controller.signal,
    });
    const rawBody = await response.text();
    let formattedBody = rawBody || "(resposta vazia)";

    if (rawBody) {
      try {
        formattedBody = JSON.stringify(JSON.parse(rawBody), null, 2);
      } catch {
        // Respostas que não são JSON continuam visíveis como texto.
      }
    }

    return {
      kind: "http",
      status: response.status,
      statusText: response.statusText,
      durationMs: Math.round(performance.now() - startedAt),
      body: formattedBody,
      ok: response.ok,
    };
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";
    return {
      kind: "network",
      durationMs: Math.round(performance.now() - startedAt),
      message: timedOut
        ? "A requisição excedeu o limite de 15 segundos."
        : "Não foi possível acessar a API. Verifique a conexão e a configuração de CORS.",
    };
  } finally {
    window.clearTimeout(timeout);
  }
}
