# RE Arquitetura & Design - Plano de Implementacao

**Data:** 9 de Fevereiro de 2026
**Versao:** 1.0
**Baseado em:** spec.md v1.0
**Estimativa Total:** 40-48 horas

---

## Resumo Executivo

Este plano detalha a implementacao da landing page one-page para estúdio de arquitetura RE Arquitetura & Design, seguindo os principios de Quiet Luxury e requisitos de performance estabelecidos na especificacao técnica.

**Cronograma Previsto:** 4-6 dias úteis

**Caminho Crítico:** Setup -> Design System -> Hero -> Performance Optimization

---

## 1. Setup Inicial

### 1.1 Configuracao do Ambiente WordPress

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 1.1.1 | Instalacao WordPress 6.7+ | WP instalado e funcional | - | Baixo |
| 1.1.2 | Configuracao de permalinks | Estrutura de URLs amigável | 1.1.1 | Baixo |
| 1.1.3 | Configuracao de timezone e idioma | pt-BR, America/Sao_Paulo | 1.1.1 | Baixo |
| 1.1.4 | Instalacao SSL certificate | HTTPS ativo | 1.1.1 | Médio |

**Critérios de Aceitacao:**
- WordPress acessível em dominio oficial
- HTTPS funcionando sem avisos
- Painel administrativo acessível
- Permalinks configurados como /%postname%/

**Arquivos:**
- N/A

---

### 1.2 Instalacao de Plugins

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 1.2.1 | Instalar Bricks Builder 1.9+ | Plugin ativado | 1.1.1 | Baixo |
| 1.2.2 | Instalar Autoptimize | Plugin ativado | 1.1.1 | Baixo |
| 1.2.3 | Instalar WebP Express | Plugin ativado | 1.1.1 | Baixo |
| 1.2.4 | Instalar Contact Form 7 | Plugin ativado | 1.1.1 | Baixo |
| 1.2.5 | Instalar Yoast SEO | Plugin ativado | 1.1.1 | Baixo |
| 1.2.6 | Instalar WP Mail SMTP | Plugin ativado | 1.1.1 | Baixo |
| 1.2.7 | Configurar WebP Express | Conversao on-the-fly ativa | 1.2.3 | Médio |
| 1.2.8 | Configurar Autoptimize | Minificacao CSS/JS ativa | 1.2.2 | Médio |

**Critérios de Aceitacao:**
- Todos os plugins instalados e ativados
- WebP Express configurado para conversao automatica
- Autoptimize configurado sem quebrar layout

**Arquivos:**
- N/A

---

### 1.3 Estrutura de Tema Customizado

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 1.3.1 | Criar estrutura de diretorios | /wp-content/themes/re-arquitetura/ | 1.1.1 | Baixo |
| 1.3.2 | Criar functions.php | Enqueue de assets customizados | 1.3.1 | Médio |
| 1.3.3 | Criar style.css | Meta info do tema | 1.3.1 | Baixo |
| 1.3.4 | Ativar tema customizado | Tema ativo no WordPress | 1.3.3 | Baixo |

**Critérios de Aceitacao:**
- Estrutura de diretorios conforme spec.md
- Tema ativado e funcionando
- Assets sendo enfileirados corretamente

**Arquivos:**
- `/wp-content/themes/re-arquitetura/functions.php`
- `/wp-content/themes/re-arquitetura/style.css`
- `/wp-content/themes/re-arquitetura/assets/css/`
- `/wp-content/themes/re-arquitetura/assets/js/`
- `/wp-content/themes/re-arquitetura/assets/fonts/`
- `/wp-content/themes/re-arquitetura/assets/images/`

---

## 2. Sistema de Design

### 2.1 Tokens CSS

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 2.1.1 | Criar arquivo de tokens CSS | /assets/css/tokens.css | 1.3.1 | Baixo |
| 2.1.2 | Definir paleta Greige/Sand | Variaveis de cores | 2.1.1 | Baixo |
| 2.1.3 | Definir tipografia modular | Variaveis de fontes | 2.1.1 | Baixo |
| 2.1.4 | Definir espaçamento base 8px | Variaveis de espaco | 2.1.1 | Baixo |

