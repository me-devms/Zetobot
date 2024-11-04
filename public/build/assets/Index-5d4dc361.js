import S from"./App-ad5f7ecb.js";import{T as O,r as x,O as F,o as d,c as p,a as e,w as L,v as R,u as c,b as $,e as t,f as s,k as l,t as r,F as k,d as z,h as T,n as D,i as Z,j as H,l as I}from"./app-43851608.js";import{d as U}from"./debounce-729b203d.js";import{_ as q}from"./AlertModal-1a288ce3.js";import{u as E}from"./useAlertModal-27d09708.js";/* empty css              */import{_ as G}from"./Table-69702a89.js";import{T as J,a as K,_}from"./TableHeaderRowItem-459897e8.js";import{T as P,a as Q,_ as v}from"./TableBodyRowItem-110be769.js";import{_ as W}from"./Dropdown-6e7c10b4.js";import{_ as X,a as C}from"./DropdownItem-48d91d39.js";import"./Sidebar-7bb6d772.js";import"./Menu-4221d61f.js";import"./ProfileModal-628e5b7c.js";import"./FormInput-4a309017.js";import"./LangToggle-8d05b0dc.js";import"./MobileSidebar-b73cd192.js";import"./index-99011d5f.js";import"./_baseGetTag-2e10a2d1.js";import"./Pagination-8172d90a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-text-value-242aa4d7.js";import"./use-tree-walker-7c9f6f67.js";const Y={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},ee=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),te=["placeholder"],se=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),ae=[se],oe={key:1,class:"pr-2"},re=H('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),ie=[re],le=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1),ne={__name:"RoleTable",props:{rows:{type:Object,required:!0},filters:{type:Object}},emits:["delete"],setup(u,{emit:h}){const n=u,{isOpenAlert:f,openAlert:N,confirmAlert:B}=E(),V=O({test:null}),j=a=>{V.delete("/admin/team/role/"+a)},M=a=>a===n.rows.data.length-1,m=x({search:n.filters.search}),w=x(!1),A=()=>{m.value.search=null,g()},b=U(()=>{w.value=!0,g()},1e3),g=()=>{F.visit("/admin/team/roles",{method:"get",data:m.value})};return(a,i)=>(d(),p(k,null,[e("div",Y,[ee,L(e("input",{onInput:i[0]||(i[0]=(...o)=>c(b)&&c(b)(...o)),"onUpdate:modelValue":i[1]||(i[1]=o=>m.value.search=o),type:"text",class:"outline-none px-4 w-full",placeholder:a.$t("Search roles")},null,40,te),[[R,m.value.search]]),w.value===!1&&m.value.search?(d(),p("button",{key:0,onClick:A,type:"button",class:"pr-2"},ae)):$("",!0),w.value?(d(),p("span",oe,ie)):$("",!0)]),t(G,{rows:u.rows},{default:s(()=>[t(J,null,{default:s(()=>[t(K,null,{default:s(()=>[t(_,{position:"first"},{default:s(()=>[l(r(a.$t("Name")),1)]),_:1}),t(_,null,{default:s(()=>[l(r(a.$t("Last updated")),1)]),_:1}),t(_,{position:"last"})]),_:1})]),_:1}),t(P,null,{default:s(()=>[(d(!0),p(k,null,z(u.rows.data,(o,y)=>(d(),T(Q,{key:y,class:D(M(y)?"":"border-b")},{default:s(()=>[t(v,{position:"first",class:"capitalize"},{default:s(()=>[l(r(o.name),1)]),_:2},1024),t(v,{class:"hidden sm:table-cell"},{default:s(()=>[l(r(o.updated_at),1)]),_:2},1024),t(v,{position:"last"},{default:s(()=>[t(W,{align:"right",class:"mt-2"},{items:s(()=>[t(X,null,{default:s(()=>[t(C,{href:"/admin/team/roles/"+o.uuid},{default:s(()=>[l(r(a.$t("View/edit")),1)]),_:2},1032,["href"]),t(C,{as:"button",onClick:he=>c(N)(o.uuid)},{default:s(()=>[l(r(a.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[le]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),t(q,{modelValue:c(f),"onUpdate:modelValue":i[2]||(i[2]=o=>Z(f)?f.value=o:null),onConfirm:i[3]||(i[3]=()=>c(B)(j)),label:a.$t("Delete row"),description:a.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},de={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},ce={class:"flex justify-between"},ue={class:"text-xl mb-1"},me={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),pe={class:"ml-1 mt-1"},De={__name:"Index",props:{title:String,rows:Object,filters:Object},setup(u){const h=u;return(n,f)=>(d(),T(S,null,{default:s(()=>[e("div",de,[e("div",ce,[e("div",null,[e("h1",ue,r(n.$t("Admin roles")),1),e("p",me,[fe,e("span",pe,r(n.$t("Manage roles")),1)])]),e("div",null,[t(c(I),{href:"/admin/team/roles/create",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:s(()=>[l(r(n.$t("Add role")),1)]),_:1})])]),t(ne,{rows:h.rows,filters:h.filters},null,8,["rows","filters"])])]),_:1}))}};export{De as default};