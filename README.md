# 🧶 kitter.js

![kitter.js - A minimalist design system documentation library](https://mtbgfwk74cfkxvwf.public.blob.vercel-storage.com/kitter/kitter-cover.png)

**kitter.js** is a minimal and expressive documentation framework for modern component libraries and design systems with React, Tailwind, and TypeScript.

Our philosophy with kitter is to provide a zen and fun way to turn your design tokens and components into design documentation that inspires. The current implementation of kitter includes color swatches and typography systems. However, our team is continuing to develop more design features into kitter as we seek to push the limits of what is possible with design token documentation.

## Installation

Before installing kitter make sure that you have installed and configured React, Tailwind, and TypeScript.

Begin by installing kitter locally:

```bash
npm i kitter
```

You should see a `kitter.config.ts` file in your project root. You can use this to extend or change the default styles of your kitter documentation.

However, before you can start using your configured Tailwind variables, you will need to wrap your documentation in `<KitterProvider />` and import the `kitter` object from your configuration:

```tsx
import './globals.css';
import { kitter } from '../kitter.config';
import { KitterProvider } from 'kitter';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <KitterProvider config={kitter}>{children}</KitterProvider>
      </body>
    </html>
  );
}
```

Once your `<KitterProvider />` has loaded the configuration, you should be able to see your configured styles in action.

## Pages

---

### `<Documentation />`

The `<Documentation />` component is used to wrap an individual web route that has been dedicated to serving kitter documentation. A `<Documentation />` instance can contain any number of `<Page />` components.

#### Documentation Props

- `children` - Content to display inside the documentation layout
- _Optional:_ `maxWidth` - Maximum width of the inner content container (e.g., '1000px' or '80ch')
- _Optional:_ `className` - Optional additional class names for the outer container

---

### `<Page />`

The `<Page />` component is used to create page within your `<Documentation />` wrapper that takes up at least one full screen height.

#### Page Props

- `children` - Page content
- _Optional:_ `className` - Optional additional class names
- _Optional:_ `center` - Whether to center the content vertically
- _Optional:_ `id` - Unique ID used for anchor linking

---

### `<PageTitle />`

Renders a stylized title for a page section.

#### PageTitle Props

- `title` - Text to render as the page title
- _Optional:_ `className` - Optional additional class names

---

### `<PageDescription />`

Renders a description block below a page title.

#### PageDescription Props

- `children` - Description content, typically paragraph text
- _Optional:_ `className` - Optional additional class names

---

### `<PageSection />`

Creates a visually separated section with a title and content.

#### PageSection Props

- `children` - Section content
- `title` - Section heading
- _Optional:_ `titleClassName` - Optional additional class names for the title
- _Optional:_ `id` - ID which can be used to link directly to this section

---

### `<ScrollToTop />`

Creates a fixed-position "scroll to top" link in the top-right corner. Intended for use within a kitter.js document.

#### ScrollToTop Props

- _Optional:_ `titleClassName` - Tailwind classes for the label text
- _Optional:_ `iconClassName` - Tailwind classes for the icon element
- _Optional:_ `iconColor` - Color override for the default icon
- _Optional:_ `iconOverride` - Optional custom icon node to replace the default icon
- _Optional:_ `textOverride` - Optional override for the link text (default: "table of contents")

---

### `<DocumentContents />`

Renders a table of contents with anchor links to page section IDs.

- `id` - Corresponding anchor ID on the page.
- `contents` - An array of the following type:

```tsx
/** Represents a single item in the document's table of contents. */
export type DocumentContentsItem = {
  /** Display label for the TOC item */
  label: string;
  /** Corresponding anchor ID on the page */
  id: string;
};
```

---

## Color
