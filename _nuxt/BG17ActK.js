import{H as U,T as A}from"./DjZGb4m9.js";import{a as R,_ as W}from"./C8awREsC.js";import{_ as J}from"./dKwGNtk0.js";import{u as q,_ as K}from"./LdS4CII9.js";import{_ as Q}from"./BTwilsKe.js";import{_ as X}from"./D2JtNiri.js";import{o as r,g as f,w as n,l as C,d as i,t as _,_ as T,k,c as x,b as t,a as o,u as e,F as b,h as P,n as u,i as Y}from"./CU6Z0vau.js";import{u as B,R as Z,_ as j}from"./D09wm7au.js";import{u as N}from"./ClDWTTDc.js";import{_ as tt}from"./B180svQw.js";import"./D8HtCbnM.js";const et={__name:"ReSectionTop",props:{text:{type:String,required:!1,default:""}},setup(a){return(s,c)=>{const l=R;return r(),f(l,{background:"/images/background/background-1.png",class:"pt-8"},{default:n(()=>[C(s.$slots,"default",{},()=>[i(_(a.text),1)])]),_:3})}}},nt={class:"card-style mx-4 mb-4"},ot={class:"flex justify-content-center"},st={class:"add-white-spaces"},ct={__name:"ReSecondaryCard",props:{title:{type:String,required:!0},content:{type:String,required:!0}},setup(a){const{isSmaller:s}=B("lg");return(c,l)=>{const v=W,g=Z,S=k("Card");return r(),x("div",nt,[t(S,null,{title:n(()=>[o("div",ot,[t(v,{"font-size":e(s)?"md":"l"},{default:n(()=>[i(_(a.title),1)]),_:1},8,["font-size"])])]),content:n(()=>[t(g,{color:"black","font-weight":"",class:"flex justify-content-center"},{default:n(()=>[o("span",st,_(a.content),1)]),_:1})]),footer:n(()=>l[0]||(l[0]=[o("div",{class:"flex justify-content-center"},[o("a",{target:"_blank"})],-1)])),_:1})])}}},at=T(ct,[["__scopeId","data-v-73f98f83"]]),lt={__name:"ReSectionProducts",props:{text:{type:String,required:!1,default:""}},setup(a){return(s,c)=>{const l=R;return r(),f(l,{background:"/images/background/background-2.png"},{default:n(()=>[C(s.$slots,"default",{},()=>[i(_(a.text),1)])]),_:3})}}},rt={class:"container"},it={class:"header-img"},_t=["src"],ut={class:"add-white-spaces"},dt={__name:"ServicesTabView",setup(a){const{isSmaller:s}=B("md"),{t:c}=q(),{products:l}=N(),v=l.filter(g=>g.content&&g.isInternalProject);return(g,S)=>{const d=j,p=k("TabPanel"),$=k("TabView");return r(),x("div",rt,[t($,{class:"card-tab-view"},{default:n(()=>[(r(!0),x(b,null,P(e(v),h=>(r(),f(p,{key:h},{header:n(()=>[o("div",it,[t(d,{src:h.image.src,"max-width":"200px"},null,8,["src"])])]),default:n(()=>[o("div",{class:u(["flex align-items-center lg:p-4",{"flex-column p-1":e(s)}])},[o("img",{class:"content-img gray-border",src:h.imageContent.src},null,8,_t),o("div",{class:u(["max-w-24rem",e(s)?"ml-0 mt-4":"ml-6"])},[o("span",ut,_(e(c)(h.content)),1)],2)],2)]),_:2},1024))),128))]),_:1})])}}},mt=T(dt,[["__scopeId","data-v-4d81ddc7"]]),pt={__name:"ReSectionClients",props:{text:{type:String,required:!1,default:""}},setup(a){return(s,c)=>{const l=R;return r(),f(l,{background:"/images/background/background-2.png"},{default:n(()=>[C(s.$slots,"default",{},()=>[i(_(a.text),1)])]),_:3})}}},ft={__name:"ReSectionWhatWeDo",props:{text:{type:String,required:!1,default:""}},setup(a){return(s,c)=>{const l=R;return r(),f(l,{background:"/images/background/background-1.png"},{default:n(()=>[C(s.$slots,"default",{},()=>[i(_(a.text),1)])]),_:3})}}},gt={__name:"ReSecondaryButton",props:{type:{type:String,default:"button",validator:a=>["submit","reset","button"].includes(a)}},setup(a){return(s,c)=>{const l=k("Button");return r(),f(l,{type:a.type,size:"small",outlined:"",class:"re-secondary-button"},null,8,["type"])}}},xt=T(gt,[["__scopeId","data-v-2aea6801"]]),ht=()=>({services:[{title:"servicesSummary.swDevelopmentTitle",content:"servicesSummary.swDevelopmentContent"},{title:"servicesSummary.swRecruitingTitle",content:"servicesSummary.swRecruitingContent"},{title:"servicesSummary.swConsultancyTitle",content:"servicesSummary.swConsultancyContent"}]}),yt={class:"row px-4 py-8",id:"home-section"},vt={class:"pt-6 px-4"},bt={class:"py-6 px-4"},St={class:"flex justify-content-end"},wt={class:"py-4"},kt={class:"pb-8 px-4"},Rt={class:"mt-3"},Ct={class:"flex"},jt={__name:"index",setup(a){const{t:s}=q(),{isSmaller:c}=B("xl"),{products:l}=N(),{services:v}=ht(),g=l.filter(d=>!d.isInternalProject).map(d=>d.image),S=d=>{document.getElementById(d)&&document.getElementById(d).scrollIntoView({behavior:"smooth"})};return(d,p)=>{const $=A,h=U,y=W,w=J,I=K,V=Q,M=X,E=et,H=at,z=lt,L=mt,D=j,F=pt,G=ft,O=tt;return r(),x(b,null,[t(h,null,{default:n(()=>[t($,null,{default:n(()=>[i(_(e(s)("pages.home")),1)]),_:1})]),_:1}),t(E,null,{default:n(()=>[o("div",yt,[o("div",{class:u(["col-8 pb-0",{"col-12 text-center":e(c)}])},[t(y,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>p[1]||(p[1]=[i(" Making every ")])),_:1})],2),o("div",{class:u(["col-8 pt-0",{"col-12 text-center":e(c)}])},[t(y,{"font-family":"IBM Plex Mono","font-size":"xl-2","font-weight":"500"},{default:n(()=>p[2]||(p[2]=[i(" version "),o("span",{class:"font-bold"},"better",-1)])),_:1})],2),e(c)?Y("",!0):(r(),x(b,{key:0},[t(w,{height:"190px",width:"180px",top:"375px",right:"500px"}),t(w,{height:"320px",width:"300px",top:"130px",right:"170px"}),t(w,{height:"85px",width:"75px",top:"60px",right:"100px"}),t(w,{height:"160px",width:"150px",top:"410px",right:"0"})],64)),o("div",{class:u({"col-6":!e(c),"col-12 text-center":e(c)})},[t(I,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[i(_(e(s)("homePage.welcomeMessage")),1)]),_:1})],2),o("div",{class:u(["flex py-4",{"justify-content-center":e(c)}])},[t(V,{onClick:p[0]||(p[0]=m=>S("contact-us-section")),label:e(s)("homePage.contactUs")},null,8,["label"]),t(M,{to:"/services"},{default:n(()=>[t(xt,{label:e(s)("homePage.knowOurServices"),class:"ml-2"},null,8,["label"])]),_:1})],2)])]),_:1}),t(z,null,{default:n(()=>[o("div",vt,[t(y,null,{default:n(()=>[i(_(e(s)("homePage.ourServices")),1)]),_:1}),o("div",{class:u(["justify-content-center mt-4 text-center",{flex:!e(c)}])},[(r(!0),x(b,null,P(e(v),m=>(r(),f(H,{class:"centered-card",key:m,title:e(s)(m.title),content:e(s)(m.content)},null,8,["title","content"]))),128))],2)])]),_:1}),t(z,null,{default:n(()=>[o("div",bt,[o("div",St,[t(y,null,{default:n(()=>[i(_(e(s)("homePage.ourProducts")),1)]),_:1})]),o("div",wt,[t(L)])])]),_:1}),t(F,null,{default:n(()=>[o("div",kt,[t(y,{class:"flex justify-content-end mb-4"},{default:n(()=>[i(_(e(s)("homePage.ourClients")),1)]),_:1}),o("div",{class:u(["text-center",{"flex justify-content-evenly gap-4 flex-column align-items-center":e(c)}])},[(r(!0),x(b,null,P(e(g),m=>(r(),f(D,{class:u({"mx-5 mt-4":!e(c)}),key:m.alt,src:m.src,alt:m.alt,"max-width":m.maxWidth},null,8,["class","src","alt","max-width"]))),128))],2)])]),_:1}),t(G,null,{default:n(()=>[o("div",{class:u(["row flex py-8 px-4 justify-space-between align-items-center gap-4",{"flex-column justify-center":e(c)}])},[o("div",{class:u({"col-6":!e(c),"col-12":e(c)})},[t(y,null,{default:n(()=>[i(_(e(s)("homePage.whatWeDo")),1)]),_:1}),o("div",Rt,[t(I,{color:"black","font-size":"lg","font-weight":"400"},{default:n(()=>[i(_(e(s)("homePage.whatWeDoDetails")),1)]),_:1}),o("div",null,[t(M,{to:"/services"},{default:n(()=>[t(V,{label:e(s)("homePage.knowOurServices"),class:"mt-4 mb-8"},null,8,["label"])]),_:1})])])],2),o("div",Ct,[t(D,{src:"/images/stuff.png","max-width":"480px"})])],2)]),_:1}),t(O)],64)}}};export{jt as default};
