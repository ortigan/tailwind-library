
// --------------------
// Request: G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/paths.mjs ($id_2f93b0be)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/css.mjs ($id_790bc42f)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/root-component.mjs ($id_75efd87a)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/app-component.mjs ($id_70325738)
// --------------------
const $id_55ca067f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/components.plugin.mjs ($id_df08b929)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/About.vue?macro=true ($id_b79d0c53)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs ($id_21f18624)
// - /components/Utils/Toast.vue ($id_1423e7ad)
// - /components/Header.vue ($id_4e284fc3)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// - /components/Headers/Heading.vue ($id_7aa6b9b6)
// - /components/Headers/SubHeading.vue ($id_65fe66b1)
// - /components/Utils/ShowCodeButton.vue ($id_b28ae97a)
// - /components/Utils/HideCodeButton.vue ($id_2ed55d76)
// - /components/Utils/ComponentPad.vue ($id_900fca01)
// - /components/Alert/DefaultAlert.vue ($id_7cd7150c)
// - /components/Utils/CopyButton.vue ($id_07dc553f)
// - /components/Alert/Snippets/DefaultAlert.vue ($id_09a6c81e)
// - /components/Alert/StateAlert.vue ($id_ac224165)
// - /components/Alert/Snippets/StateAlert.vue ($id_504619a8)
// - /components/Alert/WithButton.vue ($id_0a5527a0)
// - /components/Alert/Snippets/WithButton.vue ($id_18599563)
// - /components/Alert/AlertWithLink.vue ($id_bee580ce)
// - /components/Alert/Snippets/WithLink.vue ($id_997a1bb0)
// - /components/Alert/WithIcon.vue ($id_42230e3d)
// - /components/Alert/Snippets/WithIcon.vue ($id_963e4cef)
// - /components/Alert/WithBorder.vue ($id_a0fd24d4)
// - /components/Alert/Snippets/WithBorder.vue ($id_306f5908)
// - /components/Alert/BorderLeft.vue ($id_1537de64)
// - /components/Alert/Snippets/BorderLeft.vue ($id_9b33b1f5)
// - /components/Alert/AlertInfo.vue ($id_df465372)
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/About.vue ($id_4fd34246)
// - /pages/alerts.vue ($id_392b88d4)
// - /pages/index.vue ($id_cca58e97)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs ($id_8479a5fe)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/paths.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_2f93b0be = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"href":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css","crossorigin":"anonymous","referrerpolicy":"no-referrer","rel":"stylesheet"}],"style":[],"script":[{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js","data-manual":true},{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js","data-manual":true}]},"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":""}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/paths.mjs ($id_2f93b0be)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /components/Header.vue ($id_4e284fc3)
// - /layouts/custom.vue ($id_d158cf1f)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/css.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_790bc42f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/css.mjs ($id_790bc42f)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n/*! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{color-adjust:exact;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{color-adjust:unset;background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{color-adjust:exact;--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{margin-left:auto;margin-right:auto;padding-left:.5rem;padding-right:.5rem;width:100%}@media (min-width:340px){.container{max-width:340px}}@media (min-width:640px){.container{max-width:640px;padding-left:1rem;padding-right:1rem}}@media (min-width:768px){.container{max-width:768px;padding-left:1rem;padding-right:1rem}}@media (min-width:1024px){.container{max-width:1024px;padding-left:2rem;padding-right:2rem}}@media (min-width:1280px){.container{max-width:1280px;padding-left:3rem;padding-right:3rem}}@media (min-width:1536px){.container{max-width:1536px;padding-left:3rem;padding-right:3rem}}.absolute{position:absolute}.relative{position:relative}.top-4{top:1rem}.right-4{right:1rem}.bottom-5{bottom:1.25rem}.right-5{right:1.25rem}.bottom-20{bottom:5rem}.mt-6{margin-top:1.5rem}.mt-4{margin-top:1rem}.mt-12{margin-top:3rem}.flex{display:flex}.table{display:table}.contents{display:contents}.hidden{display:none}.h-28{height:7rem}.h-6{height:1.5rem}.h-16{height:4rem}.h-screen{height:100vh}.h-5{height:1.25rem}.h-4{height:1rem}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-56{width:14rem}.w-44{width:11rem}.w-40{width:10rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-4{width:1rem}.w-fit{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-x-5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.25rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded{border-radius:.25rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l-2{border-left-width:2px}.border-t-2{border-top-width:2px}.border-neutral-700{--tw-border-opacity:1;border-color:rgb(64 64 64/var(--tw-border-opacity))}.border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-900{--tw-border-opacity:1;border-color:rgb(17 24 39/var(--tw-border-opacity))}.border-sky-700{--tw-border-opacity:1;border-color:rgb(3 105 161/var(--tw-border-opacity))}.border-emerald-700{--tw-border-opacity:1;border-color:rgb(4 120 87/var(--tw-border-opacity))}.border-amber-700{--tw-border-opacity:1;border-color:rgb(180 83 9/var(--tw-border-opacity))}.border-rose-700{--tw-border-opacity:1;border-color:rgb(190 18 60/var(--tw-border-opacity))}.border-slate-900{--tw-border-opacity:1;border-color:rgb(15 23 42/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-neutral-50{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.bg-zinc-100{--tw-bg-opacity:1;background-color:rgb(244 244 245/var(--tw-bg-opacity))}.bg-rose-100{--tw-bg-opacity:1;background-color:rgb(255 228 230/var(--tw-bg-opacity))}.bg-sky-100{--tw-bg-opacity:1;background-color:rgb(224 242 254/var(--tw-bg-opacity))}.bg-emerald-100{--tw-bg-opacity:1;background-color:rgb(209 250 229/var(--tw-bg-opacity))}.bg-amber-100{--tw-bg-opacity:1;background-color:rgb(254 243 199/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231/var(--tw-bg-opacity))}.bg-\\[\\#0A0C25\\]{--tw-bg-opacity:1;background-color:rgb(10 12 37/var(--tw-bg-opacity))}.p-4{padding:1rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.pl-4{padding-left:1rem}.pr-12{padding-right:3rem}.pb-20{padding-bottom:5rem}.pt-2{padding-top:.5rem}.text-right{text-align:right}.text-xs{font-size:.75rem}.text-base{font-size:1rem}.text-sm{font-size:.875rem}.text-7xl{font-size:5rem}.text-2xl{font-size:1.5rem}.text-xl{font-size:1.25rem}.font-semibold{font-weight:600}.font-normal{font-weight:400}.font-thin{font-weight:100}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-light{font-weight:300}.uppercase{text-transform:uppercase}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-sky-700{--tw-text-opacity:1;color:rgb(3 105 161/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity))}.text-zinc-400{--tw-text-opacity:1;color:rgb(161 161 170/var(--tw-text-opacity))}.text-rose-700{--tw-text-opacity:1;color:rgb(190 18 60/var(--tw-text-opacity))}.text-emerald-700{--tw-text-opacity:1;color:rgb(4 120 87/var(--tw-text-opacity))}.text-amber-700{--tw-text-opacity:1;color:rgb(180 83 9/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}html{font-family:\"Inter\",sans-serif;font-family:\"Montserrat\",sans-serif}::-webkit-scrollbar{height:12px;width:5px}::-webkit-scrollbar-track{border:1px solid #8c8c8c;border-radius:10px}::-webkit-scrollbar-thumb{background:#848484;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#909090}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}pre[class*=language-]{border-radius:10px!important;font-size:.9rem;margin:.5em 0;overflow:auto;padding:1em}.light pre[class*=language-]{background:#f5f5f5!important;padding:1.5rem}.dark pre[class*=language-]{background:#171717!important;padding:1.5rem}.fadeSnippet-enter-active{-webkit-animation:fade-in .2s;animation:fade-in .2s}.fadeSnippet-leave-active{-webkit-animation:fade-out .2s;animation:fade-out .2s}@-webkit-keyframes fade-in{0%{transform:translateY(10px)}to{transform:translateY(0)}}@keyframes fade-in{0%{transform:translateY(10px)}to{transform:translateY(0)}}@-webkit-keyframes fade-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes fade-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.hover\\:cursor-pointer:hover{cursor:pointer}.dark .dark\\:border-\\[\\#2D2D2D\\]{--tw-border-opacity:1;border-color:rgb(45 45 45/var(--tw-border-opacity))}.dark .dark\\:border-b-\\[\\#2D2D2D\\]{--tw-border-opacity:1;border-bottom-color:rgb(45 45 45/var(--tw-border-opacity))}.dark .dark\\:bg-neutral-800{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}.dark .dark\\:bg-\\[\\#212121\\]{--tw-bg-opacity:1;background-color:rgb(33 33 33/var(--tw-bg-opacity))}.dark .dark\\:bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18/var(--tw-bg-opacity))}.dark .dark\\:bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.dark .dark\\:text-gray-100{--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity))}.dark .dark\\:text-sky-500{--tw-text-opacity:1;color:rgb(14 165 233/var(--tw-text-opacity))}.dark .dark\\:text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.dark .dark\\:text-neutral-200{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}}@media (min-width:1024px){.lg\\:block{display:block}}";
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/components.plugin.mjs ($id_df08b929)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs ($id_8479a5fe)
// --------------------
const $id_80bc857d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df08b929 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/meta.config.mjs ($id_7e65ac9b)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_7e65ac9b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"href":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css","crossorigin":"anonymous","referrerpolicy":"no-referrer","rel":"stylesheet"}],"style":[],"script":[{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js","data-manual":true},{"src":"https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js","data-manual":true}]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/router.options.mjs ($id_2a66e4bb)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/middleware.mjs ($id_9707a1d9)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/About.vue?macro=true ($id_b79d0c53)
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/About.vue ($id_4fd34246)
// - /pages/alerts.vue ($id_392b88d4)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_f44322c8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/About.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/alerts.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "About",
    path: "/About",
    file: "G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/About.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/About.vue')
  },
  {
    name: "alerts",
    path: "/alerts",
    file: "G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/alerts.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/alerts.vue')
  },
  {
    name: "index",
    path: "/",
    file: "G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/About.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b79d0c53 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  metaInfo: {
    title: 'About us'
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = __vite_ssr_import_0__.resolveComponent("Layout")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Layout, _attrs, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${
          _scopeId
        }>About us</h1><p${
          _scopeId
        }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>`)
      } else {
        return [
          __vite_ssr_import_0__.createVNode("h1", null, "About us"),
          __vite_ssr_import_0__.createVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/About.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/About.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/About.vue?macro=true ($id_b79d0c53)
// - /components/Utils/Toast.vue ($id_1423e7ad)
// - /components/Header.vue ($id_4e284fc3)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// - /components/Headers/Heading.vue ($id_7aa6b9b6)
// - /components/Headers/SubHeading.vue ($id_65fe66b1)
// - /components/Utils/ShowCodeButton.vue ($id_b28ae97a)
// - /components/Utils/HideCodeButton.vue ($id_2ed55d76)
// - /components/Utils/ComponentPad.vue ($id_900fca01)
// - /components/Alert/DefaultAlert.vue ($id_7cd7150c)
// - /components/Utils/CopyButton.vue ($id_07dc553f)
// - /components/Alert/Snippets/DefaultAlert.vue ($id_09a6c81e)
// - /components/Alert/StateAlert.vue ($id_ac224165)
// - /components/Alert/Snippets/StateAlert.vue ($id_504619a8)
// - /components/Alert/WithButton.vue ($id_0a5527a0)
// - /components/Alert/Snippets/WithButton.vue ($id_18599563)
// - /components/Alert/AlertWithLink.vue ($id_bee580ce)
// - /components/Alert/Snippets/WithLink.vue ($id_997a1bb0)
// - /components/Alert/WithIcon.vue ($id_42230e3d)
// - /components/Alert/Snippets/WithIcon.vue ($id_963e4cef)
// - /components/Alert/WithBorder.vue ($id_a0fd24d4)
// - /components/Alert/Snippets/WithBorder.vue ($id_306f5908)
// - /components/Alert/BorderLeft.vue ($id_1537de64)
// - /components/Alert/Snippets/BorderLeft.vue ($id_9b33b1f5)
// - /components/Alert/AlertInfo.vue ($id_df465372)
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/About.vue ($id_4fd34246)
// - /pages/alerts.vue ($id_392b88d4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/About.vue?macro=true ($id_b79d0c53)
// - /components/Utils/Toast.vue ($id_1423e7ad)
// - /components/Header.vue ($id_4e284fc3)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// - /components/Headers/Heading.vue ($id_7aa6b9b6)
// - /components/Headers/SubHeading.vue ($id_65fe66b1)
// - /components/Utils/ShowCodeButton.vue ($id_b28ae97a)
// - /components/Utils/HideCodeButton.vue ($id_2ed55d76)
// - /components/Utils/ComponentPad.vue ($id_900fca01)
// - /components/Alert/DefaultAlert.vue ($id_7cd7150c)
// - /components/Utils/CopyButton.vue ($id_07dc553f)
// - /components/Alert/Snippets/DefaultAlert.vue ($id_09a6c81e)
// - /components/Alert/StateAlert.vue ($id_ac224165)
// - /components/Alert/Snippets/StateAlert.vue ($id_504619a8)
// - /components/Alert/WithButton.vue ($id_0a5527a0)
// - /components/Alert/Snippets/WithButton.vue ($id_18599563)
// - /components/Alert/AlertWithLink.vue ($id_bee580ce)
// - /components/Alert/Snippets/WithLink.vue ($id_997a1bb0)
// - /components/Alert/WithIcon.vue ($id_42230e3d)
// - /components/Alert/Snippets/WithIcon.vue ($id_963e4cef)
// - /components/Alert/WithBorder.vue ($id_a0fd24d4)
// - /components/Alert/Snippets/WithBorder.vue ($id_306f5908)
// - /components/Alert/BorderLeft.vue ($id_1537de64)
// - /components/Alert/Snippets/BorderLeft.vue ($id_9b33b1f5)
// - /components/Alert/AlertInfo.vue ($id_df465372)
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/About.vue ($id_4fd34246)
// - /pages/alerts.vue ($id_392b88d4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/alerts.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /components/Headers/Heading.vue ($id_7aa6b9b6)
// - /components/Headers/SubHeading.vue ($id_65fe66b1)
// - /components/Utils/ShowCodeButton.vue ($id_b28ae97a)
// - /components/Utils/HideCodeButton.vue ($id_2ed55d76)
// - /components/Utils/ComponentPad.vue ($id_900fca01)
// - /components/Alert/DefaultAlert.vue ($id_7cd7150c)
// - /components/Utils/CopyButton.vue ($id_07dc553f)
// - /components/Alert/Snippets/DefaultAlert.vue ($id_09a6c81e)
// - /components/Alert/StateAlert.vue ($id_ac224165)
// - /components/Alert/Snippets/StateAlert.vue ($id_504619a8)
// - /components/Alert/WithButton.vue ($id_0a5527a0)
// - /components/Alert/Snippets/WithButton.vue ($id_18599563)
// - /components/Alert/AlertWithLink.vue ($id_bee580ce)
// - /components/Alert/Snippets/WithLink.vue ($id_997a1bb0)
// - /components/Alert/WithIcon.vue ($id_42230e3d)
// - /components/Alert/Snippets/WithIcon.vue ($id_963e4cef)
// - /components/Alert/WithBorder.vue ($id_a0fd24d4)
// - /components/Alert/Snippets/WithBorder.vue ($id_306f5908)
// - /components/Alert/BorderLeft.vue ($id_1537de64)
// - /components/Alert/Snippets/BorderLeft.vue ($id_9b33b1f5)
// - /components/Alert/AlertInfo.vue ($id_df465372)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/alerts.vue?vue&type=style&index=0&lang.css ($id_7fc24c03)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_07053f14 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Headers/Heading.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Headers/SubHeading.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Utils/ShowCodeButton.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Utils/HideCodeButton.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Utils/ComponentPad.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Alert/DefaultAlert.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Utils/CopyButton.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/Alert/Snippets/DefaultAlert.vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/Alert/StateAlert.vue");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/Alert/Snippets/StateAlert.vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/components/Alert/WithButton.vue");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/components/Alert/Snippets/WithButton.vue");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/components/Alert/AlertWithLink.vue");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/components/Alert/Snippets/WithLink.vue");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/components/Alert/WithIcon.vue");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/components/Alert/Snippets/WithIcon.vue");

const __vite_ssr_import_17__ = await __vite_ssr_import__("/components/Alert/WithBorder.vue");

const __vite_ssr_import_18__ = await __vite_ssr_import__("/components/Alert/Snippets/WithBorder.vue");

const __vite_ssr_import_19__ = await __vite_ssr_import__("/components/Alert/BorderLeft.vue");

const __vite_ssr_import_20__ = await __vite_ssr_import__("/components/Alert/Snippets/BorderLeft.vue");


const __vite_ssr_import_21__ = await __vite_ssr_import__("/components/Headers/SubHeading.vue");

const __vite_ssr_import_22__ = await __vite_ssr_import__("/components/Alert/AlertInfo.vue");

const __vite_ssr_import_23__ = await __vite_ssr_import__("/components/Headers/Heading.vue");

const _sfc_main = {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    AlertInfo: __vite_ssr_import_22__.default,
    Heading: __vite_ssr_import_23__.default,
    SubHeading: __vite_ssr_import_21__.default,
},
  data() {
    return {
      layout: "custom",
      default_alert: false,
      statecolor_alert: false,
      with_button: false,
      alert_wlink: false,
      alert_wicon: false,
      alert_wborder: false,
      alert_wleftborder: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("alertContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.$bus.$emit("showToastNotification")
      this.$globalCopyFunc(id);
    },

  },
};

const __vite_ssr_import_24__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_25__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_HeadersHeading = __vite_ssr_import_1__.default
  const _component_HeadersSubHeading = __vite_ssr_import_2__.default
  const _component_UtilsShowCodeButton = __vite_ssr_import_3__.default
  const _component_UtilsHideCodeButton = __vite_ssr_import_4__.default
  const _component_UtilsComponentPad = __vite_ssr_import_5__.default
  const _component_AlertDefaultAlert = __vite_ssr_import_6__.default
  const _component_UtilsCopyButton = __vite_ssr_import_7__.default
  const _component_AlertSnippetsDefaultAlert = __vite_ssr_import_8__.default
  const _component_AlertStateAlert = __vite_ssr_import_9__.default
  const _component_AlertSnippetsStateAlert = __vite_ssr_import_10__.default
  const _component_AlertWithButton = __vite_ssr_import_11__.default
  const _component_AlertSnippetsWithButton = __vite_ssr_import_12__.default
  const _component_AlertWithLink = __vite_ssr_import_13__.default
  const _component_AlertSnippetsWithLink = __vite_ssr_import_14__.default
  const _component_AlertWithIcon = __vite_ssr_import_15__.default
  const _component_AlertSnippetsWithIcon = __vite_ssr_import_16__.default
  const _component_AlertWithBorder = __vite_ssr_import_17__.default
  const _component_AlertSnippetsWithBorder = __vite_ssr_import_18__.default
  const _component_AlertBorderLeft = __vite_ssr_import_19__.default
  const _component_AlertSnippetsBorderLeft = __vite_ssr_import_20__.default

  _push(__vite_ssr_import_25__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_24__.mergeProps({ name: $data.layout }, _attrs), {
    default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex p-4"${
          _scopeId
        }><!-- content --><div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar"${
          _scopeId
        }><div class="overflow-y-auto w-full px-4 pb-20" id="alertContainer"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersHeading, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Alert `)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode(" Alert ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div${
          _scopeId
        }><p class="text-base"${
          _scopeId
        }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam? </p></div><!-- Default alert --><section id="defaultAlert" class="w-full"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Default alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("Default alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.default_alert) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.default_alert = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.default_alert = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.default_alert)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.default_alert = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.default_alert = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertDefaultAlert, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertDefaultAlert)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.default_alert) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('defaultAlertComp'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsDefaultAlert, { id: "defaultAlertComp" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End default alert --><!-- stateColorAlert --><section id="stateColorAlert  " class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`State color alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("State color alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.statecolor_alert) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.statecolor_alert = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.statecolor_alert = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.statecolor_alert)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.statecolor_alert = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.statecolor_alert = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertStateAlert, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertStateAlert)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.statecolor_alert) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('stateColorAlertComp'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsStateAlert, { id: "stateColorAlertComp" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End state color alert --><!-- With button alert start --><section id="withBtnAlert" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With button alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With button alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.with_button) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.with_button = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.with_button = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.with_button)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.with_button = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.with_button = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithButton, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithButton)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.with_button) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithButton'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithButton, { id: "alertWithButton" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with button alert --><!-- With Link alert --><section id="withLink" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Link`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Link")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wlink) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wlink = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wlink = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wlink)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wlink = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wlink = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithLink, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithLink)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wlink) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithLink'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithLink, { id: "alertWithLink" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with link alert --><!-- alert With Icon --><section id="stateColorAlert" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Alert with Icon`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("Alert with Icon")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wicon) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wicon = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wicon = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wicon)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wicon = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wicon = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithIcon, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithIcon)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wicon) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithIcon'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithIcon, { id: "alertWithIcon" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with icon alert --><!-- alert With border --><section id="alertWithBorder" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Border`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Border")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wborder) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wborder = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wborder = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wborder)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wborder = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wborder = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithBorder, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithBorder)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wborder) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithIcon'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithBorder, { id: "alertWithIcon" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with border alert --><!-- alert With left border --><section id="borderLeft" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Left Border`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Left Border")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wleftborder) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wleftborder = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wleftborder = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wleftborder)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wleftborder = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wleftborder = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertBorderLeft, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertBorderLeft)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wleftborder) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertBorderLeft'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsBorderLeft, { id: "alertBorderLeft" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with left border alert --></div></div><!-- right sidebar --><div class="hidden lg:block"${
          _scopeId
        }><div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"${
          _scopeId
        }><div class="overflow-y-auto"${
          _scopeId
        }><!-- <AlertInfo /> --><div class="flex flex-col justify-start items-end space-y-2"${
          _scopeId
        }><p class="text-normal font-bold"${
          _scopeId
        }>On This Page</p><button${
          _scopeId
        }> Default Alert </button><button${
          _scopeId
        }> State Color Alert </button><button${
          _scopeId
        }> With Button Alert </button><button${
          _scopeId
        }> Alert With Link </button><button${
          _scopeId
        }> Alert With Icon </button><button${
          _scopeId
        }> Alert With Border </button><button class="flex flex-row"${
          _scopeId
        }> Alert With Left-Border </button></div></div></div></div></div>`)
      } else {
        return [
          __vite_ssr_import_24__.createVNode("div", { class: "flex p-4" }, [
            __vite_ssr_import_24__.createCommentVNode(" content "),
            __vite_ssr_import_24__.createVNode("div", { class: "flex pb-20 h-screen px-4 overflow-y-hidden scrollBar" }, [
              __vite_ssr_import_24__.createVNode("div", {
                class: "overflow-y-auto w-full px-4 pb-20",
                id: "alertContainer"
              }, [
                __vite_ssr_import_24__.createVNode(_component_HeadersHeading, null, {
                  default: __vite_ssr_import_24__.withCtx(() => [
                    __vite_ssr_import_24__.createTextVNode(" Alert ")
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_24__.createVNode("div", null, [
                  __vite_ssr_import_24__.createVNode("p", { class: "text-base" }, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam? ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" Default alert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "defaultAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("Default alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.default_alert)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.default_alert = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.default_alert = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertDefaultAlert)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('defaultAlertComp'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsDefaultAlert, { id: "defaultAlertComp" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.default_alert]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End default alert "),
                __vite_ssr_import_24__.createCommentVNode(" stateColorAlert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "stateColorAlert  ",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("State color alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.statecolor_alert)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.statecolor_alert = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.statecolor_alert = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertStateAlert)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('stateColorAlertComp'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsStateAlert, { id: "stateColorAlertComp" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.statecolor_alert]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End state color alert "),
                __vite_ssr_import_24__.createCommentVNode(" With button alert start "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "withBtnAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With button alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.with_button)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.with_button = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.with_button = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithButton)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithButton'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithButton, { id: "alertWithButton" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.with_button]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with button alert "),
                __vite_ssr_import_24__.createCommentVNode(" With Link alert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "withLink",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Link")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wlink)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wlink = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wlink = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithLink)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithLink'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithLink, { id: "alertWithLink" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wlink]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with link alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With Icon "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "stateColorAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("Alert with Icon")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wicon)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wicon = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wicon = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithIcon)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithIcon'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithIcon, { id: "alertWithIcon" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wicon]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with icon alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With border "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "alertWithBorder",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Border")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wborder)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wborder = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wborder = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithBorder)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithIcon'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithBorder, { id: "alertWithIcon" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wborder]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with border alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With left border "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "borderLeft",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Left Border")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wleftborder)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wleftborder = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wleftborder = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertBorderLeft)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertBorderLeft'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsBorderLeft, { id: "alertBorderLeft" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wleftborder]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with left border alert ")
              ])
            ]),
            __vite_ssr_import_24__.createCommentVNode(" right sidebar "),
            __vite_ssr_import_24__.createVNode("div", { class: "hidden lg:block" }, [
              __vite_ssr_import_24__.createVNode("div", { class: "w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2" }, [
                __vite_ssr_import_24__.createVNode("div", { class: "overflow-y-auto" }, [
                  __vite_ssr_import_24__.createCommentVNode(" <AlertInfo /> "),
                  __vite_ssr_import_24__.createVNode("div", { class: "flex flex-col justify-start items-end space-y-2" }, [
                    __vite_ssr_import_24__.createVNode("p", { class: "text-normal font-bold" }, "On This Page"),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('defaultAlert'))
                    }, " Default Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('stateColorAlert'))
                    }, " State Color Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('withBtnAlert'))
                    }, " With Button Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('withLink'))
                    }, " Alert With Link ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('alertWithIcon'))
                    }, " Alert With Icon ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('alertWithBorder'))
                    }, " Alert With Border ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('borderLeft')),
                      class: "flex flex-row"
                    }, " Alert With Left-Border ", 8 /* PROPS */, ["onClick"])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_26__ = await __vite_ssr_import__("/pages/alerts.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_27__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_27__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/alerts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_28__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_28__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/alerts.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/alerts.vue ($id_392b88d4)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs ($id_21f18624)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// --------------------
const $id_21f18624 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  custom: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/custom.vue')),
  full: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/full.vue'))
};
}


// --------------------
// Request: /layouts/custom.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs ($id_21f18624)
// Dependencies: 
// - /components/Utils/Toast.vue ($id_1423e7ad)
// - /components/Header.vue ($id_4e284fc3)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/Footer.vue ($id_f3d8f325)
// - /store/index.js ($id_3135ce2a)
// - /components/Navigation/MenuItems.js ($id_3f5e6989)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /layouts/custom.vue?vue&type=style&index=0&lang.css ($id_5a9caf4e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d158cf1f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Utils/Toast.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Header.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Footer.vue");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/index.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Header.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Footer.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Navigation/MenuItems.js");

const _sfc_main = {
  components: { Header: __vite_ssr_import_5__.default, Footer: __vite_ssr_import_6__.default },
  metaInfo: {
    title: "Component library!",
  },
  data() {
    return {
      menu: __vite_ssr_import_7__.default,
      theme: "dark",
      store: __vite_ssr_import_4__.useStore(),
      showToast: false,
    };
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    window.Prism.highlightAll();
    window.Prism.plugins.NormalizeWhitespace.setDefaults({
      "remove-trailing": true,
      "remove-indent": true,
      "left-trim": true,
      "right-trim": true,
      // "break-lines": 80,
      // indent: 3,
      // "remove-initial-line-feed": false,
      // "tabs-to-spaces": 4,
      // "spaces-to-tabs": 4,
    });
    this.$bus.$on("showToastNotification", () => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    });
  },
  methods: {
    getPath() {
      return this.$route.path;
    },
  },
};

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UtilsToast = __vite_ssr_import_0__.default
  const _component_Header = __vite_ssr_import_1__.default
  const _component_nuxt_link = __vite_ssr_import_2__.default
  const _component_Footer = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({
    class: [$data.store.theme === 'light' ? 'light' : 'dark', "relative"]
  }, _attrs))}>`)
  if ($data.showToast) {
    _push(`<div class="absolute top-4 right-4">`)
    _push(__vite_ssr_import_9__.ssrRenderComponent(_component_UtilsToast, null, null, _parent))
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Header, null, null, _parent))
  _push(`<div class="dark:bg-[#121212] dark:text-gray-100 flex h-screen"><div class="container h-screen"><div class="flex w-full flex-col h-screen"><div class="flex w-full h-screen"><!-- sidebar left --><div class="w-44 flex flex-col h-screen overflow-y-hidden"><div class="overflow-y-auto hidden md:block"><div class="flex flex-col text-base mt-6 space-y-1 text-slate-700 dark:text-gray-300"><!--[-->`)
  __vite_ssr_import_9__.ssrRenderList($data.menu, (item, index) => {
    _push(`<span><div class="${__vite_ssr_import_9__.ssrRenderClass(
                        $options.getPath() == item.link
                          ? 'font-semibold text-sky-700 dark:text-sky-500'
                          : ''
                      )}">`)
    _push(__vite_ssr_import_9__.ssrRenderComponent(_component_nuxt_link, {
      to: item.link
    }, {
      default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_9__.ssrInterpolate(item.title)}`)
        } else {
          return [
            __vite_ssr_import_8__.createTextVNode(__vite_ssr_import_8__.toDisplayString(item.title), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div></span>`)
  })
  _push(`<!--]--></div></div></div><!-- Rest of the content --><main class="w-full h-screen overflow-y-hidden">`)
  __vite_ssr_import_9__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main></div></div></div></div><div class="">`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_10__ = await __vite_ssr_import__("/layouts/custom.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/custom.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/layouts/custom.vue"]]);
}


// --------------------
// Request: /components/Utils/Toast.vue
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1423e7ad = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full" }, _attrs))}><div class="flex w-full items-center justify-between rounded-lg bg-gray-50 text-gray-800 dark:bg-black dark:text-neutral-200 px-4 py-3 shadow-md text-sm"><div class="flex items-center space-x-2"><div class="rounded-lg bg-blue-100 p-1.5 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg></div><div>Code Copied to clipboard</div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Utils/Toast.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Utils/Toast.vue"]]);
}


// --------------------
// Request: /components/Header.vue
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /store/index.js ($id_3135ce2a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4e284fc3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/store/index.js");

const _sfc_main = {
  data() {
    return {
      store: __vite_ssr_import_1__.useStore(),
    };
  },
  methods:{
    changeTheme(theme) {
      this.store.theme = theme;
    }
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "border-b bg-white dark:bg-[#212121] dark:border-b-[#2D2D2D]" }, _attrs))}><div class="container h-16 w-full flex justify-between items-center dark:text-gray-300"><!-- logo --><div class="flex space-x-4 w-full"><div class="flex justify-center items-center"></div><div class="font-semibold uppercase">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span class="font-normal"${_scopeId}> Air </span> components`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("span", { class: "font-normal" }, " Air "),
          __vite_ssr_import_2__.createTextVNode(" components")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><!--  --><!-- <div>
        <div class="pl-4 pr-12 rounded-full bg-gray-100 py-1 flex">
          <p class="font-thin">Search component</p>  
          </div>
        </div> --><!-- Nav items --><div class="flex space-x-6"><div>Quickstart</div><div>Components</div><div>Templates</div><div>Figma</div><div>Faqs</div>`)
  if ($data.store.theme === 'dark') {
    _push(`<div id="light" class="cursor-pointer"><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`)
  } else {
    _push(`<div id="dark" class="cursor-pointer"><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`)
  }
  _push(`</div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Header.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Header.vue"]]);
}


