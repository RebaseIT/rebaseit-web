import{_ as s,m as r,q as l,o,c,l as u,d as i,t as f,n as p,u as d,ae as _,k as m,g as b}from"./Dk6CFyjZ.js";const y={__name:"ReTitleSpan",props:{text:{type:String,required:!1,default:""},bold:{type:Boolean,default:!1},textTransform:{type:String,default:"none"},fontSize:{type:String,default:"base"},fontWeight:{type:String,default:"200"},isClickable:{type:Boolean,default:!1}},setup(t){r(e=>({"8363856c":d(a),"247f9790":t.fontWeight,"4bb07f94":t.textTransform}));const n=t,a=l(()=>`var(--font-size-${n.fontSize})`);return(e,S)=>(o(),c("span",{class:p(["re-title-span",{clickable:t.isClickable}])},[u(e.$slots,"default",{},()=>[i(f(t.text),1)],!0)],2))}},B=s(y,[["__scopeId","data-v-72f7b8a2"]]),k=()=>_(),x={__name:"ReButton",props:{type:{type:String,default:"button",validator:t=>["submit","reset","button"].includes(t)}},setup(t){return(n,a)=>{const e=m("Button");return o(),b(e,{type:t.type,class:"re-button",size:"small"},null,8,["type"])}}},z=s(x,[["__scopeId","data-v-361dcd13"]]);export{B as _,z as a,k as u};