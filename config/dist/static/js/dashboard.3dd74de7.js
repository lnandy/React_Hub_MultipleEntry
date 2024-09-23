/*! For license information please see dashboard.3dd74de7.js.LICENSE.txt */
(()=>{var e={152:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(395),a=n(639),o=n(521),i=n(664),l=n(141),s=n(936),u=(n(612),n(889)),c=n(483);let d=n(931);d=d.keys().filter((e=>e.split("/").length>3&&!e.includes("common")));const p=d.map((e=>{const t=e.replace("./","").replace("index.js","");return console.log(e),{path:`/${t.toLowerCase().replace("components/","")}`,element:r.lazy((()=>n(52)(`./${t}index`)))}})),h=()=>(0,c.jsx)(a.Kd,{children:(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading..."}),children:(0,c.jsxs)(o.BV,{children:[(0,c.jsx)(o.qh,{path:"/login",element:(0,c.jsx)(i.default,{})}),(0,c.jsx)(o.qh,{path:"/",exact:!0,element:(0,c.jsx)(l.default,{})}),(0,c.jsx)(o.qh,{element:(0,c.jsx)(s.default,{}),children:(0,c.jsx)(o.qh,{element:(0,c.jsx)(l.default,{}),children:p.map((e=>{let{path:t,element:n}=e;return(0,c.jsx)(o.qh,{path:t,element:(0,c.jsx)(n,{})},t)}))})}),(0,c.jsx)(o.qh,{path:"*",element:(0,c.jsx)(u.default,{})})]})})})},889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});n(395);var r=n(483);const a=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"404 - Page Not Found"}),(0,r.jsx)("p",{children:"The page you are looking for does not exist."})]})},141:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});n(395);var r=n(521),a=n(483);const o=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Main Application"}),(0,a.jsx)(r.sv,{})]})},664:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});n(395);var r=n(483);const a=()=>(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Login components"})})},612:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});n(395);var r=n(483);const a=()=>(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Menu components"})})},936:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(521),a=n(483);const o=()=>(()=>{const e={loggedIn:!0};return e&&e.loggedIn})()?(0,a.jsx)(r.sv,{}):(0,a.jsx)(r.C5,{to:"/login"})},145:(e,t,n)=>{"use strict";n.r(t);var r=n(395),a=n(800),o=n(152),i=n(483);a.createRoot(document.getElementById("root")).render((0,i.jsxs)(r.StrictMode,{children:["dashboard",(0,i.jsx)(o.A,{})]}))},673:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a;n.d(t,{AO:()=>d,Gh:()=>N,HS:()=>B,Oi:()=>l,Rr:()=>p,pX:()=>$,pb:()=>_,rc:()=>a,tH:()=>F,ue:()=>m,yD:()=>L,zR:()=>i}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e){return void 0===e&&(e={}),h((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:d(t)}),null,e)}function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,a){return void 0===n&&(n=null),r({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,h=s.history,f=a.Pop,m=null,v=g();function g(){return(h.state||{idx:null}).idx}function b(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:x.location,delta:t})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,h.replaceState(r({},h.state,{idx:v}),""));let x={get action(){return f},get location(){return e(s,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,b),m=e,()=>{s.removeEventListener(o,b),m=null}},createHref:e=>t(s,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let r=c(x.location,e,t);n&&n(r,e),v=g()+1;let o=u(r,v),i=x.createHref(r);try{h.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&m&&m({action:f,location:x.location,delta:1})},replace:function(e,t){f=a.Replace;let r=c(x.location,e,t);n&&n(r,e),v=g();let o=u(r,v),i=x.createHref(r);h.replaceState(o,"",i),p&&m&&m({action:f,location:x.location,delta:0})},go:e=>h.go(e)};return x}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),v(e,t,n,!1)}function v(e,t,n,r){let a=_(("string"===typeof t?p(t):t).pathname||"/",n);if(null==a)return null;let o=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=R(a);i=P(o[l],e,r)}return i}function g(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=B([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),g(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))a(e,t,r);else a(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:[\w-]+$/,x=3,w=2,j=1,O=10,C=-2,E=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=C),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(y.test(t)?x:""===t?j:O)),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=k({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=k({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:B([o,c.pathname]),pathnameBase:D(B([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=B([o,c.pathnameBase]))}return i}function k(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function R(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function U(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function T(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e,t){let n=T(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function N(e,t,n,a){let o;void 0===a&&(a=!1),"string"===typeof e?o=p(e):(o=r({},e),l(!o.pathname||!o.pathname.includes("?"),U("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),U("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),U("#","search","hash",o)));let i,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(null==u)i=n;else{let e=t.length-1;if(!a&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:I(r),hash:M(a)}}(o,i),d=u&&"/"!==u&&u.endsWith("/"),h=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!h||(c.pathname+="/"),c}const B=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class F extends Error{}function $(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const A=["post","put","patch","delete"],W=(new Set(A),["get",...A]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},639:(e,t,n)=>{"use strict";var r,a;n.d(t,{Kd:()=>h,N_:()=>v});var o=n(395),i=n(391),l=n(521),s=n(673);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const d=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(y){}new Map;const p=(r||(r=n.t(o,2))).startTransition;(a||(a=n.t(i,2))).flushSync,(r||(r=n.t(o,2))).useId;function h(e){let{basename:t,children:n,future:r,window:a}=e,i=o.useRef();null==i.current&&(i.current=(0,s.zR)({window:a,v5Compat:!0}));let u=i.current,[c,d]=o.useState({action:u.action,location:u.location}),{v7_startTransition:h}=r||{},f=o.useCallback((e=>{h&&p?p((()=>d(e))):d(e)}),[d,h]);return o.useLayoutEffect((()=>u.listen(f)),[u,f]),o.createElement(l.Ix,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u,future:r})}const f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v=o.forwardRef((function(e,t){let n,{onClick:r,relative:a,reloadDocument:i,replace:p,state:h,target:v,to:g,preventScrollReset:b,unstable_viewTransition:x}=e,w=c(e,d),{basename:j}=o.useContext(l.jb),O=!1;if("string"===typeof g&&m.test(g)&&(n=g,f))try{let e=new URL(window.location.href),t=g.startsWith("//")?new URL(e.protocol+g):new URL(g),n=(0,s.pb)(t.pathname,j);t.origin===e.origin&&null!=n?g=n+t.search+t.hash:O=!0}catch(y){}let C=(0,l.$P)(g,{relative:a}),E=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:u,unstable_viewTransition:c}=void 0===t?{}:t,d=(0,l.Zp)(),p=(0,l.zy)(),h=(0,l.x$)(e,{relative:u});return o.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,s.AO)(p)===(0,s.AO)(h);d(e,{replace:n,state:a,preventScrollReset:i,relative:u,unstable_viewTransition:c})}}),[p,d,h,r,a,n,e,i,u,c])}(g,{replace:p,state:h,target:v,preventScrollReset:b,relative:a,unstable_viewTransition:x});return o.createElement("a",u({},w,{href:n||C,onClick:O||i?r:function(e){r&&r(e),e.defaultPrevented||E(e)},ref:t,target:v}))}));var g,b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(g||(g={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(b||(b={}))},521:(e,t,n)=>{"use strict";var r;n.d(t,{$P:()=>h,BV:()=>D,C5:()=>T,Ix:()=>B,Zp:()=>g,jb:()=>u,qh:()=>N,sv:()=>L,x$:()=>y,zy:()=>m});var a=n(395),o=n(673);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const l=a.createContext(null);const s=a.createContext(null);const u=a.createContext(null);const c=a.createContext(null);const d=a.createContext({outlet:null,matches:[],isDataRoute:!1});const p=a.createContext(null);function h(e,t){let{relative:n}=void 0===t?{}:t;f()||(0,o.Oi)(!1);let{basename:r,navigator:i}=a.useContext(u),{hash:l,pathname:s,search:c}=y(e,{relative:n}),d=s;return"/"!==r&&(d="/"===s?r:(0,o.HS)([r,s])),i.createHref({pathname:d,search:c,hash:l})}function f(){return null!=a.useContext(c)}function m(){return f()||(0,o.Oi)(!1),a.useContext(c).location}function v(e){a.useContext(u).static||a.useLayoutEffect(e)}function g(){let{isDataRoute:e}=a.useContext(d);return e?function(){let{router:e}=k(S.UseNavigateStable),t=_(P.UseNavigateStable),n=a.useRef(!1);return v((()=>{n.current=!0})),a.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,i({fromRouteId:t},a)))}),[e,t])}():function(){f()||(0,o.Oi)(!1);let e=a.useContext(l),{basename:t,future:n,navigator:r}=a.useContext(u),{matches:i}=a.useContext(d),{pathname:s}=m(),c=JSON.stringify((0,o.yD)(i,n.v7_relativeSplatPath)),p=a.useRef(!1);return v((()=>{p.current=!0})),a.useCallback((function(n,a){if(void 0===a&&(a={}),!p.current)return;if("number"===typeof n)return void r.go(n);let i=(0,o.Gh)(n,JSON.parse(c),s,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,o.HS)([t,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)}),[t,r,c,s,e])}()}const b=a.createContext(null);function y(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=a.useContext(u),{matches:i}=a.useContext(d),{pathname:l}=m(),s=JSON.stringify((0,o.yD)(i,r.v7_relativeSplatPath));return a.useMemo((()=>(0,o.Gh)(e,JSON.parse(s),l,"path"===n)),[e,s,l,n])}function x(e,t,n,r){f()||(0,o.Oi)(!1);let{navigator:l}=a.useContext(u),{matches:s}=a.useContext(d),p=s[s.length-1],h=p?p.params:{},v=(p&&p.pathname,p?p.pathnameBase:"/");p&&p.route;let g,b=m();if(t){var y;let e="string"===typeof t?(0,o.Rr)(t):t;"/"===v||(null==(y=e.pathname)?void 0:y.startsWith(v))||(0,o.Oi)(!1),g=e}else g=b;let x=g.pathname||"/",w=x;if("/"!==v){let e=v.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let j=(0,o.ue)(e,{pathname:w});let O=E(j&&j.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,o.HS)([v,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?v:(0,o.HS)([v,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,r);return t&&O?a.createElement(c.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:o.rc.Pop}},O):O}function w(){let e=function(){var e;let t=a.useContext(p),n=R(P.UseRouteError),r=_(P.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=(0,o.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),n?a.createElement("pre",{style:i},n):null,null)}const j=a.createElement(w,null);class O extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?a.createElement(d.Provider,{value:this.props.routeContext},a.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C(e){let{routeContext:t,match:n,children:r}=e,o=a.useContext(l);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),a.createElement(d.Provider,{value:t},r)}function E(e,t,n,r){var i;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var l;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(l=r)&&l.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,u=null==(i=n)?void 0:i.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||(0,o.Oi)(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let a=0;a<s.length;a++){let e=s[a];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=a),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,r,o)=>{let i,l=!1,p=null,h=null;var f;n&&(i=u&&r.route.id?u[r.route.id]:void 0,p=r.route.errorElement||j,c&&(d<0&&0===o?(f="route-fallback",!1||U[f]||(U[f]=!0),l=!0,h=null):d===o&&(l=!0,h=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,o+1)),v=()=>{let t;return t=i?p:l?h:r.route.Component?a.createElement(r.route.Component,null):r.route.element?r.route.element:e,a.createElement(C,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?a.createElement(O,{location:n.location,revalidation:n.revalidation,component:p,error:i,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}var S=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(S||{}),P=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(P||{});function k(e){let t=a.useContext(l);return t||(0,o.Oi)(!1),t}function R(e){let t=a.useContext(s);return t||(0,o.Oi)(!1),t}function _(e){let t=function(){let e=a.useContext(d);return e||(0,o.Oi)(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||(0,o.Oi)(!1),n.route.id}const U={};(r||(r=n.t(a,2))).startTransition;function T(e){let{to:t,replace:n,state:r,relative:i}=e;f()||(0,o.Oi)(!1);let{future:l,static:s}=a.useContext(u),{matches:c}=a.useContext(d),{pathname:p}=m(),h=g(),v=(0,o.Gh)(t,(0,o.yD)(c,l.v7_relativeSplatPath),p,"path"===i),b=JSON.stringify(v);return a.useEffect((()=>h(JSON.parse(b),{replace:n,state:r,relative:i})),[h,b,i,n,r]),null}function L(e){return function(e){let t=a.useContext(d).outlet;return t?a.createElement(b.Provider,{value:e},t):t}(e.context)}function N(e){(0,o.Oi)(!1)}function B(e){let{basename:t="/",children:n=null,location:r,navigationType:l=o.rc.Pop,navigator:s,static:d=!1,future:p}=e;f()&&(0,o.Oi)(!1);let h=t.replace(/^\/*/,"/"),m=a.useMemo((()=>({basename:h,navigator:s,static:d,future:i({v7_relativeSplatPath:!1},p)})),[h,p,s,d]);"string"===typeof r&&(r=(0,o.Rr)(r));let{pathname:v="/",search:g="",hash:b="",state:y=null,key:x="default"}=r,w=a.useMemo((()=>{let e=(0,o.pb)(v,h);return null==e?null:{location:{pathname:e,search:g,hash:b,state:y,key:x},navigationType:l}}),[h,v,g,b,y,x,l]);return null==w?null:a.createElement(u.Provider,{value:m},a.createElement(c.Provider,{children:n,value:w}))}function D(e){let{children:t,location:n}=e;return x(I(t),n)}new Promise((()=>{}));a.Component;function I(e,t){void 0===t&&(t=[]);let n=[];return a.Children.forEach(e,((e,r)=>{if(!a.isValidElement(e))return;let i=[...t,r];if(e.type===a.Fragment)return void n.push.apply(n,I(e.props.children,i));e.type!==N&&(0,o.Oi)(!1),e.props.index&&e.props.children&&(0,o.Oi)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=I(e.props.children,i)),n.push(l)})),n}},638:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,p=null,h=3,f=!1,m=!1,v=!1,g="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(v=!1,x(e),!m)if(null!==r(u))m=!0,L(j);else{var t=r(c);null!==t&&N(w,t.startTime-e)}}function j(e,n){m=!1,v&&(v=!1,b(S),S=-1),f=!0;var o=h;try{for(x(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!R());){var i=p.callback;if("function"===typeof i){p.callback=null,h=p.priorityLevel;var l=i(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(u)&&a(u),x(n)}else a(u);p=r(u)}if(null!==p)var s=!0;else{var d=r(c);null!==d&&N(w,d.startTime-n),s=!1}return s}finally{p=null,h=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var O,C=!1,E=null,S=-1,P=5,k=-1;function R(){return!(t.unstable_now()-k<P)}function _(){if(null!==E){var e=t.unstable_now();k=e;var n=!0;try{n=E(!0,e)}finally{n?O():(C=!1,E=null)}}else C=!1}if("function"===typeof y)O=function(){y(_)};else if("undefined"!==typeof MessageChannel){var U=new MessageChannel,T=U.port2;U.port1.onmessage=_,O=function(){T.postMessage(null)}}else O=function(){g(_,0)};function L(e){E=e,C||(C=!0,O())}function N(e,n){S=g((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,L(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(v?(b(S),S=-1):v=!0,N(w,o-i))):(e.sortIndex=l,n(u,e),m||f||(m=!0,L(j))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},569:(e,t,n)=>{"use strict";e.exports=n(638)},52:(e,t,n)=>{var r={"./common/404/index":[889],"./common/Appcontainer/index":[141],"./common/Login/index":[664],"./common/Menu/index":[612],"./common/ProtectedRoute/index":[936],"./dashboard/components/test/index":[835,424],"./dashboard/components/test2/index":[843,851],"./dashboard/index":[145,42],"./home/index":[789,77],"./project/components/ProtectedRoute/index":[969,268],"./project/components/appcontainer/index":[840,460],"./project/components/login/index":[79,853],"./project/index":[901,662]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=52,e.exports=a},931:(e,t,n)=>{var r={"./common/404/index.js":[889],"./common/Appcontainer/index.js":[141],"./common/Login/index.js":[664],"./common/Menu/index.js":[612],"./common/ProtectedRoute/index.js":[936],"./dashboard/components/test/index.js":[835,424],"./dashboard/components/test2/index.js":[843,851],"./dashboard/index.js":[145,42],"./home/index.js":[789,77],"./project/components/ProtectedRoute/index.js":[969,268],"./project/components/appcontainer/index.js":[840,460],"./project/components/login/index.js":[79,853],"./project/index.js":[901,662]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=931,e.exports=a}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+{42:"test27",77:"test28",268:"test29",424:"test25",460:"test210",662:"test212",851:"test26",853:"test211"}[e]+"."+{42:"aa1514b7",77:"1938f7a6",268:"8f9df8fb",424:"71d8c3ef",460:"1f8998fa",662:"83abba90",851:"1df8625b",853:"e43d3604"}[e]+".chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="reacthub:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={945:0,42:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self.webpackChunkreacthub=self.webpackChunkreacthub||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[121],(()=>n(145)));r=n.O(r)})();
//# sourceMappingURL=dashboard.3dd74de7.js.map