// --------------------
// Request: /store/index.js
// Parents: 
// - /components/Header.vue ($id_4e284fc3)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_3135ce2a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const useStore = __vite_ssr_import_0__.defineStore({
    id:'base-store',
    state: () => {
        return {
            theme:'dark'
        }
    },
    actions:{},
    getters:{}
})
Object.defineProperty(__vite_ssr_exports__, "useStore", { enumerable: true, configurable: true, get(){ return useStore }});;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /store/index.js ($id_3135ce2a)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs ($id_8479a5fe)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///G:/Ortigan/tailwind%20component%20nuxt3/tailwind-library/node_modules/pinia/dist/pinia.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/pinia/dist/pinia.mjs\".")
  })


// --------------------
// Request: /components/Footer.vue
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/full.vue ($id_2ca7d6cb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f3d8f325 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "" }, _attrs))}><div class="w-full"><div class="flex h-28 flex-col items-center justify-center space-y-2 bg-white dark:bg-neutral-800 text-black dark:text-white"><div class="flex flex-row items-center justify-center space-x-5"><hr class="w-56 border border-neutral-700"><img src="https://res.cloudinary.com/binarycode/image/upload/v1597915831/Ortigan%20Official/ortigan_nav_bar_logo_left_kkv2u4.svg" alt="" class="h-6"><hr class="w-56 border border-neutral-700"></div><div><p class="text-xs">COPYRIGHT © 2022 ORTIGAN TECHNOLOGIES. ALL RIGHTS RESERVED.</p></div><div class="flex flex-row space-x-5 text-xs"><p>CONTACT@ORTIGAN.COM</p><p>+91 883 088 4994</p></div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Footer.vue"]]);
}


