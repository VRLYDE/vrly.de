# Versioning Strategy

## 1. Principles for VRLY

VRLY’s development is led by a single full stack developer, emphasizing rapid iteration, automation, and clarity for both internal and external stakeholders. Versioning must:

- Provide immediate context about release timing and stability.
- Support both monorepo-wide and package-specific releases.
- Integrate cleanly with GitHub releases, tags, and changelogs.
- Enable automation and transparency in the development and deployment process.
- Be simple, predictable, and robust in solo and future small-team scenarios.

## 2. Year-Based (Calendar) Versioning: The VRLY Standard

### 2.1. Rationale

Year-based versioning (CalVer) encodes the production year and release sequence directly into version numbers. This offers several benefits for VRLY:

- **Immediate Temporal Context:** Stakeholders and users can instantly infer the age and update cadence of a release.
- **Eliminates Arbitrary Majors:** Avoids unnecessary major version bumps; breaking changes are contextualized by the year.
- **Encourages Regular, Iterative Updates:** Supports a sustainable, predictable cadence that matches VRLY’s 2-week cycle and 1-week cooldown model.
- **Industry Adoption:** Used by major projects (e.g., Ubuntu, NixOS, Windows, Event Store) for clarity and regularity.

### 2.2. Format

- **Monorepo/Project Version:** `YY.M[.patch]` or `YYYY.M[.patch]`
  - Example: `25.5.0` or `2025.5.0` for the 5th release in 2025.
- **Named Release:** Human-friendly codename and year, e.g., “VRLY Convergence 25.5”.
- **Patch Number:** Incremented for hotfixes or minor updates within the same cycle.

### 2.3. Alignment with Development Cycle

- Each new planned release (typically every 2-week cycle) increments the minor version.
- Cooldown week hotfixes increment the patch version.
- Major annual changes (e.g., architecture overhaul) may increment the year, resetting minor/patch.

## 3. Semantic Versioning for Individual Packages

While the monorepo follows CalVer, individual packages within the repo may require more granular semantic versioning (SemVer) for external consumers or dependency management.

- **Format:** `MAJOR.MINOR.PATCH` (e.g., `1.2.3`).
- **Trigger:** Bumped when a package’s public API changes, following SemVer rules.
- **Tagging:** Each package release is tagged as `{package-name}@{version}` (e.g., `core-utils@1.2.3`).

This hybrid model allows VRLY to balance overall product cadence with precise dependency management for internal/external packages.

## 4. GitHub Releases and Tagging Strategy

### 4.1. Monorepo Releases

- **Tag:** `vYY.M[.patch]` (e.g., `v25.5.0`)
- **Release Name:** “VRLY Convergence 25.5”
- **Release Notes:** Auto-generated from PRs and commit messages, following Conventional Commits for clarity.
- **Scope:** Represents a coordinated, production-ready state of the entire platform.

### 4.2. Individual Package Releases

- **Tag:** `{package-name}@{version}` (e.g., `api-client@25.5.0` or `api-client@1.2.3`)
- **Release Notes:** Package-specific, generated from changes affecting that package.
- **Scope:** Enables independent package deployment and version tracking, critical for future modularization.

### 4.3. Automation

- **Tools:** Use release automation tools compatible with monorepos (e.g., Nx Release, Changesets, Lerna, monopublish, semrel-release) to:
  - Detect affected packages.
  - Generate and push tags/releases for both the monorepo and packages.
  - Create changelogs based on commit history and PRs.
- **GitHub Actions:** Automate release workflows, ensuring releases and tags are created as part of the CI/CD pipeline.

## 5. Implementation Best Practices

### 5.1. Coordinated Release Flow

- **Trunk-Based Development:** All releases are cut from the main branch, reflecting the stable, production-ready state.
- **Release Planning:** Each 2-week cycle is a potential release candidate. End-of-cycle review determines if a new release is warranted.
- **Cooldown Weeks:** Use patch releases for hotfixes and technical debt work.

### 5.2. Tagging Conventions

- **Monorepo-wide:** `v25.5.0` (or `v2025.5.0`)
- **Package-specific:** `package-name@25.5.0` or `package-name@1.2.3`
- **Automated Changelogs:** Use Conventional Commits and automation to generate human-readable release notes for each release/tag.

### 5.3. Release Notes and Documentation

- **Monorepo Release Notes:** Summarize all significant changes, improvements, and fixes since the last release.
- **Package Release Notes:** Detail only changes relevant to the specific package, including dependency bumps if affected by upstream changes.

## 6. Example Release Mapping

| Release Name | Monorepo Tag | Internal Version | Release Date |
| - | - | - | |
| VRLY Convergence 25.5 | v25.5.0 | 25.5.0 | 2025-06-29 |
| VRLY Armistice 26/26.0 | v26.0.0 | 26.0.0 | 2026-01-15 |
| core-utils package v1.2.3 | core-utils@1.2.3 | 1.2.3 | 2025-07-10 |

## 7. Pros and Cons: CalVer vs. SemVer in VRLY Context

| Aspect | CalVer (Year-Based) | SemVer (Per Package) |
| | | - |
| Clarity | Immediate context, easy to correlate with cycles | Less direct, but precise for API changes |
| Predictability | Matches VRLY’s sprint/cycle model | Good for library consumers |
| Automation | Well supported with modern tools | Standard in JS/TS ecosystem |
| Breaking Changes | Encoded in year/minor bump | Encoded in major version |
| External Dependencies | May require SemVer for package publishing | N/A |

## 8. Integration with VRLY Development Cycle & DevOps

- **Status-driven Workflow:** Each release is tied to the “Ready for Deployment” and “In Production” statuses in the DevOps workflow, ensuring traceability and auditability.
- **T-Shirt Estimation and Rollovers:** Planned releases are aligned with realistic capacity planning, and uncompleted work is rolled into the next cycle.
- **Automated Status Transitions:** Release automation triggers status updates in project management tools, maintaining a single source of truth for delivery state.

## 9. Recommendations for Future Scaling

- **If VRLY grows to a multi-developer team:** The same strategy can be extended, with more granular package versioning and coordinated monorepo releases.
- **Public/Private Packages:** For public npm packages, prefer SemVer for compatibility; for internal packages, CalVer can be used if it aligns better with organizational cadence.
- **Tooling Evolution:** Monitor and adopt best-in-class tools for monorepo management as the ecosystem evolves.
