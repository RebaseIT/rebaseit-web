import{_ as S,u as L}from"./useViewport.C0Vnm4jb.js";import{_ as T}from"./nuxt-link.D-i2MqPN.js";import{u as C,_ as M}from"./useI18n.DKQdGgCl.js";import{_ as x,X as z,k as q,r as N,l as R,o as a,c as i,b as o,w as r,h as A,a as e,t as f,u as t,n as g,p as F,e as V,q as H,s as P,m as B,d as b,F as I,i as j,j as U}from"./entry.BDKYq4bb.js";import{_ as D}from"./ReSubtitle.BgyD5qa5.js";const J=s=>(F("data-v-73c3b66a"),s=s(),V(),s),O={class:"re-header"},W={key:1,class:"d-flex align-items-center justify-space-between"},X=J(()=>e("div",null,[e("i",{class:"pi menu-bar__dropdown-icon--down pi-angle-down ml-2"}),e("i",{class:"pi menu-bar__dropdown-icon--up pi-angle-up ml-2"})],-1)),G={__name:"Header",setup(s){const{t:n,locale:_}=C(),l=z(),u=q(),h=N([{label:"header.aboutUs",url:"/about-us",command:()=>u.push("/about-us")},{label:"header.projects",url:"/projects",command:()=>u.push("/projects")},{label:"header.services",url:"/services",command:()=>u.push("/services")},{label:"header.blog",url:"/blog",command:()=>u.push("/blog")},{src:"/images/flags/Flag_EN.svg",isImage:!0,value:"en"}]),$=d=>{const p={en:{src:"/images/flags/Flag_ES.svg",value:"es",isImage:!0},es:{src:"/images/flags/Flag_EN.svg",value:"en",isImage:!0}},m=h.value.filter(v=>v.value!==d.value);h.value=[...m,p[d.value]],_.value=p[d.value].value};return(d,p)=>{const m=S,v=T,w=R("Menubar");return a(),i("div",O,[o(w,{model:t(h),class:"menu-bar px-4"},{start:r(()=>[o(v,{to:"/",class:"text-link"},{default:r(()=>[o(m,{class:"cursor-pointer",alt:"logo",src:"/images/logo-header.png","max-width":"110px"})]),_:1})]),item:r(({item:c,hasSubmenu:k})=>[c.isImage?(a(),A(m,{key:0,class:"flag",alt:"flag",src:c.src,"max-width":"25px",onClick:y=>$(c)},null,8,["src","onClick"])):k?(a(),i("div",W,[e("div",null,f(t(n)(c.label)),1),X])):(a(),i("span",{key:2,class:g({"current-page":c.url===t(l).path})},[e("span",null,f(t(n)(c.label)),1)],2))]),_:1},8,["model"])])}}},K=x(G,[["__scopeId","data-v-73c3b66a"]]),Q={class:"re-title"},Y={__name:"ReTitle",props:{text:{type:String,required:!1,default:""},bold:{type:Boolean,default:!1}},setup(s){H(l=>({"26d9e3ea":t(_)}));const n=s,_=P(()=>n.bold?600:400);return(l,u)=>(a(),i("span",Q,[B(l.$slots,"default",{},()=>[b(f(s.text),1)],!0)]))}},Z=x(Y,[["__scopeId","data-v-2ab15f98"]]),ee=s=>(F("data-v-96be2ba7"),s=s(),V(),s),te={class:"footer py-5"},oe={class:"w-full footer-logo-container"},se={class:"py-4 gap-3"},le=ee(()=>e("br",null,null,-1)),ae={href:"https://www.linkedin.com/company/rebase-it/"},ne={__name:"Footer",setup(s){const{t:n}=C(),_=N([{title:"footer.home",to:"/"},{title:"footer.aboutUs",to:"/about-us"},{title:"footer.projects",to:"/projects",menus:[{title:"footer.sherlock",to:"/projects"},{title:"footer.rebaseConnect",to:"/projects"}]},{title:"footer.services",to:"/services",menus:[{title:"footer.frontend",to:"/services"},{title:"footer.backend",to:"/services"},{title:"footer.database",to:"/services"},{title:"footer.cloudProviders",to:"/services"},{title:"footer.devOpsTools",to:"/services"},{title:"footer.integrationTech",to:"/services"}]},{title:"footer.blog",to:"/blog",menus:[{title:"footer.allArticles",to:"/blog"},{title:"footer.news",to:"/blog"},{title:"footer.projects",to:"/blog"},{title:"footer.individualJobs",to:"/blog"},{title:"footer.events",to:"/blog"}]}]),{isSmaller:l}=L("sm"),u=()=>{document.getElementById("contact-us-section").scrollIntoView({behavior:"smooth"})};return(h,$)=>{const d=S,p=T,m=M,v=Z,w=D;return a(),i("div",te,[e("div",{class:g(["footer-content row flex px-4 gap-4",{"flex-column":t(l)}])},[e("div",oe,[e("div",null,[o(p,{to:"/",class:"text-link"},{default:r(()=>[o(d,{alt:"logo-footer",src:"/images/logo-footer.png","max-width":"170px"})]),_:1})]),e("div",{class:g(["flex gap-2 w-full",t(l)?"flex-row justify-content-between":"flex-column"])},[e("div",se,[o(m,{class:"text-white","font-size":"lg"},{default:r(()=>[b(f(t(n)("footer.gotAProject")),1)]),_:1}),le,o(m,{class:"text-white","font-size":"lg","font-weight":"400","is-clickable":"",onClick:u},{default:r(()=>[b(f(t(n)("footer.letsTalk")),1)]),_:1})]),e("div",{class:g(["py-4 gap-3",{"flex align-items-center":t(l)}])},[e("a",ae,[o(d,{alt:"linkedin",src:"/images/logo-linkedin.svg","max-width":"32px"})])],2)],2)]),e("div",{class:g(["w-full gap-3 flex md:justify-content-evenly flex-wrap",{"justify-content-start flex-column":t(l)}])},[(a(!0),i(I,null,j(t(_),(c,k)=>(a(),i("div",{class:g(["gap-3 flex flex-column",t(l)?"py-2":"py-4"]),key:`menu-${k}`},[o(p,{to:c.to,class:"text-link"},{default:r(()=>[o(v,{class:"text-white"},{default:r(()=>[b(f(t(n)(c.title)),1)]),_:2},1024)]),_:2},1032,["to"]),t(l)?U("",!0):(a(!0),i(I,{key:0},j(c.menus,(y,E)=>(a(),i("div",{class:"py-1",key:`submenu-${E}`},[o(p,{to:y.to,class:"text-link"},{default:r(()=>[e("div",null,[o(w,null,{default:r(()=>[b(f(t(n)(y.title)),1)]),_:2},1024)])]),_:2},1032,["to"])]))),128))],2))),128))],2)],2)])}}},ce=x(ne,[["__scopeId","data-v-96be2ba7"]]),re={},ie={class:"padding-top-82"},ue={class:"scrollable-body"};function _e(s,n){const _=K,l=R("Toast"),u=ce;return a(),i(I,null,[o(_),e("div",ie,[e("div",ue,[B(s.$slots,"default",{},void 0,!0),o(l),o(u)])])],64)}const ve=x(re,[["render",_e],["__scopeId","data-v-d7e360f5"]]);export{ve as default};