// --------------------
// Request: /components/Navigation/MenuItems.js
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// Dependencies: 

// --------------------
const $id_3f5e6989 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default =
[
    {
        id: 1,
        title: 'Alert',
        icon: "",
        link: "/alerts"
    },
    {
        id: 1,
        title: 'Avatar',
        icon: "",
        link: "/avatar"
    },
    {
        id: 2,
        title: 'Accordion',
        icon: "",
        link: "/accordion"
    },
    {
        id: 3,
        title: 'Badge',
        icon: "",
        link: "/badge"
    },
    {
        id: 4,
        title: 'Breadcrumb',
        icon: "",
        link: "/breadcrumbs"
    },
    {
        id: 5,
        title: 'Button',
        icon: "",
        link: "/buttons"
    },
    {
        id: 6,
        title: 'Button Group',
        icon: "",
        link: "/buttongroup"
    },
    {
        id: 7,
        title: 'Card',
        icon: "",
        link: "/card"
    },
    // {
    //     id: 8,
    //     title: 'Carousel',
    //     icon: "",
    //     link: "/carousel"
    // },
    {
        id: 9,
        title: 'Dropdown',
        icon: "",
        link: "/dropdown"
    },
    {
        id: 10,
        title: 'Form',
        icon: "",
        link: "/form"
    },
    // {
    //     id: 11,
    //     title: 'List Group',
    //     icon: "",
    //     link: "/listGroup"
    // },
    {
        id: 12,
        title: 'Typography',
        icon: "",
        link: "/typography"
    },
    // {
    //     id: 13,
    //     title: 'Modal',
    //     icon: "",
    //     link: "/modal"
    // },
    // {
    //     id: 14,
    //     title: 'Tabs',
    //     icon: "",
    //     link: "/tabs"
    // },
    {
        id: 15,
        title: 'Navbar',
        icon: "",
        link: "/navbar"
    },
    {
        id: 16,
        title: 'Footer',
        icon: "",
        link: "/footer"
    },
    {
        id: 17,
        title: 'Sidebar',
        icon: "",
        link: "/sidebar"
    },
    {
        id: 18,
        title: 'Pagination',
        icon: "",
        link: "/pagination"
    },
    {
        id: 19,
        title: 'Rating',
        icon: "",
        link: "/rating"
    },
    // {
    //     id: 20,
    //     title: 'Timeline',
    //     icon: "",
    //     link: "/timeline"
    // },
    // {
    //     id: 21,
    //     title: 'Progress',
    //     icon: "",
    //     link: "/progress"
    // },
    // {
    //     id: 22,
    //     title: 'Table',
    //     icon: "",
    //     link: "/table"
    // },
    // {
    //     id: 23,
    //     title: 'Spinner',
    //     icon: "",
    //     link: "/spinner"
    // },
    {
        id: 24,
        title: 'Toast',
        icon: "",
        link: "/toast"
     },
//     {
//         id: 25,
//         title: 'Tooltip',
//         icon: "",
//         link: "/tooltip"
//  },
];
}


