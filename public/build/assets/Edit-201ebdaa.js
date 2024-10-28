import{r as c,o as n,c as i,a as e,t as a,b as m,n as u,F as R,d as D,m as X,G as J,h as A,f as N,e as b,k as M,u as Q,l as W,$ as q,g as ee,x as te,O as se}from"./app-c30f5440.js";import{_ as le}from"./App-017b8291.js";import{_ as k}from"./FormInput-1525ce37.js";import{_ as j}from"./FormSelect-bbb2db84.js";import{_ as S}from"./FormTextArea-d4218c17.js";import{_ as oe}from"./Modal-7425c039.js";/* empty css              */import"./Sidebar-364c64ce.js";import"./Menu-214fbd83.js";import"./ProfileModal-9fe3e554.js";import"./LangToggle-2a73af7c.js";import"./index-cc6b842d.js";import"./MobileSidebar-b0b93948.js";import"./index-df5ba891.js";import"./use-text-value-10cbca9c.js";import"./ChevronUpDownIcon-05cecc61.js";const ae={key:0,for:"name",class:"block text-sm leading-6 text-gray-900"},ne={class:"mt-2"},re=["value","placeholder","rows"],ie={key:1,class:"form-error text-[#b91c1c] text-xs"},de={class:"flex items-center justify-between mt-2"},ue={class:"text-xs"},ce={class:"flex items-center space-x-3"},me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M6 4.75c0-.69.56-1.25 1.25-1.25h5a4.752 4.752 0 0 1 3.888 7.479A5 5 0 0 1 14 20.5H7.25c-.69 0-1.25-.56-1.25-1.25ZM8.5 13v5H14a2.5 2.5 0 1 0 0-5Zm0-2.5h3.751A2.25 2.25 0 0 0 12.25 6H8.5Z"})],-1),he=[me],pe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-3.514l-5.828 13h3.342a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.514l5.828-13H10.75a.75.75 0 0 1-.75-.75Z"})],-1),ve=[pe],fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m16.533 12.5l.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464c-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445c2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898c-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603a3.988 3.988 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348c1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26Z"})],-1),ge=[fe],xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"})],-1),be=[xe],we={class:"mt-3 bg-slate-100 p-3"},_e={class:"text-xs"},ye={class:"mt-4"},Ce=e("span",null,a(1),-1),$e=e("input",{type:"text",class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,-1),ke=[Ce,$e],Ve={__name:"FormTemplateTextArea",props:{modelValue:[String,Number],showLabel:Boolean,name:String,type:String,className:String,placeholder:String,textAreaRows:Number,error:String,variables:Array},emits:["update:modelValue"],setup(v,{emit:w}){const f=v,_=w,V=c(f.modelValue),p=c(null),y=d=>{const r=window.getSelection();if(r&&r.toString()){let h=null;d==="bold"?h=`*${r.toString()}*`:d==="italic"?h=`_${r.toString()}_`:d==="strikethrough"?h=`~${r.toString()}~`:d==="monospace"&&(h=`\`\`\`${r.toString()}\`\`\``);const g=p.value.selectionStart;V.value=V.value.replace(r.toString(),h),_("update:modelValue",V.value),p.value.setSelectionRange(g,g+h.length),p.value.focus()}};let L=0;const C=()=>{if(p.value,!p.value)return;const d=p.value.selectionStart,r=`{{${++L}}} `;_("update:modelValue",f.modelValue.substring(0,d)+r+f.modelValue.substring(d)),p.value.setSelectionRange(d+r.length,d+r.length),p.value.focus()},U=d=>{(f.modelValue.match(/{{\d+}}/g)||[]).find(r=>{console.log(r)}),_("update:modelValue",d.target.value)};return(d,r)=>(n(),i(R,null,[e("div",{class:u(v.className)},[v.showLabel?(n(),i("label",ae,a(v.name),1)):m("",!0),e("div",ne,[e("textarea",{class:u(["block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6",v.error?"ring-[#b91c1c]":"ring-gray-300"]),value:f.modelValue,onInput:U,placeholder:v.placeholder,rows:v.textAreaRows,ref_key:"textareaRef",ref:p},`
                `+a(f.modelValue)+`
            `,43,re)]),v.error?(n(),i("div",ie,a(v.error),1)):m("",!0)],2),e("div",de,[e("span",ue,a(d.$t("Characters"))+": "+a(0)+"/"+a(0),1),e("div",ce,[e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:r[0]||(r[0]=h=>y("bold"))},he),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:r[1]||(r[1]=h=>y("italic"))},ve),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:r[2]||(r[2]=h=>y("strikethrough"))},ge),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:r[3]||(r[3]=h=>y("monospace"))},be),e("button",{onClick:r[4]||(r[4]=h=>C()),class:"hover:bg-slate-100 rounded p-1 text-sm"},a(d.$t("Add variable")),1)])]),e("div",we,[e("h1",null,a(d.$t("Samples")),1),e("p",_e,a(d.$t("In order for your template to be reviewed properly, please add an example for each variable")),1),e("div",ye,[(n(!0),i(R,null,D(f.variables,(h,g)=>(n(),i("div",{key:g,class:"flex items-center space-x-2 w-full"},ke))),128))])])],64))}},Le={class:"px-4 md:px-0 flex flex-col bg-white border-l py-4 text-[#000]"},Ae={class:"flex justify-between md:px-8 border-b py-4 pb-2"},Me={class:"text-xl mb-1"},Ze={class:"flex items-center text-sm leading-6 text-gray-600"},Ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),Ue={class:"ml-1 mt-1"},Be={class:"space-x-2 flex items-center"},Oe=["disabled"],Te={key:0},Ie={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Ne=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),Re=e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),je=[Ne,Re],Se={class:"md:flex md:flex-grow-1"},De={class:"md:w-[50%] py-4 md:p-8 overflow-y-auto md:h-[90vh]"},He={class:"grid gap-x-6 gap-y-4 sm:grid-cols-6 mb-8"},Pe={key:0},Fe={class:"text-slate-600"},Ge={class:"text-xs"},Ye={class:"text-slate-600 text-xs"},ze={class:"grid grid-cols-4 mt-2 bg-[#f9f9fa] rounded-lg mb-4"},Ke={class:"mb-8"},Xe={key:0},Je={class:"flex items-center justify-between mt-2"},Qe={class:"text-xs"},We={class:"flex items-center space-x-3"},qe={class:"hover:bg-slate-100 rounded p-1 text-sm"},et={key:1},tt={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},st={class:"text-center"},lt={key:0,class:"flex justify-center items-center"},ot={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},at=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})])],-1),nt={class:"flex items-center space-x-2"},rt={class:"text-sm"},it=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1),dt=[it],ut={key:1,for:"file-upload"},ct=e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})],-1),mt=[ct],ht={class:"flex text-sm text-gray-600"},pt={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},vt={class:"text-xs text-gray-500"},ft={key:2},gt={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},xt={class:"text-center"},bt={key:0,class:"flex justify-center items-center"},wt={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},_t=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})])],-1),yt={class:"flex items-center space-x-2"},Ct={class:"text-sm"},$t=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1),kt=[$t],Vt={key:1,for:"file-upload2"},Lt=e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})],-1),At=[Lt],Mt={class:"flex text-sm text-gray-600"},Zt={for:"file-upload2",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Et={class:"text-xs text-gray-500"},Ut={key:3},Bt={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},Ot={class:"text-center"},Tt={key:0,class:"flex justify-center items-center"},It={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},Nt=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})])],-1),Rt={class:"flex items-center space-x-2"},jt={class:"text-sm"},St=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1),Dt=[St],Ht={key:1,for:"file-upload3"},Pt=e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})],-1),Ft=[Pt],Gt={class:"flex text-sm text-gray-600"},Yt={for:"file-upload3",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},zt={class:"text-xs text-gray-500"},Kt={class:"text-slate-600"},Xt={class:"text-xs"},Jt={class:"text-slate-600 text-xs"},Qt={class:"mb-8"},Wt={class:"text-slate-600 capitalize"},qt={class:"text-xs"},es={class:"text-slate-600 text-xs"},ts={class:"mb-8"},ss={class:"text-xs"},ls={class:"text-slate-600"},os={class:"text-xs"},as={class:"text-slate-600 text-xs"},ns={class:"grid grid-cols-2 mt-3 mb-2"},rs={class:"grid grid-cols-2 mt-3 mb-2"},is={key:0,class:"mt-3 mb-8"},ds={class:"flex items-center justify-between pb-1"},us={class:"text-sm"},cs=["onClick"],ms=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1),hs=[ms],ps={class:"flex space-x-1 border-t pt-2"},vs={class:"md:w-[50%] py-20 px-20 overflow-y-auto",style:{"background-image":"url('/images/whatsapp-bg-02.png')"}},fs={class:"mr-auto rounded-lg rounded-tl-none my-1 p-1 text-sm bg-white flex flex-col relative speech-bubble-left w-[25em]"},gs={key:0,class:"mb-4 bg-[#ccd0d5] flex justify-center py-8 rounded"},xs=["src"],bs=["src"],ws=["src"],_s={key:1,class:"text-gray-700 text-[16px] mb-1 px-2"},ys={class:"px-2"},Cs={class:"text-[#8c8c8c] mt-1 px-2"},$s={class:"text-[13px]"},ks={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},Vs={class:"text-center"},Ls={key:0,class:"bg-[#fae6e6] text-[darkred] rounded text-sm p-2 mb-4"},As={key:1},Ms={class:"text-xl capitalize"},Zs=e("div",{class:"flex justify-center mt-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])])],-1),zs={__name:"Edit",props:["languages","template"],setup(v){const w=v,f=c("60"),_=c("0"),V=c("1098"),p=c("0"),y=c("60"),L=c("0"),C=c(!1),U=c(null),d=c(!1),r=c(null),h=c(JSON.parse(w.template.metadata)),g=(t,l)=>{const o=h.value.components.find($=>$.type===t);return o?o[l]:""},s=c({name:w.template.name,category:w.template.category,language:w.template.language,header:{format:g("HEADER","format"),text:g("HEADER","text"),example:g("HEADER","example")},body:{text:g("BODY","text"),variables:null},footer:{text:g("FOOTER","text")},buttons:[]});c("text");const H=c(w.languages),P=c([{value:"UTILITY",label:"Utility"},{value:"MARKETING",label:"Marketing"}]),Z=t=>{s.value.header.format=t,s.value.header.example=""},F=t=>{const l=t.target.value.toLowerCase();s.value.name=l.replace(/[^a-zA-Z0-9_]/g,"")},B=t=>{const l=t.target.files[0],o=new FileReader;o.onload=$=>{U.value=$.target.result,s.value.header.example=l},o.readAsDataURL(l)},O=()=>{s.value.header.example=""},G=t=>{t.preventDefault(),s.value.name+="_"},T=t=>{let l=0,o=0;switch(t){case"header":l=f.value,o=s.value.header.text.length,o<=l?_.value=o:(s.value.header.text=s.value.header.text.slice(0,l),_.value=l);break;case"body":l=V.value,o=s.value.body.text.length,o<=l?p.value=o:(s.value.body.text=s.value.body.text.slice(0,l),p.value=l);break;case"footer":l=y.value,o=s.value.footer.text.length,o<=l?L.value=o:(s.value.footer.text=s.value.footer.text.slice(0,l),L.value=l);break}},E=t=>{t==="call"?s.value.buttons.push({name:"Call Phone Number",type:"PHONE_NUMBER",country:null,text:null,phone_number:null}):t==="website"?s.value.buttons.push({name:"Website URL",type:"URL",text:null,url:null}):t==="custom"?s.value.buttons.push({name:"Custom Button",type:"QUICK_REPLY",text:null}):t==="offer"&&s.value.buttons.push({name:"Offer Code",type:"COPY_CODE",example:null})},Y=t=>{t>=0&&t<s.value.buttons.length&&s.value.buttons.splice(t,1)},I=X(()=>s.value.name===null||s.value.name.trim()===""||s.value.language===null||s.value.language.trim()===""||s.value.category===null||s.value.category.trim()===""||s.value.buttons.some(t=>t.name===null||t.name===""||t.type===null||t.type===""||t.country===null||t.country===""||t.text===null||t.text===""||t.phone_number===null||t.phone_number==="")?!1:!(s.value.body.text===null||s.value.body.text.trim()==="")),z=()=>{C.value=!0,d.value=!0,te.post("/templates/"+w.template.uuid,s.value,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{t.data.success===!1?(C.value=!1,r.value=t.data.message):se.visit("/templates",{method:"get"})}).catch(t=>{})},K=()=>{d.value=!1,setTimeout(()=>{r.value=null},500)};return J(s,()=>{I.value}),(t,l)=>(n(),A(le,{class:"md:overflow-y-hidden capitalize"},{default:N(()=>[e("div",Le,[e("div",Ae,[e("div",null,[e("h2",Me,a(t.$t("Edit template")),1),e("p",Ze,[Ee,e("span",Ue,a(t.$t("Modify whatsapp template")),1)])]),e("div",Be,[b(Q(W),{href:"/templates",class:"rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:N(()=>[M(a(t.$t("Back")),1)]),_:1}),e("button",{onClick:l[0]||(l[0]=o=>z()),type:"button",class:u(["rounded-md px-3 py-2 float-right text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize",I.value===!0?"bg-indigo-600 hover:bg-indigo-500 shadow-sm":"bg-gray-200"]),disabled:!I.value||C.value},[C.value?(n(),i("svg",Ie,je)):(n(),i("span",Te,a(t.$t("Update template")),1))],10,Oe)])]),e("div",Se,[e("div",De,[e("div",He,[b(k,{modelValue:s.value.name,"onUpdate:modelValue":l[1]||(l[1]=o=>s.value.name=o),name:t.$t("Name"),type:"text",onInput:F,onKeydown:q(ee(G,["prevent"]),["space"]),class:u("sm:col-span-6")},null,8,["modelValue","name","onKeydown"]),b(j,{modelValue:s.value.category,"onUpdate:modelValue":l[2]||(l[2]=o=>s.value.category=o),options:P.value,name:t.$t("Category"),class:u("sm:col-span-3"),placeholder:"Select Category"},null,8,["modelValue","options","name"]),b(j,{modelValue:s.value.language,"onUpdate:modelValue":l[3]||(l[3]=o=>s.value.language=o),options:H.value,name:t.$t("Language"),class:u("sm:col-span-3"),placeholder:"Select Language"},null,8,["modelValue","options","name"])]),s.value.category==="UTILITY"||s.value.category==="MARKETING"?(n(),i("div",Pe,[e("h2",Fe,[M(a(t.$t("Header"))+" ",1),e("span",Ge,"("+a(t.$t("Optional"))+")",1)]),e("span",Ye,a(t.$t("Add a title or choose which type of media you'll use for this header")),1),e("div",ze,[e("button",{onClick:l[4]||(l[4]=o=>Z("TEXT")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="TEXT"?"bg-white shadow rounded-lg":""])},a(t.$t("Text")),3),e("button",{onClick:l[5]||(l[5]=o=>Z("IMAGE")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="IMAGE"?"bg-white shadow rounded-lg":""])},a(t.$t("Image")),3),e("button",{onClick:l[6]||(l[6]=o=>Z("VIDEO")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="VIDEO"?"bg-white shadow rounded-lg":""])},a(t.$t("Video")),3),e("button",{onClick:l[7]||(l[7]=o=>Z("DOCUMENT")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="DOCUMENT"?"bg-white shadow rounded-lg":""])},a(t.$t("Document")),3)]),e("div",Ke,[s.value.header.format==="TEXT"?(n(),i("div",Xe,[b(S,{modelValue:s.value.header.text,"onUpdate:modelValue":l[8]||(l[8]=o=>s.value.header.text=o),onInput:l[9]||(l[9]=o=>T("header")),name:t.$t("Header text"),showLabel:!1,type:"text",textAreaRows:2,class:u("sm:col-span-6")},null,8,["modelValue","name"]),e("div",Je,[e("span",Qe,a(t.$t("Characters"))+": "+a(_.value)+"/"+a(f.value),1),e("div",We,[e("button",qe,a(t.$t("Add variable")),1)])])])):m("",!0),s.value.header.format==="IMAGE"?(n(),i("div",et,[e("div",tt,[e("input",{type:"file",class:"sr-only",accept:".jpg, .png",ref:"fileInput",id:"file-upload",onChange:l[10]||(l[10]=o=>B(o))},null,544),e("div",st,[e("div",null,[s.value.header.format==="IMAGE"&&s.value.header.example?(n(),i("div",lt,[e("div",ot,[at,e("div",nt,[e("span",rt,a(s.value.header.example.name),1),e("button",{onClick:l[11]||(l[11]=o=>O())},dt)])])])):(n(),i("label",ut,mt)),e("div",ht,[e("label",pt,[e("span",null,a(t.$t("Provide examples of the variables or media in the header")),1)])]),e("p",vt,a(t.$t("PNG or JPG files only")),1)])])])])):m("",!0),s.value.header.format==="VIDEO"?(n(),i("div",ft,[e("div",gt,[e("input",{type:"file",class:"sr-only",accept:".mp4",ref:"fileInput",id:"file-upload2",onChange:l[12]||(l[12]=o=>B(o))},null,544),e("div",xt,[e("div",null,[s.value.header.format==="VIDEO"&&s.value.header.example?(n(),i("div",bt,[e("div",wt,[_t,e("div",yt,[e("span",Ct,a(s.value.header.example.name),1),e("button",{onClick:l[13]||(l[13]=o=>O())},kt)])])])):(n(),i("label",Vt,At)),e("div",Mt,[e("label",Zt,[e("span",null,a(t.$t("Provide examples of the variables or media in the header")),1)])]),e("p",Et,a(t.$t("MP4 files only")),1)])])])])):m("",!0),s.value.header.format==="DOCUMENT"?(n(),i("div",Ut,[e("div",Bt,[e("input",{type:"file",class:"sr-only",accept:".pdf",ref:"fileInput",id:"file-upload3",onChange:l[14]||(l[14]=o=>B(o))},null,544),e("div",Ot,[e("div",null,[s.value.header.format==="DOCUMENT"&&s.value.header.example?(n(),i("div",Tt,[e("div",It,[Nt,e("div",Rt,[e("span",jt,a(s.value.header.example.name),1),e("button",{onClick:l[15]||(l[15]=o=>O())},Dt)])])])):(n(),i("label",Ht,Ft)),e("div",Gt,[e("label",Yt,[e("span",null,a(t.$t("Provide examples of the variables or media in the header")),1)])]),e("p",zt,a(t.$t("PDF files only")),1)])])])])):m("",!0)]),e("h2",Kt,[M(a(t.$t("Body"))+" ",1),e("span",Xt,"("+a(t.$t("Required"))+")",1)]),e("span",Jt,a(t.$t("Enter the text for your message in the language that you've selected")),1),e("div",Qt,[e("div",null,[b(Ve,{modelValue:s.value.body.text,"onUpdate:modelValue":l[16]||(l[16]=o=>s.value.body.text=o),onInput:l[17]||(l[17]=o=>T("body")),name:t.$t("Body text"),showLabel:!1,type:"text",textAreaRows:5,class:u("sm:col-span-6")},null,8,["modelValue","name"])])]),e("h2",Wt,[M(a(t.$t("Footer description"))+" ",1),e("span",qt,"("+a(t.$t("Optional"))+")",1)]),e("span",es,a(t.$t("Add a short line of text to the bottom of your message template")),1),e("div",ts,[e("div",null,[b(S,{modelValue:s.value.footer.text,"onUpdate:modelValue":l[18]||(l[18]=o=>s.value.footer.text=o),onInput:l[19]||(l[19]=o=>T("footer")),name:t.$t("Footer text"),showLabel:!1,type:"text",textAreaRows:2,class:u("sm:col-span-6")},null,8,["modelValue","name"]),e("span",ss,a(t.$t("Characters"))+": "+a(L.value)+"/"+a(y.value),1)])]),e("h2",ls,[M(a(t.$t("Buttons"))+" ",1),e("span",os,"("+a(t.$t("Optional"))+")",1)]),e("span",as,a(t.$t("Create buttons that let customers respond to your message or take action")),1),e("div",ns,[e("button",{onClick:l[20]||(l[20]=o=>E("call")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(t.$t("Call phone number (1)")),1)]),e("button",{onClick:l[21]||(l[21]=o=>E("website")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(t.$t("Visit website (2)")),1)])]),e("div",rs,[e("button",{onClick:l[22]||(l[22]=o=>E("offer")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(t.$t("Copy offer code (1)")),1)]),e("button",{onClick:l[23]||(l[23]=o=>E("custom")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(t.$t("Custom button (6)")),1)])]),s.value.buttons.length>0?(n(),i("div",is,[(n(!0),i(R,null,D(s.value.buttons,(o,$)=>(n(),i("div",{key:$,class:"bg-[#f9f9fa] p-3 rounded-lg mb-3"},[e("div",ds,[e("span",us,a(o.name),1),e("button",{onClick:x=>Y($),class:"bg-slate-200 hover:shadow rounded-full p-1"},hs,8,cs)]),e("div",ps,[b(k,{modelValue:o.text,"onUpdate:modelValue":x=>o.text=x,name:t.$t("Button text"),type:"text",class:u(o.type==="QUICK_REPLY"?"w-full":"sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name","class"]),o.type==="URL"?(n(),A(k,{key:0,modelValue:o.url,"onUpdate:modelValue":x=>o.url=x,name:t.$t("Website url"),type:"text",class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):m("",!0),o.type==="PHONE_NUMBER"?(n(),A(k,{key:1,modelValue:o.country,"onUpdate:modelValue":x=>o.country=x,name:t.$t("Country"),type:"text",class:u("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):m("",!0),o.type==="PHONE_NUMBER"?(n(),A(k,{key:2,modelValue:o.phone_number,"onUpdate:modelValue":x=>o.phone_number=x,name:t.$t("Phone number"),type:"text",class:u("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):m("",!0),o.type==="COPY_CODE"?(n(),A(k,{key:3,modelValue:o.example,"onUpdate:modelValue":x=>o.example=x,name:t.$t("Sample code"),type:"text",class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):m("",!0)])]))),128))])):m("",!0)])):m("",!0)]),e("div",vs,[e("div",fs,[s.value.header.format!="TEXT"?(n(),i("div",gs,[s.value.header.format==="IMAGE"?(n(),i("img",{key:0,src:"/images/image-placeholder.png"},null,8,xs)):m("",!0),s.value.header.format==="VIDEO"?(n(),i("img",{key:1,src:"/images/video-placeholder.png"},null,8,bs)):m("",!0),s.value.header.format==="DOCUMENT"?(n(),i("img",{key:2,src:"/images/document-placeholder.png"},null,8,ws)):m("",!0)])):(n(),i("h2",_s,a(s.value.header.text),1)),e("p",ys,a(s.value.body.text),1),e("div",Cs,[e("span",$s,a(s.value.footer.text),1),e("span",{class:u(["text-right text-xs leading-none float-right",s.value.footer.text?"mt-2":""])},"9:15",2)])])])])]),b(oe,{label:"",isOpen:d.value},{default:N(()=>[e("div",ks,[e("div",Vs,[r.value!=null?(n(),i("div",Ls,[e("div",null,a(t.$t("Error"))+": ",1),e("div",null,a(r.value),1),e("button",{type:"button",onClick:K,class:"mt-4 inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},"Close")])):(n(),i("div",As,[e("h2",Ms,a(t.$t("Your template is being uploaded!")),1),Zs]))])])]),_:1},8,["isOpen"])]),_:1}))}};export{zs as default};