import{T as M,r as C,O as z,o as i,c as w,a as l,w as D,v as L,u as p,b as c,e as a,f as t,k as d,t as o,h,F as T,d as j,n as F,i as O,j as U}from"./app-c30f5440.js";import{d as E}from"./debounce-e7ce8f3d.js";import{_ as H}from"./AlertModal-259dd0d1.js";import{u as I}from"./useAlertModal-541913ff.js";/* empty css              */import{_ as Z}from"./Table-bd45641c.js";import{T as q,a as G,_ as u}from"./TableHeaderRowItem-38048e9f.js";import{T as J,a as K,_ as m}from"./TableBodyRowItem-3ebe6af5.js";import{_ as P}from"./Dropdown-3b426dfb.js";import{_ as Q,a as x}from"./DropdownItem-d85e9c61.js";const W={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},X=l("span",{class:"pl-3"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),Y=["placeholder"],ee=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[l("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),te=[ee],ae={key:1,class:"pr-2"},se=U('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),le=[se],oe={class:""},re={class:"float-right"},ie={class:"py-1 rounded-[5px] text-xs px-3 bg-[#ddebf7] text-slate-700"},ne={class:"float-right"},de=l("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[l("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[l("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1),ke={__name:"UserTable",props:{rows:{type:Object,required:!0},filters:{type:Object},type:{type:String},showDeleteBtn:{type:Boolean,default:!0},showRole:{type:Boolean,default:!1}},emits:["delete"],setup(r,{emit:ce}){const b=r,{isOpenAlert:y,openAlert:$,confirmAlert:B}=I(),N=M({test:null}),V=e=>{N.delete(b.type==="admin"?"/admin/team/users/"+e:"/admin/users/"+e)},f=C({search:b.filters.search}),_=C(!1),S=()=>{f.value.search=null,g()},R=e=>e===b.rows.data.length-1,v=E(()=>{_.value=!0,g()},1e3),A=e=>e===1?"Active":e===0?"Inactive":e,g=()=>{const e=window.location.pathname;z.visit(e,{method:"get",data:f.value})};return(e,n)=>(i(),w(T,null,[l("div",W,[X,D(l("input",{onInput:n[0]||(n[0]=(...s)=>p(v)&&p(v)(...s)),"onUpdate:modelValue":n[1]||(n[1]=s=>f.value.search=s),type:"text",class:"outline-none px-4 w-full bg-inherit",placeholder:e.$t("Search users")},null,40,Y),[[L,f.value.search]]),_.value===!1&&f.value.search?(i(),w("button",{key:0,onClick:S,type:"button",class:"pr-2"},te)):c("",!0),_.value?(i(),w("span",ae,le)):c("",!0)]),a(Z,{rows:r.rows},{default:t(()=>[a(q,null,{default:t(()=>[a(G,null,{default:t(()=>[a(u,{position:"first"},{default:t(()=>[d(o(e.$t("Name")),1)]),_:1}),a(u,{class:"hidden sm:table-cell"},{default:t(()=>[d(o(e.$t("Email")),1)]),_:1}),r.type==="admin"||r.showRole===!0?(i(),h(u,{key:0,class:"hidden sm:table-cell"},{default:t(()=>[d(o(e.$t("Role")),1)]),_:1})):c("",!0),a(u,null,{default:t(()=>[l("span",oe,o(e.$t("Status")),1)]),_:1}),a(u,{class:"hidden sm:table-cell"},{default:t(()=>[l("span",re,o(e.$t("Last updated")),1)]),_:1}),a(u,{position:"last"})]),_:1})]),_:1}),a(J,null,{default:t(()=>[(i(!0),w(T,null,j(r.rows.data,(s,k)=>(i(),h(K,{key:k,class:F(R(k)?"":"border-b")},{default:t(()=>[a(m,{position:"first",class:"capitalize"},{default:t(()=>[d(o(s.full_name),1)]),_:2},1024),a(m,{class:"hidden sm:table-cell"},{default:t(()=>[d(o(s.email),1)]),_:2},1024),r.type==="admin"||r.showRole===!0?(i(),h(m,{key:0,class:"hidden sm:table-cell capitalize"},{default:t(()=>[d(o(s.role),1)]),_:2},1024)):c("",!0),a(m,{class:"capitalize"},{default:t(()=>[l("span",ie,o(A(s.status)),1)]),_:2},1024),a(m,{class:"hidden sm:table-cell"},{default:t(()=>[l("span",ne,o(s.updated_at),1)]),_:2},1024),a(m,{position:"last"},{default:t(()=>[s.role!="admin"?(i(),h(P,{key:0,align:"right",class:"mt-2"},{items:t(()=>[a(Q,null,{default:t(()=>[a(x,{href:r.type==="admin"?"/admin/team/users/"+s.id:"/admin/users/"+s.id},{default:t(()=>[d(o(e.$t("View/edit")),1)]),_:2},1032,["href"]),r.showDeleteBtn?(i(),h(x,{key:0,as:"button",onClick:ue=>p($)(s.id)},{default:t(()=>[d(o(e.$t("Delete")),1)]),_:2},1032,["onClick"])):c("",!0)]),_:2},1024)]),default:t(()=>[de]),_:2},1024)):c("",!0)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),a(H,{modelValue:p(y),"onUpdate:modelValue":n[2]||(n[2]=s=>O(y)?y.value=s:null),onConfirm:n[3]||(n[3]=()=>p(B)(V)),label:e.$t("Delete row"),description:e.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}};export{ke as _};