// --------------------
// Request: /layouts/custom.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// Dependencies: 

// --------------------
const $id_5a9caf4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".home-links a{margin-right:1rem}.bgGradient{background-image:url()}.fade-enter-active{-webkit-animation:fade-in .2s;animation:fade-in .2s}.fade-leave-active{-webkit-animation:fade-out .2s;animation:fade-out .2s}@-webkit-keyframes fade-in{0%{transform:translateY(10px)}to{transform:translateY(0)}}@keyframes fade-in{0%{transform:translateY(10px)}to{transform:translateY(0)}}@-webkit-keyframes fade-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}@keyframes fade-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}";
}


// --------------------
// Request: /layouts/full.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs ($id_21f18624)
// Dependencies: 
// - /components/Header.vue ($id_4e284fc3)
// - /components/Footer.vue ($id_f3d8f325)
// - /store/index.js ($id_3135ce2a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /layouts/full.vue?vue&type=style&index=0&lang.css ($id_daf11a6f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2ca7d6cb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Footer.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/store/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Header.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Footer.vue");

const _sfc_main = {
  components: { Header: __vite_ssr_import_3__.default, Footer: __vite_ssr_import_4__.default },
  metaInfo: {
    title: "Ortigan - Tailwind Component!",
  },
  data() {
    return {
      theme: "dark",
      store: __vite_ssr_import_2__.useStore(),
    };
  },
//   mounted() {
//     Prism.highlightAll(); // highlight your code on mount
//   },
  methods: {
    getPath() {
      return this.$route.path;
    },
  },
};

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __vite_ssr_import_0__.default
  const _component_Footer = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({
    class: [$data.store.theme === 'light' ? 'light' : 'dark', ""]
  }, _attrs))}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Header, null, null, _parent))
  _push(`<div class="dark:bg-[#121212] dark:text-gray-100 flex h-screen"><div class="container h-screen"><div class="flex w-full flex-col h-screen"><div class="flex w-full h-screen"><!-- Rest of the content --><main class="w-full h-screen overflow-y-hidden">`)
  __vite_ssr_import_6__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main></div></div></div></div><div class="">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/layouts/full.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/full.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/layouts/full.vue"]]);
}


// --------------------
// Request: /layouts/full.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /layouts/full.vue ($id_2ca7d6cb)
// Dependencies: 

// --------------------
const $id_daf11a6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".home-links a{margin-right:1rem}.bgGradient{background-image:url()}";
}


// --------------------
// Request: /components/Headers/Heading.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7aa6b9b6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="font-bold text-2xl">`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Headers/Heading.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Headers/Heading.vue"]]);
}


