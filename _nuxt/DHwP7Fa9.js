import{_ as b}from"./DkQoJQHu.js";import{u as p,_ as w}from"./TwSguRWg.js";import{R as h}from"./CLs6BFWk.js";import{_ as x,k as R,o as d,c as g,b as e,w as s,a as o,d as m,t as i,u as a,f as C,F as k}from"./Dk6CFyjZ.js";import{a as S}from"./bBINeXyt.js";import{_ as T}from"./Bn6jPbKj.js";const y=()=>({clientReviews:[{content:"clientReviews.giancolaContent",src:"/images/reviews/tomasGiancola.jpeg",name:"Tomás Giancola",jobTitle:"clientReviews.giancolaTitle",company:"Pillmayken"},{content:"clientReviews.solangeContent",src:"/images/reviews/solangeFlores.jpeg",name:"Solange Flores Gourdy",jobTitle:"clientReviews.solangeTitle",company:"Integrated Solutions"}]}),j={class:"card"},F={class:"border surface-border border-round pt-6 px-2 pb-0"},I={class:"pt-4 row"},B=["src"],G={class:"mt-2"},N={__name:"ReviewsCarousel",setup(u){const{t:n}=p(),{clientReviews:l}=y();return(v,f)=>{const c=w,r=h,_=R("Carousel");return d(),g("div",j,[e(_,{value:a(l),"num-visible":1,"num-scroll":1,class:"carousel-color",circular:""},{item:s(t=>[o("div",F,[o("div",I,[o("img",{src:t.data.src,height:"60%",width:"60%",class:"img-border"},null,8,B),o("div",G,[e(c,{"font-weight":"400",color:"black",class:"font-size-text"},{default:s(()=>[m(i(t.data.name),1)]),_:2},1024)]),o("div",null,[e(c,{color:"black",class:"font-size-text"},{default:s(()=>[m(i(a(n)(t.data.jobTitle))+" - "+i(t.data.company),1)]),_:2},1024)])]),e(r,{color:"black","font-weight":"",class:"comment-text"},{default:s(()=>[m(i(a(n)(t.data.content)),1)]),_:2},1024)])]),_:1},8,["value"])])}}},V=x(N,[["__scopeId","data-v-f40a24bf"]]),q=C({__name:"clients",setup(u){const{t:n}=p(),l={src:"/images/values/value-3.png",srcAlt:"/images/values/value-alt-3.png",width:"133px",height:"57px",class:"space-layout-bottom"};return(v,f)=>{const c=b,r=V,_=S,t=T;return d(),g(k,null,[e(c,{class:"pt-8",title:a(n)("clientReviews.title"),id:"our-clients-section",subtitle:a(n)("clientReviews.subtitle"),image:l},null,8,["title","subtitle"]),e(_,{background:"/images/background/background-3.png"},{default:s(()=>[e(r)]),_:1}),e(t)],64)}}});export{q as default};
