import{r as b,T as k,h as v,f as h,o as d,a as o,t as m,n,u as s,e as l,c as f,b as S,g as V}from"./app-c30f5440.js";import x from"./App-30f28f7c.js";import{_ as u}from"./FormInput-1525ce37.js";import{_ as A}from"./FormSelect-bbb2db84.js";import"./App-b92bedf6.js";import"./Sidebar-fb8154cd.js";import"./Menu-5d749046.js";import"./ProfileModal-9fe3e554.js";import"./LangToggle-2a73af7c.js";import"./MobileSidebar-411ec45b.js";import"./index-cc6b842d.js";/* empty css              */import"./Sidebar-3dfd4c78.js";import"./index-df5ba891.js";import"./use-text-value-10cbca9c.js";import"./ChevronUpDownIcon-05cecc61.js";const $={class:"text-xl mb-1"},C={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},B=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),W={class:"ml-1 mt-1"},j={class:"space-y-12"},N={class:"pb-12"},U={key:0,class:"grid gap-6 grid-cols-2 pb-10 border-b md:w-2/3"},Z={class:"mt-6 flex items-center justify-end gap-x-6 md:w-2/3"},M={type:"button",class:"text-sm leading-6 text-gray-900"},F=["disabled"],L={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},O=o("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),T=o("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[o("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),q=[O,T],z={key:1},re={__name:"Storage",props:{config:{type:Object,required:!0}},setup(g){const y=g,c=r=>{const e=y.config.find(a=>a.key===r);return e?e.value:""},i=r=>{if(c("aws")){const e=JSON.parse(c("aws"));if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e[r]??null}return null},p=b(!1),t=k({storage_system:c("storage_system"),aws:{access_key:i("access_key")??void 0,secret_key:i("secret_key")??void 0,default_region:i("default_region")??void 0,bucket:i("bucket")??void 0}}),_=[{label:"Local File Storage",value:"local"},{label:"AWS S3 Bucket",value:"aws"}],w=async()=>{t.put("/admin/settings?type=storage",{preserveScroll:!0})};return(r,e)=>(d(),v(x,null,{default:h(()=>[o("div",null,[o("h2",$,m(r.$t("Storage settings")),1),o("p",C,[B,o("span",W,m(r.$t("Configure your storage location")),1)])]),o("form",{onSubmit:e[5]||(e[5]=V(a=>w(),["prevent"]))},[o("div",j,[o("div",N,[o("div",{class:n(["grid gap-6 grid-cols-2 pb-10 md:w-2/3",s(t).storage_system==="aws"?"":"border-b"])},[l(A,{modelValue:s(t).storage_system,"onUpdate:modelValue":e[0]||(e[0]=a=>s(t).storage_system=a),name:r.$t("File system for storage"),type:"text",options:_,error:s(t).errors.storage_system,class:n("col-span-2")},null,8,["modelValue","name","error"])],2),s(t).storage_system==="aws"?(d(),f("div",U,[l(u,{modelValue:s(t).aws.access_key,"onUpdate:modelValue":e[1]||(e[1]=a=>s(t).aws.access_key=a),name:r.$t("S3 AWS access key"),type:"text",error:s(t).errors["aws.access_key"],class:n("col-span-1")},null,8,["modelValue","name","error"]),l(u,{modelValue:s(t).aws.secret_key,"onUpdate:modelValue":e[2]||(e[2]=a=>s(t).aws.secret_key=a),name:r.$t("S3 AWS secret access key"),type:"password",error:s(t).errors["aws.secret_key"],class:n("col-span-1")},null,8,["modelValue","name","error"]),l(u,{modelValue:s(t).aws.default_region,"onUpdate:modelValue":e[3]||(e[3]=a=>s(t).aws.default_region=a),name:r.$t("S3 AWS default region"),type:"text",error:s(t).errors["aws.default_region"],class:n("col-span-1")},null,8,["modelValue","name","error"]),l(u,{modelValue:s(t).aws.bucket,"onUpdate:modelValue":e[4]||(e[4]=a=>s(t).aws.bucket=a),name:r.$t("S3 AWS bucket"),type:"text",error:s(t).errors["aws.bucket"],class:n("col-span-1")},null,8,["modelValue","name","error"])])):S("",!0),o("div",Z,[o("button",M,m(r.$t("Cancel")),1),o("button",{class:n(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":p.value}]),disabled:p.value},[p.value?(d(),f("svg",L,q)):(d(),f("span",z,m(r.$t("Save")),1))],10,F)])])])],32)]),_:1}))}};export{re as default};
