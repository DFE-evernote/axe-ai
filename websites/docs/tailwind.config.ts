import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './docs/**/*.{mdx,md,tsx,jsx}',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        /* ai: {
          primary: '#1E3A8A',
          secondary: '#2563EB',
          accent: '#3B82F6',
          surface: '#F3F4F6',
          background: '#FFFFFF',
          text: '#111827',
          muted: '#6B7280'
        } */
      }
    }
  },
  plugins: []
}

export default config
