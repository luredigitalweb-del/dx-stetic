# DX Stetic — Landing Page

Landing page de alta conversão para a **DX Stetic**, estúdio automotivo em
Fortaleza/CE. Objetivo único: gerar conversões no WhatsApp para os serviços de
**Vitrificação** e **Lavagem Premium**.

## Stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (tokens customizados em `tailwind.config.js`)
- **shadcn/ui** (Button, Card, Badge, Separator)
- **Framer Motion** (animações de entrada, contadores, FAB)
- **Lucide React** (ícones)
- Fontes: **Barlow Condensed** (display) + **Inter** (body) via Google Fonts

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # pré-visualiza o build
```

## Paleta

Paleta baseada na **logo (vermelho + branco)** sobre fundo escuro. O verde
(`brand-neon`) é reservado **exclusivamente** aos CTAs do WhatsApp, por ser a
cor da própria marca WhatsApp e maximizar a conversão.

| Token         | Cor       | Uso                                  |
| ------------- | --------- | ------------------------------------ |
| `brand-bg`    | `#0A0A0A` | Fundo principal                      |
| `brand-surface` | `#111111` | Cards / seções alternadas          |
| `brand-red`   | `#E11414` | Cor primária (headlines, ícones)     |
| `brand-neon`  | `#22C55E` | CTAs do WhatsApp                     |
| `brand-white` | `#F5F5F5` | Texto primário                       |
| `brand-muted` | `#888888` | Texto secundário                     |

## Estrutura

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── HeroSection.tsx
│   ├── SocialProofBar.tsx
│   ├── ServicesSection.tsx
│   ├── DifferentialsSection.tsx
│   ├── CtaSection.tsx
│   ├── LocationSection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppFAB.tsx
│   └── ui/            # componentes shadcn (button, card, badge, separator)
└── lib/
    ├── utils.ts       # cn() + helper de link do WhatsApp
    └── motion.ts      # variantes Framer Motion compartilhadas
```

## Notas

- O WhatsApp usado em todos os CTAs: **+55 85 98801-3579**.
- O mapa usa o embed público do Google Maps (sem necessidade de API key).
- Animações respeitam `prefers-reduced-motion`.

Desenvolvido por **Lure Digital**.