**Critérios de Aceitacao:**
- Todas as variaveis do spec.md implementadas
- Tokens utilizaveis globalmente
- Nomenclatura consistente

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/tokens.css`

---

### 2.2 Google Fonts Integration

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 2.2.1 | Criar arquivo fonts.css | @font-face declarations | 2.1.1 | Baixo |
| 2.2.2 | Configurar Playfair Display | Weights 400, 500, 600 | 2.2.1 | Baixo |
| 2.2.3 | Configurar Montserrat | Weights 300, 400, 500 | 2.2.1 | Baixo |
| 2.2.4 | Implementar font-display: swap | Prevencao de FOUT | 2.2.1 | Médio |

**Critérios de Aceitacao:**
- Playfair Display e Montserrat carregando
- Font-display: swap implementado
- Fallback fonts definidos

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/fonts.css`

---

### 2.3 Critical CSS

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 2.3.1 | Identificar CSS above-the-fold | Lista de secoes criticas | 2.1.1 | Médio |
| 2.3.2 | Criar critical.css | CSS inline no head | 2.3.1 | Alto |
| 2.3.3 | Implementar defer CSS nao-critico | Load assincrono | 2.3.2 | Alto |
| 2.3.4 | Otimizar tamanho do critical | < 15KB | 2.3.2 | Médio |

**Critérios de Aceitacao:**
- Critical CSS inline no <head>
- CSS nao-crítico carregado assincronamente
- Tamanho do critical <= 15KB
- LCP < 2.5s

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/critical.css`

---

### 2.4 Componentes Base

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 2.4.1 | Criar botoes base | Primary, secondary, ghost | 2.1.1 | Baixo |
| 2.4.2 | Criar container system | Max-width, padding | 2.1.1 | Baixo |
| 2.4.3 | Criar grid system | Flexbox/Grid base | 2.1.1 | Médio |
| 2.4.4 | Criar utilitarios | Margins, padding, text | 2.1.1 | Baixo |

**Critérios de Aceitacao:**
- Componentes reutilizaveis
- Consistencia com design system
- Responsivos

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/buttons.css`
- `/wp-content/themes/re-arquitetura/assets/css/components/grid.css`
- `/wp-content/themes/re-arquitetura/assets/css/components/utilities.css`

---

## 3. Seções

### 3.1 Hero Section (PRIORIDADE MAXIMA - LCP)

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 3.1.1 | Criar estrutura HTML Hero | Semantica correta | 2.1.1 | Baixo |
| 3.1.2 | Implementar estilo Hero | /assets/css/components/hero.css | 3.1.1 | Alto |
| 3.1.3 | Otimizar imagem Hero | WebP + srcset + preload | 3.1.2 | Alto |
| 3.1.4 | Implementar blur-up placeholder | Base64 10px | 3.1.3 | Médio |
| 3.1.5 | Adicionar texto sobreposto | Playfair Display, contrast | 3.1.2 | Médio |
| 3.1.6 | Implementar CTA secundario | Botão estilizado | 3.1.2 | Baixo |
| 3.1.7 | Validação LCP | LCP < 2.5s | 3.1.4 | Alto |

**Critérios de Aceitacao:**
- Imagem fullscreen com aspect ratio correto
- Texto legível com contraste adequado
- CTA funcionando
- LCP < 2.5s
- Imagem otimizada com srcset

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/hero.css`
- `/wp-content/themes/re-arquitetura/assets/images/hero/`

---

### 3.2 Manifesto Section

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 3.2.1 | Criar estrutura HTML Manifesto | Semantica correta | 2.1.1 | Baixo |
| 3.2.2 | Implementar estilo Manifesto | /assets/css/components/manifesto.css | 3.2.1 | Médio |
| 3.2.3 | Tipografia impecável | Playfair Display, espaçamento generoso | 3.2.2 | Alto |
| 3.2.4 | Lazy load assets | Abaixo da dobra | 3.2.2 | Baixo |

**Critérios de Aceitacao:**
- Texto legível com hierarquia visual clara
- Espaçamento generoso implementado
- Responsivo em todos os breakpoints
- Lazy load funcionando

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/manifesto.css`

---

