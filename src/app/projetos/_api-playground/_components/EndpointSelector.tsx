import type { ApiProjectConfig, EndpointConfig } from "../_types";

type EndpointSelectorProps = {
  project: ApiProjectConfig;
  endpoint: EndpointConfig;
  disabled: boolean;
  onEndpointChange: (id: string) => void;
};

export function EndpointSelector({
  project,
  endpoint,
  disabled,
  onEndpointChange,
}: EndpointSelectorProps) {
  return (
    <label className="block text-sm font-medium text-slate-300">
      Endpoint
      <select
        value={endpoint.id}
        onChange={(event) => onEndpointChange(event.target.value)}
        disabled={disabled}
        className="mt-2 w-full min-w-0 rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-slate-100"
      >
        {project.endpoints.map((item) => (
          <option key={item.id} value={item.id}>
            {item.method} {item.path} · {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
