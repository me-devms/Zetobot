import S from"./Layout-5f40bc5f.js";import{r as y,T as A,h as O,f as D,o as r,a as t,t as n,n as i,u as o,c as d,b as c}from"./app-43851608.js";import"./index-17cd980e.js";import"./App-26099fac.js";import"./Sidebar-13bbdf6e.js";import"./Menu-7a7609fd.js";import"./Modal-22a49fae.js";import"./ProfileModal-628e5b7c.js";import"./FormInput-4a309017.js";import"./LangToggle-8d05b0dc.js";import"./index-99011d5f.js";import"./MobileSidebar-64958b6d.js";/* empty css              */const E={class:"md:h-[90vh]"},N={class:"flex justify-center items-center"},T={class:"md:w-[60em]"},L={class:"bg-white border border-slate-200 rounded-lg pt-2 text-sm mb-4 px-4 mb-20"},M={class:"w-full py-2 mb-4 mt-2"},U={class:"flex w-full"},V={class:"text-md"},z={class:"text-[16px]"},F={class:"mb-1 text-slate-500"},G={class:"ml-auto"},I={key:0,class:"bg-white border border-slate-200 rounded-lg py-2 text-sm mb-4 pb-4 px-4 mb-20"},J={class:"w-full py-2 mb-2 mt-2"},R={class:"flex w-full mb-4"},q={class:"text-md"},H={class:"text-[16px]"},K={class:"flex items-center mt-1 text-slate-500"},P={class:"w-5/5"},Q={class:"grid grid-cols-2 gap-x-4"},W={class:"border rounded-xl p-4"},X={class:"flex space-x-2"},Y={class:"flex mt-[1px]"},Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),tt=[Z],st={class:"border rounded-xl p-4"},et={class:"flex space-x-2"},ot={class:"flex mt-[1px]"},at=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),nt=[at],it={key:1,class:"bg-white border border-slate-200 rounded-lg pt-2 text-sm mb-4 px-4 mb-20"},lt={class:"w-full py-2 mb-4 mt-2"},rt={class:"flex w-full"},dt={class:"w-3/4 text-md"},ct={class:"text-[16px]"},_t={class:"mb-1 text-slate-500"},ut={class:"w-1/4"},mt={key:2,class:"bg-white border border-slate-200 rounded-lg pt-2 text-sm mb-4 px-4 mb-20"},vt={class:"w-full py-2 mb-4 mt-2"},ht={class:"flex w-full"},gt={class:"w-3/4 text-md"},pt={class:"text-[16px]"},wt={class:"mb-1 text-slate-500"},ft={class:"w-1/4"},Tt={__name:"Ticket",props:{rows:Object,filters:Object,settings:Object},setup($){var h,g,p,w,f,b,x,k;const v=y($.settings.metadata),_=y(v.value?JSON.parse(v.value):null),s=A({active:((g=(h=_.value)==null?void 0:h.tickets)==null?void 0:g.active)??!1,auto_assignment:((w=(p=_.value)==null?void 0:p.tickets)==null?void 0:w.auto_assignment)??!1,reassign_reopened_chats:((b=(f=_.value)==null?void 0:f.tickets)==null?void 0:b.reassign_reopened_chats)??!1,allow_agents_to_view_all_chats:((k=(x=_.value)==null?void 0:x.tickets)==null?void 0:k.allow_agents_to_view_all_chats)??!1}),C=()=>{s.active=!s.active,m()},j=()=>{s.reassign_reopened_chats=!s.reassign_reopened_chats,m()},B=()=>{s.allow_agents_to_view_all_chats=!s.allow_agents_to_view_all_chats,m()},u=e=>{s.auto_assignment=e,m()},m=async()=>{s.post("/settings/tickets",{preserveScroll:!0})};return(e,a)=>(r(),O(S,null,{default:D(()=>[t("div",E,[t("div",N,[t("div",T,[t("div",L,[t("div",M,[t("div",U,[t("div",V,[t("h4",z,n(e.$t("Enable ticketing")),1),t("div",F,n(e.$t("Activate ticketing workflow in your conversations")),1)]),t("div",G,[t("div",{class:i(["w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":o(s).active}]),onClick:a[0]||(a[0]=l=>C(e.active))},[t("div",{class:i(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":o(s).active}])},null,2)],2)])])])]),o(s).active?(r(),d("div",I,[t("div",J,[t("div",R,[t("div",q,[t("h4",H,n(e.$t("Auto assignment")),1),t("span",K,n(e.$t("Use auto-assignment rules to evenly distribute chats among agents automatically.")),1)])]),t("div",P,[t("div",Q,[t("div",W,[t("div",X,[t("div",null,[t("div",Y,[t("label",{onClick:a[1]||(a[1]=l=>u(!1)),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",o(s).auto_assignment===!1?"bg-[#000]":""])},[o(s).auto_assignment===!1?(r(),d("svg",{key:0,class:i(["w-4 h-4",o(s).auto_assignment===!1?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},tt,2)):c("",!0)],2)])])]),t("div",{onClick:a[2]||(a[2]=l=>u(!1)),class:"cursor-pointer"},[t("div",null,n(e.$t("Off")),1),t("div",null,n(e.$t("Team members pick conversations manually from Unassigned folder.")),1)])])]),t("div",st,[t("div",et,[t("div",null,[t("div",ot,[t("label",{onClick:a[3]||(a[3]=l=>u(!0)),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",o(s).auto_assignment===!0?"bg-[#000]":""])},[o(s).auto_assignment===!0?(r(),d("svg",{key:0,class:i(["w-4 h-4",o(s).auto_assignment===!0?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},nt,2)):c("",!0)],2)])])]),t("div",{onClick:a[4]||(a[4]=l=>u(!0)),class:"cursor-pointer"},[t("div",null,n(e.$t("Auto")),1),t("div",null,n(e.$t("Distribute conversations among all your available team members.")),1)])])])])])])])):c("",!0),o(s).active?(r(),d("div",it,[t("div",lt,[t("div",rt,[t("div",dt,[t("h4",ct,n(e.$t("Reassign chats that have been reopened")),1),t("div",_t,n(e.$t("Enable this option to reassign chats when a contact re-opens a closed conversation. If disabled, reopened chats will either return to the previous agent or remain unassigned, based on auto-assignment settings.")),1)]),t("div",ut,[t("div",{class:i(["ml-auto w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":o(s).reassign_reopened_chats}]),onClick:a[5]||(a[5]=l=>j())},[t("div",{class:i(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":o(s).reassign_reopened_chats}])},null,2)],2)])])])])):c("",!0),o(s).active?(r(),d("div",mt,[t("div",vt,[t("div",ht,[t("div",gt,[t("h4",pt,n(e.$t("Grant agents access to view all chats not assigned to them")),1),t("div",wt,n(e.$t("Disable this option, if you want live chat agents to have access only to new conversations and conversations that are assigned to them.")),1)]),t("div",ft,[t("div",{class:i(["ml-auto w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":o(s).allow_agents_to_view_all_chats}]),onClick:a[6]||(a[6]=l=>B())},[t("div",{class:i(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":o(s).allow_agents_to_view_all_chats}])},null,2)],2)])])])])):c("",!0)])])])]),_:1}))}};export{Tt as default};