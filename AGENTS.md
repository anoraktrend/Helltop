# Agent Guidelines for Helltop

## Build & Test Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run CLI commands
npm run astro [command] # https://astro.build/commands/

# Generate Cloudflare Workers types
npm run generate-types
```

The project is an Astro v6 application with Cloudflare Workers adapter, using D1 databases. Tests are not configured yet; add testing framework when needed (Vitest/Jest recommended for Astro projects).

## TypeScript & Types

- **Config**: Extends `astro/tsconfigs/strict` with JSX preserve
- **Module system**: ES modules (`"type": "module"` in package.json)
- **Cloudflare bindings**: Import env from `cloudflare:workers` (virtual module)
- **Database**: Uses Drizzle ORM with D1 adapter
- Always use explicit types for environment variables and Cloudflare bindings
- Use `as any` only with clear ts-ignore comments for virtual modules

## Code Style Guidelines

### Imports

Order by category (each separated by blank line):
1. Node.js built-ins (`path`, `fs`)
2. Astro/Vite core dependencies
3. Third-party libraries
4. Local imports (relative paths)

Avoid wildcard imports. Group related imports together alphabetically within each group.

### Naming Conventions

- **Components**: PascalCase for `.astro` files and exports
- **Files/folders**: kebab-case (`src/pages/api/comments.json.ts`)
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/interfaces**: PascalCase
- **Props**: PascalCase (Astro component props)

### Error Handling

```typescript
// Prefer structured error handling over try-catch in API routes
try {
  const data = await fetch(url).then(r => r.json());
} catch (error) {
  console.error('API call failed', error);
  return text(500, 'Internal Server Error');
}

// For DB operations, throw meaningful errors
if (!d1) {
  if (import.meta.env.DEV) {
    console.warn('D1 database binding not found');
    // Return stub for dev
  } else {
    throw new Error('D1 database binding not found');
  }
}
```

### Type Safety

- Use Zod schemas for content collections (`src/content.config.ts`)
- Import types from `@cloudflare/workers-types` for Workers environment
- Prefer union/intersection types over `any`
- Use `satisfies` operator for configuration objects

### API Routes

API routes in `src/pages/api/` should:
1. Return valid JSON responses (not text/plain unless specifically for SSR)
2. Handle errors gracefully with appropriate status codes
3. Use proper route parameters (`[id].json.ts` pattern)
4. Validate input from database queries before returning

### Content Collections

- Define schemas using Zod in `content.config.ts`
- Use glob loaders for content files (MDX/JSON)
- Support optional fields with `.optional()` and defaults with `.default()`
- Document required vs optional fields clearly

### Markdown

Configured via `.markdownlint.json`:
- All warnings enabled by default (`"default": true`)
- Disabled: MD003, MD013, MD022, MD025, MD026, MD031, MD032, MD047
- Use consistent heading depth and link formatting
