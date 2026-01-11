# 🎨 Design System - Novidade Urbana

## Cores

### Paleta Principal
```css
:root {
  /* Primárias */
  --color-yellow: #FCFF00;      /* Amarelo vibrante - CTA, destaques */
  --color-black: #000000;        /* Preto - backgrounds, textos */
  --color-white: #FFFFFF;        /* Branco - textos, backgrounds */
  
  /* Secundárias */
  --color-gray: #545454;         /* Cinza - textos secundários */
  --color-orange: #FF5E33;       /* Laranja - acentos, hover states */
}
```

### Tailwind Config
```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCFF00',
          black: '#000000',
          white: '#FFFFFF',
          gray: '#545454',
          orange: '#FF5E33',
        }
      }
    }
  }
}
```

### Uso das Cores
| Cor | Uso Principal |
|-----|---------------|
| Amarelo (#FCFF00) | CTAs, botões principais, destaques, títulos especiais |
| Preto (#000000) | Backgrounds principais, textos em fundo claro |
| Branco (#FFFFFF) | Textos em fundo escuro, backgrounds alternados |
| Cinza (#545454) | Textos secundários, descrições, placeholders |
| Laranja (#FF5E33) | Hover states, acentos, elementos de destaque secundário |

---

## Tipografia

### Fonte Principal
```
Font Family: "TT Runs Trial"
Fallback: "Bebas Neue", "Oswald", sans-serif
```

### Configuração Next.js (se usar fonte local)
```typescript
// src/lib/fonts.ts
import localFont from 'next/font/local'

export const ttRuns = localFont({
  src: [
    {
      path: '../fonts/TTRunsTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TTRunsTrial-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/TTRunsTrial-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/TTRunsTrial-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-tt-runs',
})
```

### Escala Tipográfica
```css
/* Headings */
--text-hero: clamp(3rem, 8vw, 6rem);      /* Hero principal */
--text-h1: clamp(2.5rem, 5vw, 4rem);       /* Títulos de seção */
--text-h2: clamp(1.75rem, 3vw, 2.5rem);    /* Subtítulos */
--text-h3: clamp(1.25rem, 2vw, 1.75rem);   /* Cards, destaques */

/* Body */
--text-body-lg: 1.125rem;                  /* 18px - Texto destaque */
--text-body: 1rem;                         /* 16px - Texto padrão */
--text-body-sm: 0.875rem;                  /* 14px - Texto secundário */
--text-caption: 0.75rem;                   /* 12px - Labels, captions */
```

### Tailwind Config - Fonts
```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-tt-runs)', 'Bebas Neue', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 6rem)',
        'h1': 'clamp(2.5rem, 5vw, 4rem)',
        'h2': 'clamp(1.75rem, 3vw, 2.5rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.75rem)',
      }
    }
  }
}
```

---

## Espaçamentos

### Seções (Padding Vertical)
| Dispositivo | Valor |
|-------------|-------|
| Desktop (lg+) | 80px top / 80px bottom |
| Mobile/Tablet | 48px top / 48px bottom |

### Header
```css
padding: 20px (top e bottom)
```

### Footer
```css
padding: 32px (top e bottom)
```

### Tailwind Config - Spacing
```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      spacing: {
        'section-mobile': '48px',
        'section-desktop': '80px',
        'header': '20px',
        'footer': '32px',
      },
      padding: {
        'section': '48px',
        'section-lg': '80px',
      }
    }
  }
}
```

### Classe Utilitária para Seções
```css
/* globals.css */
.section-padding {
  @apply py-12 lg:py-20; /* 48px mobile, 80px desktop */
}

.container-site {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

---

## Efeitos e Animações

### Transições Padrão
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
```

### Hover States
```css
/* Botões */
.btn-primary:hover {
  background-color: var(--color-orange);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(252, 255, 0, 0.3);
}

/* Cards */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

### Animações Framer Motion
```typescript
// src/lib/animations.ts

// Fade In Up (para seções)
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Stagger Children (para listas/grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Scale In (para cards)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Slide In (para hero elements)
export const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

// Text Reveal (letra por letra ou palavra por palavra)
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 }
  })
}
```

---

## Componentes Base

### Botão Primário
```tsx
// Estilo: Fundo amarelo, texto preto, hover laranja
<button className="
  bg-brand-yellow 
  text-brand-black 
  font-heading 
  font-bold 
  px-8 
  py-4 
  text-lg
  uppercase
  tracking-wider
  transition-all 
  duration-300 
  hover:bg-brand-orange
  hover:text-white
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(252,255,0,0.3)]
">
  Conheça nossos artistas
</button>
```

### Botão Secundário (Outline)
```tsx
<button className="
  border-2 
  border-brand-yellow 
  text-brand-yellow 
  font-heading 
  font-bold 
  px-8 
  py-4 
  text-lg
  uppercase
  tracking-wider
  transition-all 
  duration-300 
  hover:bg-brand-yellow
  hover:text-brand-black
">
  Saiba mais
</button>
```

### Card de Artista/Sócio
```tsx
<div className="
  group
  relative
  overflow-hidden
  bg-brand-black
  transition-all
  duration-500
  hover:-translate-y-2
  hover:shadow-2xl
">
  {/* Imagem com overlay no hover */}
  {/* Nome e cargo com animação */}
</div>
```

---

## Backgrounds por Seção

| Seção | Background | Cor do Texto |
|-------|------------|--------------|
| Header | Transparente/Preto | Branco |
| Hero | Preto com elementos amarelos | Branco + Amarelo |
| Artistas em Destaque | Branco | Preto |
| Reconhecimento & Projetos | Preto/Cinza escuro (#111) | Branco |
| Nossa História | Branco | Preto |
| Sócios/Diretores | Branco | Preto |
| Contato/Vamos Conversar | Preto | Branco |
| Footer | Preto | Branco + Cinza |

---

## Elementos Decorativos

### Brush Strokes
- Elementos amarelos estilo "pincelada" atrás de títulos
- Usar SVG ou imagem PNG com transparência

### Linhas Curvas
- Linhas decorativas sutis no background
- Cor: rgba(255,255,255,0.05) ou similar

### Destaques de Texto
- Palavras em destaque com estilo "escrito à mão" (cursivo)
- Ex: "destaque", "Especiais", "História"
- Usar fonte script ou SVG customizado
