import{R as U,_ as $,u as z}from"./ReParagraphSpan.ZO86zLQg.js";import{_ as R}from"./nuxt-link.C1VEMlVA.js";import{u as I,_ as D}from"./useI18n.CWqBX0Fr.js";import{_ as v,r as S,s as T,l as V,o as r,h as C,w as c,b as o,a as s,d as g,t as p,u as t,M as P,X as q,k as A,c as _,Y as H,n as f,p as N,e as F,q as J,m as B,F as y,i as L,j as O}from"./entry.CLs5W46J.js";import{_ as W}from"./ReSubtitle.yhAyFlMu.js";const X={class:"d-flex align-items-center"},Y={__name:"LanguageSelector",setup(n){const{locale:l}=I(),i=S([{optionLabel:"/images/flags/Flag_ES.svg",optionValue:"es"},{optionLabel:"/images/flags/Flag_EN.svg",optionValue:"en"}]),e=T({get:()=>i.value.find(u=>u.optionValue===l.value)||i[0],set:u=>{l.value=u.optionValue}});return(u,h)=>{const x=$,d=V("Dropdown");return r(),C(d,{modelValue:t(e),"onUpdate:modelValue":h[0]||(h[0]=a=>P(e)?e.value=a:null),options:t(i),"option-label":"optionLabel","option-value":a=>a,class:"re-language-selector"},{value:c(({value:a})=>[o(x,{src:a.optionLabel,class:"cursor-pointer re-language-selector--image ml-1",alt:"language"},null,8,["src"])]),option:c(({option:a})=>[s("div",X,[o(x,{src:a.optionLabel,class:"cursor-pointer re-language-selector--image mr-2",alt:"language"},null,8,["src"]),o(U,null,{default:c(()=>[g(p(a.optionValue.toUpperCase()),1)]),_:2},1024)])]),_:1},8,["modelValue","options","option-value"])}}},G=v(Y,[["__scopeId","data-v-2d63c709"]]),K=n=>(N("data-v-e4bc0a9f"),n=n(),F(),n),Q={class:"re-header"},Z={key:1,class:"d-flex align-items-center justify-space-between"},ee=K(()=>s("div",null,[s("i",{class:"pi menu-bar__dropdown-icon--down pi-angle-down ml-2"}),s("i",{class:"pi menu-bar__dropdown-icon--up pi-angle-up ml-2"})],-1)),te={__name:"Header",setup(n){const{t:l}=I(),i=q(),e=A(),u=S([{label:"header.aboutUs",url:"/about-us",command:()=>e.push("/about-us")},{label:"header.projects",url:"/projects",command:()=>e.push("/projects")},{label:"header.services",url:"/services",command:()=>e.push("/services")},{label:"header.blog",url:"/blog",command:()=>e.push("/blog")},{src:"/images/flags/Flag_EN.svg",isLanguage:!0,value:"en"}]);return(h,x)=>{const d=$,a=R,w=G,k=V("Menubar");return r(),_("div",Q,[o(k,{model:t(u),class:"menu-bar px-4"},{start:c(()=>[o(a,{to:"/",class:"text-link"},{default:c(()=>[o(d,{class:"cursor-pointer",alt:"logo",src:"/images/logo-header.png","max-width":"110px"})]),_:1})]),item:c(({item:m,hasSubmenu:b})=>[m.isLanguage?(r(),C(w,{key:0,onClick:H(()=>{},["stop"])})):b?(r(),_("div",Z,[s("div",null,p(t(l)(m.label)),1),ee])):(r(),_("span",{key:2,class:f({"current-page":m.url===t(i).path})},[s("span",null,p(t(l)(m.label)),1)],2))]),_:1},8,["model"])])}}},oe=v(te,[["__scopeId","data-v-e4bc0a9f"]]),se={class:"re-title"},ne={__name:"ReTitle",props:{text:{type:String,required:!1,default:""},bold:{type:Boolean,default:!1}},setup(n){J(e=>({"26d9e3ea":t(i)}));const l=n,i=T(()=>l.bold?600:400);return(e,u)=>(r(),_("span",se,[B(e.$slots,"default",{},()=>[g(p(n.text),1)],!0)]))}},ae=v(ne,[["__scopeId","data-v-2ab15f98"]]),le=n=>(N("data-v-96be2ba7"),n=n(),F(),n),ce={class:"footer py-5"},re={class:"w-full footer-logo-container"},ie={class:"py-4 gap-3"},ue=le(()=>s("br",null,null,-1)),_e={href:"https://www.linkedin.com/company/rebase-it/"},pe={__name:"Footer",setup(n){const{t:l}=I(),i=S([{title:"footer.home",to:"/"},{title:"footer.aboutUs",to:"/about-us"},{title:"footer.projects",to:"/projects",menus:[{title:"footer.sherlock",to:"/projects"},{title:"footer.rebaseConnect",to:"/projects"}]},{title:"footer.services",to:"/services",menus:[{title:"footer.frontend",to:"/services"},{title:"footer.backend",to:"/services"},{title:"footer.database",to:"/services"},{title:"footer.cloudProviders",to:"/services"},{title:"footer.devOpsTools",to:"/services"},{title:"footer.integrationTech",to:"/services"}]},{title:"footer.blog",to:"/blog",menus:[{title:"footer.allArticles",to:"/blog"},{title:"footer.news",to:"/blog"},{title:"footer.projects",to:"/blog"},{title:"footer.individualJobs",to:"/blog"},{title:"footer.events",to:"/blog"}]}]),{isSmaller:e}=z("sm"),u=()=>{document.getElementById("contact-us-section").scrollIntoView({behavior:"smooth"})};return(h,x)=>{const d=$,a=R,w=D,k=ae,m=W;return r(),_("div",ce,[s("div",{class:f(["footer-content row flex px-4 gap-4",{"flex-column":t(e)}])},[s("div",re,[s("div",null,[o(a,{to:"/",class:"text-link"},{default:c(()=>[o(d,{alt:"logo-footer",src:"/images/logo-footer.png","max-width":"170px"})]),_:1})]),s("div",{class:f(["flex gap-2 w-full",t(e)?"flex-row justify-content-between":"flex-column"])},[s("div",ie,[o(w,{class:"text-white","font-size":"lg"},{default:c(()=>[g(p(t(l)("footer.gotAProject")),1)]),_:1}),ue,o(w,{class:"text-white","font-size":"lg","font-weight":"400","is-clickable":"",onClick:u},{default:c(()=>[g(p(t(l)("footer.letsTalk")),1)]),_:1})]),s("div",{class:f(["py-4 gap-3",{"flex align-items-center":t(e)}])},[s("a",_e,[o(d,{alt:"linkedin",src:"/images/logo-linkedin.svg","max-width":"32px"})])],2)],2)]),s("div",{class:f(["w-full gap-3 flex md:justify-content-evenly flex-wrap",{"justify-content-start flex-column":t(e)}])},[(r(!0),_(y,null,L(t(i),(b,E)=>(r(),_("div",{class:f(["gap-3 flex flex-column",t(e)?"py-2":"py-4"]),key:`menu-${E}`},[o(a,{to:b.to,class:"text-link"},{default:c(()=>[o(k,{class:"text-white"},{default:c(()=>[g(p(t(l)(b.title)),1)]),_:2},1024)]),_:2},1032,["to"]),t(e)?O("",!0):(r(!0),_(y,{key:0},L(b.menus,(j,M)=>(r(),_("div",{class:"py-1",key:`submenu-${M}`},[o(a,{to:j.to,class:"text-link"},{default:c(()=>[s("div",null,[o(m,null,{default:c(()=>[g(p(t(l)(j.title)),1)]),_:2},1024)])]),_:2},1032,["to"])]))),128))],2))),128))],2)],2)])}}},de=v(pe,[["__scopeId","data-v-96be2ba7"]]),me={},fe={class:"padding-top-82"},ge={class:"scrollable-body"};function be(n,l){const i=oe,e=V("Toast"),u=de;return r(),_(y,null,[o(i),s("div",fe,[s("div",ge,[B(n.$slots,"default",{},void 0,!0),o(e),o(u)])])],64)}const ye=v(me,[["render",be],["__scopeId","data-v-d7e360f5"]]);export{ye as default};
