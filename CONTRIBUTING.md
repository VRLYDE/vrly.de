# Contributing to VRLY

We appreciate your interest in contributing to VRLY! This guide will help you get started.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** and clone your fork
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Install dependencies**:
   ```bash
   bun install
   ```
4. **Make your changes** following our coding standards

## Development Guidelines

### Code Style

- We use TypeScript for all code
- Follow the existing code style (enforced by ESLint and Prettier)
- Write clear, self-documenting code with meaningful variable names
- Add comments for complex logic

### Testing

- Write tests for new features and bug fixes
- Ensure all tests pass: `bun test`
- Aim for good test coverage

### Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add patient inquiry automation
fix: correct DSGVO compliance in email handler
docs: update API documentation
chore: upgrade dependencies
test: add tests for workflow engine
refactor: simplify authentication logic
```

### Pull Requests

1. **Update your branch** with the latest `main`:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** with:

   - Clear title following commit conventions
   - Description of what changed and why
   - Link to any related issues
   - Screenshots/demos if applicable

4. **Address review feedback** promptly

## Development Workflow

### Running Tests

```bash
# All tests
bun test

# Specific package
bun test packages/platform

# Watch mode
bun test --watch
```

### Type Checking

```bash
bun run type-check
```

### Linting

```bash
# Check for issues
bun run lint

# Auto-fix issues
bun run lint:fix
```

## Package-Specific Guidelines

### Platform (`packages/platform`)

- Follow Cloudflare Workers best practices
- Ensure DSGVO compliance in all data handling
- Consider edge runtime limitations

### Website (`packages/website`)

- Follow Astro best practices
- Optimize for performance and SEO
- Ensure accessibility (WCAG 2.1 AA)

### Shared (`packages/shared`)

- Components must be framework-agnostic where possible
- Include TypeScript types for all exports
- Document component APIs

## Security

- Never commit sensitive data (API keys, passwords, etc.)
- Report security vulnerabilities to security@vrly.de
- Follow OWASP guidelines for web security

## Questions?

If you have questions, please:

1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Contact the maintainers at dev@vrly.de

Thank you for contributing to VRLY! 🚀
