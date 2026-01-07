import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.lumeadvisory.africa',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/services/ict-investment-advisory',
        '/services/ai-strategy-implementation',
        '/services/cloud-services',
        '/services/ict-project-consulting',
        '/case-studies',
        '/resources',
        '/contact',
        '/privacy-policy',
        '/terms-of-service'
      ],
      readable: true,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/services': 0.9,
        '/services/*': 0.9,
        '/contact': 0.8,
        '/about': 0.7,
        '/case-studies': 0.7,
        '/resources': 0.6,
        '/*': 0.5
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    proxy: {
      // Development-only: forward API calls to the Flask backend
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
