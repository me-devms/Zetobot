import{L as h,S as E,m as d}from"./app-c30f5440.js";function A(n,e){switch(n.replace("_","-")){case"af":case"af-ZA":case"bn":case"bn-BD":case"bn-IN":case"bg":case"bg-BG":case"ca":case"ca-AD":case"ca-ES":case"ca-FR":case"ca-IT":case"da":case"da-DK":case"de":case"de-AT":case"de-BE":case"de-CH":case"de-DE":case"de-LI":case"de-LU":case"el":case"el-CY":case"el-GR":case"en":case"en-AG":case"en-AU":case"en-BW":case"en-CA":case"en-DK":case"en-GB":case"en-HK":case"en-IE":case"en-IN":case"en-NG":case"en-NZ":case"en-PH":case"en-SG":case"en-US":case"en-ZA":case"en-ZM":case"en-ZW":case"eo":case"eo-US":case"es":case"es-AR":case"es-BO":case"es-CL":case"es-CO":case"es-CR":case"es-CU":case"es-DO":case"es-EC":case"es-ES":case"es-GT":case"es-HN":case"es-MX":case"es-NI":case"es-PA":case"es-PE":case"es-PR":case"es-PY":case"es-SV":case"es-US":case"es-UY":case"es-VE":case"et":case"et-EE":case"eu":case"eu-ES":case"eu-FR":case"fa":case"fa-IR":case"fi":case"fi-FI":case"fo":case"fo-FO":case"fur":case"fur-IT":case"fy":case"fy-DE":case"fy-NL":case"gl":case"gl-ES":case"gu":case"gu-IN":case"ha":case"ha-NG":case"he":case"he-IL":case"hu":case"hu-HU":case"is":case"is-IS":case"it":case"it-CH":case"it-IT":case"ku":case"ku-TR":case"lb":case"lb-LU":case"ml":case"ml-IN":case"mn":case"mn-MN":case"mr":case"mr-IN":case"nah":case"nb":case"nb-NO":case"ne":case"ne-NP":case"nl":case"nl-AW":case"nl-BE":case"nl-NL":case"nn":case"nn-NO":case"no":case"om":case"om-ET":case"om-KE":case"or":case"or-IN":case"pa":case"pa-IN":case"pa-PK":case"pap":case"pap-AN":case"pap-AW":case"pap-CW":case"ps":case"ps-AF":case"pt":case"pt-BR":case"pt-PT":case"so":case"so-DJ":case"so-ET":case"so-KE":case"so-SO":case"sq":case"sq-AL":case"sq-MK":case"sv":case"sv-FI":case"sv-SE":case"sw":case"sw-KE":case"sw-TZ":case"ta":case"ta-IN":case"ta-LK":case"te":case"te-IN":case"tk":case"tk-TM":case"ur":case"ur-IN":case"ur-PK":case"zu":case"zu-ZA":return e===1?0:1;case"am":case"am-ET":case"bh":case"fil":case"fil-PH":case"fr":case"fr-BE":case"fr-CA":case"fr-CH":case"fr-FR":case"fr-LU":case"gun":case"hi":case"hi-IN":case"hy":case"hy-AM":case"ln":case"ln-CD":case"mg":case"mg-MG":case"nso":case"nso-ZA":case"ti":case"ti-ER":case"ti-ET":case"wa":case"wa-BE":case"xbr":return e===0||e===1?0:1;case"be":case"be-BY":case"bs":case"bs-BA":case"hr":case"hr-HR":case"ru":case"ru-RU":case"ru-UA":case"sr":case"sr-ME":case"sr-RS":case"uk":case"uk-UA":return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"cs-CZ":case"sk":case"sk-SK":return e==1?0:e>=2&&e<=4?1:2;case"ga":case"ga-IE":return e==1?0:e==2?1:2;case"lt":case"lt-LT":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":case"sl-SI":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":case"mk-MK":return e%10==1?0:1;case"mt":case"mt-MT":return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":case"lv-LV":return e==0?0:e%10==1&&e%100!=11?1:2;case"pl":case"pl-PL":return e==1?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":case"cy-GB":return e==1?0:e==2?1:e==8||e==11?2:3;case"ro":case"ro-RO":return e==1?0:e==0||e%100>0&&e%100<20?1:2;case"ar":case"ar-AE":case"ar-BH":case"ar-DZ":case"ar-EG":case"ar-IN":case"ar-IQ":case"ar-JO":case"ar-KW":case"ar-LB":case"ar-LY":case"ar-MA":case"ar-OM":case"ar-QA":case"ar-SA":case"ar-SD":case"ar-SS":case"ar-SY":case"ar-TN":case"ar-YE":return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}}function v(n,e,a){let s=n.split("|");const t=S(s,e);if(t!==null)return t.trim();s=T(s);const c=A(a,e);return s.length===1||!s[c]?s[0]:s[c]}function S(n,e){for(const a of n){let s=P(a,e);if(s!==null)return s}return null}function P(n,e){const a=n.match(/^[\{\[]([^\[\]\{\}]*)[\}\]](.*)/s)||[];if(a.length!==3)return null;const s=a[1],t=a[2];if(s.includes(",")){let[c,i]=s.split(",");if(i==="*"&&e>=parseFloat(c))return t;if(c==="*"&&e<=parseFloat(i))return t;if(e>=parseFloat(c)&&e<=parseFloat(i))return t}return parseFloat(s)===e?t:null}function T(n){return n.map(e=>e.replace(/^[\{\[]([^\[\]\{\}]*)[\}\]]/,""))}const f=(n,e,a={})=>{try{return n(e)}catch{return a}},g=async(n,e={})=>{try{return(await n).default||e}catch{return e}};function u(n){return n||I()||M()}function I(){var n;return!!(typeof process<"u"&&((n=process.env)!=null&&n.LARAVEL_VUE_I18N_HAS_PHP))}function M(){return typeof{VITE_APP_NAME:"Swiftchats",VITE_PUSHER_APP_KEY:"",VITE_PUSHER_HOST:"",VITE_PUSHER_PORT:"443",VITE_PUSHER_SCHEME:"https",VITE_PUSHER_APP_CLUSTER:"mt1",VITE_LARAVEL_VUE_I18N_HAS_PHP:"true",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}<"u"}const l=typeof window>"u";let r=null;const p={lang:!l&&document.documentElement.lang?document.documentElement.lang.replace("-","_"):null,fallbackLang:"en",fallbackMissingTranslations:!1,resolve:n=>new Promise(e=>e({default:{}})),onLoad:n=>{}};function C(n,e={}){return o.getSharedInstance().trans(n,e)}class o{constructor(e={}){this.activeMessages=h({}),this.fallbackMessages=h({}),this.reset=()=>{o.loaded=[],this.options=p;for(const[a]of Object.entries(this.activeMessages))this.activeMessages[a]=null;this===r&&(r=null)},this.options={...p,...e},this.options.fallbackMissingTranslations?this.loadFallbackLanguage():this.load()}setOptions(e={},a=!1){return this.options={...this.options,...e},a&&this.load(),this}load(){this[l?"loadLanguage":"loadLanguageAsync"](this.getActiveLanguage())}loadFallbackLanguage(){if(!l){this.resolveLangAsync(this.options.resolve,this.options.fallbackLang).then(({default:a})=>{this.applyFallbackLanguage(this.options.fallbackLang,a),this.load()});return}const{default:e}=this.resolveLang(this.options.resolve,this.options.fallbackLang);this.applyFallbackLanguage(this.options.fallbackLang,e),this.loadLanguage(this.getActiveLanguage())}loadLanguage(e,a=!1){const s=o.loaded.find(c=>c.lang===e);if(s){this.setLanguage(s);return}const{default:t}=this.resolveLang(this.options.resolve,e);this.applyLanguage(e,t,a,this.loadLanguage)}loadLanguageAsync(e,a=!1,s=!1){var c;s||((c=this.abortController)==null||c.abort(),this.abortController=new AbortController);const t=o.loaded.find(i=>i.lang===e);return t?Promise.resolve(this.setLanguage(t)):new Promise((i,R)=>{this.abortController.signal.addEventListener("abort",()=>{i()}),this.resolveLangAsync(this.options.resolve,e).then(({default:L})=>{i(this.applyLanguage(e,L,a,this.loadLanguageAsync))})})}resolveLang(e,a,s={}){return Object.keys(s).length||(s=f(e,a)),u(l)?{default:{...s,...f(e,`php_${a}`)}}:{default:s}}async resolveLangAsync(e,a){let s=f(e,a);if(!(s instanceof Promise))return this.resolveLang(e,a,s);if(u(l)){const t=await g(e(`php_${a}`)),c=await g(s);return new Promise(i=>i({default:{...t,...c}}))}return new Promise(async t=>t({default:await g(s)}))}applyLanguage(e,a,s=!1,t){if(Object.keys(a).length<1){if(/[-_]/g.test(e)&&!s)return t.call(this,e.replace(/[-_]/g,i=>i==="-"?"_":"-"),!0,!0);if(e!==this.options.fallbackLang)return t.call(this,this.options.fallbackLang,!1,!0)}const c={lang:e,messages:a};return this.addLoadedLang(c),this.setLanguage(c)}applyFallbackLanguage(e,a){for(const[s,t]of Object.entries(a))this.fallbackMessages[s]=t;this.addLoadedLang({lang:this.options.fallbackLang,messages:a})}addLoadedLang(e){const a=o.loaded.findIndex(s=>s.lang===e.lang);if(a!==-1){o.loaded[a]=e;return}o.loaded.push(e)}setLanguage({lang:e,messages:a}){l||document.documentElement.setAttribute("lang",e.replace("_","-")),this.options.lang=e;for(const[s,t]of Object.entries(a))this.activeMessages[s]=t;for(const[s,t]of Object.entries(this.fallbackMessages))(!this.isValid(a[s])||this.activeMessages[s]===s)&&(this.activeMessages[s]=t);for(const[s]of Object.entries(this.activeMessages))!this.isValid(a[s])&&!this.isValid(this.fallbackMessages[s])&&(this.activeMessages[s]=null);return this.options.onLoad(e),e}getActiveLanguage(){return this.options.lang||this.options.fallbackLang}isLoaded(e){return e??(e=this.getActiveLanguage()),o.loaded.some(a=>a.lang.replace(/[-_]/g,"-")===e.replace(/[-_]/g,"-"))}trans(e,a={}){return this.wTrans(e,a).value}wTrans(e,a={}){return E(()=>{let s=this.findTranslation(e);this.isValid(s)||(s=this.findTranslation(e.replace(/\//g,"."))),this.activeMessages[e]=this.isValid(s)?s:e}),d(()=>this.makeReplacements(this.activeMessages[e],a))}transChoice(e,a,s={}){return this.wTransChoice(e,a,s).value}wTransChoice(e,a,s={}){const t=this.wTrans(e,s);return s.count=a.toString(),d(()=>this.makeReplacements(v(t.value,a,this.options.lang),s))}findTranslation(e){if(this.isValid(this.activeMessages[e]))return this.activeMessages[e];if(this.activeMessages[`${e}.0`]!==void 0){const s=Object.entries(this.activeMessages).filter(t=>t[0].startsWith(`${e}.`)).map(t=>t[1]);return h(s)}return this.activeMessages[e]}makeReplacements(e,a){const s=t=>t.charAt(0).toUpperCase()+t.slice(1);return Object.entries(a||[]).sort((t,c)=>t[0].length>=c[0].length?-1:1).forEach(([t,c])=>{c=c.toString(),e=(e||"").replace(new RegExp(`:${t}`,"g"),c).replace(new RegExp(`:${t.toUpperCase()}`,"g"),c.toUpperCase()).replace(new RegExp(`:${s(t)}`,"g"),s(c))}),e}isValid(e){return e!=null}static getSharedInstance(e,a=!1){return(r==null?void 0:r.setOptions(e,a))||(r=new o(e))}}o.loaded=[];export{C as t};
