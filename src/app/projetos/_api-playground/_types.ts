export type HttpMethod = "GET" | "POST";

export type EndpointConfig = {
  id: string;
  name: string;
  method: HttpMethod;
  path: string;
  description: string;
  requiredFields?: readonly string[];
  optionalFields?: readonly string[];
  exampleBody?: Record<string, string>;
};

export type ApiProjectConfig = {
  id: string;
  name: string;
  baseUrl: string;
  endpoints: readonly EndpointConfig[];
};

export type RequestResult =
  | {
      kind: "http";
      status: number;
      statusText: string;
      durationMs: number;
      body: string;
      ok: boolean;
    }
  | {
      kind: "network";
      durationMs: number;
      message: string;
    };
