"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{5177:function(e,t,r){r.d(t,{w_:function(){return u}});var s=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=s.createContext&&s.createContext(a),n=function(){return n=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},o=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]])}return r};function l(e){return e&&e.map((function(e,t){return s.createElement(e.tag,n({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return s.createElement(c,n({attr:n({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var r,a=e.attr,i=e.size,l=e.title,u=o(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:n(n({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return void 0!==i?s.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},7536:function(e,t,r){r.d(t,{cI:function(){return we}});var s=r(7294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var l=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),u=e=>l(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,y=(e,t,r)=>{if(!t||!l(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const m="blur",h="focusout",g="onBlur",v="onChange",p="onSubmit",b="onTouched",_="all",w="max",V="min",A="maxLength",F="minLength",x="pattern",S="required",k="validate";s.createContext(null);var D=(e,t,r,s=!0)=>{const a={};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t[a]!==_&&(t[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},O=e=>l(e)&&!Object.keys(e).length,E=(e,t,r)=>{const{name:s,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||_)))},C=e=>Array.isArray(e)?e:[e];function j(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var N=e=>"string"===typeof e,T=(e,t,r,s)=>{const a=Array.isArray(e);return N(e)?(s&&t.watch.add(e),y(r,e)):a?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r)},U=e=>"function"===typeof e,B=e=>{for(const t in e)if(U(e[t]))return!0;return!1};var L=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>/^\w*$/.test(e),q=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let s=-1;const a=M(t)?[t]:q(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const I=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else l(s)&&I(s,t)}}};var z=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));var $="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function R(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if($&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;t=r?[]:{};for(const r in e)t[r]=U(e[r])?e[r]:R(e[r])}return t}function W(e,t){const r=M(t)?[t]:q(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),o=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(l(t)&&O(t)||Array.isArray(t)&&!t.filter((e=>!f(e))).length)&&(i?delete i[r]:delete e[r]),i=t}}return e}function H(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var G=e=>n(e)||!o(e);function J(e,t){if(G(e)||G(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!J(r,e):r!==e)return!1}}return!0}var K=e=>({isOnSubmit:!e||e===p,isOnBlur:e===g,isOnChange:e===v,isOnAll:e===_,isOnTouch:e===b}),Q=e=>"boolean"===typeof e,X=e=>"file"===e.type,Y=e=>e instanceof HTMLElement,Z=e=>"select-multiple"===e.type,ee=e=>"radio"===e.type,te=e=>Y(e)&&e.isConnected;function re(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const s in e)Array.isArray(e[s])||l(e[s])&&!B(e[s])?(t[s]=Array.isArray(e[s])?[]:{},re(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function se(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const a in e)Array.isArray(e[a])||l(e[a])&&!B(e[a])?f(t)||G(r[a])?r[a]=Array.isArray(e[a])?re(e[a],[]):{...re(e[a])}:se(e[a],n(t)?{}:t[a],r[a]):r[a]=!J(e[a],t[a]);return r}var ae=(e,t)=>se(e,t,re(t));const ie={value:!1,isValid:!1},ne={value:!0,isValid:!0};var oe=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?ne:{value:e[0].value,isValid:!0}:ne:ie}return ie},le=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&N(e)?new Date(e):s?s(e):e;const ue={isValid:!1,value:null};var ce=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ue):ue;function de(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return X(t)?t.files:ee(t)?ce(e.refs).value:Z(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?oe(e.refs).value:le(f(t.value)?e.ref.value:t.value,e)}var fe=e=>e instanceof RegExp,ye=e=>f(e)?void 0:fe(e)?e.source:l(e)?fe(e.value)?e.value.source:e.value:e;function me(e,t,r){const s=y(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=y(t,s),n=y(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var he=e=>N(e)||s.isValidElement(e);function ge(e,t,r="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||Q(e)&&!e)return{type:r,message:he(e)?e:"",ref:t}}var ve=e=>l(e)&&!fe(e)?e:{value:e,message:""},pe=async(e,t,r,s)=>{const{ref:i,refs:o,required:u,maxLength:c,minLength:d,min:f,max:y,pattern:m,validate:h,name:g,valueAsNumber:v,mount:p,disabled:b}=e._f;if(!p||b)return{};const _=o?o[0]:i,D=e=>{s&&_.reportValidity&&(_.setCustomValidity(Q(e)?"":e||" "),_.reportValidity())},E={},C=ee(i),j=a(i),T=C||j,B=(v||X(i))&&!i.value||""===t||Array.isArray(t)&&!t.length,M=L.bind(null,g,r,E),q=(e,t,r,s=A,a=F)=>{const n=e?t:r;E[g]={type:e?s:a,message:n,ref:i,...M(e?s:a,n)}};if(u&&(!T&&(B||n(t))||Q(t)&&!t||j&&!oe(o).isValid||C&&!ce(o).isValid)){const{value:e,message:t}=he(u)?{value:!!u,message:u}:ve(u);if(e&&(E[g]={type:S,message:t,ref:_,...M(S,t)},!r))return D(t),E}if(!B&&(!n(f)||!n(y))){let e,s;const a=ve(y),o=ve(f);if(isNaN(t)){const r=i.valueAsDate||new Date(t);N(a.value)&&(e=r>new Date(a.value)),N(o.value)&&(s=r<new Date(o.value))}else{const r=i.valueAsNumber||+t;n(a.value)||(e=r>a.value),n(o.value)||(s=r<o.value)}if((e||s)&&(q(!!e,a.message,o.message,w,V),!r))return D(E[g].message),E}if((c||d)&&!B&&N(t)){const e=ve(c),s=ve(d),a=!n(e.value)&&t.length>e.value,i=!n(s.value)&&t.length<s.value;if((a||i)&&(q(a,e.message,s.message),!r))return D(E[g].message),E}if(m&&!B&&N(t)){const{value:e,message:s}=ve(m);if(fe(e)&&!t.match(e)&&(E[g]={type:x,message:s,ref:i,...M(x,s)},!r))return D(s),E}if(h)if(U(h)){const e=ge(await h(t),_);if(e&&(E[g]={...e,...M(k,e.message)},!r))return D(e.message),E}else if(l(h)){let e={};for(const s in h){if(!O(e)&&!r)break;const a=ge(await h[s](t),_,s);a&&(e={...a,...M(s,a.message)},D(a.message),r&&(E[g]=e))}if(!O(e)&&(E[g]={ref:_,...e},!r))return E}return D(!0),E};const be={mode:p,reValidateMode:v,shouldFocusError:!0};function _e(e={}){let t,r={...be,...e},s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},l=R(r.defaultValues)||{},g=r.shouldUnregister?{}:R(l),v={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},b=0,w={};const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},A={watch:H(),array:H(),state:H()},F=K(r.mode),x=K(r.reValidateMode),S=r.criteriaMode===_,k=async e=>{let t=!1;return V.isValid&&(t=r.resolver?O((await L()).errors):await M(o,!0),e||t===s.isValid||(s.isValid=t,A.state.next({isValid:t}))),t},D=(e,t)=>(P(s.errors,e,t),A.state.next({errors:s.errors})),E=(e,t,r,s)=>{const a=y(o,e);if(a){const i=y(g,e,f(r)?y(l,e):r);f(i)||s&&s.defaultChecked||t?P(g,e,t?i:de(a._f)):se(e,i),v.mount&&k()}},j=(e,t,r,a,i)=>{let n=!1;const o={name:e},u=y(s.touchedFields,e);if(V.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=q(),n=e!==o.isDirty}if(V.dirtyFields&&(!r||a)){const r=y(s.dirtyFields,e);J(y(l,e),t)?W(s.dirtyFields,e):P(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,n=n||r!==y(s.dirtyFields,e)}return r&&!u&&(P(s.touchedFields,e,r),o.touchedFields=s.touchedFields,n=n||V.touchedFields&&u!==r),n&&i&&A.state.next(o),n?o:{}},B=async(r,a,i,n,o)=>{const l=y(s.errors,a),u=V.isValid&&s.isValid!==i;var c,d;if(e.delayError&&n?(t=t||(c=D,d=e.delayError,(...e)=>{clearTimeout(b),b=window.setTimeout((()=>c(...e)),d)}),t(a,n)):(clearTimeout(b),n?P(s.errors,a,n):W(s.errors,a)),((n?!J(l,n):l)||!O(o)||u)&&!r){const e={...o,...u?{isValid:i}:{},errors:s.errors,name:a};s={...s,...e},A.state.next(e)}w[a]--,V.isValidating&&!Object.values(w).some((e=>e))&&(A.state.next({isValidating:!1}),w={})},L=async e=>r.resolver?await r.resolver({...g},r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=y(t,i);e&&P(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||p.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},M=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const{_f:e,...i}=n;if(e){const i=await pe(n,y(g,e.name),S,r.shouldUseNativeValidation);if(i[e.name]&&(a.valid=!1,t))break;t||(i[e.name]?P(s.errors,e.name,i[e.name]):W(s.errors,e.name))}i&&await M(i,t,a)}}return a.valid},q=(e,t)=>(e&&t&&P(g,e,t),!J(ce(),l)),re=(e,t,r)=>{const s={...v.mount?g:f(t)?l:N(e)?{[e]:t}:t};return T(e,p,s,r)},se=(e,t,r={})=>{const s=y(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&P(g,e,le(t,r)),i=$&&Y(r.ref)&&n(t)?"":t,Z(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>!e.disabled&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):X(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||A.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&j(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ue(e)},ie=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,l=y(o,n);!p.array.has(e)&&G(a)&&(!l||l._f)||i(a)?se(n,a,r):ie(n,a,r)}},ne=(e,t,r={})=>{const a=y(o,e),i=p.array.has(e),u=R(t);P(g,e,u),i?(A.array.next({name:e,values:g}),(V.isDirty||V.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ae(l,g),A.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:q(e,u)}))):!a||a._f||n(u)?se(e,u,r):ie(e,u,r),z(e,p)&&A.state.next({}),A.watch.next({name:e})},oe=async e=>{const t=e.target;let a=t.name;const i=y(o,a);if(i){let l,c;const d=t.type?de(i._f):u(e),f=e.type===m||e.type===h,v=!((n=i._f).mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate))&&!r.resolver&&!y(s.errors,a)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,y(s.touchedFields,a),s.isSubmitted,x,F),b=z(a,p,f);P(g,a,d),f?i._f.onBlur&&i._f.onBlur(e):i._f.onChange&&i._f.onChange(e);const _=j(a,d,f,!1),V=!O(_)||b;if(!f&&A.watch.next({name:a,type:e.type}),v)return V&&A.state.next({name:a,...b?{}:_});if(!f&&b&&A.state.next({}),w[a]=(w[a],1),A.state.next({isValidating:!0}),r.resolver){const{errors:e}=await L([a]),t=me(s.errors,o,a),r=me(e,o,t.name||a);l=r.error,a=r.name,c=O(e)}else l=(await pe(i,y(g,a),S,r.shouldUseNativeValidation))[a],c=await k(!0);i._f.deps&&ue(i._f.deps),B(!1,a,c,l,_)}var n},ue=async(e,t={})=>{let a,i;const n=C(e);if(A.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await L();if(e)for(const r of e){const e=y(t,r);e?P(s.errors,r,e):W(s.errors,r)}else s.errors=t;return t})(f(e)?e:n);a=O(t),i=e?!n.some((e=>y(t,e))):a}else e?(i=(await Promise.all(n.map((async e=>{const t=y(o,e);return await M(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&k()):i=a=await M(o);return A.state.next({...!N(e)||V.isValid&&a!==s.isValid?{}:{name:e},...r.resolver?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!i&&I(o,(e=>y(s.errors,e)),e?n:p.mount),i},ce=e=>{const t={...l,...v.mount?g:{}};return f(e)?t:N(e)?y(t,e):e.map((e=>y(t,e)))},fe=(e,t)=>({invalid:!!y((t||s).errors,e),isDirty:!!y((t||s).dirtyFields,e),isTouched:!!y((t||s).touchedFields,e),error:y((t||s).errors,e)}),he=(e,t={})=>{for(const a of e?C(e):p.mount)p.mount.delete(a),p.array.delete(a),y(o,a)&&(t.keepValue||(W(o,a),W(g,a)),!t.keepError&&W(s.errors,a),!t.keepDirty&&W(s.dirtyFields,a),!t.keepTouched&&W(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&W(l,a));A.watch.next({}),A.state.next({...s,...t.keepDirty?{isDirty:q()}:{}}),!t.keepIsValid&&k()},ge=(e,t={})=>{let s=y(o,e);const i=Q(t.disabled);return P(o,e,{_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),p.mount.add(e),s?i&&P(g,e,t.disabled?void 0:y(g,e,de(s._f))):E(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:ye(t.min),max:ye(t.max),minLength:ye(t.minLength),maxLength:ye(t.maxLength),pattern:ye(t.pattern)}:{},name:e,onChange:oe,onBlur:oe,ref:i=>{if(i){ge(e,t),s=y(o,e);const r=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>ee(e)||a(e))(r),u=s._f.refs||[];if(n?u.find((e=>e===r)):r===s._f.ref)return;P(o,e,{_f:{...s._f,...n?{refs:[...u.filter(te),r,...Array.isArray(y(l,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),E(e,!1,void 0,r)}else s=y(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(p.array,e)||!v.action)&&p.unMount.add(e)}}};return{control:{register:ge,unregister:he,getFieldState:fe,_executeSchema:L,_getWatch:re,_getDirty:q,_updateValid:k,_removeUnmounted:()=>{for(const e of p.unMount){const t=y(o,e);t&&(t._f.refs?t._f.refs.every((e=>!te(e))):!te(t._f.ref))&&he(e)}p.unMount=new Set},_updateFieldArray:(e,t=[],r,a,i=!0,n=!0)=>{if(a&&r){if(v.action=!0,n&&Array.isArray(y(o,e))){const t=r(y(o,e),a.argA,a.argB);i&&P(o,e,t)}if(V.errors&&n&&Array.isArray(y(s.errors,e))){const t=r(y(s.errors,e),a.argA,a.argB);i&&P(s.errors,e,t),((e,t)=>{!d(y(e,t)).length&&W(e,t)})(s.errors,e)}if(V.touchedFields&&n&&Array.isArray(y(s.touchedFields,e))){const t=r(y(s.touchedFields,e),a.argA,a.argB);i&&P(s.touchedFields,e,t)}V.dirtyFields&&(s.dirtyFields=ae(l,g)),A.state.next({isDirty:q(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else P(g,e,t)},_getFieldArray:t=>d(y(v.mount?g:l,t,e.shouldUnregister?y(l,t,[]):[])),_subjects:A,_proxyFormState:V,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return l},get _names(){return p},set _names(e){p=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:ue,register:ge,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let i=!0,n=R(g);A.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await L();s.errors=e,n=t}else await M(o);O(s.errors)?(A.state.next({errors:{},isSubmitting:!0}),await e(n,a)):(t&&await t({...s.errors},a),r.shouldFocusError&&I(o,(e=>y(s.errors,e)),p.mount))}catch(l){throw i=!1,l}finally{s.isSubmitted=!0,A.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(s.errors)&&i,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>U(e)?A.watch.subscribe({next:r=>e(re(void 0,t),r)}):re(e,t,!0),setValue:ne,getValues:ce,reset:(t,r={})=>{const a=t||l,i=R(a),n=t&&!O(t)?i:l;if(r.keepDefaultValues||(l=a),!r.keepValues){if(r.keepDirtyValues)for(const e of p.mount)y(s.dirtyFields,e)?P(n,e,y(g,e)):ne(e,y(n,e));else{if($&&f(t))for(const e of p.mount){const t=y(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{Y(e)&&e.closest("form").reset();break}catch(u){}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?R(l):{}:i,A.array.next({values:n}),A.watch.next({values:n})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!V.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,A.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||J(t,l)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?ae(l,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{y(o,e)&&(f(t.defaultValue)?ne(e,y(l,e)):(ne(e,t.defaultValue),P(l,e,t.defaultValue)),t.keepTouched||W(s.touchedFields,e),t.keepDirty||(W(s.dirtyFields,e),s.isDirty=t.defaultValue?q(e,y(l,e)):q()),t.keepError||(W(s.errors,e),V.isValid&&k()),A.state.next({...s}))},clearErrors:e=>{e?C(e).forEach((e=>W(s.errors,e))):s.errors={},A.state.next({errors:s.errors})},unregister:he,setError:(e,t,r)=>{const a=(y(o,e,{_f:{}})._f||{}).ref;P(s.errors,e,{...t,ref:a}),A.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=y(o,e)._f,s=r.refs?r.refs[0]:r.ref;t.shouldSelect?s.select():s.focus()},getFieldState:fe}}function we(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={..._e(e),formState:r};const i=t.current.control,n=s.useCallback((e=>{E(e,i._proxyFormState,!0)&&(i._formState={...i._formState,...e},a({...i._formState}))}),[i]);return j({subject:i._subjects.state,callback:n}),s.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),t.current.formState=D(r,i._proxyFormState),t.current}}}]);