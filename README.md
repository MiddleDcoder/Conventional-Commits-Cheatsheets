# Conventional Commits Cheatsheet

A quick reference for writing commit messages using [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

## Syntax

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Key Rules

- **Type, colon, space are required** — e.g. `feat: `, `fix: `
- **Casing** — any casing works, but stay consistent. Exception: `BREAKING CHANGE` in a footer must always be uppercase
- **Breaking changes** — mark with `!` before the colon (`feat!:`), a `BREAKING CHANGE:` footer, or both

## Commit Types

### Core (drive SemVer)

| Type | Meaning | SemVer |
|------|---------|--------|
| `feat` | A new feature | MINOR |
| `fix` | A bug fix | PATCH |

A commit of **any** type that includes a breaking change bumps MAJOR.

### Additional (common convention, no SemVer effect on their own)

| Type | Meaning |
|------|---------|
| `build` | Changes to the build system or external dependencies |
| `chore` | Other changes that don't modify src or test files (tooling, deps, config) |
| `ci` | Changes to CI configuration files and scripts |
| `docs` | Documentation-only changes |
| `perf` | A code change that improves performance |
| `refactor` | A code change that's neither a fix nor a feature |
| `revert` | Reverts a previous commit |
| `style` | Formatting only (whitespace, semicolons, etc.) — no code meaning change |
| `test` | Adding or correcting tests |

These aren't mandated by the spec — teams can define their own.

## Breaking Changes (MAJOR)

**Option 1 — `!` shorthand**
```
feat(api)!: drop support for Node 18
```

**Option 2 — footer**
```
fix: prevent unauthorized access to admin panel

BREAKING CHANGE: the isAdmin flag is now strictly enforced on all v2 endpoints
```

## Examples

**Minimal**
```
docs: fix typo in README installation steps
```

**With scope**
```
feat(auth): add OAuth2 provider support
```

**Full — body + footer**
```
fix(parser): resolve race condition on rapid sequential inputs

Introduce a unique request ID to tracking payloads. Dismiss incoming
responses if they do not match the latest request ID.

Reviewed-by: @dev-lead
Refs: #402
```

## Tips

- One type per commit — if a change fits two types, split it into separate commits
- Footer tokens use `-` instead of spaces (`Reviewed-by`), except `BREAKING CHANGE`
- A scope is a noun in parentheses describing the affected area, e.g. `feat(parser):`

---
Source: [conventionalcommits.org/en/v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
