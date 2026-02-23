# Scientific Compound

## Evolução Arquitetural — De SPA Organizada para Estrutura com Isolamento Interno Formal

Este documento descreve a evolução do projeto entre as branches.

A Branch 1 já utilizava organização por domínio (feature-first) e lazy loading.

Na Branch 2, o foco não foi “organizar pela primeira vez”, mas sim formalizar melhor a estrutura interna da feature, preparando o domínio para evolução futura e possível extração.

---

# Branch 1 — SPA Organizada

Na primeira fase, criamos uma SPA Angular com:

- Duas áreas principais: `home` e `compounds`
- Organização por domínio (feature-first)
- Rotas isoladas por feature
- Lazy loading
- Dados mockados
- Simulação assíncrona

Estrutura base:

```
src/app/
  features/
    home/
    compounds/
```

Características dessa fase:

- Cada domínio já estava isolado em sua própria pasta.
- O app principal já delegava navegação via `loadChildren`.
- A aplicação era uma SPA única, com um único build.

O projeto já estava organizado e funcional.

---

# Branch 2 — Formalização de Estrutura Interna

Na segunda fase, a organização por feature foi mantida.

A mudança foi interna à feature `compounds`.

A estrutura evoluiu de algo como:

```
features/compounds/
  data/
  compounds-list/
  compound-detail/
  compounds.routes.ts
```

Para:

```
features/compounds/
  domain/
    compound.model.ts
  data/
    compounds.data.ts
  api/
    compounds.api.ts
  service/
    compounds.service.ts
  pages/
    compounds-list/
    compound-detail/
  compounds.routes.ts
```

A principal evolução foi a separação clara de responsabilidades dentro da feature.

---

# 1. Formalização do Domínio

Foi criada a pasta:

```
domain/
  compound.model.ts
```

Agora o contrato do domínio está explícito e separado de implementação.

O model não está mais implícito dentro da camada de dados.

Isso torna a estrutura mais previsível e facilita futuras integrações.

---

# 2. Separação de Camadas Internas

A feature passou a ter camadas internas bem definidas:

- `data/` → dados mockados
- `api/` → simulação de backend
- `service/` → camada intermediária
- `pages/` → interface do usuário

Fluxo arquitetural:

```
UI → Service → API → Data
```

Antes, os componentes acessavam diretamente funções da API mockada.

Agora, existe uma camada de serviço intermediária (`CompoundsService`), permitindo:

- Centralizar regras
- Evoluir para HttpClient futuramente
- Implementar cache de forma estruturada
- Reduzir acoplamento entre UI e fonte de dados

---

# 3. Ajustes Estruturais Realizados

Mudanças aplicadas:

- Criação da pasta `domain/`
- Criação da pasta `service/`
- Introdução de `CompoundsService`
- Renomeação do parâmetro de rota `:name` para `:slug`
- Organização de páginas dentro de `pages/`
- Atualização dos imports para refletir nova estrutura

A navegação via `loadChildren` já existia e foi mantida.

O app principal continua conhecendo apenas a rota:

```
path: 'compounds'
```

Isso não mudou nesta branch.

---

# 4. O Que Não Mudou

- Continua sendo uma SPA única
- Continua um único build
- Continua sem Module Federation
- Continua sem deploy independente
- Continua sem Shell separado

A infraestrutura não mudou.

O que mudou foi a organização interna da feature.

---

# O Que Esta Estrutura Permite

A nova organização permite:

- Evolução mais controlada do domínio
- Separação clara de responsabilidades
- Possível extração futura da feature
- Integração futura com backend real sem reestruturação

Ela não transforma automaticamente o projeto em Micro Frontend.

Mas reduz o esforço caso essa decisão seja tomada no futuro.

---

# Conclusão

Branch 1 organizou o domínio.

Branch 2 formalizou a estrutura interna da feature.

A aplicação continua sendo uma SPA única.

Porém, agora possui camadas internas mais claras, menor acoplamento e melhor preparação para evolução.

A mudança foi estrutural — não infraestrutural.