// --------------------
// Request: /components/Headers/SubHeading.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_65fe66b1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex justify-between py-2 mt-12" }, _attrs))}><div class="font-bold text-xl">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "subHeader", {}, null, _push, _parent)
  _push(`</div><div class="flex flex-row space-x-2"><div>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "code", {}, null, _push, _parent)
  _push(`</div><div>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "copy", {}, null, _push, _parent)
  _push(`</div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Headers/SubHeading.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Headers/SubHeading.vue"]]);
}


// --------------------
// Request: /components/Utils/ShowCodeButton.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b28ae97a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "cursor-pointer" }, _attrs))}><div class="flex items-center bg-gray-100 dark:bg-neutral-800 p-1 rounded"><span class="text-sm"></span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Utils/ShowCodeButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Utils/ShowCodeButton.vue"]]);
}


// --------------------
// Request: /components/Utils/HideCodeButton.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2ed55d76 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "cursor-pointer" }, _attrs))}><div class="flex items-center bg-gray-100 dark:bg-neutral-800 p-1 rounded"><span class="text-sm"></span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Utils/HideCodeButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Utils/HideCodeButton.vue"]]);
}


// --------------------
// Request: /components/Utils/ComponentPad.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_900fca01 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "pattern-dots-sm border border-gray-200 dark:border-[#2D2D2D] text-gray-200 dark:text-gray-900 bg-white dark:bg-[#212121] rounded-xl py-10 px-10 flex justify-center items-center" }, _attrs))}>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Utils/ComponentPad.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Utils/ComponentPad.vue"]]);
}


// --------------------
// Request: /components/Alert/DefaultAlert.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7cd7150c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-800",
          bgColor: "bg-gray-100",
        },
        {
          id: 2,
          type: "Dark",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
        },
        {
          id: 3,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
        },
      ],
      code: "",
      codeItems: [],
    };
  },
  
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: "w-full flex flex-col space-y-4",
    id: "contents"
  }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div role="alert" class="${
      __vite_ssr_import_1__.ssrRenderClass(`p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`)
    }"><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/DefaultAlert.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/DefaultAlert.vue"]]);
}


// --------------------
// Request: /components/Utils/CopyButton.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_07dc553f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Utils/CopyButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Utils/CopyButton.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/DefaultAlert.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_09a6c81e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code: `<!-- Default alert -->
<div class="w-full p-4 rounded-lg text-sm text-gray-800 bg-gray-100" role="alert">
    <span class="font-medium">Default alert!</span> A simple Default alert message
</div>
<!-- Dark alert -->
<div class="w-full p-4 rounded-lg text-sm text-gray-100 bg-gray-700" role="alert">
    <span class="font-medium">Default alert!</span> A simple Default alert message
</div>
<!-- Light alert -->
<div class="w-full p-4 rounded-lg text-sm text-zinc-400 bg-zinc-100" role="alert">
  <span class="font-medium">Default alert!</span> A simple Default alert message
</div>`,
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/DefaultAlert.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/DefaultAlert.vue"]]);
}


// --------------------
// Request: /components/Alert/StateAlert.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ac224165 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
          {
          id:1,
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
      },
          {
          id:2,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
      },
          {
          id:2,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
      },
          {
          id:2,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
      },
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div role="alert" class="${
      __vite_ssr_import_1__.ssrRenderClass(`p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`)
    }"><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/StateAlert.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/StateAlert.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/StateAlert.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_504619a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data(){
    return{
      code:`<!-- Info alert -->
<div class="w-full p-4 rounded-lg text-sm text-sky-700 bg-sky-100" role="alert">
  <span class="font-medium">Info alert!</span> A simple Info alert message
</div>
<!-- Success alert -->
<div class="w-full p-4 rounded-lg text-sm text-emerald-700 bg-emerald-100" role="alert">
  <span class="font-medium">Success alert!</span> A simple Success alert message
</div>
<!-- Warning alert -->
<div class="w-full p-4 rounded-lg text-sm text-amber-700 bg-amber-100" role="alert">
  <span class="font-medium">Warning alert!</span> A simple Warning alert message
</div>
<!-- Danger alert -->
<div class="w-full p-4 rounded-lg text-sm text-rose-700 bg-rose-100" role="alert">
  <span class="font-medium">Danger alert!</span> A simple Danger alert message
</div>`
    }
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/StateAlert.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/StateAlert.vue"]]);
}


// --------------------
// Request: /components/Alert/WithButton.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0a5527a0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
        },
        {
          id: 2,
          type: "Dark",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
        },
        {
          id: 2,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
        },
        //       {
        //       id:2,
        //       type:"Solid",
        //       textColor:"text-rose-700",
        //       bgColor:"bg-rose-100",
        //   },
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div class="${
      __vite_ssr_import_1__.ssrRenderClass(`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`)
    }"><div role="alert" class="${
      __vite_ssr_import_1__.ssrRenderClass(``)
    }"><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div><div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/WithButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/WithButton.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/WithButton.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_18599563 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code: `<!-- Snippet -->
      <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700" role="alert">
              <div>
                <span class="font-medium">Default alert!</span> A simple Default alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>            
            <!-- Dark alert -->
            <div class="flex justify-between rounded-lg bg-gray-700 p-4 text-sm text-gray-100" role="alert">
              <div>
                <span class="font-medium">Dark alert!</span> A simple Dark alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>
            <!-- Light alert -->
            <div class="flex justify-between rounded-lg bg-zinc-100 p-4 text-sm text-zinc-400" role="alert">
              <div>
                <span class="font-medium">Light alert!</span> A simple Light alert message
              </div>
              <div class="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              </div>
            </div>`,
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/WithButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/WithButton.vue"]]);
}


// --------------------
// Request: /components/Alert/AlertWithLink.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bee580ce = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
        },
        {
          id: 2,
          type: "Dark",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
        },
        {
          id: 2,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
        },
        //       {
        //       id:2,
        //       type:"Solid",
        //       textColor:"text-rose-700",
        //       bgColor:"bg-rose-100",
        //   },
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div class="${
      __vite_ssr_import_1__.ssrRenderClass(`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`)
    }"><div role="alert" class="${
      __vite_ssr_import_1__.ssrRenderClass(``)
    }"><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message. <a href="#" class="underline">Click here</a> to know more </div><div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/AlertWithLink.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/AlertWithLink.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/WithLink.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_997a1bb0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code: `
       <!-- Default alert-->
        <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
            <div role="alert" class=""><span class="font-medium">Default alert!</span> A simple Default alert message. <a href="#" class="underline">Click here</a> to know more</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <!-- Dark alert-->
        <div class="flex justify-between rounded-lg bg-gray-700 p-4 text-sm text-gray-100">
            <div role="alert" class=""><span class="font-medium">Dark alert!</span> A simple Dark alert message. <a href="#" class="underline">Click here</a> to know more</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <!-- Light alert-->
        <div class="flex justify-between rounded-lg bg-zinc-100 p-4 text-sm text-zinc-400">
            <div role="alert" class=""><span class="font-medium">Light alert!</span> A simple Light alert message. <a href="#" class="underline">Click here</a> to know more</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>`,
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/WithLink.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/WithLink.vue"]]);
}


// --------------------
// Request: /components/Alert/WithIcon.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_42230e3d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
        },
        {
          id: 2,
          type: "Dark",
          textColor: "text-gray-100",
          bgColor: "bg-gray-700",
        },
        {
          id: 3,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
        },
         {
          id:4,
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
      },
          {
          id:5,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
      },
          {
          id:6,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
      },
          {
          id:7,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
      },
        
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div class="${
      __vite_ssr_import_1__.ssrRenderClass(`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} rounded-lg`)
    }"><div class="flex items-center space-x-2"><div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div role="alert" class=""><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div></div><div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/WithIcon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/WithIcon.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/WithIcon.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_963e4cef = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code:` <!-- Default alert -->
            <div class="flex justify-between rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
            <div class="flex items-center space-x-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div role="alert"><span class="font-medium">Default alert!</span> A simple Default alert message</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            </div>            
            <!-- Dark alert -->
            <div class="flex justify-between rounded-lg bg-gray-700 p-4 text-sm text-gray-100">
                <div class="flex items-center space-x-2">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Dark alert!</span> A simple Dark alert message</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <!-- Light alert -->
            <div class="flex justify-between rounded-lg bg-zinc-100 p-4 text-sm text-zinc-400">
                <div class="flex items-center space-x-2">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Light alert!</span> A simple Light alert message</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <!-- Info alert -->
            <div class="flex justify-between rounded-lg bg-sky-100 p-4 text-sm text-sky-700">
                <div class="flex items-center space-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                 <div role="alert"><span class="font-medium">Info alert!</span> A simple Info alert message</div>
                 </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <!-- Success alert -->
            <div class="flex justify-between rounded-lg bg-emerald-100 p-4 text-sm text-emerald-700">
                <div class="flex items-center space-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                <div role="alert"><span class="font-medium">Success alert!</span> A simple Success alert message</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <!-- Warning alert -->
            <div class="flex justify-between rounded-lg bg-amber-100 p-4 text-sm text-amber-700">
              <div class="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Warning alert!</span> A simple Warning alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- Danger alert -->
            <div class="flex justify-between rounded-lg bg-rose-100 p-4 text-sm text-rose-700">
              <div class="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Danger alert!</span> A simple Danger alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>`
    }
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/WithIcon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/WithIcon.vue"]]);
}


// --------------------
// Request: /components/Alert/WithBorder.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a0fd24d4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
          borderColor:"border-t-2 border-gray-700"
        },
        // {
        //   id: 2,
        //   type: "Dark",
        //   textColor: "text-gray-100",
        //   bgColor: "bg-gray-700",
        //   borderColor:"border-2 border-gray-300"
        // },
        {
          id: 3,
          type: "Light",
          textColor: "text-zinc-400",
          bgColor: "bg-zinc-100",
          borderColor:"Border-t-2 border-slate-900"
        },
         {
          id:4,
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
          borderColor:"border-t-2 border-sky-700"
      },
          {
          id:5,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
          borderColor:"border-t-2 border-emerald-700"
      },
          {
          id:6,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
          borderColor:"border-t-2 border-amber-700"
      },
          {
          id:7,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
          borderColor:"border-t-2 border-rose-700"
      },
        
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div class="${
      __vite_ssr_import_1__.ssrRenderClass(`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} ${item.borderColor}`)
    }"><div class="flex space-x-2"><div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div role="alert" class=""><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div></div><div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/WithBorder.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/WithBorder.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/WithBorder.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_306f5908 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code: `
            <!--Default Alert with border -->
            <div class="flex justify-between border-t-2 border-gray-700 bg-gray-100 p-4 text-sm text-gray-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Default alert!</span> A simple Default alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!--Light Alert with border -->
            <div class="Border-t-2 flex justify-between border-slate-900 bg-zinc-100 p-4 text-sm text-zinc-400">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Light alert!</span> A simple Light alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!--Info Alert with border -->
            <div class="flex justify-between border-t-2 border-sky-700 bg-sky-100 p-4 text-sm text-sky-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Info alert!</span> A simple Info alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!--Success Alert with border -->
            <div class="flex justify-between border-t-2 border-emerald-700 bg-emerald-100 p-4 text-sm text-emerald-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Success alert!</span> A simple Success alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- Warning with border -->
            <div class="flex justify-between border-t-2 border-amber-700 bg-amber-100 p-4 text-sm text-amber-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Warning alert!</span> A simple Warning alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- Danger with border -->
            <div class="flex justify-between border-t-2 border-rose-700 bg-rose-100 p-4 text-sm text-rose-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Danger alert!</span> A simple Danger alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div> `,
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/WithBorder.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/WithBorder.vue"]]);
}


