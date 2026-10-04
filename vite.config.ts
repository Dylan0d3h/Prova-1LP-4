import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Atualiza o Service Worker automaticamente quando houver nova versão
      registerType: 'autoUpdate',
      // Injeta automaticamente o script que registra o Service Worker
      injectRegister: 'auto',
      // Permite testar o PWA também com "npm run dev"
      devOptions: {
        enabled: true,
      },
      // Arquivos da pasta public que entram no cache
      includeAssets: [
        'favicon.svg',
        'logo.svg',
        'apple-touch-icon-180x180.png',
        'produtos/*.svg',
      ],
      // ===== MANIFEST =====
      manifest: {
        name: 'AirSul Refrigerações',
        short_name: 'AirSul',
        description:
          'Catálogo de ar-condicionados da AirSul Refrigerações: modelos, preços e atendimento pelo WhatsApp.',
        lang: 'pt-BR',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f4f9fd',
        theme_color: '#1a64c8',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      // ===== SERVICE WORKER (Workbox) =====
      workbox: {
        // Tudo que for gerado no build e bater com esses padrões é guardado no cache
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
        // Se estiver offline e abrir qualquer rota, entrega o index.html do cache
        navigateFallback: '/index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
