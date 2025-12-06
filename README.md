# @rubriclab/ui

A small, typed React UI kit built on Radix UI and Tailwind CSS. Tree‑shakable, accessible, and designed to work with any React application.

## Installation

```bash
# with bun
bun add @rubriclab/ui

# with npm
npm i @rubriclab/ui

# with pnpm
pnpm add @rubriclab/ui
```

Peer requirements:
- react ^19.0.0
- react-dom ^19.0.0

Recommended: Tailwind CSS for styling (`tailwindcss` and `postcss`).

## Quickstart

1) Ensure Tailwind CSS is set up in your app (see [Tailwind docs](https://tailwindcss.com/docs/installation/using-postcss)). Components render with utility `className`s and look best with your Tailwind theme.

2) Import components directly from the package:

```tsx
import { Button, Container, Form, Input } from '@rubriclab/ui'

export const Example = () => {
	return (
		<Container>
			<Form>
          <Input placeholder="Title" />
          <Button type="submit" label="Save" />
      </Form>
		</Container>
	)
}
```

Notes:
- `Icon` uses names from `lucide-react` (e.g. "Check", "AlertCircle"). `size` is in Tailwind units (1 = 4px).
- All components are typed and tree‑shakable.

## Available components

- [Alert](./src/components/alert.tsx)
- [AlertDialog](./src/components/alert-dialog.tsx)
- [Button](./src/components/button.tsx)
- [Chart](./src/components/chart.tsx)
- [Checkbox](./src/components/checkbox.tsx)
- [Code](./src/components/code.tsx)
- [Command](./src/components/command.tsx)
- [Container](./src/components/container.tsx)
- [Dialog](./src/components/dialog.tsx)
- [Divider](./src/components/divider.tsx)
- [Drawer](./src/components/drawer.tsx)
- [DropdownMenu](./src/components/dropdown-menu.tsx)
- [Empty](./src/components/empty.tsx)
- [ErrorState](./src/components/error-state.tsx)
- [Field](./src/components/field.tsx)
- [Form](./src/components/form.tsx)
- [Grid](./src/components/grid.tsx)
- [Heading](./src/components/heading.tsx)
- [Icon](./src/components/icon.tsx)
- [Image](./src/components/image.tsx)
- [Input](./src/components/input.tsx)
- [Label](./src/components/label.tsx)
- [Link](./src/components/link.tsx)
- [List](./src/components/list.tsx)
- [Loader](./src/components/loader.tsx)
- [Pill](./src/components/pill.tsx)
- [RequiredIndicator](./src/components/required-indicator.tsx)
- [Select](./src/components/select.tsx)
- [Table](./src/components/table.tsx)
- [Text](./src/components/text.tsx)
- [Textarea](./src/components/textarea.tsx)
- [Toggle](./src/components/toggle.tsx)
- [Tooltip](./src/components/tooltip.tsx)

Browse the `src/components` directory for props and more examples.

## Usage

This library works with any React setup (Next.js, Vite, Create React App, Remix, etc.). Most components are SSR‑friendly; interactive parts rely on Radix primitives.

### Theme variables (Tailwind + globals.css)

This library relies on a small set of Tailwind tokens that map to CSS variables. Components use classes like `bg-background`, `text-foreground`, `border-border`, `bg-accent`, `text-destructive`, etc., and a few spots reference CSS variables directly (e.g., charts use `var(--background)`, `var(--foreground)`, `var(--border)`, `var(--hover)`).

Required tokens/variables:
- background → `--background`
- foreground → `--foreground`
- primary → `--primary`
- accent → `--accent`
- accent-foreground → `--accent-foreground` (recommended so selected items render readable text)
- border → `--border`
- hover → `--hover`
- destructive → `--destructive`
- muted → `--muted`
- muted-foreground → `--muted-foreground`
- rounded → `--radius`

Recommended setup with Tailwind v4 (`@theme inline`) in your `./globals.css`:

```css
@import "tailwindcss";

@source "./node_modules/@rubriclab/ui";

:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: oklch(54.6% 0.245 262.881);
  --accent: oklch(96.53% 0.004 262.56);
  --border: oklch(86.68% 0.017 261.56);
  --hover: oklch(92.05% 0.008 262.67);
  --destructive: oklch(62.72% 0.233 29.22);
  --muted: oklch(98.27% 0.001 95.47);
  --muted-foreground: oklch(13.68% 0.034 0.09);
  --radius: 8px;
  /* Optional but recommended */
  --accent-foreground: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --primary: oklch(54.6% 0.245 262.881);
    --accent: oklch(21.41% 0.007 89.49 / 60%);
    --border: oklch(26.98% 0.009 89.63);
    --hover: oklch(21.41% 0.007 89.49);
    --destructive: oklch(62.72% 0.233 29.22);
    --muted: oklch(15.48% 0.006 89.58);
    --muted-foreground: oklch(86.68% 0.017 261.56);
    --radius: 8px;
    /* Optional but recommended */
    --accent-foreground: #fafafa;
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-primary: var(--primary);
  --color-border: var(--border);
  --color-hover: var(--hover);
  --color-destructive: var(--destructive);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --radius-default: var(--radius);  /* Radius token for rounded utilities */
}
```

Using Tailwind v3 instead? Map tokens in `tailwind.config.{js,ts}` to the same CSS variables:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        border: 'var(--border)',
        hover: 'var(--hover)',
        destructive: 'var(--destructive)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)'
      }
    }
  },
  plugins: []
} satisfies Config
```

Notes:
- Some components (e.g., `Select`, `DropdownMenu`) also use Radix UI internal variables like `--radix-select-trigger-height`; you do not need to define these.
- If `accent-foreground` isn’t provided, elements with `text-accent-foreground` may inherit an unintended color. Defining it ensures good contrast on selected/active states.

## Types

All component props are exported via TypeScript types:

```ts
import type { ButtonProps } from '@rubriclab/ui'
```

## Changelog & releases

Conventional commits automatically bump the version and update the changelog. If your local hooks didn’t run, try:

```bash
bun prepare
```

## License

Apache-2.0 © Rubric Lab

See [LICENSE](./LICENSE) for details.