// --------------------
// Request: /components/Alert/BorderLeft.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1537de64 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      items: [
        {
          id: 1,
          type: "Default",
          textColor: "text-gray-700",
          bgColor: "bg-gray-100",
          borderColor:"border-l-2 border-gray-700"
        },
        // {
        //   id: 2,
        //   type: "Dark",
        //   textColor: "text-gray-100",
        //   bgColor: "bg-gray-700",
        //   borderColor:"border-2 border-gray-300"
        // },
        // {
        //   id: 3,
        //   type: "Light",
        //   textColor: "text-zinc-400",
        //   bgColor: "bg-zinc-100",
        //   borderColor:"Border-l-2 border-gray-900"
        // },
         {
          id:4,
          type:"Info",
          textColor:"text-sky-700",
          bgColor:"bg-sky-100",
          borderColor:"border-l-2 border-sky-700"
      },
          {
          id:5,
          type:"Success",
          textColor:"text-emerald-700",
          bgColor:"bg-emerald-100",
          borderColor:"border-l-2 border-emerald-700"
      },
          {
          id:6,
          type:"Warning",
          textColor:"text-amber-700",
          bgColor:"bg-amber-100",
          borderColor:"border-l-2 border-amber-700"
      },
          {
          id:7,
          type:"Danger",
          textColor:"text-rose-700",
          bgColor:"bg-rose-100",
          borderColor:"border-l-2 border-rose-700"
      },
        
      ],
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.items, (item, index) => {
    _push(`<span><div class="${
      __vite_ssr_import_1__.ssrRenderClass(`flex justify-between p-4 text-sm ${item.textColor} ${item.bgColor} ${item.borderColor}`)
    }"><div class="flex space-x-2"><div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div role="alert" class=""><span class="font-medium">${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert!</span> A simple ${
      __vite_ssr_import_1__.ssrInterpolate(item.type)
    } alert message </div></div><div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></span>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/BorderLeft.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/BorderLeft.vue"]]);
}


// --------------------
// Request: /components/Alert/Snippets/BorderLeft.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9b33b1f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      code:` 
             <!-- Default alert left border -->
            <div class="flex justify-between border-l-2 border-gray-700 bg-gray-100 p-4 text-sm text-gray-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Default alert!</span> A simple Default alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- Info alert left border -->
            <div class="flex justify-between border-l-2 border-sky-700 bg-sky-100 p-4 text-sm text-sky-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Info alert!</span> A simple Info alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>            
            <!-- success alert left border -->
            <div class="flex justify-between border-l-2 border-emerald-700 bg-emerald-100 p-4 text-sm text-emerald-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Success alert!</span> A simple Success alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- Warning alert left border -->
            <div class="flex justify-between border-l-2 border-amber-700 bg-amber-100 p-4 text-sm text-amber-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Warning alert!</span> A simple Warning alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!-- danger alert left border -->
            <div class="flex justify-between border-l-2 border-rose-700 bg-rose-100 p-4 text-sm text-rose-700">
              <div class="flex space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div role="alert"><span class="font-medium">Danger alert!</span> A simple Danger alert message</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
      `
    }
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<pre${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><code class="language-markup">
  ${
    __vite_ssr_import_0__.ssrInterpolate($data.code)
  }
</code>
</pre>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/Snippets/BorderLeft.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/Snippets/BorderLeft.vue"]]);
}


// --------------------
// Request: /components/Alert/AlertInfo.vue
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_df465372 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
data(){
return {
    itmes:[
            {
                id: 1,
                title: "Basic",
            },
            {
                id: 2,
                title: "Button pills",
            },
            {
                id: 3,
                title: "Gradient",
            },
            {
                id: 4,
                title: "Rounded",
            },
            {
                id: 5,
                title: "Social",
            },
            {
                id: 6,
                title: "Payment",
            },
            {
                id: 7,
                title: "Icon",
            },
            {
                id: 8,
                title: "Loader",
            },
    ]
}
}
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="flex flex-col mt-6 space-y-1"><div class="font-medium text-right">On this page</div><!--[-->`)
  __vite_ssr_import_0__.ssrRenderList($data.itmes, (item, index) => {
    _push(`<span><div class="text-base text-right">${__vite_ssr_import_0__.ssrInterpolate(item.title)}</div></span>`)
  })
  _push(`<!--]--><!-- <div class="text-base">Basic</div>
                  <div class="text-base">Button pills</div>
                  <div class="text-base">Gradient</div>
                  <div class="text-base">Rounded</div>
                  <div class="text-base">Social</div>
                  <div class="text-base">Payment</div>
                  <div class="text-base">Icon</div>
                  <div class="text-base">Loader</div> --></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Alert/AlertInfo.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/components/Alert/AlertInfo.vue"]]);
}


// --------------------
// Request: /pages/alerts.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/alerts.vue?macro=true ($id_07053f14)
// - /pages/alerts.vue ($id_392b88d4)
// Dependencies: 

// --------------------
const $id_7fc24c03 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".home-links a{margin-right:1rem}";
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&lang.css ($id_0b423cc4)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

const layout = "full"

const __returned__ = { layout }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_2__.mergeProps({ name: $setup.layout }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex relative"${
          _scopeId
        }><!-- content --><div class="flex-1 w-full flex justify-center items-center h-screen"${
          _scopeId
        }><div class="font-medium flex flex-col w-full text-7xl"${
          _scopeId
        }><div${
          _scopeId
        }>Tailwind</div><div${
          _scopeId
        }>for your next project</div><div class="w-fit text-base text-white bg-[#0A0C25]"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, { to: "/alerts" }, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Get started `)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(" Get started ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div></div><!-- right sidebar --></div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", { class: "flex relative" }, [
            __vite_ssr_import_2__.createCommentVNode(" content "),
            __vite_ssr_import_2__.createVNode("div", { class: "flex-1 w-full flex justify-center items-center h-screen" }, [
              __vite_ssr_import_2__.createVNode("div", { class: "font-medium flex flex-col w-full text-7xl" }, [
                __vite_ssr_import_2__.createVNode("div", null, "Tailwind"),
                __vite_ssr_import_2__.createVNode("div", null, "for your next project"),
                __vite_ssr_import_2__.createVNode("div", { class: "w-fit text-base text-white bg-[#0A0C25]" }, [
                  __vite_ssr_import_2__.createVNode(_component_nuxt_link, { to: "/alerts" }, {
                    default: __vite_ssr_import_2__.withCtx(() => [
                      __vite_ssr_import_2__.createTextVNode(" Get started ")
                    ]),
                    _: 1 /* STABLE */
                  })
                ])
              ])
            ]),
            __vite_ssr_import_2__.createCommentVNode(" right sidebar ")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_0b423cc4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".home-links a{margin-right:1rem}";
}


// --------------------
// Request: /pages/About.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4fd34246 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  metaInfo: {
    title: 'About us'
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = __vite_ssr_import_0__.resolveComponent("Layout")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Layout, _attrs, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${
          _scopeId
        }>About us</h1><p${
          _scopeId
        }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>`)
      } else {
        return [
          __vite_ssr_import_0__.createVNode("h1", null, "About us"),
          __vite_ssr_import_0__.createVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/About.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/About.vue"]]);
}


// --------------------
// Request: /pages/alerts.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /components/Headers/Heading.vue ($id_7aa6b9b6)
// - /components/Headers/SubHeading.vue ($id_65fe66b1)
// - /components/Utils/ShowCodeButton.vue ($id_b28ae97a)
// - /components/Utils/HideCodeButton.vue ($id_2ed55d76)
// - /components/Utils/ComponentPad.vue ($id_900fca01)
// - /components/Alert/DefaultAlert.vue ($id_7cd7150c)
// - /components/Utils/CopyButton.vue ($id_07dc553f)
// - /components/Alert/Snippets/DefaultAlert.vue ($id_09a6c81e)
// - /components/Alert/StateAlert.vue ($id_ac224165)
// - /components/Alert/Snippets/StateAlert.vue ($id_504619a8)
// - /components/Alert/WithButton.vue ($id_0a5527a0)
// - /components/Alert/Snippets/WithButton.vue ($id_18599563)
// - /components/Alert/AlertWithLink.vue ($id_bee580ce)
// - /components/Alert/Snippets/WithLink.vue ($id_997a1bb0)
// - /components/Alert/WithIcon.vue ($id_42230e3d)
// - /components/Alert/Snippets/WithIcon.vue ($id_963e4cef)
// - /components/Alert/WithBorder.vue ($id_a0fd24d4)
// - /components/Alert/Snippets/WithBorder.vue ($id_306f5908)
// - /components/Alert/BorderLeft.vue ($id_1537de64)
// - /components/Alert/Snippets/BorderLeft.vue ($id_9b33b1f5)
// - /components/Alert/AlertInfo.vue ($id_df465372)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/alerts.vue?vue&type=style&index=0&lang.css ($id_7fc24c03)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_392b88d4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Headers/Heading.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Headers/SubHeading.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Utils/ShowCodeButton.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Utils/HideCodeButton.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Utils/ComponentPad.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Alert/DefaultAlert.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Utils/CopyButton.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/Alert/Snippets/DefaultAlert.vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/Alert/StateAlert.vue");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/Alert/Snippets/StateAlert.vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/components/Alert/WithButton.vue");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/components/Alert/Snippets/WithButton.vue");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/components/Alert/AlertWithLink.vue");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/components/Alert/Snippets/WithLink.vue");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/components/Alert/WithIcon.vue");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/components/Alert/Snippets/WithIcon.vue");

const __vite_ssr_import_17__ = await __vite_ssr_import__("/components/Alert/WithBorder.vue");

const __vite_ssr_import_18__ = await __vite_ssr_import__("/components/Alert/Snippets/WithBorder.vue");

const __vite_ssr_import_19__ = await __vite_ssr_import__("/components/Alert/BorderLeft.vue");

const __vite_ssr_import_20__ = await __vite_ssr_import__("/components/Alert/Snippets/BorderLeft.vue");


const __vite_ssr_import_21__ = await __vite_ssr_import__("/components/Headers/SubHeading.vue");

const __vite_ssr_import_22__ = await __vite_ssr_import__("/components/Alert/AlertInfo.vue");

const __vite_ssr_import_23__ = await __vite_ssr_import__("/components/Headers/Heading.vue");

const _sfc_main = {
  metaInfo: {
    title: "Alerts",
  },
  components: {
    AlertInfo: __vite_ssr_import_22__.default,
    Heading: __vite_ssr_import_23__.default,
    SubHeading: __vite_ssr_import_21__.default,
},
  data() {
    return {
      layout: "custom",
      default_alert: false,
      statecolor_alert: false,
      with_button: false,
      alert_wlink: false,
      alert_wicon: false,
      alert_wborder: false,
      alert_wleftborder: false,
      // SCROLL
      activeScrollSection: "",
      sample: "",
    };
  },
  methods: {
    scrollToSection(section) {
      this.activeScrollSection = section;
      document.getElementById("alertContainer").scrollTo({
        top: document.getElementById(`${section}`).offsetTop - 100,
        behavior: "smooth",
      });
      // this.$router.push(`/alerts/#${this.activeScrollSection}`)
    },
    copyToClipboard(id) {
      this.$bus.$emit("showToastNotification")
      this.$globalCopyFunc(id);
    },

  },
};

