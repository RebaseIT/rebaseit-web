import{a as v,H as O,T as U,_ as G,b as A}from"./ReButton.rr97CFDD.js";import{_ as J}from"./RePolygon.B51ARDcx.js";import{u as I,_ as K}from"./useI18n.DKQdGgCl.js";import{_ as V,l as R,o as i,h as m,w as n,m as y,d as _,t as r,c as g,b as t,F as b,i as M,u as e,a as s,n as p,j as Q}from"./entry.BDKYq4bb.js";import{_ as X}from"./nuxt-link.D-i2MqPN.js";import{u as W,_ as j}from"./useViewport.C0Vnm4jb.js";import{u as D}from"./useProjects.DTL9zbqh.js";import{_ as Y}from"./ContactUs.CTRjJww7.js";import"./vue.f36acd1f.DmLiTHGT.js";const Z={__name:"ReSecondaryButton",props:{type:{type:String,default:"button",validator:a=>["submit","reset","button"].includes(a)}},setup(a){return(o,c)=>{const l=R("Button");return i(),m(l,{type:a.type,outlined:"",class:"re-secondary-button"},null,8,["type"])}}},tt=V(Z,[["__scopeId","data-v-56b1092e"]]),et={__name:"ReSectionTop",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=v;return i(),m(l,{background:"/images/background/background-1.png",class:"pt-8"},{default:n(()=>[y(o.$slots,"default",{},()=>[_(r(a.text),1)])]),_:3})}}},nt={class:"container"},ot={class:"header-img"},st=["src"],ct={class:"add-white-spaces"},at={__name:"ServicesTabView",setup(a){const{isSmaller:o}=W("md"),{t:c}=I(),{projects:l}=D(),w=l.filter(d=>d.content&&d.isInternalProject);return(d,f)=>{const P=j,S=R("TabPanel"),k=R("TabView");return i(),g("div",nt,[t(k,{class:"card-tab-view"},{default:n(()=>[(i(!0),g(b,null,M(e(w),u=>(i(),m(S,{key:u},{header:n(()=>[s("div",ot,[t(P,{src:u.image.src,"max-width":"200px"},null,8,["src"])])]),default:n(()=>[s("div",{class:p(["flex align-items-center lg:p-4",{"flex-column p-1":e(o)}])},[s("img",{class:"content-img gray-border",src:u.imageContent.src},null,8,st),s("div",{class:p(["max-w-24rem",e(o)?"ml-0 mt-4":"ml-6"])},[s("span",ct,r(e(c)(u.content)),1)],2)],2)]),_:2},1024))),128))]),_:1})])}}},lt=V(at,[["__scopeId","data-v-7fa4a2f8"]]),_t={__name:"ReSectionProducts",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=v;return i(),m(l,{background:"/images/background/background-2.png"},{default:n(()=>[y(o.$slots,"default",{},()=>[_(r(a.text),1)])]),_:3})}}},it={__name:"ReSectionClients",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=v;return i(),m(l,{background:"/images/background/background-2.png"},{default:n(()=>[y(o.$slots,"default",{},()=>[_(r(a.text),1)])]),_:3})}}},rt={__name:"ReSectionWhatWeDo",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=v;return i(),m(l,{background:"/images/background/background-1.png"},{default:n(()=>[y(o.$slots,"default",{},()=>[_(r(a.text),1)])]),_:3})}}},ut={class:"row px-4 py-8"},pt=s("span",{class:"font-bold"},"better",-1),mt={class:"py-8 px-4"},dt={class:"py-4"},ft={class:"pb-8 px-4"},gt={class:"mt-3"},xt={class:"flex"},$t={__name:"index",setup(a){const{t:o}=I(),{isSmaller:c}=W("xl"),{projects:l}=D(),w=l.filter(f=>!f.isInternalProject).map(f=>f.image),d=()=>{document.getElementById("contact-us-section").scrollIntoView({behavior:"smooth"})};return(f,P)=>{const S=U,k=O,u=G,x=J,$=K,C=A,z=tt,T=X,N=et,q=lt,H=_t,B=j,L=it,E=rt,F=Y;return i(),g(b,null,[t(k,null,{default:n(()=>[t(S,null,{default:n(()=>[_(r(e(o)("pages.home")),1)]),_:1})]),_:1}),t(N,null,{default:n(()=>[s("div",ut,[s("div",{class:p(["col-8 pb-0",{"col-12 text-center":e(c)}])},[t(u,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>[_(" Making every ")]),_:1})],2),s("div",{class:p(["col-8 pt-0",{"col-12 text-center":e(c)}])},[t(u,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>[_(" version "),pt]),_:1})],2),e(c)?Q("",!0):(i(),g(b,{key:0},[t(x,{height:"190px",width:"180px",top:"375px",right:"500px"}),t(x,{height:"320px",width:"300px",top:"130px",right:"170px"}),t(x,{height:"85px",width:"75px",top:"60px",right:"100px"}),t(x,{height:"160px",width:"150px",top:"410px",right:"0"})],64)),s("div",{class:p({"col-6":!e(c),"col-12 text-center":e(c)})},[t($,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[_(r(e(o)("homePage.welcomeMessage")),1)]),_:1})],2),s("div",{class:p(["flex py-4",{"justify-content-center":e(c)}])},[t(C,{onClick:d,label:e(o)("homePage.contactUs")},null,8,["label"]),t(T,{to:"/services"},{default:n(()=>[t(z,{label:e(o)("homePage.knowOurServices"),class:"ml-2"},null,8,["label"])]),_:1})],2)])]),_:1}),t(H,null,{default:n(()=>[s("div",mt,[t(u,null,{default:n(()=>[_(r(e(o)("homePage.ourProducts")),1)]),_:1}),s("div",dt,[t(q)])])]),_:1}),t(L,null,{default:n(()=>[s("div",ft,[t(u,{class:"flex justify-content-end pt-4 mb-4"},{default:n(()=>[_(r(e(o)("homePage.ourClients")),1)]),_:1}),s("div",{class:p(["text-center",{"flex justify-content-evenly gap-4 flex-column align-items-center":e(c)}])},[(i(!0),g(b,null,M(e(w),h=>(i(),m(B,{class:p({"mx-5 mt-4":!e(c)}),key:h.alt,src:h.src,alt:h.alt,"max-width":h.maxWidth},null,8,["class","src","alt","max-width"]))),128))],2)])]),_:1}),t(E,null,{default:n(()=>[s("div",{class:p(["row flex py-8 px-4 justify-space-between align-items-center gap-4",{"flex-column justify-center":e(c)}])},[s("div",{class:p({"col-6":!e(c),"col-12":e(c)})},[t(u,null,{default:n(()=>[_(r(e(o)("homePage.whatWeDo")),1)]),_:1}),s("div",gt,[t($,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[_(r(e(o)("homePage.whatWeDoDetails")),1)]),_:1}),s("div",null,[t(T,{to:"/services"},{default:n(()=>[t(C,{label:e(o)("homePage.knowOurServices"),class:"mt-4 mb-8"},null,8,["label"])]),_:1})])])],2),s("div",xt,[t(B,{src:"/images/stuff.png","max-width":"480px"})])],2)]),_:1}),t(F)],64)}}};export{$t as default};
