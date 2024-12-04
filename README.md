# @dev-tool/svg-icons

Beautiful SVG icons for modern web applications. This library provides a carefully crafted collection of SVG icons that are:

- 🎨 Fully customizable with Tailwind CSS
- 📦 Tree-shakeable
- 🚀 Optimized for performance
- ♿ Accessible
- 🔍 TypeScript ready

## Installation

```bash
npm install @dev-tool/svg-icons
```

## Usage

```jsx
import { ReactIcon, VueIcon } from '@dev-tool/svg-icons';

function App() {
  return (
    <div>
      <ReactIcon className="w-6 h-6 text-blue-500" />
      <VueIcon className="w-6 h-6 text-green-500" />
    </div>
  );
}
```

## Features

- **Tree-shaking**: Only the icons you use are included in your bundle
- **TypeScript support**: Full type definitions included
- **Customization**: Style icons using Tailwind CSS or custom classes
- **Accessibility**: Built with ARIA attributes for better screen reader support
- **Modern**: Built for modern bundlers and frameworks

## Documentation

Visit our [documentation site](https://svg-icons.stackblitz.com) for:

- Detailed usage examples
- Full icon gallery
- Customization options
- API reference
- Contributing guidelines

## License

MIT © [StackBlitz](https://stackblitz.com)