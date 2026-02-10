# RE Arquitetura & Design - Especificação Técnica

**Data:** 9 de Fevereiro de 2026
**Versão:** 1.0
**Status:** Expansão Completa

---

## Resumo Executivo

Landing page one-page para estúdio de arquitetura com posicionamento de **luxo silencioso (Quiet Luxury)**, voltado para clientes AAA. O projeto prioriza tipografia impecável, espaços em branco e carregamento de imagens em alta definição sem perda de performance.

**Tech Stack Escolhido:** WordPress + Bricks Builder

---

## 1. Requisitos Funcionais

### 1.1 Seções da Landing Page

| Seção | Descrição | Conteúdo |
|-------|-----------|----------|
| **Hero** | Impacto visual imediato | Imagem fullscreen de projeto assinado, texto sobreposto "RE Arquitetura & Design", CTA secundário |
| **Manifesto** | Posicionamento de marca | Texto sobre filosofia do estúdio, tipografia impecável, espaçamento generoso |
| **Diferencial Técnico** | Verticalização | Destaque para marcenaria e marmoraria próprias, macrofotografia de detalhes técnicos |
| **Portfólio** | Galeria de elite | Grid masonry de projetos com navegação fluida, filtros por categoria |
| **Contato** | Conversão | Formulário minimalista + botão WhatsApp flutuante estilizado |

### 1.2 Integrações

- **WhatsApp:** Botão flutuante com mensagem pré-definida
- **E-mail profissional:** Configuração de SMTP
- **Domínio:** Já ativo no Google
- **Analytics:** Google Analytics 4 (opcional)

---

## 2. Requisitos Não-Funcionais

### 2.1 Performance (Core Web Vitals)

| Métrica | Alvo | Crítico |
|---------|------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | Sim |
| INP (Interaction to Next Paint) | < 200ms | Sim |
| CLS (Cumulative Layout Shift) | < 0.1 | Sim |
| FCP (First Contentful Paint) | < 1.8s | Não |
| TTI (Time to Interactive) | < 3.8s | Não |
| PageSpeed Score | 90+ (mobile/desktop) | Sim |

### 2.2 Imagens

- Formato: **WebP** com fallback JPEG
- Lazy load: Abaixo da dobra
- Resoluções: 640w, 1024w, 1440w, 1920w, 2560w
- Placeholder: Blur-up (10px base64)

### 2.3 Mobile First

- Experiência mobile superior ao desktop
- Breakpoints: 320px, 640px, 768px, 1024px, 1280px, 1536px, 1920px
- Touch-friendly: Mínimo 44x44px para elementos interativos

### 2.4 Cross-browser

Últimas 2 versões de: Chrome, Safari, Firefox, Edge, iOS Safari 14+, Android Chrome 90+

### 2.5 Acessibilidade

- Contraste mínimo: 4.5:1 (texto normal), 3:1 (texto grande)
- Navegação por teclado
- Foco visível em elementos interativos

---

## 3. Requisitos Implícitos

1. **SEO Básico:** Meta tags title/description, Open Graph, estrutura semântica
2. **Backup:** Automático para WordPress
3. **SSL:** Certificado SSL ativo
4. **Manutenção:** Documentação para atualizações futuras
5. **Versão para impressão:** CSS print otimizado

---

## 4. Fora do Escopo

- Blog ou seção de notícias
- Área de cliente/login
- Versão multilíngue
- E-commerce
- CRM integrado
- CMS customizado beyond WordPress padrão

---

## 5. Tech Stack

### 5.1 Plataforma

**WordPress 6.7+ + Bricks Builder 1.9+**

**Justificativa:**
- Melhor performance que Elementor Pro para alta densidade de imagens
- Controle granular sobre otimização de WebP e lazy loading
- SEO superior ao Framer
- Escalabilidade para expansões futuras

### 5.2 Dependências

**Core:**
- PHP 8.2+
- MySQL 8.0+ / MariaDB 10.11+

**Plugins:**
- Bricks Builder (page builder)
- Autoptimize (minificação CSS/JS)
- WebP Express (conversão WebP on-the-fly)
- Contact Form 7 (formulários)
- Yoast SEO (meta management)

**Desenvolvimento:**
- Node.js 20+ LTS
- Vite 5+ (asset bundling)
- Sharp (image optimization)

---

## 6. Sistema de Design

### 6.1 Paleta de Cores (Quiet Luxury)

