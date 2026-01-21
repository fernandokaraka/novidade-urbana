# Página Marcelo Aguiar - Plano de Implementação

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Configurar a página individual do artista Marcelo Aguiar com layout padrão (foto esquerda, texto direita) incluindo parágrafo destacado com fundo amarelo.

**Architecture:** Usar o layout padrão existente (DefaultHeroSection) + AchievementSection. Adicionar suporte para parágrafo destacado com fundo amarelo na bio.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS

---

## Análise do Design

### Hero Section
- Foto à esquerda com moldura amarela
- Nome "Marcelo Aguiar" (font-weight 400, ~90px)
- Primeiro parágrafo em cinza (#94969C)
- **Segundo parágrafo com FUNDO AMARELO** (texto preto)

### Redes Sociais
- @marceloaguiaroficial (Instagram)
- www.youtube.com/@marceloaguiaroficial (YouTube)
- Marcelo Aguiar (Spotify)

### Seção Sucessos
- Badge: "Sucessos"
- Título: "Deus Grande" (bold, não script)
- Texto descritivo
- Imagem: capa do single à direita

---

## Task 1: Atualizar Interface ArtistData

**Files:**
- Modify: `src/data/artists.ts`

**Step 1: Adicionar campo highlightedBio para parágrafo com fundo amarelo**

```typescript
export interface ArtistData {
  // ... campos existentes ...
  highlightedBio?: string // Parágrafo com fundo amarelo
}
```

---

## Task 2: Atualizar Dados do Marcelo Aguiar

**Files:**
- Modify: `src/data/artists.ts`

**Step 1: Atualizar os dados do Marcelo Aguiar**

```typescript
{
  slug: 'marcelo-aguiar',
  name: 'Marcelo Aguiar',
  bio: [
    'Marcelo Aguiar é cantor, compositor e uma das vozes mais marcantes do gospel nacional, reconhecido por sua trajetória à frente da banda Katsbarnea e por sua forte identidade no rock cristão brasileiro. Sua música sempre esteve ligada a mensagens diretas, intensidade espiritual e compromisso com a fé.'
  ],
  highlightedBio: 'Ao longo de sua carreira, Marcelo construiu um legado de autenticidade e impacto, influenciando gerações e mantendo uma presença sólida no cenário gospel por meio de projetos relevantes, testemunho pessoal e canções que comunicam transformação e esperança.',
  photo: '/images/artists/marcelo-aguiar-individual.png',
  photoAlt: 'Marcelo Aguiar',
  socialLinks: {
    instagram: '@marceloaguiaroficial',
    youtube: 'www.youtube.com/@marceloaguiaroficial',
    spotify: 'Marcelo Aguiar'
  },
  achievements: [
    {
      badge: 'Sucessos',
      title: 'Deus Grande',
      titleStyle: 'bold',
      text: '"Escolhemos essa música por trazer uma forte mensagem sobre a importância de levar a palavra de Deus e sua mensagem de fé e perseverança; a música já está sendo cantada nas igrejas em seus grupos de louvores, esse é nosso maior termômetro da força que ela tem de elevar e emocionar as pessoas", conta Marcelo.',
      image: '/images/artists/marcelo-aguiar-deus-grande.png',
      imageAlt: 'Capa do single Deus Grande'
    }
  ]
}
```

---

## Task 3: Atualizar DefaultHeroSection para Suportar highlightedBio

**Files:**
- Modify: `src/app/artistas/[slug]/page.tsx`

**Step 1: Adicionar renderização do highlightedBio na DefaultHeroSection**

No componente DefaultHeroSection, após o mapeamento dos parágrafos da bio, adicionar:

```tsx
{/* Parágrafo destacado com fundo amarelo */}
{artist.highlightedBio && (
  <div
    className="mt-6 p-4"
    style={{
      backgroundColor: '#FCFF00',
      fontFamily: 'var(--font-tt-runs)',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '1.6',
      color: '#000000'
    }}
  >
    {artist.highlightedBio}
  </div>
)}
```

---

## Task 4: Verificar Imagens Necessárias

**Imagens que devem existir em `public/images/artists/`:**

| Arquivo | Descrição |
|---------|-----------|
| `marcelo-aguiar-individual.png` | Foto do artista para Hero |
| `marcelo-aguiar-deus-grande.png` | Capa do single Deus Grande |

---

## Task 5: Testar a Página

**Step 1: Acessar a página**

URL: `http://localhost:3000/artistas/marcelo-aguiar`

**Step 2: Verificar:**
- [ ] Hero Section com foto à esquerda
- [ ] Nome "Marcelo Aguiar" em branco
- [ ] Primeiro parágrafo em cinza
- [ ] Segundo parágrafo com fundo amarelo
- [ ] Seção de redes sociais
- [ ] Seção "Deus Grande" com imagem à direita

---

## Resumo das Alterações

1. **Interface**: Adicionar `highlightedBio?: string`
2. **Dados**: Atualizar Marcelo Aguiar com textos e imagens corretos
3. **Componente**: Adicionar suporte para parágrafo com fundo amarelo
4. **Imagens**: Garantir que as imagens existam
