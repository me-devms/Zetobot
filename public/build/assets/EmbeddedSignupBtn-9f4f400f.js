import{r as h,q as b,o as p,c as o,a as i,t as d,b as v,k as S,F as y,j as c,O as u}from"./app-43851608.js";const M={key:0,class:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"},w={class:"bg-white p-6 rounded-lg shadow-lg text-center text-sm"},k=c('<div class="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path></svg></div>',1),_=c('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><g opacity=".2"><path d="M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112Z"></path><path d="M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192Z"></path><path d="M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11Z"></path></g><path d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704Z"></path><path d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064Z"></path><path d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h20a.5.5 0 0 1 .5.5Z"></path></g></svg>',1),N={__name:"EmbeddedSignupBtn",props:{appId:{type:String},configId:{type:String}},setup(m){const n=m,r=h(!1);b(()=>{window.fbAsyncInit=function(){FB.init({appId:n.appId,cookie:!0,xfbml:!0,version:"v20.0"})},function(e,t,s){var a,l=e.getElementsByTagName(t)[0];e.getElementById(s)||(a=e.createElement(t),a.id=s,a.src="https://connect.facebook.net/en_US/sdk.js",l.parentNode.insertBefore(a,l))}(document,"script","facebook-jssdk")});const g=e=>{if(!(e.origin!=="https://www.facebook.com"&&e.origin!=="https://web.facebook.com"))try{const t=JSON.parse(e.data);if(t.type==="WA_EMBEDDED_SIGNUP")if(t.event==="FINISH"){const{phone_number_id:s,waba_id:a}=t.data}else{const{current_step:s}=t.data}}catch{}};function f(){window.addEventListener("message",g),typeof fbq<"u"&&fbq("trackCustom","WhatsAppOnboardingStart",{appId:n.appId,feature:"whatsapp_embedded_signup"}),FB.login(function(e){e.authResponse&&(r.value=!0,u.post("/whatsapp/exchange-code",{token:e.authResponse.code},{preserveState:!0,onSuccess:()=>{u.visit("/settings/whatsapp",{preserveState:!1})}}))},{config_id:n.configId,response_type:"code",override_default_response_type:!0,extras:{sessionInfoVersion:2,setup:{}}})}return(e,t)=>(p(),o(y,null,[r.value?(p(),o("div",M,[i("div",w,[k,i("p",null,d(e.$t("Please wait for your whatsapp account to be connected!")),1)])])):v("",!0),i("button",{onClick:f,class:"bg-primary text-white p-2 rounded-lg text-sm mt-5 flex px-3 w-fit"},[S(d(e.$t("Setup whatsapp"))+" ",1),_])],64))}};export{N as _};