### 3.3 Diferencial Técnico Section

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 3.3.1 | Criar estrutura HTML Diferencial | Semantica correta | 2.1.1 | Baixo |
| 3.3.2 | Implementar estilo Diferencial | /assets/css/components/diferencial.css | 3.3.1 | Médio |
| 3.3.3 | Layout verticalizacao | Grid responsivo | 3.3.2 | Médio |
| 3.3.4 | Otimizar macrofotografias | WebP + lazy load | 3.3.2 | Alto |
| 3.3.5 | Texto descritivo técnico | Montserrat, legível | 3.3.2 | Baixo |

**Critérios de Aceitacao:**
- Layout destaca marcenaria e marmoraria
- Macrofotografias em alta resolucao
- Texto técnico legível
- Responsivo

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/diferencial.css`
- `/wp-content/themes/re-arquitetura/assets/images/detalhes/`

---

### 3.4 Portfolio Section

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 3.4.1 | Criar estrutura HTML Portfolio | Semantica correta | 2.1.1 | Baixo |
| 3.4.2 | Implementar estilo Portfolio | /assets/css/components/portfolio.css | 3.4.1 | Alto |
| 3.4.3 | Grid Masonry responsivo | CSS Grid + media queries | 3.4.2 | Alto |
| 3.4.4 | Implementar filtros por categoria | JavaScript vanilla | 3.4.2 | Médio |
| 3.4.5 | Otimizar imagens Portfolio | WebP + lazy load + srcset | 3.4.2 | Alto |
| 3.4.6 | Navegacao fluida | Transicoes suaves | 3.4.3 | Médio |
| 3.4.7 | Modal lightbox (opcional) | Visualizacao fullscreen | 3.4.6 | Médio |

**Critérios de Aceitacao:**
- Grid masonry funcionando
- Filtros por categoria operacionais
- Imagens otimizadas com lazy load
- Transicoes suaves
- Responsivo

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/portfolio.css`
- `/wp-content/themes/re-arquitetura/assets/js/portfolio.js`
- `/wp-content/themes/re-arquitetura/assets/images/portfolio/`

---

### 3.5 Contato Section

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 3.5.1 | Criar estrutura HTML Contato | Semantica correta | 2.1.1 | Baixo |
| 3.5.2 | Implementar estilo Contato | /assets/css/components/contato.css | 3.5.1 | Médio |
| 3.5.3 | Configurar Contact Form 7 | Formulario minimalista | 1.2.4 | Médio |
| 3.5.4 | Estilizar formulario CF7 | CSS customizado | 3.5.3 | Médio |
| 3.5.5 | Validação de formulario | JavaScript + HTML5 | 3.5.3 | Baixo |
| 3.5.6 | Configurar envio SMTP | WP Mail SMTP | 1.2.6 | Médio |

**Critérios de Aceitacao:**
- Formulario estilizado minimalista
- Validacao funcionando
- Envio de e-mail operacional
- Responsivo
- Acessível (contrast, focus states)

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/css/components/contato.css`

---

## 4. Integrações

### 4.1 WhatsApp Floating Button

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 4.1.1 | Criar arquivo whatsapp.js | Configuracao e logica | 2.1.1 | Baixo |
| 4.1.2 | Implementar botao flutuante | HTML + CSS | 4.1.1 | Baixo |
| 4.1.3 | Configurar mensagem pre-definida | URL scheme | 4.1.1 | Baixo |
| 4.1.4 | Implementar show on scroll | JavaScript | 4.1.2 | Baixo |
| 4.1.5 | Estilizar botao | Minimalista, on-brand | 4.1.2 | Médio |

**Critérios de Aceitacao:**
- Botao aparece após scroll de 500px
- Mensagem pre-definida funcionando
- Estilo consistente com design system
- Nao obstruir conteudo importante
- Responsivo

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/js/whatsapp.js`
- `/wp-content/themes/re-arquitetura/assets/css/components/whatsapp.css`

---

### 4.2 Analytics (Opcional)

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 4.2.1 | Criar conta GA4 | Tracking ID | - | Médio |
| 4.2.2 | Instalar Google Tag Manager | Container ativo | 4.2.1 | Baixo |
| 4.2.3 | Configurar eventos customizados | Scroll depth, clicks | 4.2.2 | Alto |
| 4.2.4 | Instalar Microsoft Clarity (opcional) | Heatmaps | 4.2.1 | Baixo |

