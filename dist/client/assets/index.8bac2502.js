import{d as t,c as e,a as o,F as n,o as r,w as i,r as s,b as a,e as c,f as u,i as l,g as p,h,s as f,j as d}from"./vendor.77a10beb.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(o){const n=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((o,i)=>{const s=new URL(t,n);if(self[e].moduleMap[s])return o(self[e].moduleMap[s]);const a=new Blob([`import * as m from '${s}';`,`${e}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){i(new Error(`Failed to import: ${t}`)),r(c)},onload(){o(self[e].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[e].moduleMap={}}}("/assets/");var m=t({});const _=a("Home |"),v=a("About");m.render=function(t,a,c,u,l,p){const h=s("router-link"),f=s("router-view");return r(),e(n,null,[o(h,{to:"/"},{default:i((()=>[_])),_:1}),o(h,{to:"/about"},{default:i((()=>[v])),_:1}),o(f)],64)};function g(t){return void 0===t&&(t=null),l(null!==t?t:"store")}var y=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function b(t,e){Object.keys(t).forEach((function(o){return e(t[o],o)}))}var w=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var o=t.state;this.state=("function"==typeof o?o():o)||{}},O={namespaced:{configurable:!0}};O.namespaced.get=function(){return!!this._rawModule.namespaced},w.prototype.addChild=function(t,e){this._children[t]=e},w.prototype.removeChild=function(t){delete this._children[t]},w.prototype.getChild=function(t){return this._children[t]},w.prototype.hasChild=function(t){return t in this._children},w.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},w.prototype.forEachChild=function(t){b(this._children,t)},w.prototype.forEachGetter=function(t){this._rawModule.getters&&b(this._rawModule.getters,t)},w.prototype.forEachAction=function(t){this._rawModule.actions&&b(this._rawModule.actions,t)},w.prototype.forEachMutation=function(t){this._rawModule.mutations&&b(this._rawModule.mutations,t)},Object.defineProperties(w.prototype,O);var E=function(t){this.register([],t,!1)};function j(t,e,o){if(e.update(o),o.modules)for(var n in o.modules){if(!e.getChild(n))return;j(t.concat(n),e.getChild(n),o.modules[n])}}E.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},E.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,o){return t+((e=e.getChild(o)).namespaced?o+"/":"")}),"")},E.prototype.update=function(t){j([],this.root,t)},E.prototype.register=function(t,e,o){var n=this;void 0===o&&(o=!0);var r=new w(e,o);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&b(e.modules,(function(e,r){n.register(t.concat(r),e,o)}))},E.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1],n=e.getChild(o);n&&n.runtime&&e.removeChild(o)},E.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];return!!e&&e.hasChild(o)};var C=function(t){var e=this;void 0===t&&(t={});var o=t.plugins;void 0===o&&(o=[]);var n=t.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new E(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null);var r=this,i=this.dispatch,s=this.commit;this.dispatch=function(t,e){return i.call(r,t,e)},this.commit=function(t,e,o){return s.call(r,t,e,o)},this.strict=n;var a=this._modules.root.state;A(this,a,[],this._modules.root),k(this,a),o.forEach((function(t){return t(e)})),(void 0===t.devtools||t.devtools)&&function(t){y&&(t._devtoolHook=y,y.emit("vuex:init",t),y.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){y.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){y.emit("vuex:action",t,e)}),{prepend:!0}))}(this)},M={state:{configurable:!0}};function L(t,e,o){return e.indexOf(t)<0&&(o&&o.prepend?e.unshift(t):e.push(t)),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}}function P(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;A(t,o,[],t._modules.root,!0),k(t,o,e)}function k(t,e,o){var n=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};b(r,(function(e,o){i[o]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,o,{get:function(){return i[o]()},enumerable:!0})})),t._state=u({data:e}),t.strict&&function(t){c((function(){return t._state.data}),(function(){}),{deep:!0,flush:"sync"})}(t),n&&o&&t._withCommit((function(){n.data=null}))}function A(t,e,o,n,r){var i=!o.length,s=t._modules.getNamespace(o);if(n.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=n),!i&&!r){var a=G(e,o.slice(0,-1)),c=o[o.length-1];t._withCommit((function(){a[c]=n.state}))}var u=n.context=function(t,e,o){var n=""===e,r={dispatch:n?t.dispatch:function(o,n,r){var i=S(o,n,r),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:n?t.commit:function(o,n,r){var i=S(o,n,r),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var o={},n=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,n)===e){var i=r.slice(n);Object.defineProperty(o,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=o}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return G(t.state,o)}}}),r}(t,s,o);n.forEachMutation((function(e,o){!function(t,e,o,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){o.call(t,n.state,e)}))}(t,s+o,e,u)})),n.forEachAction((function(e,o){var n=e.root?o:s+o,r=e.handler||e;!function(t,e,o,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var r,i=o.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(r=i)&&"function"==typeof r.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,r,u)})),n.forEachGetter((function(e,o){!function(t,e,o,n){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return o(n.state,n.getters,t.state,t.getters)}}(t,s+o,e,u)})),n.forEachChild((function(n,i){A(t,e,o.concat(i),n,r)}))}function G(t,e){return e.reduce((function(t,e){return t[e]}),t)}function S(t,e,o){var n;return null!==(n=t)&&"object"==typeof n&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}let R;C.prototype.install=function(t,e){t.provide(e||"store",this),t.config.globalProperties.$store=this},M.state.get=function(){return this._state.data},M.state.set=function(t){},C.prototype.commit=function(t,e,o){var n=this,r=S(t,e,o),i=r.type,s=r.payload,a={type:i,payload:s},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,n.state)})))},C.prototype.dispatch=function(t,e){var o=this,n=S(t,e),r=n.type,i=n.payload,s={type:r,payload:i},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,o.state)}))}catch(u){}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{o._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,o.state)}))}catch(u){}t(e)}),(function(t){try{o._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,o.state,t)}))}catch(u){}e(t)}))}))}},C.prototype.subscribe=function(t,e){return L(t,this._subscribers,e)},C.prototype.subscribeAction=function(t,e){return L("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},C.prototype.watch=function(t,e,o){var n=this;return c((function(){return t(n.state,n.getters)}),e,Object.assign({},o))},C.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},C.prototype.registerModule=function(t,e,o){void 0===o&&(o={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),A(this,this.state,t,this._modules.get(t),o.preserveState),k(this,this.state)},C.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete G(e.state,t.slice(0,-1))[t[t.length-1]]})),P(this)},C.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},C.prototype.hotUpdate=function(t){this._modules.update(t),P(this,!0)},C.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(C.prototype,M);const x={},T=function(t,e){if(!e)return t();if(void 0===R){const t=document.createElement("link").relList;R=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in x)return;x[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":R,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))};const H=function(){const t=p();return h({history:t,routes:[{path:"/",name:"home",component:()=>T((()=>__import__("./Home.647a2698.js")),["/assets/Home.647a2698.js","/assets/vendor.77a10beb.js"]),meta:{title:"Home title"}},{path:"/about",name:"about",component:()=>T((()=>__import__("./About.808fe96d.js")),["/assets/About.808fe96d.js","/assets/vendor.77a10beb.js"])},{path:"/:catchAll(.*)*",name:"404",component:()=>T((()=>__import__("./404.d1e8793f.js")),["/assets/404.d1e8793f.js","/assets/vendor.77a10beb.js"]),meta:{title:"404 Not Found"}}]})}(),I=new C({state:{message:"Hello vite2 vue3 ssr"},mutations:{},actions:{fetchMessage:({state:t})=>new Promise((e=>{setTimeout((()=>{t.message="Hello vite2 vue3 ssr typescript scss vuex vue-router",e(0)}),200)}))},modules:{}});f(I,H);const N=d(m);N.use(H).use(I),H.beforeResolve(((t,e,o)=>{let n=!1;const r=H.resolve(t).matched,i=H.resolve(e).matched;if(e&&!e.name)return o();window.document.title=t.meta.title||"首页";if(!r.filter(((t,e)=>n||(n=i[e]!==t))).length)return o();const s=[];r.map((t=>{s.push(...Object.values(t.components))}));const a=s.map((e=>{const o=e.asyncData||null;if(o){return o({store:I,route:t})}}));try{Promise.all(a).then((()=>{o()}))}catch(c){o(c)}})),H.isReady().then((()=>{N.mount("#app",!0)})),window.__INITIAL_STATE__&&I.replaceState(window.__INITIAL_STATE__);export{g as u};