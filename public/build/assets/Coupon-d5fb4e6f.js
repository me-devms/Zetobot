import V from"./App-30f28f7c.js";import{T as M,o as y,c as k,e,f as t,k as i,t as a,F as T,d as B,h as A,u as C,i as N,a as s,r as g,x as q}from"./app-c30f5440.js";import{_ as D}from"./AlertModal-259dd0d1.js";import{u as I}from"./useAlertModal-541913ff.js";import{_ as j}from"./Table-bd45641c.js";import{T as E,a as O,_ as p}from"./TableHeaderRowItem-38048e9f.js";import{T as R,a as P,_ as f}from"./TableBodyRowItem-3ebe6af5.js";import{_ as U}from"./Dropdown-3b426dfb.js";import{_ as Z,a as x}from"./DropdownItem-d85e9c61.js";import{_ as H}from"./FormModalModified-a13ec2fe.js";import{t as c}from"./index-df5ba891.js";import"./App-b92bedf6.js";import"./Sidebar-fb8154cd.js";import"./Menu-5d749046.js";import"./ProfileModal-9fe3e554.js";import"./FormInput-1525ce37.js";import"./LangToggle-2a73af7c.js";import"./MobileSidebar-411ec45b.js";import"./index-cc6b842d.js";/* empty css              */import"./Sidebar-3dfd4c78.js";import"./Pagination-18574a5f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-text-value-10cbca9c.js";import"./use-tree-walker-0e61a632.js";import"./Modal-7425c039.js";import"./FormImage-2ff5972a.js";import"./FormSelect-bbb2db84.js";import"./ChevronUpDownIcon-05cecc61.js";import"./FormTextArea-d4218c17.js";const Q=s("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[s("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[s("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1),S={__name:"CouponTable",props:{rows:{type:Array,required:!0}},emits:["edit","delete"],setup(b,{emit:h}){const{isOpenAlert:u,openAlert:_,confirmAlert:d}=I(),v=h,r=M({test:null});function w(l){v("edit",l)}const $=l=>{r.delete("/admin/coupons/"+l)};return(l,n)=>(y(),k(T,null,[e(j,{rows:b.rows},{default:t(()=>[e(E,null,{default:t(()=>[e(O,null,{default:t(()=>[e(p,{position:"first"},{default:t(()=>[i(a(l.$t("Name")),1)]),_:1}),e(p,null,{default:t(()=>[i(a(l.$t("Coupon code")),1)]),_:1}),e(p,null,{default:t(()=>[i(a(l.$t("Percentage")),1)]),_:1}),e(p,null,{default:t(()=>[i(a(l.$t("Quantity")),1)]),_:1}),e(p,null,{default:t(()=>[i(a(l.$t("Status")),1)]),_:1}),e(p,{position:"last"})]),_:1})]),_:1}),e(R,null,{default:t(()=>[(y(!0),k(T,null,B(b.rows.data,(o,m)=>(y(),A(P,{key:m},{default:t(()=>[e(f,{position:"first"},{default:t(()=>[i(a(o.name),1)]),_:2},1024),e(f,null,{default:t(()=>[i(a(o.code),1)]),_:2},1024),e(f,null,{default:t(()=>[i(a(o.percentage)+"%",1)]),_:2},1024),e(f,null,{default:t(()=>[i(a(o.quantity-o.quantity_redeemed),1)]),_:2},1024),e(f,null,{default:t(()=>[i(a(l.$t(o.status)),1)]),_:2},1024),e(f,{position:"last"},{default:t(()=>[e(U,{align:"right",class:"mt-2"},{items:t(()=>[e(Z,null,{default:t(()=>[e(x,{as:"button",onClick:F=>w(o.id)},{default:t(()=>[i(a(l.$t("Edit")),1)]),_:2},1032,["onClick"]),e(x,{as:"button",onClick:F=>C(_)(o.id)},{default:t(()=>[i(a(l.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[Q]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["rows"]),e(D,{modelValue:C(u),"onUpdate:modelValue":n[0]||(n[0]=o=>N(u)?u.value=o:null),onConfirm:n[1]||(n[1]=()=>C(d)($)),label:l.$t("Delete row"),description:l.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},L={class:"flex justify-between"},z={class:"text-xl mb-1"},G={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},J=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),K={class:"ml-1 mt-1"},Ae={__name:"Coupon",props:{rows:Object},setup(b){const h=b,u=g(!1),_=g("Add Coupon"),d=g("/admin/coupons"),v=g("post"),r={name:null,code:null,percentage:null,quantity:null},w=(n,o={})=>{_.value=c("Add coupon"),d.value="/admin/coupons",v.value="post",n!=null?(_.value=c("Edit coupon"),d.value="/admin/coupons/"+n,v.value="put",$()):(r.name=null,r.code=null,r.percentage=null,r.quantity=null,u.value=!0)};function $(){q.get(d.value).then(n=>{const{data:o}=n;for(const m in o.item)r.hasOwnProperty(m)&&(r[m]=o.item[m]);u.value=!0}).catch(n=>{})}const l=[{inputType:"FormInput",name:"name",label:c("name"),type:"text",className:"sm:col-span-6"},{inputType:"FormInput",name:"code",label:c("Coupon code"),type:"text",className:"sm:col-span-3"},{inputType:"FormInput",name:"percentage",label:c("Percentage"),type:"number",className:"sm:col-span-3"},{inputType:"FormInput",name:"quantity",label:c("Quantity"),type:"number",className:"sm:col-span-6"}];return(n,o)=>(y(),A(V,null,{default:t(()=>[s("div",L,[s("div",null,[s("h2",z,a(n.$t("Coupons")),1),s("p",G,[J,s("span",K,a(n.$t("Configure coupons")),1)])]),s("div",null,[s("button",{onClick:o[0]||(o[0]=m=>w()),type:"button",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},a(n.$t("Add coupon")),1)])]),e(S,{rows:h.rows,onEdit:w,onDelete:n.openAlert},null,8,["rows","onDelete"]),e(H,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=m=>u.value=m),label:_.value,url:d.value,form:r,formInputs:l,formMethod:v.value,onCloseModal:o[2]||(o[2]=m=>u.value=!1)},null,8,["modelValue","label","url","formMethod"])]),_:1}))}};export{Ae as default};
