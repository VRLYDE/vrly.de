# Cursor Rules Setup

## What Are Cursor Rules?

Cursor Rules allow us to provide system-level guidance to the Cursor AI Agent and Cmd-K AI. They encode context, preferences, and workflows as persistent instructions that are automatically included in AI prompts.

Rules serve as a way to maintain consistent standards, encode domain-specific knowledge, and automate project-specific workflows. They apply to both Chat and Cmd-K interactions.

## Rules Organization

In this project, rules are stored in the `.cursor/rules` directory and are version-controlled. Each rule is written in MDC format (`.mdc`), a lightweight format that supports metadata and content in a single file.

Rules are organized by category:

- **General rules**: Applied project-wide
- **Technology-specific rules**: For frameworks, languages, and tools
- **Verification rules**: For quality assurance

## Project Rules

### General Standards

- **`general.mdc`**: Core coding standards for this full-stack project using TypeScript, Node.js, Next.js, React, Shadcn UI, Radix UI, Tailwind CSS, DrizzleORM, and Cloudflare.

### Framework Rules

- **`astro/astro.mdc`**: Guidelines for Astro component structure, styling, and performance.
- **`astro/astro-config.mdc`**: Configuration standards for Astro with Cloudflare compatibility.

### Language & Format Rules

- **`typescript.mdc`**: TypeScript coding standards, type system usage, naming conventions, and function design.
- **`javascript.mdc`**: JavaScript best practices complementing ESLint and Biome formatter.
- **`json.mdc`**: Formatting and structure rules for JSON and JSONC files.
- **`yaml.mdc`**: YAML file structure, indentation, and quoting standards.
- **`markdown.mdc`**: Markdown formatting guidelines for documentation clarity and structure.
- **`sql.mdc`**: SQL standards for Drizzle migrations, focusing on schema changes and performance.

### Cloudflare Rules

- **`cloudflare/cloudflare-workers.mdc`**: Comprehensive guidance for Cloudflare Workers development, including API patterns, WebSocket handling, and Durable Objects.
- **`cloudflare/wrangler-config.mdc`**: Configuration standards for Wrangler, including compatibility settings and bindings.

### Quality Assurance

- **`verification-steps.mdc`**: Checklist for AI verification before finalizing code suggestions, covering alignment, imports, UI/UX, and security.

## Usage

Cursor Rules are automatically applied when:

1. Always-apply rules are included in every AI context
2. Files matching glob patterns trigger auto-attached rules
3. The AI agent determines a rule is relevant
4. A rule is explicitly mentioned using @ruleName

## Creating New Rules

To create a new rule, use the Cmd + Shift + P > "New Cursor Rule" command or edit the Rules section in Cursor Settings.

Rules should be:

- Focused on a specific aspect of development
- Actionable with concrete guidelines
- Properly scoped with appropriate glob patterns
- Concise (under 500 lines is recommended)

## Further Documentation

For more information on Cursor Rules, visit the [official documentation](https://docs.cursor.com/context/rules).
