import{J as y,K as q,L as b}from"./@vue-B6z9BDXv.js";var s={exports:{}},a={};/**
* vue v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var v;function E(){return v||(v=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var _=b,u=y,n=q;function O(e){var r=Object.create(null);if(e)for(var o in e)r[o]=e[o];return r.default=e,Object.freeze(r)}var h=O(u);const f=Object.create(null);function d(e,r){if(!n.isString(e))if(e.nodeType)e=e.innerHTML;else return n.NOOP;const o=n.genCacheKey(e,r),m=f[o];if(m)return m;if(e[0]==="#"){const i=document.querySelector(e);e=i?i.innerHTML:""}const c=n.extend({hoistStatic:!0,onError:void 0,onWarn:n.NOOP},r);!c.isCustomElement&&typeof customElements<"u"&&(c.isCustomElement=i=>!!customElements.get(i));const{code:j}=_.compile(e,c),l=new Function("Vue",j)(h);return l._rc=!0,f[o]=l}u.registerRuntimeCompiler(d),t.compile=d,Object.keys(u).forEach(function(e){e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=u[e])})}(a)),a}var p;function C(){return p||(p=1,s.exports=E()),s.exports}export{C as r};
//# sourceMappingURL=vue-DOh7rdpL.js.map
