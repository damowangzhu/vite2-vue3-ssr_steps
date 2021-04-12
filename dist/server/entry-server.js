"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var vuex = require("vuex");
var vueRouter = require("vue-router");
var _sfc_main$3 = vue.defineComponent({});
var App_vue_vue_type_style_index_0_lang = "#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}";
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home |`);
      } else {
        return [
          vue.createTextVNode("Home |")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/about"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`<!--]-->`);
}
_sfc_main$3.ssrRender = _sfc_ssrRender$3;
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/abc/A/vite2-vue3-ssr_steps/src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function createStore() {
  return vuex.createStore({
    state: {
      message: "Hello vite2 vue3 ssr"
    },
    mutations: {},
    actions: {
      fetchMessage: ({state}) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            state.message = "Hello vite2 vue3 ssr typescript scss vuex vue-router";
            resolve(0);
          }, 200);
        });
      }
    },
    modules: {}
  });
}
function createRouter() {
  const routerHistory = vueRouter.createMemoryHistory();
  return vueRouter.createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "home",
        component: () => Promise.resolve().then(function() {
          return Home;
        }),
        meta: {
          title: "Home title"
        }
      },
      {
        path: "/about",
        name: "about",
        component: () => Promise.resolve().then(function() {
          return About;
        })
      },
      {
        path: "/:catchAll(.*)*",
        name: "404",
        component: () => Promise.resolve().then(function() {
          return _404;
        }),
        meta: {
          title: "404 Not Found"
        }
      }
    ]
  });
}
/*!
 /**
  * vuex-router-sync v6.0.0-rc.1
  * (c) 2021 Evan You
  * @license MIT
  */
function sync(store, router, options) {
  const moduleName = (options || {}).moduleName || "route";
  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute.value),
    mutations: {
      ROUTE_CHANGED(_state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from);
      }
    }
  });
  let isTimeTraveling = false;
  let currentPath;
  const storeUnwatch = store.watch((state) => state[moduleName], (route) => {
    const {fullPath} = route;
    if (fullPath === currentPath) {
      return;
    }
    if (currentPath != null) {
      isTimeTraveling = true;
      router.push(route);
    }
    currentPath = fullPath;
  }, {flush: "sync"});
  const afterEachUnHook = router.afterEach((to, from) => {
    if (isTimeTraveling) {
      isTimeTraveling = false;
      return;
    }
    currentPath = to.fullPath;
    store.commit(moduleName + "/ROUTE_CHANGED", {to, from});
  });
  return function unsync() {
    afterEachUnHook();
    storeUnwatch();
    store.unregisterModule(moduleName);
  };
}
function cloneRoute(to, from) {
  const clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  };
  if (from) {
    clone.from = cloneRoute(from);
  }
  return Object.freeze(clone);
}
async function render(url, manifest) {
  const router = createRouter();
  const store = createStore();
  sync(store, router);
  const app = vue.createSSRApp(_sfc_main$3);
  app.use(router).use(store);
  router.push(url);
  await router.isReady();
  const to = router.currentRoute;
  const matchedRoute = to.value.matched;
  if (to.value.matched.length === 0) {
    return "";
  }
  const matchedComponents = [];
  matchedRoute.map((route) => {
    matchedComponents.push(...Object.values(route.components));
  });
  const asyncDataFuncs = matchedComponents.map((component) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config = {
        store,
        route: to
      };
      return asyncData(config);
    }
  });
  await Promise.all(asyncDataFuncs);
  const context = {};
  const appHtml = await serverRenderer.renderToString(app, context);
  const state = store.state;
  return {appHtml, state};
}
var _sfc_main$2 = vue.defineComponent({
  setup() {
    const store = vuex.useStore();
    return {store};
  },
  asyncData({store}) {
    return store.dispatch("fetchMessage");
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div>Home Page</div><div>${serverRenderer.ssrInterpolate(_ctx.store.state.message)}</div><!--]-->`);
}
_sfc_main$2.ssrRender = _sfc_ssrRender$2;
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/abc/A/vite2-vue3-ssr_steps/src/views/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$2
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>About Page</div>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/abc/A/vite2-vue3-ssr_steps/src/views/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var About = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$1
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>404 NOT FOUND</div>`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/abc/A/vite2-vue3-ssr_steps/src/views/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main
});
exports.render = render;
