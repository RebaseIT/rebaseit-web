import{T as I,H as V}from"./B7tzKrbf.js";import{_ as R}from"./DkQoJQHu.js";import{u as T,_ as j,R as B}from"./CLs6BFWk.js";import{u as h}from"./TwSguRWg.js";import{u as N}from"./ClDWTTDc.js";import{_ as H,r as x,q as F,s as M,k as g,o as m,g as U,w as n,c as v,n as W,u as s,b as e,a as l,t as b,i as q,f as z,d as D,F as E}from"./Dk6CFyjZ.js";import{a as O}from"./bBINeXyt.js";import{_ as $}from"./Bn6jPbKj.js";import"./B0XnGumR.js";const A={class:"flex justify-content-center"},G={class:"add-white-spaces"},J={class:"flex justify-content-center"},K=["href"],L={__name:"ProductsCarousel",setup(C){const{t:a}=h(),{isSmaller:c}=T("lg"),{products:f}=N(),_=f.filter(t=>t.content),u=x([{breakpoint:"1080px",numVisible:1,numScroll:1}]),p=F(()=>c.value?[..._]:[{},..._,{}]),r=x(1);M(c,t=>{r.value=t?0:1});const d=t=>{r.value=c.value?t:t+1};return(t,i)=>{const k=j,w=B,y=g("Card"),S=g("Carousel");return m(),U(S,{class:"carousel",id:"products-carousel",value:s(p),"num-visible":3,"num-scroll":1,"responsive-options":s(u),"show-indicators":!1,"onUpdate:page":i[0]||(i[0]=o=>d(o))},{item:n(o=>[o.data.content?(m(),v("div",{key:0,class:W(["flex justify-content-center py-4 px-2 card-style",{"middle-item":o.index===s(r)}])},[e(y,null,{title:n(()=>[l("div",A,[e(k,{src:o.data.image.src,"max-width":o.data.image.maxWidth},null,8,["src","max-width"])])]),content:n(()=>[e(w,{color:"black","font-weight":"",class:"flex justify-content-center"},{default:n(()=>[l("span",G,b(s(a)(o.data.content)),1)]),_:2},1024)]),footer:n(()=>[l("div",J,[l("a",{href:o.data.route,target:"_blank"},null,8,K)])]),_:2},1024)],2)):q("",!0)]),_:1},8,["value","responsive-options"])}}},P=H(L,[["__scopeId","data-v-3911ce03"]]),at=z({__name:"products",setup(C){const{t:a}=h(),c={src:"/images/folder.png",alt:"folder-image",maxWidth:"350px"};return(f,_)=>{const u=I,p=V,r=R,d=P,t=O,i=$;return m(),v(E,null,[e(p,null,{default:n(()=>[e(u,null,{default:n(()=>[D(b(s(a)("pages.products")),1)]),_:1})]),_:1}),e(r,{class:"pt-8",title:s(a)("products.title"),id:"our-products-section",subtitle:s(a)("products.subtitle"),image:c},null,8,["title","subtitle"]),e(t,{class:"py-2 px-6",background:"/images/background/background-2.png"},{default:n(()=>[e(d)]),_:1}),e(i)],64)}}});export{at as default};
