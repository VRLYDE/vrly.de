# VRLY

**KI-gestützte Workflow-Automatisierung für Psychotherapeut:Innen in Hannover**

![VRLY Logo](src/assets/logo.svg)

## Über VRLY

VRLY (ausgesprochen "vertically") ist ein spezialisierter Anbieter von KI-gestützten Workflow-Automatisierungsdiensten und DSGVO-konformen Digitalisierungslösungen exklusiv für Psychotherapeut:Innen in Hannover. Unsere Mission ist es, Psychotherapeut:Innen durch intelligente Technologie und optimierte Workflows administrative Lasten abzunehmen, damit sie mehr Zeit und Energie für ihre Kernaufgabe haben – die therapeutische Arbeit mit ihren Klienten.

### Kernwerte

- **Expertise & Innovation:** Tiefgreifendes technisches Know-how in KI, Automatisierung und Projektmanagement, kombiniert mit Branchenverständnis und kontinuierlicher Suche nach besseren Lösungen.
- **Nutzenfokus & Effizienz:** Lieferung messbaren Mehrwerts durch schlanke, effektive Lösungen, die echte Probleme im Praxisalltag lösen und Zeitersparnis generieren.
- **Vertrauen & Integrität:** Transparente, zuverlässige und partnerschaftliche Zusammenarbeit, bei der Compliance (insbesondere DSGVO und §203 StGB) an erster Stelle steht.

## Dienstleistungen

- **Praxis-Anfragen-Autopilot:** Automatisierte Bearbeitung von Patientenanfragen
- Weitere DSGVO-konforme Automatisierungslösungen für Psychotherapeut:Innen

## Technologie-Stack

Diese Website und unsere Services basieren auf folgenden Technologien:

- **Frontend:** Astro 5.x, Tailwind CSS 4.x
- **Backend:** Cloudflare Workers, Cloudflare D1, KV, R2
- **KI & Automatisierung:** Cloudflare AI, eigene KI-Modelle
- **Integrationen:**
  - Astro SEO ([@astrolib/seo](https://github.com/onwidget/astrolib/tree/main/packages/seo))
  - Astro Sitemap
  - Web Manifest
  - Fuse.js für Suche

## Projektstruktur

```
/
├── public/                  # Statische Assets
├── src/
│   ├── assets/              # Bilder und andere Assets
│   │   └── logo.svg         # VRLY Logo
│   ├── components/          # Wiederverwendbare UI-Komponenten
│   │   ├── core/            # Basis-Komponenten (Text, Button, etc.)
│   │   └── sections/        # Seiten-Abschnitte und Module
│   ├── content/             # Content Collections (Blog, Services, etc.)
│   ├── layouts/             # Layout-Komponenten
│   ├── pages/               # Seitenrouten
│   └── styles/              # CSS und Styling
└── package.json             # Projektabhängigkeiten
```

## Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) (LTS-Version)
- [Bun](https://bun.sh/) (für schnellere Entwicklung)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (für Cloudflare Workers)

### Installation

```bash
# Repository klonen
git clone https://github.com/VRLYDE/vrly.de.git
cd vrly.de

# Abhängigkeiten installieren
bun install
```

### Befehle

| Befehl               | Beschreibung                                      |
| :------------------- | :------------------------------------------------ |
| `bun run dev`        | Startet lokalen Entwicklungsserver auf Port 1312  |
| `bun run build`      | Erstellt Produktionsversion in `./dist/`          |
| `bun run preview`    | Lokale Vorschau der Produktionsversion            |
| `bun run deploy`     | Deployment auf Cloudflare Workers                 |
| `bun run cf-typegen` | Generiert TypeScript-Typen für Cloudflare Workers |
| `bun run format`     | Formatiert Code mit Prettier                      |
| `bun run check`      | Führt TypeScript-Überprüfung durch                |
| `bun run astro ...`  | Führt Astro CLI-Befehle aus                       |

## Deployment

Die Website wird automatisch auf Cloudflare Pages deployt. Für manuelle Deployments:

```bash
bun run deploy
```
