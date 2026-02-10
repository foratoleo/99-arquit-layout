# RE Arquitetura & Design - Documentacao

Este diretorio contem toda a documentacao tecnica do projeto de landing page para o estúdio de arquitetura RE Arquitetura & Design.

## Documentos Disponiveis

### 1. Especificacao Tecnica
**Arquivo:** `spec.md`

Descricao completa dos requisitos funcionais e nao-funcionais do projeto, incluindo:
- Requisitos funcionais (5 secoes)
- Requisitos nao-funcionais (Core Web Vitals, performance)
- Sistema de design (cores, tipografia, espaçamento)
- Tech stack (WordPress + Bricks Builder)
- Estrategia de performance
- Integracoes (WhatsApp, Analytics)

**Status:** Aprovado v1.0
**Data:** 9 de Fevereiro de 2026

---

### 2. Plano de Implementacao
**Arquivo:** `plan.md`

Plano detalhado de execucao em 6 fases:
1. Setup Inicial (WordPress, plugins, tema)
2. Sistema de Design (tokens, tipografia, critical CSS)
3. Seções (Hero, Manifesto, Diferencial, Portfolio, Contato)
4. Integracoes (WhatsApp, Analytics)
5. Performance (otimizacao de imagens, lazy loading, caching)
6. QA & Validacao (cross-browser, mobile, Core Web Vitals, acessibilidade)

**Cronograma:** 4-6 dias uteis
**Estimativa:** 40-48 horas
**Status:** Pronto para execucao

---

### 3. Regras do Projeto
**Arquivo:** `RULES.md`

Diretrizes de desenvolvimento e qualidade:
- Interaçao e comunicacao
- Qualidade de código
- Operacoes Git
- Documentacao

**Status:** Ativo

---

## Estrutura do Projeto

```
/Users/forato/PROJECTS/99-lp-minimalista/
├── wp-content/
│   └── themes/
│       └── re-arquitetura/          # Tema customizado
│           ├── functions.php
│           ├── style.css
│           └── assets/
│               ├── css/             # Estilos
│               ├── js/              # Scripts
│               ├── fonts/           # Fontes
│               └── images/          # Imagens otimizadas
├── .dr_ai/
│   ├── docs/                        # Esta documentacao
│   │   ├── spec.md                  # Especificacao
│   │   ├── plan.md                  # Plano de implementacao
│   │   ├── RULES.md                 # Regras do projeto
│   │   └── INDEX.md                 # Este arquivo
│   ├── logs/                        # Logs de execucao
│   └── cache/                       # Cache de build
├── package.json                     # Dependencias Node.js
└── .gitignore                       # Arquivos ignorados
```

## Fluxo de Trabalho Recomendado

1. **Leitura Previa:** Revise `spec.md` para entender os requisitos
2. **Planejamento:** Consulte `plan.md` para sequencia de implementacao
3. **Execucao:** Siga as tarefas em ordem, respeitando dependencias
4. **Validacao:** Execute checklists de QA ao final de cada fase
5. **Entrega:** Documente resultados e relatorios

## Pontos de Atencao

### Performance Critica
- LCP (Largest Contentful Paint) deve ser < 2.5s
- CLS (Cumulative Layout Shift) deve ser < 0.1
- PageSpeed Score deve ser >= 90 (mobile e desktop)

### Design System
- Paleta Greige/Sand (Quiet Luxury)
- Tipografia: Playfair Display + Montserrat
- Espaçamento base 8px
- Breakpoints: 320px, 640px, 768px, 1024px, 1280px, 1536px, 1920px

### Imagens
- Formato WebP com fallback JPEG
- Lazy load abaixo da dobra
- Resolucoes: 640w, 1024w, 1440w, 1920w, 2560w
- Blur-up placeholders (Base64 10px)

## Comunicacao

Para duvidas ou clarificacoes sobre o projeto, consulte:
- **Especificacao:** `spec.md`
- **Plano:** `plan.md`
- **Regras:** `RULES.md`

---

**Ultima Atualizacao:** 9 de Fevereiro de 2026
**Versao:** 1.0
