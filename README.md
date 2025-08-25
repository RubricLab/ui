# @rubriclab/fabric-ui

A small, typed React UI kit built on Radix UI and Tailwind CSS. Tree‑shakable, accessible, and designed to drop into modern Next.js apps.

## Installation

```bash
# with bun
bun add @rubriclab/fabric-ui

# with npm
npm i @rubriclab/fabric-ui

# with pnpm
pnpm add @rubriclab/fabric-ui
```

Peer requirements:
- react ^19.0.0
- react-dom ^19.0.0
- next ^15.0.0

Recommended: Tailwind CSS for styling (`tailwindcss`, `postcss`, `autoprefixer`).

## Quickstart

1) Ensure Tailwind CSS is set up in your app (see Tailwind docs). Components render with utility classNames and look best with your Tailwind theme.

2) Import components directly from the package:

```tsx
import { Button, Container, Form, Input } from '@rubriclab/fabric-ui'

export const Example = () => {
	return (
		<Container>
			<Form>
                <Input placeholder="Title" />
                <Button type="submit">Save</Button>
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

## Usage with Next.js

- Works with the App Router (Next 15+).
- Most components are SSR‑friendly; interactive parts rely on Radix primitives.

## Types

All component props are exported via TypeScript types:

```ts
import type { ButtonProps } from '@rubriclab/fabric-ui'
```

## Changelog & releases

Conventional commits automatically bump the version and update the changelog. If your local hooks didn’t run, try:

```bash
bun prepare
```

## License

Apache-2.0 © Rubric Lab

See [LICENSE](./LICENSE) for details.