import{T as p,h as c,f as u,o as f,a as t,t as l,e as a,k as b,u as o,l as h,n as v,g}from"./app-c30f5440.js";import w from"./App-30f28f7c.js";import{_ as x}from"./FormInput-1525ce37.js";import{Q as _}from"./vue-quill.snow-c3f95909.js";import"./App-b92bedf6.js";import"./Sidebar-fb8154cd.js";import"./Menu-5d749046.js";import"./ProfileModal-9fe3e554.js";import"./LangToggle-2a73af7c.js";import"./MobileSidebar-411ec45b.js";import"./index-cc6b842d.js";/* empty css              */import"./Sidebar-3dfd4c78.js";const y={class:"flex justify-between"},k={class:"text-xl mb-1"},j={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},$=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),V={class:"ml-1 mt-1"},B={class:"flex items-center space-x-2"},q={__name:"Show",props:{template:Object},setup(d){const r=d,s=p({_method:"put",subject:r.template.subject,body:r.template.body}),m=async()=>{const i=window.location.pathname;s.put(i,{preserveScroll:!0})};return(i,e)=>(f(),c(w,null,{default:u(()=>[t("div",y,[t("div",null,[t("h2",k,l(i.$t("Template"))+": "+l(r.template.name),1),t("p",j,[$,t("span",V,l(i.$t("Configure email templates")),1)])]),t("div",B,[t("button",{onClick:e[0]||(e[0]=n=>m()),class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},l(i.$t("Save")),1),a(o(h),{href:"/admin/settings/email-templates",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:u(()=>[b(l(i.$t("Back")),1)]),_:1})])]),t("form",{onSubmit:e[3]||(e[3]=g(n=>m(),["prevent"]))},[a(x,{modelValue:o(s).subject,"onUpdate:modelValue":e[1]||(e[1]=n=>o(s).subject=n),name:"",error:o(s).errors.subject,type:"text",class:v("sm:col-span-6 mb-4")},null,8,["modelValue","error"]),a(o(_),{content:o(s).body,"onUpdate:content":e[2]||(e[2]=n=>o(s).body=n),toolbar:"essential",contentType:"html",theme:"snow"},null,8,["content"])],32)]),_:1}))}};export{q as default};