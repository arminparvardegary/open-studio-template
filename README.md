# Studio Template

An open-source **Next.js** template for a studio or portfolio website, with a built-in **dashboard**. Clone it, swap the placeholder text and logo, change the colours in one file, and ship.

- Multi-page site: home, work (+ project pages), insights (+ article pages), about, services, contact, legal pages and a 404
- Dashboard at `/dashboard`: overview, projects table, messages, settings, plus a `/login` screen
- Scroll effects from the original design: warped project cards (WebGL, with a plain-image fallback), animated waves, word-by-word intro, dark/light sections, testimonial slider, cookie notice
- Next.js (App Router) + TypeScript + plain CSS. No UI library, no Tailwind, no database
- Every piece of text is lorem ipsum. Every logo is a neutral placeholder.
- Works on phones: mobile menu, stacked layouts, mobile dashboard sidebar

## Quick start

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Useful pages:

| URL | What it is |
| --- | --- |
| `/` | Home (all sections) |
| `/work`, `/work/lorem-ipsum` | Project list and a project page |
| `/insights`, `/insights/nemo-enim-ipsam` | Article list and an article |
| `/about`, `/services`, `/contact` | Inner pages |
| `/legal/privacy`, `/legal/cookies`, `/legal/terms` | Legal pages |
| `/login` | Demo sign-in (opens the dashboard) |
| `/dashboard` | Dashboard overview |
| `/dashboard/projects` | Searchable, sortable table |
| `/dashboard/messages` | Inbox |
| `/dashboard/settings` | Forms and a live colour preview |

Build for production:

```bash
npm run build
npm start
```

## Change the colours

Everything reads the variables at the top of [`src/styles/tokens.css`](src/styles/tokens.css):

```css
--color-ink: #0a0b1f;           /* dark background */
--color-paper: #f2efff;         /* light background */
--color-accent: #5a3cf0;        /* main brand colour */
--color-accent-bright: #8f7dff; /* glows and highlights on dark */
--color-accent-soft: #b3a8ff;   /* accent text on dark */
--color-on-accent: #ffffff;     /* text placed on the accent colour */
```

Change those and the whole site and dashboard follow. There is also a gradient for the big hero word (`--wordmark-1…4`) and status colours for the dashboard.

Keep text readable: `--color-on-accent` needs enough contrast on `--color-accent`, and `--color-accent-soft` needs enough contrast on `--color-ink`. A contrast checker such as WebAIM's takes ten seconds.

The dashboard has a **Settings → Colour palette** card where you can try colours live in the browser, then copy the values into `tokens.css`.

## Change the text

All text lives in [`src/content`](src/content):

| File | Contains |
| --- | --- |
| `site.ts` | Site name, hero word, tagline, email, location, time zone, navigation, footer links |
| `work.ts` | Projects (title, image, client, summary) |
| `insights.ts` | Articles |
| `people.ts` | Experience, clients, testimonials, services |
| `legal.ts` | Privacy, cookies and terms pages |
| `lorem.ts` | Shared paragraphs |
| `dashboard.ts` | Fake data for the dashboard |

A few headings and button labels are written directly in the page or component files (search for `Lorem` to find them).

## Change the logo

The logo is one component: [`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx). Replace its contents with your own `<svg>` or `<Image>`. The header, footer, login page and dashboard sidebar all use it.

Logos of past employers and clients are plain placeholder tiles: `LogoTile` in the same file, and the `clients` list in `src/content/people.ts`.

The browser tab icon is [`src/app/icon.svg`](src/app/icon.svg).

## Change the images

Project cards, article previews and the small footer covers are placeholder photos (soft 3D renders) in [`public/images/placeholders`](public/images/placeholders). Put your own images in `public/images`, then point to them in `src/content/work.ts` and `src/content/insights.ts`. Project card images should be 16:9 (the home page warp effect draws them at 1396×786); article previews are 4:5.

## Fonts

Fonts are bundled in `src/fonts` and loaded in `src/app/layout.tsx`:

- Hanken Grotesk (text), Geist Mono (small labels), UnifrakturMaguntia (the big hero word and a few client names)

All three are licensed under the SIL Open Font License 1.1. To change a font, replace the file and update `layout.tsx`, or switch to `next/font/google`.

## Folder map

```
src/
  app/
    layout.tsx              root layout, fonts, default metadata
    icon.svg                favicon
    (site)/                 public site (shares header + footer)
      page.tsx              home
      work/ insights/ about/ services/ contact/ legal/[slug]/
      not-found.tsx
    login/                  demo sign-in
    dashboard/              dashboard (own layout + sidebar)
      page.tsx projects/ messages/ settings/
  components/
    ui/                     Logo, icons, RollLink, Section
    site/                   Header, Footer, Hero, WorkSection, ProjectCards, Waves, …
    dashboard/              DashShell, AreaChart, ProjectsTable, Inbox, SettingsForms
  content/                  all text and data (see above)
  styles/
    tokens.css              colours, fonts, spacing: edit this first
    base.css                reset, buttons, shared helpers
    site.css                header, hero, sections, footer, cookie notice
    pages.css               inner pages and form controls
    dashboard.css           dashboard
  fonts/                    bundled font files
public/images/placeholders  placeholder images
```

## How the scroll theme works

Each section on the site is wrapped in `<Section theme="dark" | "light">`. While you scroll, `ThemeController` switches the page between dark and light depending on which section is in the middle of the screen. If you add a section, wrap it in `Section` and pick a theme.

## What is not included

This is a front-end template, so a few things are demos you will want to connect:

- The contact form, dashboard forms and reply box do not send anything
- `/login` does not check a password. Add real authentication (for example Auth.js) and protect `/dashboard`
- Dashboard data is static. Replace `src/content/dashboard.ts` with your API or database
- The cookie notice stores a choice in `localStorage` but does not load or block any analytics

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

## License

[MIT](LICENSE). The bundled fonts keep their own open licenses (see above).
