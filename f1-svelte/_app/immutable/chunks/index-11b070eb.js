function P(){}const ct=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function F(){return Object.create(null)}function v(t){t.forEach(K)}function Q(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Ot(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ot(t){return Object.keys(t).length===0}function qt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Tt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function zt(t,e,n,i,r,o){if(r){const c=W(e,n,i,o);t.p(c,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window!="undefined";let st=U?()=>window.performance.now():()=>Date.now(),z=U?t=>requestAnimationFrame(t):P;const y=new Set;function V(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(V)}function ut(t){let e;return y.size===0&&z(V),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let R=!1;function at(){R=!0}function ft(){R=!1}function _t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:_t(1,r,_=>e[n[_]].claim_order,u))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function ht(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=Y("style");return pt(X(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(R){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){R&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function Ft(){return B(" ")}function Ht(){return B("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){wt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Jt(t,e,n){return tt(t,e,n,Y)}function Kt(t,e,n){return tt(t,e,n,xt)}function bt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Qt(t){return bt(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const C=new Map;let S=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:mt(e),rules:{}};return C.set(t,n),n}function kt(t,e,n,i,r,o,c,s=0){const l=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=l){const E=e+(n-e)*o(m);u+=m*100+`%{${c(E,1-E)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${vt(f)}_${s}`,_=X(t),{stylesheet:h,rules:d}=C.get(_)||Et(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,S+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),S-=r,S||Nt())}function Nt(){z(()=>{S||(C.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),C.clear())})}let b;function w(t){b=t}function D(){if(!b)throw new Error("Function called outside component initialization");return b}function Vt(t){D().$$.on_mount.push(t)}function Xt(t){D().$$.after_update.push(t)}function Yt(){const t=D();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=et(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Zt(t,e){return D().$$.context.set(t,e),e}const $=[],I=[],j=[],G=[],nt=Promise.resolve();let T=!1;function it(){T||(T=!0,nt.then(rt))}function te(){return it(),nt}function M(t){j.push(t)}const q=new Set;let N=0;function rt(){const t=b;do{for(;N<$.length;){const e=$[N];N++,w(e),jt(e.$$)}for(w(null),$.length=0,N=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while($.length);for(;G.length;)G.pop()();T=!1,q.clear(),w(t)}function jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let x;function At(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function J(t,e,n){t.dispatchEvent(et(`${e?"intro":"outro"}${n}`))}const A=new Set;let p;function ee(){p={r:0,c:[],p}}function ne(){p.r||v(p.c),p=p.p}function Ct(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ie(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),p.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const St={duration:0};function re(t,e,n){let i=e(t,n),r=!1,o,c,s=0;function l(){o&&H(t,o)}function u(){const{delay:a=0,duration:_=300,easing:h=ct,tick:d=P,css:g}=i||St;g&&(o=kt(t,0,1,_,a,h,g,s++)),d(0,1);const m=st()+a,E=m+_;c&&c.abort(),r=!0,M(()=>J(t,!0,"start")),c=ut(O=>{if(r){if(O>=E)return d(1,0),J(t,!0,"end"),l(),r=!1;if(O>=m){const L=h((O-m)/_);d(L,1-L)}}return r})}let f=!1;return{start(){f||(f=!0,H(t),Q(i)?(i=i(),At().then(u)):u())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function ce(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],s=e[o];if(s){for(const l in c)l in s||(i[l]=1);for(const l in s)r[l]||(n[l]=s[l],r[l]=1);t[o]=s}else for(const l in c)r[l]=1}for(const c in i)c in n||(n[c]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function oe(t){t&&t.c()}function se(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:s}=t.$$;r&&r.m(e,n),i||M(()=>{const l=o.map(K).filter(Q);c?c.push(...l):v(l),t.$$.on_mount=[]}),s.forEach(M)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,o,c,s=[-1]){const l=b;w(t);const u=t.$$={fragment:null,ctx:null,props:o,update:P,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),f&&Rt(t,a)),_}):[],u.update(),f=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){at();const a=$t(e.target);u.fragment&&u.fragment.l(a),a.forEach(gt)}else u.fragment&&u.fragment.c();e.intro&&Ct(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ft(),rt()}w(l)}class ae{$destroy(){Pt(this,1),this.$destroy=P}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as A,le as B,Pt as C,lt as D,te as E,qt as F,zt as G,Bt as H,Tt as I,yt as J,ct as K,Ot as L,M,re as N,xt as O,Kt as P,It as Q,v as R,ae as S,Yt as T,$t as a,Gt as b,Jt as c,gt as d,Y as e,Ut as f,Lt as g,bt as h,ue as i,Wt as j,Ft as k,Ht as l,Qt as m,P as n,ee as o,ie as p,ne as q,Ct as r,Dt as s,B as t,Zt as u,Xt as v,Vt as w,oe as x,se as y,Mt as z};
