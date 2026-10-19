import type { ApiProjectConfig } from "./_types";

export const cadastroLeadsProject: ApiProjectConfig = {
  id: "cadastro-leads",
  name: "CadastroLeads",
  baseUrl: "",
  endpoints: [
    {
      id: "create-lead",
      name: "Criar lead",
      method: "POST",
      path: "/leads",
      description: "Cria um lead na API de teste. O registro ficará visível na listagem pública.",
      requiredFields: ["name", "email", "source"],
      optionalFields: ["phone"],
      exampleBody: {
        name: "Visitante",
        email: "visitante@example.com",
        source: "playground",
        phone: "",
      },
    },
    {
      id: "list-leads",
      name: "Listar leads",
      method: "GET",
      path: "/leads",
      description: "Lista os registros públicos presentes no banco da API de teste.",
    },
    {
      id: "health",
      name: "Verificar API",
      method: "GET",
      path: "/health",
      description: "Verifica se a API está respondendo.",
    },
  ],
};