**Critérios de Aceitacao:**
- GA4 rastreando pageviews
- Eventos customizados funcionando
- GTM carregando assincronamente
- Performance nao impactada

**Arquivos:**
- N/A (via GTM)

---

## 5. Performance

### 5.1 Otimizacao de Imagens

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 5.1.1 | Configurar build-time WebP | Script Node.js + Sharp | 1.3.1 | Alto |
| 5.1.2 | Gerar srcset para hero | 640w a 2560w | 5.1.1 | Alto |
| 5.1.3 | Gerar blur-up placeholders | Base64 10px | 5.1.1 | Médio |
| 5.1.4 | Implementar preload hero | <link rel="preload"> | 5.1.2 | Médio |
| 5.1.5 | Configurar lazy load nativo | loading="lazy" | 5.1.1 | Baixo |
| 5.1.6 | Otimizar JPEG fallback | Qualidade 85% | 5.1.1 | Baixo |

**Critérios de Aceitacao:**
- Todas as imagens em WebP
- Srcset implementado para todas as imagens
- Blur-up placeholders funcionando
- Hero image com preload
- Lazy load nativo implementado

**Arquivos:**
- `/build-images.js` (script de build)
- `/package.json` (scripts de otimizacao)

---

### 5.2 Lazy Loading

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 5.2.1 | Implementar lazy load nativo | loading="lazy" em imagens | 5.1.5 | Baixo |
| 5.2.2 | Configurar threshold de load | Intersection Observer | 5.2.1 | Médio |
| 5.2.3 | Fallback para browsers antigos | Polyfill | 5.2.1 | Baixo |

**Critérios de Aceitacao:**
- Lazy load funcionando em imagens abaixo da dobra
- Hero nao usa lazy load
- Fallback para browsers legados

**Arquivos:**
- `/wp-content/themes/re-arquitetura/assets/js/lazyload.js`

---

### 5.3 Caching Configuration

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 5.3.1 | Configurar cache headers | .htaccess ou nginx.conf | 1.1.1 | Médio |
| 5.3.2 | Configurar CDN (opcional) | Brotli + HTTP/2 | 5.3.1 | Alto |
| 5.3.3 | Configurar browser caching | Expires headers | 5.3.1 | Baixo |

**Critérios de Aceitacao:**
- Static assets com cache de 1 ano
- HTML com cache de 1 hora
- Brotli compression ativa (se CDN)
- HTTP/2 ou HTTP/3 ativo

**Arquivos:**
- `/.htaccess` ou `/nginx.conf`

---

## 6. QA & Validação

### 6.1 Testes Cross-browser

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 6.1.1 | Testar Chrome | Funcionamento completo | Todas as secoes | Médio |
| 6.1.2 | Testar Safari | Funcionamento completo | 6.1.1 | Médio |
| 6.1.3 | Testar Firefox | Funcionamento completo | 6.1.1 | Médio |
| 6.1.4 | Testar Edge | Funcionamento completo | 6.1.1 | Médio |
| 6.1.5 | Testar iOS Safari 14+ | Funcionamento completo | 6.1.2 | Médio |
| 6.1.6 | Testar Android Chrome 90+ | Funcionamento completo | 6.1.1 | Médio |
| 6.1.7 | Documentar bugs e fixes | Log de problemas | 6.1.1-6.1.6 | Alto |

**Critérios de Aceitacao:**
- Funcionamento identico em todos os browsers
- Bugs documentados e corrigidos
- Fallbacks implementados onde necessário

**Arquivos:**
- `/.dr_ai/docs/cross-browser-report.md`

---

### 6.2 Testes Mobile

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 6.2.1 | Testar em iPhone SE | Responsivo, touch-friendly | Todas as secoes | Médio |
| 6.2.2 | Testar em iPhone 14 Pro | Responsivo, touch-friendly | 6.2.1 | Médio |
| 6.2.3 | Testar em Android pequeno | Responsivo, touch-friendly | 6.2.1 | Médio |
| 6.2.4 | Testar em Android grande | Responsivo, touch-friendly | 6.2.3 | Médio |
| 6.2.5 | Validar touch targets | Minimo 44x44px | 6.2.1 | Médio |
| 6.2.6 | Validar orientacao landscape | Layout funciona | 6.2.1 | Baixo |

