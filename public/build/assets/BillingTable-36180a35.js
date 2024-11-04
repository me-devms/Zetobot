import{r as g,O as x,o as n,c as m,a,w as N,v as B,u as v,b as y,e,f as t,k as i,t as l,F as T,d as S,h as $,n as z,j as V}from"./app-43851608.js";import{d as j}from"./debounce-729b203d.js";/* empty css              */import{_ as M}from"./Table-69702a89.js";import{T as O,a as D,_ as c}from"./TableHeaderRowItem-459897e8.js";import{T as L,a as R,_ as d}from"./TableBodyRowItem-110be769.js";const F={class:"flex justify-between"},H={class:"bg-white flex items-center shadow-sm h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-sm"},q=a("span",{class:"pl-3"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),A=["placeholder"],E=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[a("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),I=[E],U={key:1,class:"pr-2"},Z=V('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),G=[Z],J=a("span",{class:"float-right"},null,-1),te={__name:"BillingTable",props:{rows:{type:Object,required:!0},filters:{type:Object},uuid:{type:String}},emits:["update:modelValue","callback"],setup(f,{emit:K}){const h=f,o=g({search:h.filters.search}),p=g(!1),k=()=>{o.value.search=null,w()},C=r=>r===h.rows.data.length-1,_=j(()=>{p.value=!0,w()},1e3),w=()=>{x.visit(window.location.pathname,{method:"get",data:o.value})};return(r,u)=>(n(),m(T,null,[a("div",F,[a("div",H,[q,N(a("input",{onInput:u[0]||(u[0]=(...s)=>v(_)&&v(_)(...s)),"onUpdate:modelValue":u[1]||(u[1]=s=>o.value.search=s),type:"text",class:"outline-none px-4 w-full bg-inherit",placeholder:r.$t("Search billing logs")},null,40,A),[[B,o.value.search]]),p.value===!1&&o.value.search?(n(),m("button",{key:0,onClick:k,type:"button",class:"pr-2"},I)):y("",!0),p.value?(n(),m("span",U,G)):y("",!0)])]),e(M,{rows:f.rows},{default:t(()=>[e(O,null,{default:t(()=>[e(D,null,{default:t(()=>[e(c,{position:"first"},{default:t(()=>[i(l(r.$t("Date")),1)]),_:1}),e(c,{position:"first",class:"hidden sm:table-cell"},{default:t(()=>[i(l(r.$t("Organization")),1)]),_:1}),e(c,{class:"hidden sm:table-cell"},{default:t(()=>[i(l(r.$t("Description")),1)]),_:1}),e(c,{class:"hidden sm:table-cell"},{default:t(()=>[i(l(r.$t("Amount")),1)]),_:1}),e(c,{position:"last"})]),_:1})]),_:1}),e(L,null,{default:t(()=>[(n(!0),m(T,null,S(f.rows.data,(s,b)=>(n(),$(R,{key:b,class:z(C(b)?"":"border-b")},{default:t(()=>[e(d,{position:"first",class:"hidden sm:table-cell"},{default:t(()=>[i(l(s.created_at),1)]),_:2},1024),e(d,{position:"first",class:"capitalize"},{default:t(()=>[i(l(s.organization.name),1)]),_:2},1024),e(d,{class:"hidden sm:table-cell capitalize"},{default:t(()=>[i(l(s.description),1)]),_:2},1024),e(d,{class:""},{default:t(()=>[i(l(s.amount),1)]),_:2},1024),e(d,{class:"hidden sm:table-cell"},{default:t(()=>[J]),_:1})]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"])],64))}};export{te as _};
