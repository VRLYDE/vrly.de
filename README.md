# VRLY - AI-Powered Workflow Automation for Psychotherapists

<div align="center">

[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun&logoColor=white)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Astro](https://img.shields.io/badge/Astro-4.0+-purple?logo=astro&logoColor=white)](https://astro.build/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

**Empowering psychotherapists with intelligent automation, so they can focus on what matters most: their patients.**

[Website](https://vrly.de) • [Documentation](docs/) • [Contact](mailto:info@vrly.de)

</div>

---

## 🎯 Overview

VRLY is a specialized technology partner exclusively for psychotherapists in Hannover, Germany. We combine expertise in AI, workflow automation, and project management with deep understanding of practice workflows and strict DSGVO compliance to give therapists valuable time back and make their practices future-proof.

### Key Features

- 🤖 **AI-Powered Automation** - Intelligent workflow automation for administrative tasks
- 🔒 **DSGVO & §203 StGB Compliant** - Built with German data protection laws at the core
- ⚡ **Edge-First Architecture** - Powered by Cloudflare Workers for blazing-fast performance
- 🏥 **Practice Management Integration** - Compatible with leading PVS systems (Elefant, Psyprax, Epikur)
- 📊 **Multi-Tenant Platform** - Secure isolation and customization for each practice

## 🏗️ Monorepo Structure

This repository uses [Bun workspaces](https://bun.sh/docs/install/workspaces) to manage multiple packages:

```text
monorepo/
├── packages/
│   ├── platform/         # Core VRLY platform (Cloudflare Workers)
│   ├── website/          # Marketing website (Astro + Cloudflare Workers)
│   ├── clients/          # Client-specific implementations
│   ├── integrations/     # Third-party service integrations
│   ├── shared/           # Shared libraries and design system
│   └── internal/         # Internal tools and utilities
│       └── email-signature-builder/  # Email signature generator
├── scripts/              # Automation and utility scripts
├── docs/                 # Documentation
└── .github/              # GitHub Actions workflows
```

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) >= 1.0
- [Node.js](https://nodejs.org/) >= 18 (for some tooling compatibility)
- [Cloudflare Account](https://dash.cloudflare.com/sign-up) (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/VRLYDE/monorepo.git
cd monorepo

# Install dependencies
bun install

# Copy environment variables
cp .dev.vars.example .dev.vars
```

### Development

```bash
# Start all development servers
bun dev

# Start specific packages
bun dev:platform           # Platform API
bun dev:website            # Marketing website
bun dev:email-signature    # Email signature builder

# Run tests
bun test

# Type checking
bun type-check

# Linting
bun lint
```

## 📦 Package Overview

### `@vrly/platform`

Core platform powering all VRLY services. Built on Cloudflare Workers for Platforms, providing multi-tenant infrastructure, AI capabilities, and workflow automation.

### `@vrly/website`

Public-facing marketing website built with Astro. Showcases services, provides documentation, and handles lead generation.

### `@vrly/shared`

Shared utilities, TypeScript types, and the VRLY Design System. Ensures consistency across all applications.

### `@vrly/internal`

Internal tools for business operations:

- **Email Signature Builder** - Tool for generating standardized email signatures
- Billing automation
- Analytics tools

### `@vrly/integrations`

Pre-built integrations with third-party services, including practice management systems, workflow automation, and calendar/email services.

### `@vrly/clients`

Client-specific implementations and customizations, organized by vertical (e.g., psychotherapists).

## 🛠️ Technology Stack

- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Backend**: [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless edge computing
- **Frontend**: [Astro](https://astro.build/) - Modern web framework
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) - Serverless SQL
- **Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/) - Object storage
- **AI**: [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) - Edge AI inference

## 📝 Scripts

```bash
# Development
bun dev                  # Start all development servers
bun dev:platform         # Start platform API server
bun dev:website          # Start marketing website server
bun dev:email-signature  # Start email signature builder

# Build & Deploy
bun build                # Build all packages
bun deploy               # Deploy all packages
bun preview              # Preview deployment

# Utilities
bun client:new           # Create a new client workspace
bun automation:run       # Run automation workflows
bun codegen              # Generate TypeScript types
bun clean                # Clean build artifacts and node_modules
```

## 🧪 Testing & Quality

```bash
bun test                 # Run all tests
bun lint                 # Run linting
bun type-check           # Run type checking
```

## 🔐 Security

Security is paramount in healthcare technology:

- All data is encrypted in transit and at rest
- DSGVO and §203 StGB compliant by design
- Regular security audits and penetration testing

For security concerns, please email security@vrly.de

## 📄 License

This project is proprietary software. All rights reserved by VRLY.

---

<div align="center">

**Built with ❤️ by [Florentin](https://github.com/florentin) and the VRLY team**

_VRLY automatisiert Effizienz mit Künstlicher Intelligenz_

</div>
