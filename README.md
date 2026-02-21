# Scientific Compound

Scientific Compound é uma SPA construída em Angular com o objetivo de demonstrar decisões arquiteturais no front-end que impactam escalabilidade, performance e evolução futura do sistema.

Esta branch representa a versão inicial do projeto (validação de domínio).

---

## Objetivo

Validar o domínio da aplicação e estruturar a base do front-end com decisões arquiteturais conscientes, ainda sem foco em infraestrutura distribuída.

O projeto não busca complexidade, mas sim clareza estrutural.

---

## Stack

- Angular (Standalone Components)
- TypeScript
- Lazy Loading
- Estrutura Feature-First

---

## Estrutura do Projeto

```
src/app/
  features/
    home/
    compounds/
      compounds.routes.ts
      compounds-list/
      compound-detail/
      data/
```

A aplicação é organizada por domínio (feature-first), não por tipo de arquivo.

Essa decisão reduz acoplamento estrutural e facilita crescimento futuro.

---

## Decisões Arquiteturais

### 1. Organização por Domínio

Cada funcionalidade é isolada dentro de sua própria pasta.

Benefícios:

- Manutenção simplificada
- Evolução modular
- Clareza estrutural
- Base para possível extração futura

---

### 2. Standalone Components

O projeto utiliza Angular Standalone Components, eliminando a necessidade de NgModules.

Benefícios:

- Menos boilerplate
- Imports explícitos
- Arquitetura mais previsível
- Menor complexidade estrutural

---

### 3. Lazy Loading

A feature `compounds` é carregada sob demanda via `loadChildren`.

Isso reduz o bundle inicial e melhora performance percebida.

Rotas principais:

- `/home`
- `/compounds`
- `/compounds/:name`

---

### 4. Dados Mockados

Os dados são mantidos localmente dentro da feature:

```
data/compounds.data.ts
```

Nesta fase:

- Não há backend real
- Não há camada de API simulada
- Não há cache
- Não há estratégia de infraestrutura

O objetivo é validar fluxo e domínio antes de introduzir complexidade adicional.

---

## Estado Atual

Esta versão representa uma SPA estruturada e funcional.

Ela já possui:

- Organização por domínio
- Lazy loading
- Separação básica de responsabilidades
- Estrutura preparada para evolução

Ainda não há:

- Camada de API real
- Simulação de latência
- Estratégia de cache
- Micro Frontend
- Infraestrutura distribuída

---

## Próxima Etapa

Na próxima branch, a arquitetura evolui para:

- Separação formal da camada de dados
- Simulação de API
- Introdução de service intermediário
- Preparação para escalabilidade e possível adoção de Micro Frontends

---

## Conclusão

Scientific Compound é um projeto simples em aparência, mas estruturado com decisões conscientes desde o início.

A evolução será incremental e arquiteturalmente orientada.