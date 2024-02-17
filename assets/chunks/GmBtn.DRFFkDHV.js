var L=Object.defineProperty;var H=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(H(e,typeof t!="symbol"?t+"":t,n),n);import{d as S,o as T,c as j,r as A,_ as B}from"./framework.BOfXQUR0.js";function h(e,t){const n=s=>{t(s.animationName)};e.addEventListener("animationend",n)}function d(e,t){e.style.animationName=t}function o(e){return`gmal-${e}`}function a(...e){const t=document.createElement("div");return t.classList.add(...e),t}function q(e,t){const n=o("count");let s=e.querySelector(`.${n}`);s||(s=document.createElement("span"),s.classList.add(n),e.append(s)),s.innerHTML=`${t>99?"99":t}`,d(s,""),setTimeout(()=>{d(s,o("shake"))})}const g=()=>{let e=document.querySelector(".gmal");return e||(e=a("gmal"),document.body.append(e)),e},E=()=>{let e=document.querySelector(`.${o("msg-box")}`);return e||(e=a(o("msg-box")),g().append(e),e)},G=()=>{let e=document.querySelector(`.${o("notice-box")}`);return e||(e=a(o("notice-box")),g().append(e),e)};function k(e,t){const n=e.style.cssText.split(";");n.pop(),e.style.cssText=`${n.concat(t).join(";")};`}function w(e=!0){const t=document.body;e?(t.style.paddingRight=`${window.innerWidth-document.documentElement.clientWidth}px`,t.style.overflow="hidden"):(t.style.overflow="",t.style.paddingRight="")}const f='viewBox="0 0 24 24"',m='style="width:1em;height:1em;vertical-align:baseline"',b=`<svg class="${o("ani-turn")}" ${f} ${m}><path d="M1,12A11,11,0,0,0,12,23h0A11,11,0,0,0,12,1" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M18.5,12A6.5,6.5,0,1,0,12,18.5h0" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,P=[`<svg ${f} ${m}><circle cx="12" cy="12" r="12" style="fill:#29abe2"/><path d="M12,17.5a1,1,0,0,1-1-1v-5h-.5a1,1,0,0,1,0-2H12a1,1,0,0,1,1,1v6A1,1,0,0,1,12,17.5Z" style="fill:#fff"/><path d="M14,18.5H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" style="fill:#fff"/><circle cx="12" cy="6" r="1.5" style="fill:#fff"/></svg>`,`<svg ${f} ${m}><circle cx="12" cy="12" r="12" style="fill:#faad14"/><path d="M12,19.5A1.5,1.5,0,1,0,10.5,18,1.5,1.5,0,0,0,12,19.5Z" style="fill:#fff;fill-rule:evenodd"/><path d="M12,14a1.5,1.5,0,0,1-1.5-1.5v-7a1.5,1.5,0,0,1,3,0v7A1.5,1.5,0,0,1,12,14Z" style="fill:#fff"/></svg>`,`<svg ${f} ${m}><circle cx="12" cy="12" r="12" style="fill:#e06968"/><path d="M16,8,8,16" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M8,8l8,8" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,`<svg ${f} ${m}><path d="M12,.5l3.18,2.2h3.93l1.21,3.55,3.18,2.2L22.28,12l1.22,3.55-3.18,2.2L19.11,21.3H15.18L12,23.5,8.82,21.3H4.89L3.68,17.75.5,15.55,1.72,12,.5,8.45l3.18-2.2L4.89,2.7H8.82Z" style="fill:#52c41a;stroke:#52c41a;stroke-linecap:round;stroke-linejoin:round"/><path d="M7.5,12l3,3,6-6" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,b],_=["info","warn","error","success","loading"];function W(e,t=""){const n=_.indexOf(e),s=P[n]??"";return`<i class="${t}">${s}</i>`}function $(e,t,n){return`class="${o("aniicon")} ${o(t)} ${e?o("dense"):""} ${n}"`}function Z(e=!1,t=""){return`<div ${$(e,"ok-icon",t)}><div class="${o("ok-line")} ${o("line-tip")}"></div><div class="${o("ok-line")} ${o("line-long")}"></div><div class="${o("ok-ring")}"></div><div class="${o("ok-fix")}"></div></div>`}function R(e=!1,t=""){return`<div ${$(e,"err-icon",t)}><div class="${o("err-r")}"><div class="${o("err-ll")}"></div><div class="${o("err-lr")}"></div></div></div>`}function z(e=!1,t=""){return`<div ${$(e,"warn-icon",t)}><div class="${o("warn-content")}">!</div></div>`}function O(e=!1,t=""){return`<div ${$(e,"info-icon",t)}><div class="${o("info-content")}">i</div></div>`}function D(e=!1,t=""){return`<div ${$(e,"load-icon",t)}>${b}</div>`}function M(e,t=!1,n=""){switch(e){case"success":return Z(t,n);case"error":return R(t,n);case"warn":return z(t,n);case"info":return O(t,n);case"loading":return D(t,n);default:return""}}class F{constructor(t,n){v(this,"timeout",2500);v(this,"maxCount",8);v(this,"activeInsts",new Map);this.type=n,this.core=t,n===1&&(this.timeout=0)}config(t){this.timeout=t.timeout||this.timeout,this.maxCount=t.maxCount||this.maxCount}fire(t){const n=this.mkMsg(t);return t.type!=="loading"&&this.sT(n,(t==null?void 0:t.timeout)||this.timeout),n}sT(t,n){if(!n)return;const{$el:s}=t,c=this.mkP(t,n);c.resume(),s.onmouseenter=c.pause,s.onmouseleave=c.resume}mkP(t,n){var x;(x=t.progress)==null||x.remove();const{$el:s}=t,c=a(o("progress")),r=a(o("progress-bar"));c.append(r),s.append(c),r.ontransitionend=()=>{t.close(-1)};const l=()=>r.clientWidth/c.clientWidth,i=()=>{k(r,["transition:none",`width:${l()*100}%`])},u=()=>{k(r,["width:0",`transition:width ${n*l()}ms linear`])},y=()=>{c.remove()};return t.progress={pause:i,resume:u,remove:y}}mkMsg(t){var l;const n=`${t.content}${t.type}`;if(!this.type&&this.activeInsts.has(n)){const i=this.activeInsts.get(n);return i.count+=1,q(i.$el,i.count),i}const s={...t,onClosed:i=>{t!=null&&t.onClosed&&t.onClosed(i)},onClose:()=>{this.activeInsts.delete(n)}},c=this.core(s);if(this.type===1||this.activeInsts.size>=this.maxCount){const i=this.activeInsts.values().next().value;i&&((l=i.progress)==null||l.pause(),i.close(-2))}const r={...c,id:n,count:1};return this.activeInsts.set(n,r),c.open(),r}}function N(e){const t={content:"success",type:"success"};let n=!1;const s=c=>{switch(typeof c){case"string":n?t.type=c:(t.content=c,n=!0);break;case"number":t.timeout=c;break;case"object":Object.assign(t,c);break}};for(let c=0;c<4;c++){const r=e[c];r&&s(r)}return t}function p(e,t){const n=new F(e,t),s=(...c)=>n.fire(N(c));return s.config=n.config.bind(n),s}function I(e=""){return`<i class="${e}" style="cursor:pointer;transition:all 0.2s"><svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M1.5,1.5l21,21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/><path d="M1.5,22.5l21-21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/></svg></i>`}function C(e,t){const n=document.createElement("button");return n.textContent=e,n.onclick=t,n.classList.add(o("alert-btn")),n}function J(e){const t=a(o("alert-box")),n=a(o("alert")),s=M(e.type,!1,o("alert-icon"));if(t.append(n),n.innerHTML=`${s}<div class="${o("alert-title")}">${e.content}</div>`,e.text||e.html){const i=a(o("alert-content"));e.html?typeof e.html=="string"?i.innerHTML=e.html:i.append(e.html):i.textContent=e.text||"hello",n.append(i)}const c=g(),r=()=>{w(),c.append(t)},l=i=>(e.onClose(),d(n,o("alert-out")),new Promise(u=>{h(n,y=>{y===o("alert-out")&&(t.remove(),document.querySelector(`.${o("alert")}`)||w(!1),e.onClosed(i),u())})}));if(t.onclick=i=>{e.hideClose||i.target===t&&(e.onClose(),l(0))},e.showCancel||e.showConfirm){const i=a(o("alert-btn-group"));e.showCancel&&i.append(C("取消",()=>{l(0)})),e.showConfirm&&i.append(C("确定",()=>{l(1)})),n.append(i)}if(!e.hideClose){const i=a();i.innerHTML=I(o("alert-close")),i.onclick=()=>{l(0)},n.append(i)}return{close:l,open:r,$el:n}}const ee=p(J,1);function K(e){const t=W(e.type,o("icon")),n=a(o("msg")),s=a(o("msg-main"));return n.append(s),s.innerHTML=`${t}<div class=${o("msg-content")}>${e.content}</div>`,{open:()=>{E().append(n),d(n,o("alert-in"))},close:l=>(e.onClose(),s.style.maxHeight=`${s.offsetHeight}px`,d(n,o("msg-out")),d(s,o("msg-close")),new Promise(i=>{h(n,u=>{u===o("msg-out")&&(n.remove(),e.onClosed(l),i())})})),$el:n}}const te=p(K,0);function Q(e){const t=M(e.type,!0,o("notice-icon")),n=a(o("notice"));return n.innerHTML=`<div class="${o("notice-main")}">${t}  <div class="${o("notice-content")}">${e.content}</div></div>`,{open:()=>{G().prepend(n),k(n,[`--mh:${n.offsetHeight+10}px`]),d(n,o("open")),setTimeout(()=>{const r=n.querySelector(`.${o("notice-icon")}`);r&&(r.style.opacity="1")},300)},close:r=>(e.onClose(),d(n,o("close")),new Promise(l=>{h(n,i=>{i===o("close")&&(n.remove(),e.onClosed(r),l())})})),$el:n}}const ne=p(Q,0);function U(e){const t={info:"#409eff",success:"#67c23a",warn:"#e6a23c",error:"#f56c6c",loading:"#1890ff"},n=t[e.type]||t.info,s=a(o("info"));s.innerHTML=`<div class="${o("info-header")}"><div class="${o("info-status")}" style="background:${n};"></div><span style="margin-right:auto;font-weight:600">${e.headerLeft||"公告"}</span><span style="font-size:.875em;opacity:.7">${e.headerRight||""}</span>${e.hideClose?"":I(o("info-close"))}</div><div class="${o("info-content")}">${e.content}</div>`;const c=()=>{g().append(s)},r=l=>(e.onClose(),new Promise(i=>{d(s,o("info-out")),h(s,u=>{u===o("info-out")&&(s.remove(),e.onClosed(l),i())})}));if(!e.hideClose){const l=s.querySelector(`.${o("info-close")}`);l.onclick=()=>{r(0)}}return{open:c,close:r,$el:s}}const oe=p(U,1),V=S({__name:"GmBtn",props:{onClick:{type:Function,default:()=>{}}},setup(e){return(t,n)=>(T(),j("button",{class:"btn",onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},[A(t.$slots,"default",{},void 0,!0)]))}}),se=B(V,[["__scopeId","data-v-a65e9128"]]);export{se as G,ee as a,oe as i,te as m,ne as n};