```css
:root {
  /* Greige Tones */
  --color-greige-50: #faf8f6;
  --color-greige-100: #f5f0eb;
  --color-greige-200: #e8e0d8;
  --color-greige-300: #d4ccc4;
  --color-greige-400: #b8b0a8;
  --color-greige-500: #9c948c;
  --color-greige-600: #807870;
  --color-greige-700: #645c54;
  --color-greige-800: #484038;
  --color-greige-900: #2c241c;

  /* Sand Accent */
  --color-sand-100: #f0e6dc;
  --color-sand-200: #e0d0c0;
  --color-sand-300: #d0bba4;

  /* Matte Black */
  --color-black-matte: #1a1a1a;

  /* Semantic */
  --color-text-primary: var(--color-greige-900);
  --color-text-secondary: var(--color-greige-600);
  --color-bg-primary: var(--color-greige-50);
  --color-bg-secondary: var(--color-greige-100);
}
```

### 6.2 Tipografia

```css
:root {
  /* Font Families */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Montserrat', system-ui, sans-serif;

  /* Modular Scale (1.250 - Major Third) */
  --text-xs: 0.64rem;    /* 10.24px */
  --text-sm: 0.8rem;     /* 12.8px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.563rem;   /* 25px */
  --text-2xl: 1.953rem;  /* 31.25px */
  --text-3xl: 2.441rem;  /* 39.06px */
  --text-4xl: 3.052rem;  /* 48.83px */
  --text-5xl: 3.815rem;  /* 61.04px */
  --text-6xl: 4.769rem;  /* 76.3px */

  /* Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
}
```

### 6.3 Espaçamento (Base 8px)

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
}
```

---

## 7. Estrutura de Arquivos

```
/Users/forato/PROJECTS/99-lp-minimalista/
├── wp-content/
│   ├── themes/
│   │   └── re-arquitetura/
│   │       ├── functions.php
│   │       ├── style.css
│   │       └── assets/
│   │           ├── css/
│   │           │   ├── critical.css
│   │           │   ├── main.css
│   │           │   └── components/
│   │           │       ├── hero.css
│   │           │       ├── manifesto.css
│   │           │       ├── diferencial.css
│   │           │       ├── portfolio.css
│   │           │       └── contato.css
│   │           ├── js/
│   │           │   ├── main.js
│   │           │   └── whatsapp.js
│   │           ├── fonts/
│   │           └── images/
│   │               ├── heroes/
│   │               ├── portfolio/
│   │               └── ui/
│   └── plugins/
├── .dr_ai/
│   ├── docs/
│   │   ├── spec.md (este arquivo)
│   │   ├── plan.md
│   │   └── INDEX.md
│   ├── logs/
│   └── cache/
├── package.json
└── .gitignore
```

---

## 8. Estratégia de Performance

### 8.1 Otimização de Imagens

1. **Conversão WebP/AVIF** - Build-time com Sharp
2. **Responsive srcset** - 640w a 2560w
3. **Lazy load nativo** - Abaixo da dobra
4. **Blur-up placeholders** - Base64 10px
5. **Preload hero** - `<link rel="preload">`

### 8.2 Critical CSS

- Inline CSS above-the-fold no `<head>`
- Defer CSS não-crítico
- Target: < 15KB critical payload

### 8.3 Caching

```
Static Assets: 1 ano
HTML: 1 hora
API: 5 minutos
```

### 8.4 CDN

- Brotli compression (level 5)
- HTTP/2 ou HTTP/3
- Edge caching

---

## 9. Breakpoints Responsivos

| Breakpoint | Width | Target |
|------------|-------|--------|
| xs | 320px - 639px | Very small phones |
| sm | 640px - 767px | Small phones landscape |
| md | 768px - 1023px | Tablets portrait |
| lg | 1024px - 1279px | Tablets landscape, small desktops |
| xl | 1280px - 1535px | Desktops |
| 2xl | 1536px - 1919px | Large desktops |
| 3xl | 1920px+ | Extra large displays |

---

## 10. Integrações

### 10.1 WhatsApp

```javascript
const whatsappConfig = {
  phoneNumber: '5511999999999',
  defaultMessage: 'Olá, gostaria de saber mais sobre seus projetos.',
  position: 'bottom-right',
  showOnScroll: 500
};
```

### 10.2 Analytics

- Google Analytics 4
- Google Tag Manager
- Microsoft Clarity (opcional)

### 10.3 E-mail

- WP Mail SMTP
- Configuração com provedor do cliente

---

## 11. Referências Visuais

- **Studio MK27** - Minimalismo brasileiro
- **Fran Silvestre Arquitectos** - Precisão europeia
- **Pitsou Kedem** - Luxo contemporâneo

---

## 12. Próximos Passos

1. Aprovação da especificação técnica
2. Criação do plano de implementação detalhado
3. Setup do ambiente de desenvolvimento
4. Implementação das seções
5. Otimização de performance
6. QA e validação

---

**Document Version:** 1.0
**Last Updated:** 2026-02-09