**Critérios de Aceitacao:**
- Experiencia mobile superior ao desktop
- Touch targets >= 44x44px
- Layout funciona em landscape
- Nao há horizontal scroll

**Arquivos:**
- `/.dr_ai/docs/mobile-report.md`

---

### 6.3 Core Web Vitals Validation

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 6.3.1 | Testar LCP | PageSpeed Insights | Todas as secoes | Alto |
| 6.3.2 | Testar INP | PageSpeed Insights | 6.3.1 | Alto |
| 6.3.3 | Testar CLS | PageSpeed Insights | 6.3.1 | Alto |
| 6.3.4 | Otimizar ate LCP < 2.5s | Performance improvements | 6.3.1 | Alto |
| 6.3.5 | Otimizar ate INP < 200ms | Performance improvements | 6.3.2 | Alto |
| 6.3.6 | Otimizar ate CLS < 0.1 | Performance improvements | 6.3.3 | Alto |
| 6.3.7 | Validar PageSpeed Score 90+ | Mobile e desktop | 6.3.4-6.3.6 | Alto |

**Critérios de Aceitacao:**
- LCP < 2.5s (mobile e desktop)
- INP < 200ms (mobile e desktop)
- CLS < 0.1 (mobile e desktop)
- PageSpeed Score >= 90 (mobile e desktop)

**Arquivos:**
- `/.dr_ai/docs/performance-report.md`

---

### 6.4 Acessibilidade

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 6.4.1 | Testar contraste de cores | WCAG AA | Todas as secoes | Médio |
| 6.4.2 | Testar navegacao por teclado | Tab index funcional | 6.4.1 | Médio |
| 6.4.3 | Testar foco visível | Estados de foco claros | 6.4.2 | Baixo |
| 6.4.4 | Testar leitor de tela | NVDA/VoiceOver | 6.4.1 | Médio |
| 6.4.5 | Validar semantica HTML | ARIA labels onde necessário | 6.4.1 | Médio |

**Critérios de Aceitacao:**
- Contraste minimo 4.5:1 (texto normal)
- Contraste minimo 3:1 (texto grande)
- Navegacao completa por teclado
- Foco visível em todos os elementos interativos
- Semantica HTML correta

**Arquivos:**
- `/.dr_ai/docs/accessibility-report.md`

---

## 7. Documentacao e Entrega

### 7.1 Documentacao Técnica

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 7.1.1 | Documentar estrutura de arquivos | Arquitetura do projeto | Todas as fases | Baixo |
| 7.1.2 | Documentar design system | Tokens e componentes | 2.1-2.4 | Médio |
| 7.1.3 | Criar guia de manutencao | Atualizacoes futuras | Todas as fases | Médio |
| 7.1.4 | Documentar plugins e versoes | Lista de dependências | 1.2 | Baixo |

**Critérios de Aceitacao:**
- Documentacao clara e concisa
- Guia de manutencao util para nao-desenvolvedores
- Lista de dependencias completa

**Arquivos:**
- `/.dr_ai/docs/STRUCTURE.md`
- `/.dr_ai/docs/DESIGN_SYSTEM.md`
- `/.dr_ai/docs/MAINTENANCE.md`
- `/.dr_ai/docs/DEPENDENCIES.md`

---

### 7.2 Backup e Seguranca

**Tarefas:**

| ID | Tarefa | Output | Dependências | Esforço |
|----|--------|--------|--------------|---------|
| 7.2.1 | Configurar backup automatico | Plugin de backup | 1.1.1 | Baixo |
| 7.2.2 | Configurar HTTPS | SSL certificado | 1.1.4 | Baixo |
| 7.2.3 | Hardening WordPress | Seguranca basica | 7.2.2 | Médio |
| 7.2.4 | Documentar procedimento de restore | Guia de restore | 7.2.1 | Baixo |

**Critérios de Aceitacao:**
- Backup diario configurado
- HTTPS funcionando
- WordPress configurado para seguranca
- Procedimento de restore documentado

**Arquivos:**
- `/.dr_ai/docs/BACKUP.md`
- `/.dr_ai/docs/SECURITY.md`

---

## 8. Cronograma Sugerido

