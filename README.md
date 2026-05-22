# Professional Portfolio

Portafolio profesional con diseño brutalista moderno, construido con **React + TypeScript + Vite**.

## Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Tipografías:** Space Grotesk + Space Mono (Google Fonts)
- **Diseño:** Brutalismo moderno — bordes gruesos, sombras offset, paleta monocromática con acentos

## Estructura

```
src/
├── components/
│   ├── Navbar.tsx       # Navegación fija con scroll detection
│   ├── Hero.tsx         # Sección principal con code card animado
│   ├── Marquee.tsx      # Ticker de tecnologías
│   ├── Projects.tsx     # Grid de proyectos con hover effect
│   ├── Skills.tsx       # Stack técnico por categorías
│   ├── Experience.tsx   # Historial profesional
│   ├── Contact.tsx      # Formulario de contacto
│   └── Footer.tsx
├── hooks/
│   └── useScrollAnimations.ts  # Scroll progress, fade-in, cursor
├── data.ts              # Contenido editable del portafolio
├── types.ts             # Interfaces TypeScript
├── App.tsx
├── App.css              # Estilos por sección
└── index.css            # Design system brutalista
```

## Personalización

Edita `src/data.ts` para cambiar:
- Proyectos (`projects`)
- Skills (`skills`)
- Experiencia (`experiences`)
- Links de navegación (`navItems`)

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
