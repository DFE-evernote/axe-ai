import { defineConfig } from 'rspress/config';
import path from 'path';

const pluginCustomTheme = () => ({
  name: 'plugin-custom-theme',
  globalStyles: path.join(__dirname, 'styles/index.css'),
});

export default defineConfig({
  root: 'docs',
  title: 'Axe AI',
  description: 'Axe AI documentation',
  plugins: [pluginCustomTheme()],
  builderConfig: {
    tools: {
      postcss: (_opts, { addPlugins }) => {
        addPlugins([require('@tailwindcss/postcss')]);
      },
    },
  },
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Features', link: '/guide/features' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'ChatBubble', link: '/components/chat-bubble' },
          ],
        },
      ],
    },
  },
});