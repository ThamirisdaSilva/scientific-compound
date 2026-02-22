# Scientific Compound

Scientific Compound é uma SPA construída em Angular com o objetivo de demonstrar decisões arquiteturais no front-end que impactam organização, performance e evolução futura do sistema.

Esta branch (`main`) representa a versão inicial do projeto, focada na validação do domínio e na definição de uma base estrutural consciente.

---

## 1. Projeto

- SPA simples
- Lista e visualização de detalhes
- Foco em clareza estrutural
- Ênfase em decisões arquiteturais desde o início

O objetivo desta versão não é escalar infraestrutura, mas estruturar corretamente antes de qualquer evolução.

---

## 2. Standalone Components

A aplicação utiliza Angular Standalone Components, eliminando a necessidade de NgModules globais.

**Motivação:**

- Tornar dependências explícitas
- Reduzir boilerplate
- Simplificar estrutura

**Impacto arquitetural:**

- Estrutura mais previsível
- Menor acoplamento implícito
- Melhor base para isolamento futuro

---

## 3. Comportamento Assíncrono

A aplicação simula chamadas assíncronas utilizando `Promise` + `setTimeout`.

**Objetivo:**

- Validar loading state
- Simular latência de rede
- Aproximar comportamento do ambiente real

Mesmo sem backend, o fluxo já se comporta como uma aplicação conectada a uma API.

---

## 4. Cache em Memória

Implementação de cache simples em memória.

**Comportamento:**

- Primeira chamada → simula latência
- Chamadas subsequentes → retorno imediato

**Benefício:**

- Evita repetição de processamento
- Demonstra controle básico de consumo de dados

---

## 5. Organização por Domínio (Feature-First)

A estrutura do projeto é organizada por responsabilidade de negócio, e não por tipo de arquivo.

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

Tudo relacionado ao domínio `compounds` está concentrado dentro da própria feature.

**Benefícios:**

- Redução de acoplamento estrutural
- Isolamento de responsabilidades
- Crescimento modular
- Base para futura extração

---

## 6. Rotas Isoladas por Feature

As rotas da funcionalidade `compounds` estão definidas dentro da própria feature.

O aplicativo principal apenas delega o acesso via `loadChildren`, sem conhecer detalhes internos da implementação.

Isso garante:

- Navegação organizada por domínio
- Desacoplamento entre app principal e feature

---

## 7. Lazy Loading

A aplicação utiliza:

- `loadChildren` para carregar a feature
- `loadComponent` para páginas internas

**Objetivo:**

- Reduzir o bundle inicial
- Carregar apenas o necessário
- Dividir o código em partes menores

Lazy loading é tratado como estratégia arquitetural, não como otimização tardia.

---

## 8. Bundle

Bundle é o pacote final de código que o navegador baixa ao acessar a aplicação.

Sem carregamento sob demanda:
- Todo o código entra no bundle inicial

Com lazy loading:
- O código é dividido em partes menores
- Cada parte é carregada quando necessária

Isso reduz impacto no carregamento inicial e prepara o sistema para crescimento.

---

## 9. Camada de Dados

Os dados estão organizados em:

- `compounds.data.ts` → estrutura de dados
- `compounds.api.ts` → funções de acesso

Os componentes não acessam o array diretamente.

Existe uma camada intermediária que simula acesso externo, preparando a aplicação para futura integração com backend real.

---

## 10. Simulação de API

A camada de acesso utiliza `Promise` + `setTimeout`.

Essa abordagem permite:

- Simular latência
- Validar comportamento assíncrono
- Testar experiência real de navegação

---

## 11. Estado Atual

Nesta branch já existem:

- Organização por domínio
- Standalone Components
- Rotas isoladas
- Lazy loading estratégico
- Separação entre dados e acesso
- Simulação assíncrona
- Cache simples em memória

Ainda não existem:

- Backend real
- Infraestrutura distribuída
- Microfrontend
- Deploy independente por módulo

---

## Conclusão

Esta branch demonstra que escalabilidade começa na arquitetura.

Antes de escalar infraestrutura, é necessário organizar responsabilidades, reduzir acoplamento e estruturar corretamente o domínio.

A evolução do projeto será incremental e orientada por decisões arquiteturais.
