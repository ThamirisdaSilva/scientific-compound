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

src/app/
  features/
    home/
    compounds/
      compounds.routes.ts
      compounds-list/
      compound-detail/
      data/

A aplicação é organizada por domínio (feature-first), não por tipo de arquivo.

Essa decisão reduz acoplamento estrutural e facilita crescimento futuro.

---

# Decisões Arquiteturais

## 1. Organização por Domínio (Feature-First)

A aplicação é organizada por responsabilidade de negócio, não por tipo de arquivo.

Cada funcionalidade é isolada dentro de sua própria pasta.

Estrutura:

features/
  compounds/
    compounds.routes.ts
    compounds-list/
    compound-detail/
    data/

Essa escolha evita:

- Espalhamento de arquivos relacionados ao mesmo domínio
- Dependências cruzadas entre funcionalidades
- Acoplamento estrutural

Cada feature é tratada como um módulo isolado de negócio.

Benefícios arquiteturais:

- Isolamento de responsabilidades
- Facilidade de manutenção
- Escalabilidade modular
- Base estrutural para futura extração como Micro Frontend

Essa organização reduz impacto de crescimento e evita reestruturações futuras.

---

## 2. Standalone Components

O projeto utiliza Angular Standalone Components, eliminando NgModules globais.

Motivação:

Reduzir complexidade estrutural e tornar dependências explícitas.

Benefícios:

- Imports claros e previsíveis
- Melhor tree-shaking
- Menos acoplamento implícito
- Estrutura mais simples para extração futura

A decisão não é estética, é arquitetural.

---

## 3. Lazy Loading Estratégico

A feature compounds é carregada sob demanda via loadChildren.

Páginas internas utilizam loadComponent.

Objetivo:

- Reduzir bundle inicial
- Carregar apenas o necessário
- Preparar a aplicação para distribuição eficiente

Lazy loading é tratado como estratégia de entrega, não como otimização tardia.

---

## 4. Separação Inicial de Dados

Nesta branch, os dados estão localizados dentro da própria feature:

data/compounds.data.ts

Nesta fase, o foco é validar:

- Fluxo da aplicação
- Contrato do domínio
- Estrutura de navegação

Ainda não há:

- Camada formal de API
- Simulação de latência
- Estratégia de cache

A complexidade será introduzida de forma incremental na próxima etapa.

---

# Estado Atual

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

# Próxima Etapa

Na próxima branch, a arquitetura evolui para:

- Separação formal da camada de dados
- Simulação de API
- Introdução de service intermediário
- Preparação para escalabilidade e possível adoção de Micro Frontends

---

# Conclusão

Scientific Compound é um projeto simples em aparência, mas estruturado com decisões conscientes desde o início.

A evolução será incremental e arquiteturalmente orientada.