const __vite_ssr_import_24__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_25__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_HeadersHeading = __vite_ssr_import_1__.default
  const _component_HeadersSubHeading = __vite_ssr_import_2__.default
  const _component_UtilsShowCodeButton = __vite_ssr_import_3__.default
  const _component_UtilsHideCodeButton = __vite_ssr_import_4__.default
  const _component_UtilsComponentPad = __vite_ssr_import_5__.default
  const _component_AlertDefaultAlert = __vite_ssr_import_6__.default
  const _component_UtilsCopyButton = __vite_ssr_import_7__.default
  const _component_AlertSnippetsDefaultAlert = __vite_ssr_import_8__.default
  const _component_AlertStateAlert = __vite_ssr_import_9__.default
  const _component_AlertSnippetsStateAlert = __vite_ssr_import_10__.default
  const _component_AlertWithButton = __vite_ssr_import_11__.default
  const _component_AlertSnippetsWithButton = __vite_ssr_import_12__.default
  const _component_AlertWithLink = __vite_ssr_import_13__.default
  const _component_AlertSnippetsWithLink = __vite_ssr_import_14__.default
  const _component_AlertWithIcon = __vite_ssr_import_15__.default
  const _component_AlertSnippetsWithIcon = __vite_ssr_import_16__.default
  const _component_AlertWithBorder = __vite_ssr_import_17__.default
  const _component_AlertSnippetsWithBorder = __vite_ssr_import_18__.default
  const _component_AlertBorderLeft = __vite_ssr_import_19__.default
  const _component_AlertSnippetsBorderLeft = __vite_ssr_import_20__.default

  _push(__vite_ssr_import_25__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_24__.mergeProps({ name: $data.layout }, _attrs), {
    default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex p-4"${
          _scopeId
        }><!-- content --><div class="flex pb-20 h-screen px-4 overflow-y-hidden scrollBar"${
          _scopeId
        }><div class="overflow-y-auto w-full px-4 pb-20" id="alertContainer"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersHeading, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Alert `)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode(" Alert ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div${
          _scopeId
        }><p class="text-base"${
          _scopeId
        }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam? </p></div><!-- Default alert --><section id="defaultAlert" class="w-full"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Default alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("Default alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.default_alert) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.default_alert = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.default_alert = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.default_alert)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.default_alert = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.default_alert = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertDefaultAlert, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertDefaultAlert)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.default_alert) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('defaultAlertComp'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsDefaultAlert, { id: "defaultAlertComp" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End default alert --><!-- stateColorAlert --><section id="stateColorAlert  " class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`State color alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("State color alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.statecolor_alert) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.statecolor_alert = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.statecolor_alert = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.statecolor_alert)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.statecolor_alert = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.statecolor_alert = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertStateAlert, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertStateAlert)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.statecolor_alert) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('stateColorAlertComp'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsStateAlert, { id: "stateColorAlertComp" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End state color alert --><!-- With button alert start --><section id="withBtnAlert" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With button alert`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With button alert")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.with_button) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.with_button = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.with_button = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.with_button)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.with_button = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.with_button = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithButton, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithButton)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.with_button) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithButton'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithButton, { id: "alertWithButton" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with button alert --><!-- With Link alert --><section id="withLink" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Link`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Link")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wlink) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wlink = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wlink = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wlink)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wlink = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wlink = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithLink, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithLink)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wlink) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithLink'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithLink, { id: "alertWithLink" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with link alert --><!-- alert With Icon --><section id="stateColorAlert" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`Alert with Icon`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("Alert with Icon")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wicon) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wicon = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wicon = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wicon)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wicon = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wicon = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithIcon, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithIcon)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wicon) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithIcon'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithIcon, { id: "alertWithIcon" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with icon alert --><!-- alert With border --><section id="alertWithBorder" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Border`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Border")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wborder) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wborder = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wborder = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wborder)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wborder = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wborder = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertWithBorder, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertWithBorder)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wborder) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertWithIcon'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsWithBorder, { id: "alertWithIcon" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with border alert --><!-- alert With left border --><section id="borderLeft" class="w-full"${_scopeId}>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_HeadersSubHeading, null, {
          subHeader: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`With Left Border`)
            } else {
              return [
                __vite_ssr_import_24__.createTextVNode("With Left Border")
              ]
            }
          }),
          code: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              if (!$data.alert_wleftborder) {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsShowCodeButton, {
                  onClick: $event => ($data.alert_wleftborder = true)
                }, null, _parent, _scopeId))
              } else {
                _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsHideCodeButton, {
                  onClick: $event => ($data.alert_wleftborder = false)
                }, null, _parent, _scopeId))
              }
            } else {
              return [
                (!$data.alert_wleftborder)
                  ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                      key: 0,
                      onClick: $event => ($data.alert_wleftborder = true)
                    }, null, 8 /* PROPS */, ["onClick"]))
                  : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                      key: 1,
                      onClick: $event => ($data.alert_wleftborder = false)
                    }, null, 8 /* PROPS */, ["onClick"]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsComponentPad, null, {
          default: __vite_ssr_import_24__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertBorderLeft, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_24__.createVNode(_component_AlertBorderLeft)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<!-- code snippet --><div style="${
          __vite_ssr_import_25__.ssrRenderStyle(($data.alert_wleftborder) ? null : { display: "none" })
        }" class="transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"${
          _scopeId
        }><div class="flex justify-between px-2 pt-2"${
          _scopeId
        }><div${
          _scopeId
        }> HTML </div><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_UtilsCopyButton, {
          onClick: $event => ($options.copyToClipboard('alertBorderLeft'))
        }, null, _parent, _scopeId))
        _push(`</div></div>`)
        _push(__vite_ssr_import_25__.ssrRenderComponent(_component_AlertSnippetsBorderLeft, { id: "alertBorderLeft" }, null, _parent, _scopeId))
        _push(`</div><!-- code snippet end --></section><!-- End with left border alert --></div></div><!-- right sidebar --><div class="hidden lg:block"${
          _scopeId
        }><div class="w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2"${
          _scopeId
        }><div class="overflow-y-auto"${
          _scopeId
        }><!-- <AlertInfo /> --><div class="flex flex-col justify-start items-end space-y-2"${
          _scopeId
        }><p class="text-normal font-bold"${
          _scopeId
        }>On This Page</p><button${
          _scopeId
        }> Default Alert </button><button${
          _scopeId
        }> State Color Alert </button><button${
          _scopeId
        }> With Button Alert </button><button${
          _scopeId
        }> Alert With Link </button><button${
          _scopeId
        }> Alert With Icon </button><button${
          _scopeId
        }> Alert With Border </button><button class="flex flex-row"${
          _scopeId
        }> Alert With Left-Border </button></div></div></div></div></div>`)
      } else {
        return [
          __vite_ssr_import_24__.createVNode("div", { class: "flex p-4" }, [
            __vite_ssr_import_24__.createCommentVNode(" content "),
            __vite_ssr_import_24__.createVNode("div", { class: "flex pb-20 h-screen px-4 overflow-y-hidden scrollBar" }, [
              __vite_ssr_import_24__.createVNode("div", {
                class: "overflow-y-auto w-full px-4 pb-20",
                id: "alertContainer"
              }, [
                __vite_ssr_import_24__.createVNode(_component_HeadersHeading, null, {
                  default: __vite_ssr_import_24__.withCtx(() => [
                    __vite_ssr_import_24__.createTextVNode(" Alert ")
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_24__.createVNode("div", null, [
                  __vite_ssr_import_24__.createVNode("p", { class: "text-base" }, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias optio quam architecto culpa unde accusamus illo error neque explicabo, numquam ut, qui eligendi magnam non quis fugiat impedit dolore aliquam? ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" Default alert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "defaultAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("Default alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.default_alert)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.default_alert = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.default_alert = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertDefaultAlert)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('defaultAlertComp'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsDefaultAlert, { id: "defaultAlertComp" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.default_alert]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End default alert "),
                __vite_ssr_import_24__.createCommentVNode(" stateColorAlert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "stateColorAlert  ",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("State color alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.statecolor_alert)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.statecolor_alert = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.statecolor_alert = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertStateAlert)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('stateColorAlertComp'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsStateAlert, { id: "stateColorAlertComp" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.statecolor_alert]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End state color alert "),
                __vite_ssr_import_24__.createCommentVNode(" With button alert start "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "withBtnAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With button alert")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.with_button)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.with_button = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.with_button = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithButton)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithButton'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithButton, { id: "alertWithButton" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.with_button]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with button alert "),
                __vite_ssr_import_24__.createCommentVNode(" With Link alert "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "withLink",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Link")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wlink)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wlink = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wlink = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithLink)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithLink'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithLink, { id: "alertWithLink" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wlink]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with link alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With Icon "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "stateColorAlert",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("Alert with Icon")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wicon)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wicon = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wicon = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithIcon)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithIcon'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithIcon, { id: "alertWithIcon" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wicon]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with icon alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With border "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "alertWithBorder",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Border")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wborder)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wborder = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wborder = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertWithBorder)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertWithIcon'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsWithBorder, { id: "alertWithIcon" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wborder]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with border alert "),
                __vite_ssr_import_24__.createCommentVNode(" alert With left border "),
                __vite_ssr_import_24__.createVNode("section", {
                  id: "borderLeft",
                  class: "w-full"
                }, [
                  __vite_ssr_import_24__.createVNode(_component_HeadersSubHeading, null, {
                    subHeader: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createTextVNode("With Left Border")
                    ]),
                    code: __vite_ssr_import_24__.withCtx(() => [
                      (!$data.alert_wleftborder)
                        ? (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsShowCodeButton, {
                            key: 0,
                            onClick: $event => ($data.alert_wleftborder = true)
                          }, null, 8 /* PROPS */, ["onClick"]))
                        : (__vite_ssr_import_24__.openBlock(), __vite_ssr_import_24__.createBlock(_component_UtilsHideCodeButton, {
                            key: 1,
                            onClick: $event => ($data.alert_wleftborder = false)
                          }, null, 8 /* PROPS */, ["onClick"]))
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createVNode(_component_UtilsComponentPad, null, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.createVNode(_component_AlertBorderLeft)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet "),
                  __vite_ssr_import_24__.createVNode(__vite_ssr_import_24__.Transition, {
                    name: "fadeSnippet",
                    persisted: ""
                  }, {
                    default: __vite_ssr_import_24__.withCtx(() => [
                      __vite_ssr_import_24__.withDirectives(__vite_ssr_import_24__.createVNode("div", { class: "transition-all mt-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg" }, [
                        __vite_ssr_import_24__.createVNode("div", { class: "flex justify-between px-2 pt-2" }, [
                          __vite_ssr_import_24__.createVNode("div", null, " HTML "),
                          __vite_ssr_import_24__.createVNode("div", null, [
                            __vite_ssr_import_24__.createVNode(_component_UtilsCopyButton, {
                              onClick: $event => ($options.copyToClipboard('alertBorderLeft'))
                            }, null, 8 /* PROPS */, ["onClick"])
                          ])
                        ]),
                        __vite_ssr_import_24__.createVNode(_component_AlertSnippetsBorderLeft, { id: "alertBorderLeft" })
                      ], 512 /* NEED_PATCH */), [
                        [__vite_ssr_import_24__.vShow, $data.alert_wleftborder]
                      ])
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_24__.createCommentVNode(" code snippet end ")
                ]),
                __vite_ssr_import_24__.createCommentVNode(" End with left border alert ")
              ])
            ]),
            __vite_ssr_import_24__.createCommentVNode(" right sidebar "),
            __vite_ssr_import_24__.createVNode("div", { class: "hidden lg:block" }, [
              __vite_ssr_import_24__.createVNode("div", { class: "w-40 flex flex-col min-h-screen overflow-y-hidden text-sm py-2" }, [
                __vite_ssr_import_24__.createVNode("div", { class: "overflow-y-auto" }, [
                  __vite_ssr_import_24__.createCommentVNode(" <AlertInfo /> "),
                  __vite_ssr_import_24__.createVNode("div", { class: "flex flex-col justify-start items-end space-y-2" }, [
                    __vite_ssr_import_24__.createVNode("p", { class: "text-normal font-bold" }, "On This Page"),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('defaultAlert'))
                    }, " Default Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('stateColorAlert'))
                    }, " State Color Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('withBtnAlert'))
                    }, " With Button Alert ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('withLink'))
                    }, " Alert With Link ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('alertWithIcon'))
                    }, " Alert With Icon ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('alertWithBorder'))
                    }, " Alert With Border ", 8 /* PROPS */, ["onClick"]),
                    __vite_ssr_import_24__.createVNode("button", {
                      onClick: $event => ($options.scrollToSection('borderLeft')),
                      class: "flex flex-row"
                    }, " Alert With Left-Border ", 8 /* PROPS */, ["onClick"])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_26__ = await __vite_ssr_import__("/pages/alerts.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_27__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_27__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/alerts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_28__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_28__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/alerts.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs ($id_f44322c8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&lang.css ($id_0b423cc4)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

const layout = "full"

const __returned__ = { layout }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_2__.mergeProps({ name: $setup.layout }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex relative"${
          _scopeId
        }><!-- content --><div class="flex-1 w-full flex justify-center items-center h-screen"${
          _scopeId
        }><div class="font-medium flex flex-col w-full text-7xl"${
          _scopeId
        }><div${
          _scopeId
        }>Tailwind</div><div${
          _scopeId
        }>for your next project</div><div class="w-fit text-base text-white bg-[#0A0C25]"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, { to: "/alerts" }, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Get started `)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(" Get started ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div></div><!-- right sidebar --></div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", { class: "flex relative" }, [
            __vite_ssr_import_2__.createCommentVNode(" content "),
            __vite_ssr_import_2__.createVNode("div", { class: "flex-1 w-full flex justify-center items-center h-screen" }, [
              __vite_ssr_import_2__.createVNode("div", { class: "font-medium flex flex-col w-full text-7xl" }, [
                __vite_ssr_import_2__.createVNode("div", null, "Tailwind"),
                __vite_ssr_import_2__.createVNode("div", null, "for your next project"),
                __vite_ssr_import_2__.createVNode("div", { class: "w-fit text-base text-white bg-[#0A0C25]" }, [
                  __vite_ssr_import_2__.createVNode(_component_nuxt_link, { to: "/alerts" }, {
                    default: __vite_ssr_import_2__.withCtx(() => [
                      __vite_ssr_import_2__.createTextVNode(" Get started ")
                    ]),
                    _: 1 /* STABLE */
                  })
                ])
              ])
            ]),
            __vite_ssr_import_2__.createCommentVNode(" right sidebar ")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/pages/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_2a66e4bb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_9707a1d9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs ($id_80bc857d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_8479a5fe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  if (__vite_ssr_import_1__.isVue2) {
    inject("pinia", pinia);
  } else {
    context.provide("pinia", pinia);
  }
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs ($id_8479a5fe)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/root-component.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_75efd87a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/root-component.mjs ($id_75efd87a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/error-component.mjs ($id_71dc3d8e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_71dc3d8e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/error-component.mjs ($id_71dc3d8e)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_49d4941d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs ($id_49d4941d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/app-component.mjs
// Parents: 
// - G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry ($id_55ca067f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// --------------------
const $id_70325738 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/app-component.mjs ($id_70325738)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c61010f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
  "G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry": $id_55ca067f,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/paths.mjs": $id_2f93b0be,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/css.mjs": $id_790bc42f,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/plugins/server.mjs": $id_80bc857d,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/components.plugin.mjs": $id_df08b929,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/meta.config.mjs": $id_7e65ac9b,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/routes.mjs": $id_f44322c8,
  "/pages/About.vue?macro=true": $id_b79d0c53,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/alerts.vue?macro=true": $id_07053f14,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/layouts.mjs": $id_21f18624,
  "/layouts/custom.vue": $id_d158cf1f,
  "/components/Utils/Toast.vue": $id_1423e7ad,
  "/components/Header.vue": $id_4e284fc3,
  "/store/index.js": $id_3135ce2a,
  "/node_modules/pinia/dist/pinia.mjs": $id_b1920624,
  "/components/Footer.vue": $id_f3d8f325,
  "/components/Navigation/MenuItems.js": $id_3f5e6989,
  "/layouts/custom.vue?vue&type=style&index=0&lang.css": $id_5a9caf4e,
  "/layouts/full.vue": $id_2ca7d6cb,
  "/layouts/full.vue?vue&type=style&index=0&lang.css": $id_daf11a6f,
  "/components/Headers/Heading.vue": $id_7aa6b9b6,
  "/components/Headers/SubHeading.vue": $id_65fe66b1,
  "/components/Utils/ShowCodeButton.vue": $id_b28ae97a,
  "/components/Utils/HideCodeButton.vue": $id_2ed55d76,
  "/components/Utils/ComponentPad.vue": $id_900fca01,
  "/components/Alert/DefaultAlert.vue": $id_7cd7150c,
  "/components/Utils/CopyButton.vue": $id_07dc553f,
  "/components/Alert/Snippets/DefaultAlert.vue": $id_09a6c81e,
  "/components/Alert/StateAlert.vue": $id_ac224165,
  "/components/Alert/Snippets/StateAlert.vue": $id_504619a8,
  "/components/Alert/WithButton.vue": $id_0a5527a0,
  "/components/Alert/Snippets/WithButton.vue": $id_18599563,
  "/components/Alert/AlertWithLink.vue": $id_bee580ce,
  "/components/Alert/Snippets/WithLink.vue": $id_997a1bb0,
  "/components/Alert/WithIcon.vue": $id_42230e3d,
  "/components/Alert/Snippets/WithIcon.vue": $id_963e4cef,
  "/components/Alert/WithBorder.vue": $id_a0fd24d4,
  "/components/Alert/Snippets/WithBorder.vue": $id_306f5908,
  "/components/Alert/BorderLeft.vue": $id_1537de64,
  "/components/Alert/Snippets/BorderLeft.vue": $id_9b33b1f5,
  "/components/Alert/AlertInfo.vue": $id_df465372,
  "/pages/alerts.vue?vue&type=style&index=0&lang.css": $id_7fc24c03,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/index.vue?vue&type=style&index=0&lang.css": $id_0b423cc4,
  "/pages/About.vue": $id_4fd34246,
  "/pages/alerts.vue": $id_392b88d4,
  "/pages/index.vue": $id_cca58e97,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/router.options.mjs": $id_2a66e4bb,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/middleware.mjs": $id_9707a1d9,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/dist.plugin.a7948c32.mjs": $id_8479a5fe,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/root-component.mjs": $id_75efd87a,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/error-component.mjs": $id_71dc3d8e,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/imports.mjs": $id_49d4941d,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:G:/Ortigan/tailwind component nuxt3/tailwind-library/.nuxt/app-component.mjs": $id_70325738,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_6c61010f
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/app/entry")