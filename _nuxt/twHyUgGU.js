import{_ as b}from"./BB5A4qun.js";import{u as p,_ as w}from"./LdS4CII9.js";import{R as h}from"./D09wm7au.js";import{_ as R,k as x,o as d,c as g,b as e,w as a,a as o,d as m,t as i,u as s,f as C,F as k}from"./CU6Z0vau.js";import{a as S}from"./C8awREsC.js";const T=()=>({clientReviews:[{content:"clientReviews.giancolaContent",src:"/images/reviews/tomasGiancola.jpeg",name:"Tomás Giancola",jobTitle:"clientReviews.giancolaTitle",company:"Pillmayken"},{content:"clientReviews.solangeContent",src:"/images/reviews/solangeFlores.jpeg",name:"Solange Flores Gourdy",jobTitle:"clientReviews.solangeTitle",company:"Integrated Solutions"}]}),y={class:"card"},j={class:"border surface-border border-round pt-6 px-2 pb-0"},F={class:"pt-4 row"},I=["src"],B={class:"mt-2"},G={__name:"ReviewsCarousel",setup(u){const{t}=p(),{clientReviews:l}=T();return(v,f)=>{const c=w,r=h,_=x("Carousel");return d(),g("div",y,[e(_,{value:s(l),"num-visible":1,"num-scroll":1,class:"carousel-color",circular:""},{item:a(n=>[o("div",j,[o("div",F,[o("img",{src:n.data.src,height:"60%",width:"60%",class:"img-border"},null,8,I),o("div",B,[e(c,{"font-weight":"400",color:"black",class:"font-size-text"},{default:a(()=>[m(i(n.data.name),1)]),_:2},1024)]),o("div",null,[e(c,{color:"black",class:"font-size-text"},{default:a(()=>[m(i(s(t)(n.data.jobTitle))+" - "+i(n.data.company),1)]),_:2},1024)])]),e(r,{color:"black","font-weight":"",class:"comment-text"},{default:a(()=>[m(i(s(t)(n.data.content)),1)]),_:2},1024)])]),_:1},8,["value"])])}}},N=R(G,[["__scopeId","data-v-f40a24bf"]]),E=C({__name:"clients",setup(u){const{t}=p(),l={src:"/images/values/value-3.png",srcAlt:"/images/values/value-alt-3.png",width:"133px",height:"57px",class:"space-layout-bottom"};return(v,f)=>{const c=b,r=N,_=S;return d(),g(k,null,[e(c,{class:"pt-8",title:s(t)("clientReviews.title"),id:"our-clients-section",subtitle:s(t)("clientReviews.subtitle"),image:l},null,8,["title","subtitle"]),e(_,{background:"/images/background/background-3.png"},{default:a(()=>[e(r)]),_:1})],64)}}});export{E as default};