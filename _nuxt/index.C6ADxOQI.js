import{a as y,H as E,T as G,_ as A,b as J}from"./ReButton._Zr8wuer.js";import{_ as K}from"./RePolygon.B6Hyo5LP.js";import{u as V,_ as Q}from"./useI18n.eYmBYmQY.js";import{_ as M,l as R,o as r,h as p,w as n,m as w,d as _,t as i,c as x,b as e,F as v,i as W,u as t,a as s,n as u,g as X,r as Y,j as Z}from"./entry.DSxaaDFq.js";import{_ as ee}from"./nuxt-link.CJZ2vOJe.js";import{u as j,_ as D}from"./useViewport.DFx-_kvo.js";import{u as z}from"./useProjects.DTL9zbqh.js";import{_ as te}from"./ContactUs.Dqe1Tsn1.js";import"./vue.f36acd1f.CcVyU_vN.js";const ne={__name:"ReSecondaryButton",props:{type:{type:String,default:"button",validator:a=>["submit","reset","button"].includes(a)}},setup(a){return(o,c)=>{const l=R("Button");return r(),p(l,{type:a.type,outlined:"",class:"re-secondary-button"},null,8,["type"])}}},oe=M(ne,[["__scopeId","data-v-56b1092e"]]),se={__name:"ReSectionTop",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=y;return r(),p(l,{background:"/images/background/background-1.png",class:"pt-8"},{default:n(()=>[w(o.$slots,"default",{},()=>[_(i(a.text),1)])]),_:3})}}},ce={class:"container"},ae={class:"header-img"},le=["src"],_e={class:"add-white-spaces"},re={__name:"ServicesTabView",setup(a){const{isSmaller:o}=j("md"),{t:c}=V(),{projects:l}=z(),S=l.filter(m=>m.content&&m.isInternalProject);return(m,$)=>{const d=D,P=R("TabPanel"),k=R("TabView");return r(),x("div",ce,[e(k,{class:"card-tab-view"},{default:n(()=>[(r(!0),x(v,null,W(t(S),f=>(r(),p(P,{key:f},{header:n(()=>[s("div",ae,[e(d,{src:f.image.src,"max-width":"200px"},null,8,["src"])])]),default:n(()=>[s("div",{class:u(["flex align-items-center lg:p-4",{"flex-column p-1":t(o)}])},[s("img",{class:"content-img gray-border",src:f.imageContent.src},null,8,le),s("div",{class:u(["max-w-24rem",t(o)?"ml-0 mt-4":"ml-6"])},[s("span",_e,i(t(c)(f.content)),1)],2)],2)]),_:2},1024))),128))]),_:1})])}}},ie=M(re,[["__scopeId","data-v-7fa4a2f8"]]),ue={__name:"ReSectionProducts",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=y;return r(),p(l,{background:"/images/background/background-2.png"},{default:n(()=>[w(o.$slots,"default",{},()=>[_(i(a.text),1)])]),_:3})}}},pe={__name:"ReSectionClients",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=y;return r(),p(l,{background:"/images/background/background-2.png"},{default:n(()=>[w(o.$slots,"default",{},()=>[_(i(a.text),1)])]),_:3})}}},me={__name:"ReSectionWhatWeDo",props:{text:{type:String,required:!1,default:""}},setup(a){return(o,c)=>{const l=y;return r(),p(l,{background:"/images/background/background-1.png"},{default:n(()=>[w(o.$slots,"default",{},()=>[_(i(a.text),1)])]),_:3})}}},de={class:"row px-4 py-8"},fe=s("span",{class:"font-bold"},"better",-1),ge={class:"py-8 px-4"},xe={class:"py-4"},he={class:"pb-8 px-4"},be={class:"mt-3"},ve={class:"flex"},Be=X({__name:"index",setup(a){const{t:o}=V(),{isSmaller:c}=j("xl"),{projects:l}=z(),S=l.filter(d=>!d.isInternalProject).map(d=>d.image),m=Y(null),$=()=>{m.value.$el.scrollIntoView({behavior:"smooth"})};return(d,P)=>{const k=G,f=E,g=A,h=K,C=Q,T=J,N=oe,B=ee,q=se,H=ie,L=ue,I=D,F=pe,O=me,U=te;return r(),x(v,null,[e(f,null,{default:n(()=>[e(k,null,{default:n(()=>[_(i(t(o)("pages.home")),1)]),_:1})]),_:1}),e(q,null,{default:n(()=>[s("div",de,[s("div",{class:u(["col-8 pb-0",{"col-12 text-center":t(c)}])},[e(g,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>[_(" Making every ")]),_:1})],2),s("div",{class:u(["col-8 pt-0",{"col-12 text-center":t(c)}])},[e(g,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>[_(" version "),fe]),_:1})],2),t(c)?Z("",!0):(r(),x(v,{key:0},[e(h,{height:"190px",width:"180px",top:"375px",right:"500px"}),e(h,{height:"320px",width:"300px",top:"130px",right:"170px"}),e(h,{height:"85px",width:"75px",top:"60px",right:"100px"}),e(h,{height:"160px",width:"150px",top:"410px",right:"0"})],64)),s("div",{class:u({"col-6":!t(c),"col-12 text-center":t(c)})},[e(C,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[_(i(t(o)("homePage.welcomeMessage")),1)]),_:1})],2),s("div",{class:u(["flex py-4",{"justify-content-center":t(c)}])},[e(T,{onClick:$,label:t(o)("homePage.contactUs")},null,8,["label"]),e(B,{to:"/services"},{default:n(()=>[e(N,{label:t(o)("homePage.knowOurServices"),class:"ml-2"},null,8,["label"])]),_:1})],2)])]),_:1}),e(L,null,{default:n(()=>[s("div",ge,[e(g,null,{default:n(()=>[_(i(t(o)("homePage.ourProducts")),1)]),_:1}),s("div",xe,[e(H)])])]),_:1}),e(F,null,{default:n(()=>[s("div",he,[e(g,{class:"flex justify-content-end pt-4 mb-4"},{default:n(()=>[_(i(t(o)("homePage.ourClients")),1)]),_:1}),s("div",{class:u(["text-center",{"flex justify-content-evenly gap-4 flex-column align-items-center":t(c)}])},[(r(!0),x(v,null,W(t(S),b=>(r(),p(I,{class:u({"mx-5 mt-4":!t(c)}),key:b.alt,src:b.src,alt:b.alt,"max-width":b.maxWidth},null,8,["class","src","alt","max-width"]))),128))],2)])]),_:1}),e(O,null,{default:n(()=>[s("div",{class:u(["row flex py-8 px-4 justify-space-between align-items-center gap-4",{"flex-column justify-center":t(c)}])},[s("div",{class:u({"col-6":!t(c),"col-12":t(c)})},[e(g,null,{default:n(()=>[_(i(t(o)("homePage.whatWeDo")),1)]),_:1}),s("div",be,[e(C,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[_(i(t(o)("homePage.whatWeDoDetails")),1)]),_:1}),s("div",null,[e(B,{to:"/services"},{default:n(()=>[e(T,{label:t(o)("homePage.knowOurServices"),class:"mt-4 mb-8"},null,8,["label"])]),_:1})])])],2),s("div",ve,[e(I,{src:"/images/stuff.png","max-width":"480px"})])],2)]),_:1}),e(U,{ref_key:"contact",ref:m},null,512)],64)}}});export{Be as default};
