import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BQffWHbv.mjs';
import { manifest } from './manifest_DmxUVIQ7.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/en/products/frames/_frame_.astro.mjs');
const _page4 = () => import('./pages/en/products/frames.astro.mjs');
const _page5 = () => import('./pages/en/products/headlights/_headlight_.astro.mjs');
const _page6 = () => import('./pages/en/products/headlights.astro.mjs');
const _page7 = () => import('./pages/en/products/loupes/_loupe_.astro.mjs');
const _page8 = () => import('./pages/en/products/loupes.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/events.astro.mjs');
const _page11 = () => import('./pages/productos/iluminadores-frontales/_headlight_.astro.mjs');
const _page12 = () => import('./pages/productos/iluminadores-frontales.astro.mjs');
const _page13 = () => import('./pages/productos/lupas/_loupe_.astro.mjs');
const _page14 = () => import('./pages/productos/lupas.astro.mjs');
const _page15 = () => import('./pages/productos/monturas/_frame_.astro.mjs');
const _page16 = () => import('./pages/productos/monturas.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/en/products/frames/[frame].astro", _page3],
    ["src/pages/en/products/frames.astro", _page4],
    ["src/pages/en/products/headlights/[headlight].astro", _page5],
    ["src/pages/en/products/headlights.astro", _page6],
    ["src/pages/en/products/loupes/[loupe].astro", _page7],
    ["src/pages/en/products/loupes.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/events.astro", _page10],
    ["src/pages/productos/iluminadores-frontales/[headlight].astro", _page11],
    ["src/pages/productos/iluminadores-frontales.astro", _page12],
    ["src/pages/productos/lupas/[loupe].astro", _page13],
    ["src/pages/productos/lupas.astro", _page14],
    ["src/pages/productos/monturas/[frame].astro", _page15],
    ["src/pages/productos/monturas.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/gerar/dev/Optimedic/dist/client/",
    "server": "file:///C:/Users/gerar/dev/Optimedic/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
