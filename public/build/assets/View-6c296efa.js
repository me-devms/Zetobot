import{r as u,T,q as j,h as D,f as y,o as l,a as t,t as i,e as p,k as O,u as m,l as F,c as n,g as H,n as b,b as $,d as I,F as P,O as q,x as V}from"./app-c30f5440.js";import E from"./App-b92bedf6.js";import{_ as C}from"./FormSelect-bbb2db84.js";import{_ as R}from"./FormTextArea-d4218c17.js";import"./Sidebar-fb8154cd.js";import"./Menu-5d749046.js";import"./ProfileModal-9fe3e554.js";import"./FormInput-1525ce37.js";import"./LangToggle-2a73af7c.js";import"./MobileSidebar-411ec45b.js";import"./index-cc6b842d.js";/* empty css              */import"./index-df5ba891.js";import"./use-text-value-10cbca9c.js";import"./ChevronUpDownIcon-05cecc61.js";const Z={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},G={class:"flex justify-between mt-8 md:mt-0"},J={class:"text-xl mb-1"},K=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H14.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1),Q={class:"grid grid-cols-2 md:flex gap-x-6 mt-4 md:mt-10"},W={class:"col-span-2 md:order-1 md:w-[70%]"},X={class:"bg-white md:border py-5 md:px-5 rounded-[0.5rem] mb-4 text-sm"},Y={class:"text-xl"},tt={class:"border border-dashed py-2 px-2 mt-8 bg-slate-100"},et={key:0,class:"bg-white border py-5 px-5 rounded-[0.5rem] mb-4"},st={type:"submit",class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},ot={class:"flex space-x-4 text-sm"},it={class:"bg-slate-100 rounded-full h-12 w-12 p-4 flex justify-center items-center"},at={class:"space-x-4 mb-1"},lt={class:"col-span-2 w-[100%] md:order-2 md:w-[30%]"},nt={class:"bg-white md:border md:p-4 text-sm rounded-[0.5rem]"},rt={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},dt={class:"capitalize"},ct={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},ut={class:"capitalize"},pt={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},mt={key:0,class:"capitalize"},bt={key:1,class:"capitalize"},vt={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},ft={key:0,class:"capitalize"},ht={key:1,class:"capitalize"},_t={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},gt={key:0,class:"flex grid grid-cols-2 space-x-2 mt-4"},Tt={__name:"View",props:["title","ticket","users"],setup(S){const e=S,v=u(e.ticket.priority),f=u(e.ticket.assigned_to),h=u([]),r=T({message:null}),U=u([{value:"critical",label:"Critical"},{value:"high",label:"High"},{value:"medium",label:"Medium"},{value:"low",label:"Low"}]),_=s=>{const o={month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(s).toLocaleString("en-US",o)},z=(s,o)=>{const d=s.charAt(0).toUpperCase(),c=o.charAt(0).toUpperCase();return`${d}${c}`},B=()=>{r.post("/admin/support/"+e.ticket.uuid+"/comment",{preserveScroll:!0,onSuccess:()=>r.reset()})},g=s=>{q.post("/admin/support/"+e.ticket.uuid+"/status",{status:s})},L=s=>s.map(o=>({value:o.id,label:o.first_name+" "+o.last_name})),N=async s=>{try{const o=await V.post("/admin/support/"+e.ticket.uuid+"/assign",{user:s})}catch{}},A=async s=>{try{const o=await V.post("/admin/support/"+e.ticket.uuid+"/priority",{priority:s})}catch{}};return j(()=>{h.value=L(e.users)}),(s,o)=>(l(),D(E,null,{default:y(()=>{var d,c,k,x,w;return[t("div",Z,[t("div",G,[t("div",null,[t("h1",J,i(s.$t("Ticket ref"))+": "+i(e.ticket.reference),1)]),t("div",null,[p(m(F),{href:"/admin/support",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:y(()=>[K,O(" "+i(s.$t("Back")),1)]),_:1})])]),t("div",Q,[t("div",W,[t("div",X,[t("h1",Y,i(s.$t("Subject"))+": "+i(e.ticket.subject),1),t("div",tt,i(e.ticket.message),1)]),e.ticket.status==="open"||e.ticket.status==="pending"?(l(),n("div",et,[t("form",{onSubmit:o[1]||(o[1]=H(a=>B(),["prevent"]))},[p(R,{modelValue:m(r).message,"onUpdate:modelValue":o[0]||(o[0]=a=>m(r).message=a),name:s.$t("Comment"),type:"text",showLabel:!0,error:m(r).errors.message,textAreaRows:3,class:b("sm:col-span-6 mb-5")},null,8,["modelValue","name","error"]),t("button",st,i(s.$t("Add comment")),1)],32)])):$("",!0),(l(!0),n(P,null,I(e.ticket.comments_with_user,(a,M)=>(l(),n("div",{key:M,class:"bg-white border py-5 px-5 rounded-[0.5rem] mb-2"},[t("div",ot,[t("div",null,[t("div",it,i(z(a.user.first_name,a.user.last_name)),1)]),t("div",null,[t("div",at,[t("span",null,i(a.user.first_name+" "+a.user.last_name),1),t("span",null,i(_(a.created_at)),1)]),t("div",null,i(a.message),1)])])]))),128))]),t("div",lt,[t("div",nt,[t("div",rt,[t("span",null,i(s.$t("Category"))+":",1),t("span",dt,i(e.ticket.category.name),1)]),t("div",ct,[t("span",null,i(s.$t("Status"))+":",1),t("span",ut,i(e.ticket.status),1)]),t("div",pt,[t("span",null,i(s.$t("Priority"))+":",1),e.ticket.status==="open"||e.ticket.status==="pending"?(l(),n("span",mt,[p(C,{modelValue:v.value,"onUpdate:modelValue":[o[2]||(o[2]=a=>v.value=a),A],options:U.value,class:b("w-full"),placeholder:"Not Set"},null,8,["modelValue","options"])])):(l(),n("span",bt,i(e.ticket.priority),1))]),t("div",vt,[t("span",null,i(s.$t("Assigned to"))+":",1),e.ticket.status==="open"||e.ticket.status==="pending"?(l(),n("span",ft,[p(C,{modelValue:f.value,"onUpdate:modelValue":[o[3]||(o[3]=a=>f.value=a),N],options:h.value,class:b("w-full"),placeholder:"Select User"},null,8,["modelValue","options"])])):(l(),n("span",ht,i((d=e.ticket)!=null&&d.agent?((k=(c=e.ticket)==null?void 0:c.agent)==null?void 0:k.first_name)+" "+((w=(x=e.ticket)==null?void 0:x.agent)==null?void 0:w.last_name):s.$t("Not set")),1))]),t("div",_t,[t("span",null,i(s.$t("Date created"))+":",1),t("span",null,i(_(e.ticket.created_at)),1)]),e.ticket.status==="open"||e.ticket.status==="pending"?(l(),n("div",gt,[t("button",{onClick:o[4]||(o[4]=a=>g("closed")),class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},i(s.$t("Close ticket")),1),t("button",{onClick:o[5]||(o[5]=a=>g("resolved")),class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},i(s.$t("Mark as resolved")),1)])):$("",!0)])])])])]}),_:1}))}};export{Tt as default};