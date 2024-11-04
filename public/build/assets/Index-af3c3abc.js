import Q from"./App-ad5f7ecb.js";import{r as i,T as A,O as X,o as a,c as r,a as e,w as Y,v as ee,u as l,b as h,F as S,d as I,t as n,n as f,e as g,f as M,g as $,h as T,i as te,j as se}from"./app-43851608.js";import{d as oe}from"./debounce-729b203d.js";import{_ as ne}from"./AlertModal-1a288ce3.js";import{u as le}from"./useAlertModal-27d09708.js";import{_ as E}from"./Modal-22a49fae.js";import{_ as D}from"./FormInput-4a309017.js";import{_ as ae}from"./FormToggleSwitch-1780efa4.js";import{P as re}from"./Pagination-8172d90a.js";import{t as F}from"./index-17cd980e.js";import"./Sidebar-7bb6d772.js";import"./Menu-4221d61f.js";import"./ProfileModal-628e5b7c.js";import"./LangToggle-8d05b0dc.js";import"./MobileSidebar-b73cd192.js";import"./index-99011d5f.js";/* empty css              */import"./_baseGetTag-2e10a2d1.js";import"./_plugin-vue_export-helper-c27b6911.js";const ie={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},de=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),ce=["placeholder"],ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),me=[ue],pe={key:1,class:"pr-2"},he=se('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),fe=[he],ge={class:"grid md:grid-cols-3 gap-x-5 gap-y-4"},ve={class:"flex items-center gap-x-3 pb-2 bg-slate-50 px-4 pt-4 rounded-tr-[0.5rem] rounded-tl-[0.5rem]"},be=["src"],_e={class:"text-[16px]"},xe={class:"text-slate-500 border-b px-4 text-xs pt-2 pb-4"},we={class:"flex justify-between items-center px-4 pb-4 text-xs"},ye=["onClick"],ke=["onClick"],$e={class:"grid grid-cols-1 gap-x-6 gap-y-4"},Ce={class:"bg-slate-50 mx-[-30px] px-6 mt-[-25px] py-4 border-b"},Ve={class:"flex items-center gap-x-3"},Ae=["src"],Se={class:"text-[16px]"},Me={class:"text-slate-500 font-light text-xs pt-4"},Te={class:"grid gap-x-6 gap-y-4 sm:grid-cols-2"},je={key:1},Ne={class:"text-sm mb-2"},Oe={key:0,class:"bg-orange-100 p-2 rounded-md shadow-sm mb-1 col-span-2"},Be={class:"flex items-center gap-x-1 border-b border-slate-500 pb-2 mb-2"},Ze=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),Le={class:"text-sm"},Ue={class:"text-sm leading-6 break-all"},Ie={class:"text-sm leading-6 break-all"},Ee={class:"mt-5 border-t pt-5 flex"},De=["disabled"],Fe={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},We=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),ze=e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),Re=[We,ze],qe={key:1},Pe={class:"grid grid-cols-1 gap-x-6 gap-y-4"},Je={class:"bg-slate-50 mx-[-30px] px-6 mt-[-25px] py-4 border-b"},Ke={class:"flex items-center gap-x-3"},Ge=["src"],He={class:"text-[16px]"},Qe={class:"text-slate-500 font-light text-xs pt-4"},Xe={class:"grid gap-x-6 sm:grid-cols-2"},Ye={class:"text-sm"},et={class:"col-span-2 text-xs text-slate-600 mb-2"},tt={class:"mt-5 border-t pt-5 flex"},st=["disabled"],ot={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},nt=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),lt=e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),at=[nt,lt],rt={key:1},it={__name:"AddonTable",props:{rows:{type:Object,required:!0},filters:{type:Object},config:{type:Array}},emits:["edit","delete"],setup(m,{emit:C}){const v=m,{isOpenAlert:_,openAlert:ft,confirmAlert:W}=le(),x=i(!1),w=i(!1);i(!1);const z=i(window.location.origin),R=A({test:null}),d=A({settings:{}}),c=A({uuid:null,purchase_code:null,addon:null}),q=s=>{R.delete("/admin/faqs/"+s)},b=i({search:v.filters.search}),V=i(!1),P=()=>{b.value.search=null,N()},j=oe(()=>{V.value=!0,N()},1e3),N=()=>{const s=window.location.pathname;X.visit(s,{method:"get",data:b.value})},O=i(null),y=i(null),p=i(null),k=i(null),B=i(null),Z=i([]),J=s=>{var u;y.value=s.logo,p.value=s.name,k.value=s.description;const o=((u=JSON.parse(s.metadata))==null?void 0:u.input_fields)||[];Z.value=o,d.settings={};let t=p.value.toLowerCase().replace(/ /g,"-");O.value="/admin/addons/setup/"+t,o.forEach(U=>{d.settings[U.name]=L(U.name)}),x.value=!0},K=(s,o)=>{y.value=s.logo,p.value=s.name,k.value=s.description,B.value=o=="extended"?F("Enter your extended license to install"):F("Enter the addon license to install"),c.uuid=s.uuid,c.addon=s.name,w.value=!0},L=s=>{const o=v.config.find(t=>t.key===s);return o?o.value:""},G=()=>{d.post(O.value,{preserveScroll:!0,onSuccess:()=>{x.value=!1}})},H=()=>{c.post("/admin/addons/install",{preserveScroll:!0,onSuccess:()=>{w.value=!1}})};return(s,o)=>(a(),r(S,null,[e("div",ie,[de,Y(e("input",{onInput:o[0]||(o[0]=(...t)=>l(j)&&l(j)(...t)),"onUpdate:modelValue":o[1]||(o[1]=t=>b.value.search=t),type:"text",class:"outline-none px-4 w-full",placeholder:s.$t("Search")},null,40,ce),[[ee,b.value.search]]),V.value===!1&&b.value.search?(a(),r("button",{key:0,onClick:P,type:"button",class:"pr-2"},me)):h("",!0),V.value?(a(),r("span",pe,fe)):h("",!0)]),e("div",ge,[(a(!0),r(S,null,I(m.rows.data,t=>(a(),r("div",{key:t.id,class:"bg-white rounded-[0.5rem] shadow-md text-sm space-y-3"},[e("div",ve,[e("div",null,[e("img",{class:"h-8 w-8",src:"/images/"+t.logo,alt:"Whatsapp Logo"},null,8,be)]),e("div",_e,n(s.$t(t.name)),1)]),e("div",xe,n(t.description),1),e("div",we,[e("div",null,[e("span",{class:f(["py-1 px-3 rounded-md text-slate-600",t.status==0?"bg-red-600 text-white":"bg-slate-50"])},n(t.status==1?s.$t("Installed"):s.$t("Not installed")),3)]),e("div",null,[t.status==0?(a(),r("button",{key:0,onClick:u=>K(t,t.name=="AI Assistant"?"addon":"extended"),class:"rounded-full border-2 w-full px-10 py-2 hover:border-secondary hover:bg-secondary hover:text-white text-secondary"},n(s.$t("Install")),9,ye)):(a(),r("button",{key:1,onClick:u=>J(t),class:"rounded-full border-2 w-full px-10 py-2 hover:border-secondary hover:bg-secondary hover:text-white text-secondary"},n(s.$t("Setup")),9,ke))])])]))),128))]),g(re,{class:"mt-3",pagination:m.rows.meta},null,8,["pagination"]),g(E,{isOpen:x.value},{default:M(()=>[e("div",$e,[e("div",Ce,[e("div",Ve,[e("div",null,[e("img",{class:"h-8 w-8",src:"/images/"+y.value,alt:"Whatsapp Logo"},null,8,Ae)]),e("div",Se,n(s.$t(p.value)),1)]),e("div",Me,n(k.value),1)]),e("form",{onSubmit:o[3]||(o[3]=$(t=>G(),["prevent"]))},[e("div",Te,[(a(!0),r(S,null,I(Z.value,t=>(a(),r("div",{class:f(t.class)},[t.element=="input"?(a(),T(D,{key:0,modelValue:l(d).settings[t.name],"onUpdate:modelValue":u=>l(d).settings[t.name]=u,error:l(d).errors[`settings.${t.name}`],name:s.$t(t.label),type:t.type,class:f(t.class)},null,8,["modelValue","onUpdate:modelValue","error","name","type","class"])):h("",!0),t.element=="toggle"?(a(),r("div",je,[e("div",Ne,n(s.$t(t.label)),1),t.element=="toggle"?(a(),T(ae,{key:0,modelValue:l(d).settings[t.name],"onUpdate:modelValue":u=>l(d).settings[t.name]=u},null,8,["modelValue","onUpdate:modelValue"])):h("",!0)])):h("",!0)],2))),256)),p.value=="Embedded Signup"?(a(),r("div",Oe,[e("div",Be,[Ze,e("p",Le,n(s.$t("Webhook setup")),1)]),e("span",null,[e("p",Ue,n(s.$t("Callback URL"))+": "+n(z.value+"/webhook/waba"),1),e("p",Ie,n(s.$t("Verify token"))+": "+n(L("whatsapp_callback_token")),1)])])):h("",!0)]),e("div",Ee,[e("button",{type:"button",onClick:o[2]||(o[2]=$(t=>x.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},n(s.$t("Cancel")),1),e("button",{class:f(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":l(d).processing}]),disabled:l(d).processing},[l(d).processing?(a(),r("svg",Fe,Re)):(a(),r("span",qe,n(s.$t("Save")),1))],10,De)])],32)])]),_:1},8,["isOpen"]),g(E,{isOpen:w.value},{default:M(()=>[e("div",Pe,[e("div",Je,[e("div",Ke,[e("div",null,[e("img",{class:"h-8 w-8",src:"/images/"+y.value,alt:"Whatsapp Logo"},null,8,Ge)]),e("div",He,n(s.$t(p.value)),1)]),e("div",Qe,n(k.value),1)]),e("form",{onSubmit:o[6]||(o[6]=$(t=>H(),["prevent"]))},[e("div",Xe,[e("h4",Ye,n(s.$t("Envato purchase code")),1),e("span",et,n(B.value),1),g(D,{modelValue:l(c).purchase_code,"onUpdate:modelValue":o[4]||(o[4]=t=>l(c).purchase_code=t),error:l(c).errors.purchase_code,name:"",type:"text",class:f("col-span-2")},null,8,["modelValue","error"])]),e("div",tt,[e("button",{type:"button",onClick:o[5]||(o[5]=$(t=>w.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},n(s.$t("Cancel")),1),e("button",{class:f(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":l(c).processing}]),disabled:l(c).processing},[l(c).processing?(a(),r("svg",ot,at)):(a(),r("span",rt,n(s.$t("Save")),1))],10,st)])],32)])]),_:1},8,["isOpen"]),g(ne,{modelValue:l(_),"onUpdate:modelValue":o[7]||(o[7]=t=>te(_)?_.value=t:null),onConfirm:o[8]||(o[8]=()=>l(W)(q)),label:s.$t("Delete row"),description:s.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},dt={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},ct={class:"flex justify-between"},ut={class:"text-xl mb-1"},mt={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},pt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),ht={class:"ml-1 mt-1"},Zt={__name:"Index",props:{title:String,rows:Object,filters:Object,config:Array},setup(m){const C=m;return(v,_)=>(a(),T(Q,null,{default:M(()=>[e("div",dt,[e("div",ct,[e("div",null,[e("h1",ut,n(v.$t("Explore Add-ons Marketplace")),1),e("p",mt,[pt,e("span",ht,n(v.$t("Select an addon that you want to install on your platform")),1)])])]),g(it,{rows:C.rows,filters:C.filters,config:m.config},null,8,["rows","filters","config"])])]),_:1}))}};export{Zt as default};