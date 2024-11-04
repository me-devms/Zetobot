import{_ as B}from"./App-26099fac.js";import{r as m,o as n,h as k,f as S,a as e,g as A,c as b,d as E,F,n as w,b as Z,t as l,x as G,O as j,S as z,T as D,e as x,u as R}from"./app-43851608.js";import{_ as L}from"./Modal-22a49fae.js";import{_ as H}from"./FormInput-4a309017.js";import{_ as q}from"./FormImage-5b2df4ab.js";import{_ as J}from"./FormSelect-2d73589a.js";import{l as K}from"./index-99011d5f.js";/* empty css              */import{t as U}from"./index-17cd980e.js";import{_ as P,a as Q}from"./ContactTable-e7b460b8.js";import"./Sidebar-13bbdf6e.js";import"./Menu-7a7609fd.js";import"./ProfileModal-628e5b7c.js";import"./LangToggle-8d05b0dc.js";import"./MobileSidebar-64958b6d.js";import"./use-text-value-242aa4d7.js";import"./ChevronUpDownIcon-8859f144.js";import"./debounce-729b203d.js";import"./_baseGetTag-2e10a2d1.js";import"./Dropdown-6e7c10b4.js";import"./use-tree-walker-7c9f6f67.js";import"./DropdownItem-48d91d39.js";import"./Pagination-8172d90a.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},X={class:"mt-4 flex"},Y=["disabled"],ee={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},te=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),se=e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),oe=[te,se],le={key:1},N={__name:"FormModal",props:{modelValue:Boolean,label:String,url:String,form:Object,formInputs:Array},emits:["update:modelValue","callback"],setup(i,{emit:f}){const a=i,r=m(a.form),d=m(!1),c=m({}),h=async s=>{d.value=!0,c.value={};try{const o=new FormData;Object.keys(r.value).forEach(y=>{const _=r.value[y];Array.isArray(_)?_.forEach(C=>{o.append(y+"[]",C)}):o.append(y,_)});const t=await G.post(a.url,o,{headers:{"Content-Type":"multipart/form-data"}});t.status===200&&t.data.success?V(t):p(t)}catch(o){u(o)}finally{setTimeout(()=>{d.value=!1},1e3)}},V=s=>{setTimeout(()=>{v(),j.reload(),K(s.data.message,{autoClose:3e3}),g("callback",s.data)},1e3)},p=s=>{setTimeout(()=>{s.data.errors&&(c.value=s.data.errors)},1e3)},u=s=>{setTimeout(()=>{c.value=s.response.data.errors},1e3)},g=f;function v(){g("update:modelValue",!1)}return(s,o)=>(n(),k(L,{label:i.label,isOpen:i.modelValue},{default:S(()=>[e("div",W,[e("form",{onSubmit:o[0]||(o[0]=A(t=>h(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[(n(!0),b(F,null,E(i.formInputs,(t,y)=>{var _,C,I,O,T,M;return n(),b(F,{key:y},[t.inputType=="FormInput"?(n(),k(H,{key:0,modelValue:r.value[t.name],"onUpdate:modelValue":$=>r.value[t.name]=$,error:(C=(_=c.value)==null?void 0:_[t.name])==null?void 0:C[0],name:t.label,type:t.type,class:w(t.className)},null,8,["modelValue","onUpdate:modelValue","error","name","type","class"])):t.inputType=="FormSelect"?(n(),k(J,{key:1,modelValue:r.value[t.name],"onUpdate:modelValue":$=>r.value[t.name]=$,error:(O=(I=c.value)==null?void 0:I[t.name])==null?void 0:O[0],options:t.options,name:t.label,class:w(t.className),placeholder:t.placeholder},null,8,["modelValue","onUpdate:modelValue","error","options","name","class","placeholder"])):t.inputType=="FormImage"?(n(),k(q,{key:2,modelValue:r.value[t.name],"onUpdate:modelValue":$=>r.value[t.name]=$,error:(M=(T=c.value)==null?void 0:T[t.name])==null?void 0:M[0],options:t.options,label:t.label,class:w(t.className)},null,8,["modelValue","onUpdate:modelValue","error","options","label","class"])):Z("",!0)],64)}),128)),e("div",X,[e("button",{type:"button",onClick:A(v,["self"]),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},l(s.$t("Cancel")),1),e("button",{class:w(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":d.value}]),disabled:d.value},[d.value?(n(),b("svg",ee,oe)):(n(),b("span",le,l(s.$t("Save")),1))],10,Y)])],32)])]),_:1},8,["label","isOpen"]))}},ae={class:"pt-20"},re={class:"flex justify-center space-x-8 items-center pb-6 pr-20 border-gray-300 border-b"},ne={class:"rounded-full p-1 bg-white"},ie={class:"rounded-full text-3xl flex justify-center items-center h-24 w-24 capitalize"},de={class:"text-3xl"},ue={class:"flex space-x-3 mt-4"},ce={class:"text-[14px]"},me={class:"text-[14px]"},pe={class:"pr-20 border-gray-300 border-b py-4"},fe={class:"grid grid-cols-2 space-x-8 text-[14px]"},ve={class:"text-right text-slate-500 pb-2"},be={class:"text-right text-slate-500 pb-2"},he={class:"p-1 bg-gray-50 text-xs rounded-lg text-gray-600"},ge={__name:"ContactGroupInfo",props:["group"],setup(i){const f=i,a=m(f.group);z(()=>{a.value=f.group});const r=m(!1),d=m({name:a.value.name}),c=[{inputType:"FormInput",name:"name",label:U("name"),type:"text",className:"sm:col-span-6"}];D({test:null});const h=async()=>{j.visit("/contact-groups",{method:"delete",data:{uuids:[a.value.uuid]},preserveState:!0})},V=()=>{r.value=!0};return(p,u)=>{var g;return n(),b(F,null,[e("div",null,[e("div",ae,[e("div",re,[e("div",null,[e("div",ne,[e("div",ie,l(a.value.name.substring(0,1)),1)])]),e("div",null,[e("h1",de,l(a.value.name),1),e("div",ue,[e("button",{class:"bg-gray-200 py-2 px-4 h-9 rounded-md flex items-center",onClick:u[0]||(u[0]=v=>V())},[e("span",ce,l(p.$t("Edit")),1)]),e("button",{onClick:u[1]||(u[1]=v=>h()),class:"bg-gray-200 py-2 px-4 h-9 rounded-md flex items-center"},[e("span",me,l(p.$t("Delete")),1)])])])]),e("div",pe,[e("div",fe,[e("div",ve,[e("span",null,l(p.$t("Group name")),1)]),e("div",null,[e("span",null,l(a.value.name),1)]),e("div",be,[e("span",null,l(p.$t("Total contacts")),1)]),e("div",null,[e("span",he,l(a.value.contact_count),1)])])])])]),x(N,{modelValue:r.value,"onUpdate:modelValue":u[2]||(u[2]=v=>r.value=v),label:p.$t("Edit group"),url:"/contact-groups/"+((g=a.value)==null?void 0:g.uuid),form:d.value,formInputs:c},null,8,["modelValue","label","url","form"])],64)}}},_e={class:"bg-white md:bg-inherit md:flex md:flex-grow capitalize"},xe={class:"px-4 pt-4"},ye={class:"flex justify-between mt-2"},$e={class:"flex space-x-1 text-xl"},we={class:"text-slate-500"},Ve={class:"flex space-x-2 items-center"},Ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},[e("g",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"},[e("path",{d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"}),e("path",{d:"M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7Z"})])],-1),ke=[Ce],Fe={class:"md:w-[70%] bg-cover md:h-[100vh] flex justify-center overflow-y-scroll"},je={key:0},Ie={key:1,class:"md:block pt-20 hidden"},Oe={class:"border py-10 w-[30em] rounded-xl bg-white"},Te={class:"text-center text-2xl text-slate-500 mb-6"},Me=e("div",{class:"flex justify-center"},[e("div",{class:"border-r border-slate-500 h-10"})],-1),Ae={class:"text-center text-slate-600"},Se=e("div",{class:"flex justify-center"},[e("div",{class:"border-r border-slate-500 h-10"})],-1),Ue={class:"flex justify-center space-x-4 mt-6"},rt={__name:"Group",props:{rows:Object,filters:Object,rowCount:Number,group:Object},setup(i){const f=i,a=m(!1),r=window.location.href,d=m(!1),c=m(r),h=m({name:""}),p=[{inputType:"FormInput",name:"name",label:U("name"),type:"text",className:"sm:col-span-6"}],u=()=>{d.value=!0,h.value.name=""},g=s=>{j.visit("/contact-groups",{method:"get",data:s})},v=s=>{group.value=s.data,h.value.name=s.data.name};return(s,o)=>(n(),b(F,null,[x(B,null,{default:S(()=>[e("div",_e,[e("div",{class:w(["md:w-[30%] md:flex flex-col h-full bg-white border-r border-l",i.group?"hidden":""])},[e("div",xe,[e("div",ye,[e("div",$e,[e("h2",null,l(s.$t("Groups")),1),e("span",we,l(f.rowCount),1)]),e("div",Ve,[e("span",{onClick:o[0]||(o[0]=t=>u()),class:"cursor-pointer",title:"Add Contact"},ke)])])]),x(Q,{rows:f.rows,filters:f.filters,type:"group",onCallback:g},null,8,["rows","filters"])],2),e("div",Fe,[i.group?(n(),b("div",je,[x(ge,{group:i.group},null,8,["group"])])):(n(),b("div",Ie,[e("div",Oe,[e("h2",Te,l(s.$t("Select group")),1),Me,e("h2",Ae,l(s.$t("Or")),1),Se,e("div",Ue,[e("button",{onClick:o[1]||(o[1]=t=>u()),class:"bg-primary rounded-lg text-sm text-white p-2 px-8 text-center capitalize"},l(s.$t("Add group")),1),e("button",{onClick:o[2]||(o[2]=t=>a.value=!0),class:"bg-primary rounded-lg text-sm text-white p-2 px-8 text-center"},l(s.$t("Bulk upload")),1)])])]))])])]),_:1}),x(N,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=t=>d.value=t),label:s.$t("Add group"),url:c.value,form:h.value,formInputs:R(p),onCallback:v},null,8,["modelValue","label","url","form","formInputs"]),x(P,{type:"group",modelValue:a.value,"onUpdate:modelValue":o[4]||(o[4]=t=>a.value=t)},null,8,["modelValue"])],64))}};export{rt as default};
