(()=>{var e,t,n,o,r,i,c,s;(t=e||(e={})).Call="call",t.Reply="reply",t.Syn="syn",t.SynAck="synAck",t.Ack="ack",(o=n||(n={})).Fulfilled="fulfilled",o.Rejected="rejected",(i=r||(r={})).ConnectionDestroyed="ConnectionDestroyed",i.ConnectionTimeout="ConnectionTimeout",i.NoIframeSrc="NoIframeSrc",(c||(c={})).DataCloneError="DataCloneError",(s||(s={})).Message="message";const a=({name:e,message:t,stack:n})=>({name:e,message:t,stack:n});var l=(t,o,r)=>{const{localName:i,local:l,remote:d,originForSending:u,originForReceiving:m}=t;let p=!1;const E=t=>{if(t.source!==d||t.data.penpal!==e.Call)return;if("*"!==m&&t.origin!==m)return void r(`${i} received message from origin ${t.origin} which did not match expected origin ${m}`);const s=t.data,{methodName:l,args:E,id:g}=s;r(`${i}: Received ${l}() call`);const f=t=>o=>{if(r(`${i}: Sending ${l}() reply`),p)return void r(`${i}: Unable to send ${l}() reply due to destroyed connection`);const s={penpal:e.Reply,id:g,resolution:t,returnValue:o};t===n.Rejected&&o instanceof Error&&(s.returnValue=a(o),s.returnValueIsError=!0);try{d.postMessage(s,u)}catch(t){if(t.name===c.DataCloneError){const o={penpal:e.Reply,id:g,resolution:n.Rejected,returnValue:a(t),returnValueIsError:!0};d.postMessage(o,u)}throw t}};new Promise((e=>e(o[l].apply(o,E)))).then(f(n.Fulfilled),f(n.Rejected))};return l.addEventListener(s.Message,E),()=>{p=!0,l.removeEventListener(s.Message,E)}};let d=0;const u=e=>e?e.split("."):[],m=(e,t,n)=>{const o=u(t);return o.reduce(((e,t,r)=>(void 0===e[t]&&(e[t]={}),r===o.length-1&&(e[t]=n),e[t])),e),e},p=(e,t)=>{const n={};return Object.keys(e).forEach((o=>{const r=e[o],i=((e,t)=>{const n=u(t||"");return n.push(e),(e=>e.join("."))(n)})(o,t);"object"==typeof r&&Object.assign(n,p(r,i)),"function"==typeof r&&(n[i]=r)})),n},E=e=>{const t={};for(const n in e)m(t,n,e[n]);return t};var g,f,h=(t,o,i,c,a)=>{const{localName:l,local:u,remote:m,originForSending:p,originForReceiving:g}=o;let f=!1;a(`${l}: Connecting call sender`);const h=t=>(...o)=>{let i;a(`${l}: Sending ${t}() call`);try{m.closed&&(i=!0)}catch(e){i=!0}if(i&&c(),f){const e=new Error(`Unable to send ${t}() call due to destroyed connection`);throw e.code=r.ConnectionDestroyed,e}return new Promise(((r,i)=>{const c=++d,E=o=>{if(o.source!==m||o.data.penpal!==e.Reply||o.data.id!==c)return;if("*"!==g&&o.origin!==g)return void a(`${l} received message from origin ${o.origin} which did not match expected origin ${g}`);const d=o.data;a(`${l}: Received ${t}() reply`),u.removeEventListener(s.Message,E);let p=d.returnValue;d.returnValueIsError&&(p=(e=>{const t=new Error;return Object.keys(e).forEach((n=>t[n]=e[n])),t})(p)),(d.resolution===n.Fulfilled?r:i)(p)};u.addEventListener(s.Message,E);const f={penpal:e.Call,id:c,methodName:t,args:o};m.postMessage(f,p)}))},y=i.reduce(((e,t)=>(e[t]=h(t),e)),{});return Object.assign(t,E(y)),()=>{f=!0}},y=(e,t)=>{let n;return void 0!==e&&(n=window.setTimeout((()=>{const n=new Error(`Connection timed out after ${e}ms`);n.code=r.ConnectionTimeout,t(n)}),e)),()=>{clearTimeout(n)}},v=(t,n,o,r)=>{const{destroy:i,onDestroy:c}=o;return o=>{if(!(t instanceof RegExp?t.test(o.origin):"*"===t||t===o.origin))return void r(`Child: Handshake - Received SYN-ACK from origin ${o.origin} which did not match expected origin ${t}`);r("Child: Handshake - Received SYN-ACK, responding with ACK");const s="null"===o.origin?"*":o.origin,a={penpal:e.Ack,methodNames:Object.keys(n)};window.parent.postMessage(a,s);const d={localName:"Child",local:window,remote:window.parent,originForSending:s,originForReceiving:o.origin},u=l(d,n,r);c(u);const m={},p=h(m,d,o.data.methodNames,i,r);return c(p),m}},T=(t={})=>{const{parentOrigin:n="*",methods:o={},timeout:r,debug:i=!1}=t,c=(e=>(...t)=>{e&&console.log("[Penpal]",...t)})(i),a=((e,t)=>{const n=[];let o=!1;return{destroy(r){o||(o=!0,t(`${e}: Destroying connection`),n.forEach((e=>{e(r)})))},onDestroy(e){o?e():n.push(e)}}})("Child",c),{destroy:l,onDestroy:d}=a,u=p(o),m=v(n,u,a,c);return{promise:new Promise(((t,o)=>{const i=y(r,l),a=n=>{if((()=>{try{clearTimeout()}catch(e){return!1}return!0})()&&n.source===parent&&n.data&&n.data.penpal===e.SynAck){const e=m(n);e&&(window.removeEventListener(s.Message,a),i(),t(e))}};window.addEventListener(s.Message,a),(()=>{c("Child: Handshake - Sending SYN");const t={penpal:e.Syn},o=n instanceof RegExp?"*":n;window.parent.postMessage(t,o)})(),d((e=>{window.removeEventListener(s.Message,a),e&&o(e)}))})),destroy(){l()}}};(f=g||(g={})).ID="itemID",f.TYPE="itemType",f.SCOPE="itemScope",f.PROP="itemProp";const R={UUID:"id",ID:g.ID.toLowerCase(),TYPE:g.TYPE.toLowerCase(),SCOPE:g.SCOPE.toLowerCase(),PROP:g.PROP.toLowerCase(),PARENTID:"parentid",EDITOR_BEHAVIOR:"data-editor-behavior",EDITOR_LABEL:"data-editor-itemlabel",EDITOR_MODEL:"data-editor-itemmodel"};var b,w,A,I;(w=b||(b={})).EDIT="edit",w.PREVIEW="preview",(I=A||(A={})).TEXT="text",I.MEDIA="media",I.RICHTEXT="richtext",I.REFERENCE="reference",I.CONTAINER="container";const C="universal-editor-message-bus.herokuapp.com",P="/gql",S="urn:adobe:aem:editor:",L="urn:auecon:",O={USER_INPUT_RELAY_MESSAGE:"REMOTE_APP_USER_INPUT",OVERLAY_INPUT_MESSAGE:"OVERLAY_INPUT_MESSAGE",DEMO_APP_HOST:"ue-remote-app.adobe.net/?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com",GRAPHQL_HOST:C,GRAPHQL_PORT_PUBLIC:443,GRAPHQL_PORT_LOCAL:4e3,GRAPHQL_PATH:P,GRAPHQL_URL:`${C}:443${P}`,EDITABLE_SELECTOR:`[${R.TYPE}]`,CANVAS_PATH:"/canvas",PARENT_SELECTOR:`[${R.SCOPE}][${R.ID}]`,URN_PREFIX:S,DEPRECATED_URN_PREFIX:L,META_SELECTOR:`meta[name^='${S}'],meta[name^='${L}']`,DEMO_APP_HOST_PROD:"ue-remote-app.adobe.net",FRAGMENT_TYPE:"reference",UNIFIED_SHELL_STAGE:"https://experience-stage.adobe.com",UNIFIED_SHELL_PROD:"https://experience.adobe.com",HEADLESS_CF_EDITOR_URL:"#/aem/cf/editor/editor",CONTAINER_SELECTOR:`[${R.TYPE}=container]`,COMPONENT_ITEM_TYPE:"component",TRANSPARENT_BACKGROUND:"rgba(0, 0, 0, 0)",TARGET_ORIGIN:"*"};var _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const D=[];for(let e=0;e<256;++e)D.push((e+256).toString(16).slice(1));var M=function(e){if(!function(e){return"string"==typeof e&&_.test(e)}(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function N(e,t,n,o){switch(e){case 0:return t&n^~t&o;case 1:case 3:return t^n^o;case 2:return t&n^t&o^n&o}}function $(e,t){return e<<t|e>>>32-t}var U,H=function(e,t,n){function o(e,t,n,o){var r;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof t&&(t=M(t)),16!==(null===(r=t)||void 0===r?void 0:r.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+e.length);if(i.set(t),i.set(e,t.length),i=function(e){const t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const o=e.length/4+2,r=Math.ceil(o/16),i=new Array(r);for(let t=0;t<r;++t){const n=new Uint32Array(16);for(let o=0;o<16;++o)n[o]=e[64*t+4*o]<<24|e[64*t+4*o+1]<<16|e[64*t+4*o+2]<<8|e[64*t+4*o+3];i[t]=n}i[r-1][14]=8*(e.length-1)/Math.pow(2,32),i[r-1][14]=Math.floor(i[r-1][14]),i[r-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<r;++e){const o=new Uint32Array(80);for(let t=0;t<16;++t)o[t]=i[e][t];for(let e=16;e<80;++e)o[e]=$(o[e-3]^o[e-8]^o[e-14]^o[e-16],1);let r=n[0],c=n[1],s=n[2],a=n[3],l=n[4];for(let e=0;e<80;++e){const n=Math.floor(e/20),i=$(r,5)+N(n,c,s,a)+l+t[n]+o[e]>>>0;l=a,a=s,s=$(c,30)>>>0,c=r,r=i}n[0]=n[0]+r>>>0,n[1]=n[1]+c>>>0,n[2]=n[2]+s>>>0,n[3]=n[3]+a>>>0,n[4]=n[4]+l>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}(i),i[6]=15&i[6]|80,i[8]=63&i[8]|128,n){o=o||0;for(let e=0;e<16;++e)n[o+e]=i[e];return n}return function(e,t=0){return(D[e[t+0]]+D[e[t+1]]+D[e[t+2]]+D[e[t+3]]+"-"+D[e[t+4]]+D[e[t+5]]+"-"+D[e[t+6]]+D[e[t+7]]+"-"+D[e[t+8]]+D[e[t+9]]+"-"+D[e[t+10]]+D[e[t+11]]+D[e[t+12]]+D[e[t+13]]+D[e[t+14]]+D[e[t+15]]).toLowerCase()}(i)}try{o.name="v5"}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o}();function x(e,t,n){var o,r,i,c,s;function a(){var l=Date.now()-c;l<t&&l>=0?o=setTimeout(a,t-l):(o=null,n||(s=e.apply(i,r),i=r=null))}null==t&&(t=100);var l=function(){i=this,r=arguments,c=Date.now();var l=n&&!o;return o||(o=setTimeout(a,t)),l&&(s=e.apply(i,r),i=r=null),s};return l.clear=function(){o&&(clearTimeout(o),o=null)},l.flush=function(){o&&(s=e.apply(i,r),i=r=null,clearTimeout(o),o=null)},l}x.debounce=x,U=x;const F={element:window.document},V=150,k=e=>{const t=window.getComputedStyle(e).backgroundColor,n=e.parentElement;return t===O.TRANSPARENT_BACKGROUND&&n?k(n):t},B=e=>{if(!(e&&e instanceof HTMLElement))return;const t=window.getComputedStyle(e);return{content:e.innerText,htmlContent:e.innerHTML,style:{font:t.getPropertyValue("font"),visibility:e.style.visibility,color:t.getPropertyValue("color"),textAlign:t.getPropertyValue("text-align"),textTransform:t.getPropertyValue("text-transform"),border:t.getPropertyValue("border"),padding:t.getPropertyValue("padding"),backgroundColor:k(e),width:t.getPropertyValue("width"),height:t.getPropertyValue("height")}}},Y=e=>{e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation();const t={pageHeight:document.documentElement.scrollHeight,scrollOffset:{x:window.scrollX,y:window.scrollY},type:e.type,x:null,y:null,keyModifiers:{advancedSelect:e.ctrlKey,multiSelect:e.shiftKey,metaKey:e.metaKey},editables:[]};"scroll"!==e.type&&(t.x=e.x,t.y=e.y,t.editables=document.elementsFromPoint(e.x,e.y).filter((e=>e.matches(O.EDITABLE_SELECTOR))).map((e=>{const t=B(e),n=X(e);return{content:(null==t?void 0:t.content)||"",htmlContent:(null==t?void 0:t.htmlContent)||"",style:(null==t?void 0:t.style)||{},...n}}))),parent.postMessage({type:O.OVERLAY_INPUT_MESSAGE,payload:t},O.TARGET_ORIGIN)},j=e=>Y(e),G="OverlayBlockingElement",q=()=>{document.removeEventListener("scroll",j),document.removeEventListener("mousemove",Y),document.removeEventListener("mousedown",Y),document.removeEventListener("mouseup",Y),document.removeEventListener("click",Y);const e=document.getElementById(G);e&&e.remove()},K=e=>{const t=e.closest(O.PARENT_SELECTOR);return(null==t?void 0:t.getAttribute(R.ID))||""},X=e=>{const t=e.getAttribute(R.TYPE)||"",n=e.getAttribute(R.ID)||void 0,o=e.getAttribute(R.PROP)||void 0,{parentid:r,parentItemId:i,selector:c,isComponent:s}=((e,{itemid:t,itemtype:n,itemprop:o})=>{const r=n===O.COMPONENT_ITEM_TYPE||e.getAttribute(R.EDITOR_BEHAVIOR)===O.COMPONENT_ITEM_TYPE;let i="",c="",s="";if(t){i=`[${R.ID}="${t}"]`;const n=(e=>{var t;const n=null===(t=e.parentElement)||void 0===t?void 0:t.closest(O.CONTAINER_SELECTOR),o=null==n?void 0:n.getAttribute(R.ID);if(o)return{parentItemId:o,parentid:H(`${o}`,H.URL)};const r=null==n?void 0:n.getAttribute(R.PROP),i=n&&K(n);return r&&i?{parentItemId:i,parentid:H(`${i}_${r}`,H.URL)}:void 0})(e);c=(null==n?void 0:n.parentid)||"",s=(null==n?void 0:n.parentItemId)||""}else s=K(e),c=H(`${s}`,H.URL),i=`[${R.ID}="${s}"] ${e.tagName.toLocaleLowerCase()}[${R.TYPE}="${n}"]`,o&&(i+=`[${R.PROP}="${o}"]`);return{parentid:c,parentItemId:s,selector:i,isComponent:r}})(e,{itemid:n,itemtype:t,itemprop:o}),a=B(e),l=H(`${n||i}${o?`_${o}`:""}`,H.URL);let d={rect:e.getBoundingClientRect(),itemtype:t,label:e.getAttribute(R.EDITOR_LABEL)||"",id:l,itemid:n,itemprop:o,parentid:r,selector:c,pageYOffset:window.scrollY,isComponent:s,modeltype:e.getAttribute(R.EDITOR_MODEL)||""};return[A.TEXT,A.RICHTEXT].includes(t)&&(d={...d,...a}),d},z={viewport:{width:0,height:0},frame:{width:0,height:0},scroll:{x:0,y:0}},W=({editor:e})=>{null==e||e.updateFrameDetails({details:z})},Q=({target:e})=>{const t=e.documentElement;z.scroll.x=t.scrollLeft,z.scroll.y=t.scrollTop},J=({target:e})=>{const t=Math.max(e.document.documentElement.clientWidth||0,e.innerWidth||0),n=Math.max(e.document.documentElement.clientHeight||0,e.innerHeight||0),{width:o,height:r}=e.document.documentElement.getBoundingClientRect();z.viewport={width:t,height:n},z.frame={width:Math.ceil(o),height:Math.ceil(r)}},Z=({editor:e})=>{const t=[];[...document.styleSheets].forEach((e=>{try{const{cssRules:n}=e;[...n].find((e=>e instanceof CSSFontFaceRule))&&e.href&&t.push(e.href)}catch(n){e.href&&t.push(e.href)}})),e.addCustomFonts(t)},ee=({editor:e})=>{const t=F.element,n=(0,U.debounce)((()=>{const n=(e=>{const{scrollLeft:t,scrollTop:n}=e.documentElement,o=e.querySelectorAll(O.EDITABLE_SELECTOR)||[],r=new Map;return o.forEach((e=>{const t=X(e),n=r.get(t.id);if(r.set(t.id,{...t,children:(null==n?void 0:n.children)||[]}),t.parentid){const e=r.get(t.parentid);e?e.children.push(t.id):r.set(t.parentid,{children:[t.id]})}})),{editables:r,offset:{x:t,y:n},selected:{}}})(t);e.repaintEditables({editables:n})}),V);n(),window.removeEventListener("resize",n),window.addEventListener("resize",n),(({element:e,callback:t})=>{const n=new MutationObserver(t);n.observe(e,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0}),n.disconnect})({element:t,callback:n})},te=({editor:e})=>{const t=window;t.document.addEventListener("scroll",(0,U.debounce)((({target:t})=>{Q({target:t}),W({editor:e})}),V)),t.addEventListener("resize",(0,U.debounce)((({target:t})=>{J({target:t}),W({editor:e})}),V)),t.addEventListener("orientationchange",(0,U.debounce)((({target:n})=>{Q({target:t.document}),J({target:n}),W({editor:e})}),V));const n=(0,U.debounce)((()=>{J({target:t}),W({editor:e})}),V);new ResizeObserver(n).observe(t.document.body),requestAnimationFrame((()=>{Q({target:t.document}),J({target:t}),W({editor:e})}))},ne=({editor:e})=>{document.addEventListener("click",(t=>(({event:e,editor:t})=>{const n=e.target.closest("A");n&&(e.preventDefault(),t.navigateTo({href:n.href}))})({event:t,editor:e})),{capture:!0})},oe=()=>{window.addEventListener("keydown",(({type:e,key:t,altKey:n,metaKey:o,shiftKey:r,ctrlKey:i})=>{const c={type:e,key:t,altKey:n,metaKey:o,shiftKey:r,ctrlKey:i};parent.postMessage({type:O.USER_INPUT_RELAY_MESSAGE,value:c},"*")}))},re=Object.freeze({edit:"adobe-ue-edit",preview:"adobe-ue-preview"}),ie=e=>e.split("/").pop()||"",ce=e=>{const[t="",n=""]=e.split("/");return`${n.toUpperCase()} ${t}`},se=e=>{const{naturalWidth:t,naturalHeight:n}=e;return t&&n&&`${t} x ${n}`||""},ae=e=>{const t=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,t)).toFixed(0))} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`};var le;le=function(e){return function(t,n,o){var r=o.subscribe;return o.subscribe=function(e,t,n){var i=e;if(t){var c=(null==n?void 0:n.equalityFn)||Object.is,s=e(o.getState());i=function(n){var o=e(n);if(!c(s,o)){var r=s;t(s=o,r)}},null!=n&&n.fireImmediately&&t(s,s)}return r(i)},e(t,n,o)}};var de=function(e){var t,n=new Set,o=function(e,o){var r="function"==typeof e?e(t):e;if(!Object.is(r,t)){var i=t;t=(null!=o?o:"object"!=typeof r)?r:Object.assign({},t,r),n.forEach((function(e){return e(t,i)}))}},r=function(){return t},i={setState:o,getState:r,subscribe:function(e){return n.add(e),function(){return n.delete(e)}},destroy:function(){return n.clear()}};return t=e(o,r,i),i};const ue=({set:e},{mode:t})=>{e((e=>{const n=t===b.EDIT||t===b.PREVIEW;return{...e,mode:t,isInEditor:n}}))},me=function(e){return e&&e.__esModule?e.default:e}((function(e){return e?de(e):de}))(le(((e,t)=>({mode:null,isInEditor:!1,setMode:ue.bind(null,{get:t,set:e})})))),pe=({selector:e,classNames:t,operation:n="toggle"})=>{const o=document.querySelector(e);if(o)for(const e of t)o.classList[n](e)},Ee=new RegExp(`^${O.URN_PREFIX}|^${O.DEPRECATED_URN_PREFIX}`),ge={updateAppMode:e=>{if(!e)return;const{mode:t,setMode:n}=me.getState();if(t){if(t===e)return;pe({selector:"html",classNames:Object.values(re)})}else pe({selector:"html",classNames:[re[e]]});n({mode:e})},getEditableElement:e=>{const t=document.querySelector(e);return t&&t instanceof HTMLElement?B(t):void 0},updateField:async({selector:e,value:t,itemid:n,property:o="",content:r})=>{const i=document.querySelector(e);if(null==t)return;const c=document.querySelector(`[${R.ID}="${n}"]`),s={};s[o]=t;const a=new CustomEvent("editor-update",{detail:{itemids:[n],element:c,content:{...r,...s}}});document.dispatchEvent(a),i?((e,t)=>{(null==e?void 0:e.getAttribute("itemtype"))===A.MEDIA?e.src=t:(null==e?void 0:e.getAttribute("itemtype"))!==A.TEXT&&(null==e?void 0:e.getAttribute("itemtype"))!==A.RICHTEXT||(e.innerHTML=t)})(i,t):c.hasAttribute(o)&&c.setAttribute(o,t)},removeField:({selector:e})=>{const t=document.querySelector(e);t&&t.remove()},getUrnMappings:()=>{const e=document.querySelectorAll(O.META_SELECTOR);return Array.from(e).reduce(((e,{name:t,content:n})=>({...e,[t.replace(Ee,"")]:n})),{})},getMediaProperties:async e=>{const t=document.querySelector(e),n=null==t?void 0:t.src;if(!n||!t)return;const o=await(async e=>{try{return await fetch(e).then((e=>e.blob()))}catch{return}})(n),{type:r,size:i}=o||{};return{name:ie(n),mimeType:r?ce(r):"",resolution:se(t),size:i?ae(i):"",src:n,alt:t.getAttribute("alt")||""}},scrollEditableIntoView:e=>{const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect();!(e.top>=0&&e.bottom<=window.innerHeight)&&t.scrollIntoView({behavior:"smooth"})}},toggleEditableVisibility:(e,t)=>{const n=document.querySelector(e);n&&(t?n.style.removeProperty("color"):n.style.color="rgba(0, 0, 0, 0)")},getRichTextColors:e=>{const t=document.querySelector(e),n=[];if(t.getAttribute("itemtype")===A.RICHTEXT)for(const e of t.children){const t=window.getComputedStyle(e).color;n.push(t)}return n},updateContainer:async({containerSelector:e,selector:t,beforeSelector:n,refresh:o,itemid:r,content:i})=>{const c=t&&document.querySelector(t),s=document.querySelector(e);if(c&&s)((e,t,n)=>{n?document.querySelector(n).before(e):t.appendChild(e)})(c,s,n);else if(o){const e=new CustomEvent("editor-add",{detail:{container:s,itemid:r,component:i}});document.dispatchEvent(e)}},getComponentsDefinition:async()=>{const e=document.querySelector('script[type="application/vnd.adobe.aem.editor.component-definition+json"]');if(!e)return null;const t=e.src;if(t)return await(async e=>{try{return await fetch(e).then((e=>e.json()))}catch(e){return console.log("fetchDefinition",e),null}})(t);const n=e.innerText;return n?JSON.parse(n):null},getDocumentProperties:e=>{const t={};try{for(const n of e)void 0!==document[n]?t[n]=document[n]:t[n]=null}catch(e){console.log(e)}return t}};(async()=>{const e=T({methods:ge}),t=await e.promise;var n;Z({editor:t}),ee({editor:t}),te({editor:t}),ne({editor:t}),oe(),n=e=>{e===b.PREVIEW&&q(),e===b.EDIT&&(q(),(()=>{const e=document.createElement("div");e.id=G,e.style.cssText="\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2147483647;",document.body.appendChild(e)})(),document.addEventListener("scroll",j),document.addEventListener("mousemove",Y),document.addEventListener("mousedown",Y),document.addEventListener("mouseup",Y),document.addEventListener("click",Y))},me.subscribe((e=>[e.mode]),(([e],[t])=>{e!==t&&n(e)}))})()})();