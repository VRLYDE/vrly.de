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

```
monorepo/
├── packages/
│   ├── platform/         # Core VRLY platform (Cloudflare Workers)
│   ├── website/          # Marketing website (Astro + Cloudflare Pages)
│   ├── clients/          # Client-specific implementations
│   ├── integrations/     # Third-party service integrations
│   ├── shared/           # Shared libraries and design system
│   └── internal/         # Internal tools and admin dashboard
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
bun dev:platform    # Platform API
bun dev:website     # Marketing website
bun dev:admin       # Admin dashboard

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

### `@vrly/integrations`

Pre-built integrations with third-party services:

- Practice Management Systems (PVS)
- Make.com workflow automation
- Calendar and email services
- CRM systems

### `@vrly/clients`

Client-specific implementations and customizations, organized by vertical (e.g., psychotherapists).

### `@vrly/internal`

Internal tools for business operations, including admin dashboard, billing automation, and analytics.

## 🛠️ Technology Stack

- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Backend**: [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless edge computing
- **Frontend**: [Astro](https://astro.build/) - Modern web framework
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) - Serverless SQL
- **Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/) - Object storage
- **AI**: [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) - Edge AI inference
- **Automation**: [Make.com](https://make.com) - Low-code workflow automation

## 🔧 Configuration

### Environment Variables

Create a `.dev.vars` file in the root directory for local development:

```bash
# Cloudflare
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token

# Database
D1_DATABASE_ID=your_database_id

# R2 Storage
R2_BUCKET_NAME=vrly-assets

# Development
NODE_ENV=development
```

### Wrangler Configuration

Each package has its own `wrangler.jsonc` for Cloudflare deployment. See individual package READMEs for specific configuration.

## 📝 Scripts

### Development Scripts

```bash
# Create a new client workspace
bun run client:new <client-name>

# Run automation workflows
bun run automation:run <workflow-name>

# Generate TypeScript types
bun run codegen
```

### Deployment Scripts

```bash
# Deploy all changes
bun run deploy

# Deploy specific package
bun run deploy:platform
bun run deploy:website

# Preview deployment
bun run preview
```

## 🧪 Testing

We use Bun's built-in test runner:

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run tests for specific package
bun test packages/platform

# Coverage report
bun test --coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Create a feature branch from `main`
2. Make your changes following our coding standards
3. Write/update tests as needed
4. Ensure all tests pass and type checking succeeds
5. Submit a pull request with a clear description

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add patient inquiry automation
fix: correct DSGVO compliance in email handler
docs: update API documentation
chore: upgrade dependencies
```

## 📊 Project Status

This project is in active development. Current focus areas:

- [x] Monorepo structure setup
- [x] Core platform architecture
- [ ] Praxis-Anfragen-Autopilot MVP
- [ ] PVS integrations
- [ ] Admin dashboard
- [ ] Production deployment

## 🔐 Security

Security is paramount in healthcare technology:

- All data is encrypted in transit and at rest
- DSGVO and §203 StGB compliant by design
- Regular security audits and penetration testing
- Automated vulnerability scanning in CI/CD

For security concerns, please email security@vrly.de

## 📄 License

This project is proprietary software. All rights reserved by VRLY.

---

<div align="center">

**Built with ❤️ by [Florentin](https://github.com/florentin) and the VRLY team**

_VRLY automatisiert Effizienz mit Künstlicher Intelligenz_

</div>
