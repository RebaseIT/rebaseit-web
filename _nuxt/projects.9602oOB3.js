import{T as S,H as I,a as V}from"./ReButton.CzTCIxsq.js";import{_ as R}from"./SectionImage.JTOgruT7.js";import{u as T,_ as B,R as N}from"./ReParagraphSpan.CdjLtysC.js";import{u as h}from"./useI18n.BaCnRUrR.js";import{u as H}from"./useProjects.Chg5NieP.js";import{_ as F,r as x,s as M,x as U,l as g,o as d,h as W,w as n,c as b,n as z,u as s,b as t,a as _,t as j,j as D,g as E,d as O,F as $}from"./entry.CCnymGKN.js";import{_ as q}from"./ContactUs.DtQg45zD.js";import"./vue.f36acd1f.CG2mZPVo.js";const A={class:"flex justify-content-center"},G={class:"add-white-spaces"},J={class:"flex justify-content-center"},K=["href"],L={__name:"ProjectsCarousel",setup(v){const{t:a}=h(),{isSmaller:c}=T("lg"),{projects:f}=H(),i=f.filter(e=>e.content),p=x([{breakpoint:"1080px",numVisible:1,numScroll:1}]),m=M(()=>c.value?[...i]:[{},...i,{}]),r=x(1);U(c,e=>{r.value=e?0:1});const u=e=>{r.value=c.value?e:e+1};return(e,l)=>{const C=B,k=N,w=g("Card"),y=g("Carousel");return d(),W(y,{class:"carousel",value:s(m),"num-visible":3,"num-scroll":1,"responsive-options":s(p),"show-indicators":!1,"onUpdate:page":l[0]||(l[0]=o=>u(o))},{item:n(o=>[o.data.content?(d(),b("div",{key:0,class:z(["flex justify-content-center py-4 px-2 card-style",{"middle-item":o.index===s(r)}])},[t(w,null,{title:n(()=>[_("div",A,[t(C,{src:o.data.image.src,"max-width":o.data.image.maxWidth},null,8,["src","max-width"])])]),content:n(()=>[t(k,{color:"black","font-weight":"",class:"flex justify-content-center"},{default:n(()=>[_("span",G,j(s(a)(o.data.content)),1)]),_:2},1024)]),footer:n(()=>[_("div",J,[_("a",{href:o.data.route,target:"_blank"},null,8,K)])]),_:2},1024)],2)):D("",!0)]),_:1},8,["value","responsive-options"])}}},P=F(L,[["__scopeId","data-v-75cb7821"]]),se=E({__name:"projects",setup(v){const{t:a}=h(),c={src:"/images/folder.png",alt:"folder-image",maxWidth:"350px"};return(f,i)=>{const p=S,m=I,r=R,u=P,e=V,l=q;return d(),b($,null,[t(m,null,{default:n(()=>[t(p,null,{default:n(()=>[O(j(s(a)("pages.projects")),1)]),_:1})]),_:1}),t(r,{class:"pt-8",title:s(a)("projects.title"),subtitle:s(a)("projects.subtitle"),image:c},null,8,["title","subtitle"]),t(e,{class:"py-2 px-6",background:"/images/background/background-2.png"},{default:n(()=>[t(u)]),_:1}),t(l)],64)}}});export{se as default};