### Dia 1: Setup e Design System
- Manha: Setup inicial (1.1, 1.2, 1.3)
- Tarde: Design System base (2.1, 2.2, 2.4)

**Entregas:**
- WordPress configurado
- Tema customizado ativo
- Tokens CSS implementados
- Google Fonts integradas

---

### Dia 2: Hero Section e Critical CSS
- Manha: Hero section (3.1)
- Tarde: Critical CSS (2.3) + Performance base (5.1)

**Entregas:**
- Hero section funcional
- Critical CSS implementado
- LCP < 2.5s

---

### Dia 3: Seções de Conteudo
- Manha: Manifesto (3.2) + Diferencial (3.3)
- Tarde: Portfolio (3.4)

**Entregas:**
- Manifesto section
- Diferencial section
- Portfolio section

---

### Dia 4: Contato e Integrações
- Manha: Contato section (3.5)
- Tarde: WhatsApp (4.1) + Formulario CF7

**Entregas:**
- Contato section funcional
- WhatsApp floating button
- Formulario CF7 configurado

---

### Dia 5: Performance e Otimizacao
- Manha: Otimizacao de imagens (5.1) + Lazy loading (5.2)
- Tarde: Caching (5.3) + Analytics (4.2 - opcional)

**Entregas:**
- Todas as imagens otimizadas
- Lazy load implementado
- Caching configurado

---

### Dia 6: QA e Documentacao
- Manha: Testes cross-browser (6.1) + mobile (6.2)
- Tarde: Core Web Vitals (6.3) + Acessibilidade (6.4)

**Entregas:**
- Relatorio de testes
- Core Web Vitals validados
- Documentacao completa

---

## 9. Riscos e Mitigacoes

### 9.1 Performance

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| LCP > 2.5s | Média | Alto | Otimizacao agressiva de hero image, critical CSS, preload |
| CLS > 0.1 | Baixa | Médio | Espacos reservados para imagens, aspect-ratio |
| INP > 200ms | Baixa | Médio | Otimizacao de JavaScript, debouncing de eventos |

### 9.2 Compatibilidade

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Safari layout issues | Média | Médio | Testes extensivos em iOS Safari, fallbacks CSS |
| WebP fallback | Baixa | Baixo | JPEG fallback para browsers legados |

### 9.3 Escopo

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| Scope creep | Média | Alto | Especificacao clara, change control formal |
| Atraso em entrega | Baixa | Médio | Buffer de 20% em estimativas |

---

## 10. Checklist Final

### 10.1 Funcional

- [ ] Todas as 5 secoes implementadas
- [ ] WhatsApp button funcionando
- [ ] Formulario CF7 enviando e-mails
- [ ] Filtros de portfolio operacionais
- [ ] Navegacao fluida entre secoes

### 10.2 Performance

- [ ] LCP < 2.5s (mobile e desktop)
- [ ] INP < 200ms (mobile e desktop)
- [ ] CLS < 0.1 (mobile e desktop)
- [ ] PageSpeed Score >= 90 (mobile e desktop)
- [ ] Todas as imagens em WebP
- [ ] Lazy load implementado

### 10.3 Design

- [ ] Paleta Greige/Sand implementada
- [ ] Playfair Display integrado
- [ ] Montserrat integrado
- [ ] Espaçamento base 8px aplicado
- [ ] Layout responsivo em todos os breakpoints
- [ ] Estilo Quiet Luxury consistente

### 10.4 Acessibilidade

- [ ] Contraste minimo 4.5:1 (texto normal)
- [ ] Contraste minimo 3:1 (texto grande)
- [ ] Navegacao por teclado funcional
- [ ] Foco visível em elementos interativos
- [ ] Semantica HTML correta

### 10.5 Documentacao

- [ ] Estrutura de arquivos documentada
- [ ] Design system documentado
- [ ] Guia de manutencao criado
- [ ] Dependencias listadas
- [ ] Procedimento de backup documentado
- [ ] Procedimento de restore documentado

---

## Referencias

- Especificacao Tecnica: `/.dr_ai/docs/spec.md`
- Regras do Projeto: `/.dr_ai/docs/RULES.md`
- Settings: `/.dr_ai/settings.json`

---

**Versao do Documento:** 1.0
**Data de Criacao:** 2026-02-09
**Status:** Pronto para Execucao
