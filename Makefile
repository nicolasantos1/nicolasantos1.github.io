.DEFAULT_GOAL := help
BUN ?= bun

.PHONY: help install ci dev build preview start lint lint-fix format format-check typecheck check links validate clean

help: ## Lista os comandos disponíveis
	@printf 'Uso: make <comando>\n\n'
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  %-16s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Instala as dependências com Bun
	$(BUN) install

ci: ## Instala exatamente as versões do bun.lock
	$(BUN) install --frozen-lockfile

dev: ## Inicia o servidor de desenvolvimento
	$(BUN) run dev

build: ## Gera o site estático em dist/
	$(BUN) run build

preview: ## Serve o build estático para revisão local
	$(BUN) run preview

start: preview ## Alias para preview

lint: ## Verifica o código com ESLint
	$(BUN) run lint

lint-fix: ## Corrige automaticamente problemas de lint
	$(BUN) run lint:fix

format: ## Formata os arquivos com Prettier
	$(BUN) run format

format-check: ## Verifica a formatação sem modificar arquivos
	$(BUN) run format:check

typecheck: ## Verifica tipos TypeScript e componentes Astro
	$(BUN) run typecheck

check: ## Verifica formatação, lint e tipos
	$(BUN) run check

links: ## Verifica links, âncoras e imagens do build existente
	$(BUN) run check:links

validate: ## Executa todas as verificações, build e links
	$(BUN) run validate

clean: ## Remove somente artefatos gerados pelo Astro
	rm -rf dist .astro
