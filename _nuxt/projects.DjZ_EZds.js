import{b as S,H as V,a as B,T}from"./ReButton._Zr8wuer.js";import{_ as N}from"./SectionImage.DZqO4C_4.js";import{u as R,_ as H}from"./useViewport.DFx-_kvo.js";import{a as M,_ as F}from"./ContactUs.Dqe1Tsn1.js";import{u as h}from"./useI18n.eYmBYmQY.js";import{u as U}from"./useProjects.DTL9zbqh.js";import{_ as W,r as x,s as z,x as D,l as g,o as d,h as E,w as n,c as b,n as O,u as s,b as t,a as l,t as j,j as $,g as q,F as A,d as G}from"./entry.DSxaaDFq.js";import"./vue.f36acd1f.CcVyU_vN.js";const J={class:"flex justify-content-center"},K={class:"add-white-spaces"},L={class:"flex justify-content-center"},Q=["href"],X={__name:"ProjectsCarousel",setup(v){const{t:a}=h(),{isSmaller:c}=R("lg"),{projects:f}=U(),i=f.filter(e=>e.content),m=x([{breakpoint:"1080px",numVisible:1,numScroll:1}]),p=z(()=>c.value?[...i]:[{},...i,{}]),r=x(1);D(c,e=>{r.value=e?0:1});const u=e=>{r.value=c.value?e:e+1};return(e,_)=>{const C=H,k=M,w=S,y=g("Card"),I=g("Carousel");return d(),E(I,{class:"carousel",value:s(p),"num-visible":3,"num-scroll":1,"responsive-options":s(m),"show-indicators":!1,"onUpdate:page":_[0]||(_[0]=o=>u(o))},{item:n(o=>[o.data.content?(d(),b("div",{key:0,class:O(["flex justify-content-center py-4 px-2 card-style",{"middle-item":o.index===s(r)}])},[t(y,null,{title:n(()=>[l("div",J,[t(C,{src:o.data.image.src,"max-width":o.data.image.maxWidth},null,8,["src","max-width"])])]),content:n(()=>[t(k,{color:"black","font-weight":"",class:"flex justify-content-center"},{default:n(()=>[l("span",K,j(s(a)(o.data.content)),1)]),_:2},1024)]),footer:n(()=>[l("div",L,[l("a",{href:o.data.route,target:"_blank"},[t(w,{class:"button-link",label:s(a)("projects.knowMore")},null,8,["label"])],8,Q)])]),_:2},1024)],2)):$("",!0)]),_:1},8,["value","responsive-options"])}}},Y=W(X,[["__scopeId","data-v-d24165c6"]]),ct=q({__name:"projects",setup(v){const{t:a}=h(),c={src:"/images/folder.png",alt:"folder-image",maxWidth:"350px"};return(f,i)=>{const m=T,p=V,r=N,u=Y,e=B,_=F;return d(),b(A,null,[t(p,null,{default:n(()=>[t(m,null,{default:n(()=>[G(j(s(a)("pages.projects")),1)]),_:1})]),_:1}),t(r,{class:"pt-8",title:s(a)("projects.title"),subtitle:s(a)("projects.subtitle"),image:c},null,8,["title","subtitle"]),t(e,{class:"py-2 px-6",background:"/images/background/background-2.png"},{default:n(()=>[t(u)]),_:1}),t(_)],64)}}});export{ct as default};
