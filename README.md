# AirSul Refrigerações — PWA com React + TypeScript

Catálogo de ar-condicionados instalável (PWA) e com funcionamento offline.

## O que o projeto atende do enunciado

| Requisito | Onde está |
|---|---|
| React + TypeScript | Projeto criado com o template `react-ts` do Vite; todos os arquivos são `.ts`/`.tsx` |
| Mínimo 3 componentes | 9 componentes em `src/components/` (Cabecalho, AvisoOffline, Filtros, ListaProdutos, CardProduto, DetalhesProduto, BotaoWhatsAppFlutuante, IconeWhatsApp, Rodape) |
| Manifest | Gerado pelo `vite-plugin-pwa` a partir da seção `manifest` do `vite.config.ts` (nome, cores, ícones 192/512/maskable) |
| Service Worker | Gerado pelo Workbox (seção `workbox` do `vite.config.ts`), com `registerType: 'autoUpdate'` |
| Instalável | Manifest completo + ícones + SW → o navegador mostra "Instalar". Há também um botão **Instalar app** no topo |
| Offline | O SW faz *precache* de HTML, JS, CSS, ícones e fotos dos produtos; `navigateFallback` garante que o app abre sem internet. Uma faixa avisa quando está offline |

Extras: busca e filtro por tipo, página de detalhes com tabela de especificações, preço parcelado, mensagem do WhatsApp já preenchida com o nome e o preço do produto, botão flutuante de WhatsApp e layout responsivo.

---

## Como rodar

```bash
npm install
npm run dev
npm run build
npm run preview
```
