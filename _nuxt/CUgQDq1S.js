import{_ as v,m as x,o as y,c as S,R as $,S as E,u as w,q as f,r as h,E as q,z as b,J as O,T as M,k as L,d as W,t as B}from"./ef_zSq-S.js";const T=["src","alt"],k={__name:"ReImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1,default:""},width:{type:String,required:!1,default:"100%"},maxWidth:{type:String,required:!1,default:""},height:{type:String,required:!1,default:"auto"},maxHeight:{type:String,required:!1,default:""}},setup(e){return x(r=>({"2640048c":e.width,d55e809a:e.height,"5eb7db64":e.maxWidth,"2a0f3d9f":e.maxHeight})),(r,n)=>(y(),S("img",{src:e.src,alt:e.alt},null,8,T))}},H=v(k,[["__scopeId","data-v-4e06e6e3"]]);function G(e){return $()?(E(e),!0):!1}function g(e){return typeof e=="function"?e():w(e)}const V=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function I(e,r){var n;if(typeof e=="number")return e+r;const u=((n=e.match(/^-?\d+\.?\d*/))==null?void 0:n[0])||"",a=e.slice(u.length),s=Number.parseFloat(u)+r;return Number.isNaN(s)?e:s+a}const _=V?window:void 0;function N(){const e=h(!1),r=O();return r&&b(()=>{e.value=!0},r),e}function R(e){const r=N();return f(()=>(r.value,!!e()))}function d(e,r={}){const{window:n=_}=r,u=R(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const s=h(!1),o=m=>{s.value=m.matches},l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},p=q(()=>{u.value&&(l(),a=n.matchMedia(g(e)),"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),s.value=a.matches)});return G(()=>{p(),l(),a=void 0}),s}const j={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function C(e,r={}){function n(t,i){let c=g(e[g(t)]);return i!=null&&(c=I(c,i)),typeof c=="number"&&(c=`${c}px`),c}const{window:u=_,strategy:a="min-width"}=r;function s(t){return u?u.matchMedia(t).matches:!1}const o=t=>d(()=>`(min-width: ${n(t)})`,r),l=t=>d(()=>`(max-width: ${n(t)})`,r),p=Object.keys(e).reduce((t,i)=>(Object.defineProperty(t,i,{get:()=>a==="min-width"?o(i):l(i),enumerable:!0,configurable:!0}),t),{});function m(){const t=Object.keys(e).map(i=>[i,o(i)]);return f(()=>t.filter(([,i])=>i.value).map(([i])=>i))}return Object.assign(p,{greaterOrEqual:o,smallerOrEqual:l,greater(t){return d(()=>`(min-width: ${n(t,.1)})`,r)},smaller(t){return d(()=>`(max-width: ${n(t,-.1)})`,r)},between(t,i){return d(()=>`(min-width: ${n(t)}) and (max-width: ${n(i,-.1)})`,r)},isGreater(t){return s(`(min-width: ${n(t,.1)})`)},isGreaterOrEqual(t){return s(`(min-width: ${n(t)})`)},isSmaller(t){return s(`(max-width: ${n(t,-.1)})`)},isSmallerOrEqual(t){return s(`(max-width: ${n(t)})`)},isInBetween(t,i){return s(`(min-width: ${n(t)}) and (max-width: ${n(i,-.1)})`)},current:m,active(){const t=m();return f(()=>t.value.length===0?"":t.value.at(-1))}})}function Q(e){const r=C({...j,lg:1080}),n=h(!1),u=h(!1);let a;return b(()=>{a=()=>{n.value=r.isSmaller(e),u.value=r.isGreaterOrEqual(e)},window.addEventListener("resize",a),a()}),M(()=>{window.removeEventListener("resize",a)}),{isSmaller:n,isGreaterOrEqual:u}}const z={class:"re-title-span"},D={__name:"ReParagraphSpan",props:{text:{type:String,required:!1,default:""},bold:{type:Boolean,default:!1},bigText:{type:Boolean,default:!1}},setup(e){x(a=>({"53e7d2ae":w(u),e304146a:w(n)}));const r=e,n=f(()=>r.bold?600:400),u=f(()=>r.bigText?"18px":"15px");return(a,s)=>(y(),S("span",z,[L(a.$slots,"default",{},()=>[W(B(e.text),1)],!0)]))}},U=v(D,[["__scopeId","data-v-506ac82e"]]);export{U as R,H as _,Q as u};
