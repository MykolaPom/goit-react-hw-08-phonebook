"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[410],{410:function(n,t,e){e.r(t),e.d(t,{default:function(){return nt}});var r,o=e(168),a=e(4934),i=a.Z.div(r||(r=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 24px;\n  color: #010101;\n"]))),s=e(184),c=function(n){var t=n.children;return(0,s.jsx)(i,{children:t})},u=e(2791),l=e(9434),d=e(5861),p=e(9439),f=e(4687),m=e.n(f),h=e(8427),g=e(3433),b=e(1413),v=e(4942),x={data:""},y=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||x},Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,k=/\n+/g,j=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},C={},E=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},z=function(n,t,e,r,o){var a=E(n),i=C[a]||(C[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!C[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=Z.exec(n.replace(w,""));)t[4]?r.shift():t[3]?(e=t[3].replace(k," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(k," ").trim();return r[0]}(n);C[i]=j(o?(0,v.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&C.g?C.g:null;return e&&(C.g=C[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(C[i],t,r,c),i},N=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":j(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function A(n){var t=this||{},e=n.call?n(t.p):n;return z(e.unshift?e.raw?N(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,y(t.target),t.g,t.o,t.k)}A.bind({g:1});var D,O,I,P,_,T,F,L,M,S,H,q,B,K,U,$,G,J,R,Y=A.bind({k:1});function Q(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:O&&O()},s),e.o=/ *go\d+/.test(c),s.className=A.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),I&&u[0]&&I(s),D(u,s)}return t?t(o):o}}var V=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},W=function(){var n=0;return function(){return(++n).toString()}}(),X=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),nn=new Map,tn=function(n){if(!nn.has(n)){var t=setTimeout((function(){nn.delete(n),an({type:4,toastId:n})}),1e3);nn.set(n,t)}},en=function n(t,e){switch(e.type){case 0:return(0,b.Z)((0,b.Z)({},t),{},{toasts:[e.toast].concat((0,g.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=nn.get(n);t&&clearTimeout(t)}(e.toast.id),(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,b.Z)((0,b.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?tn(o):t.toasts.forEach((function(n){tn(n.id)})),(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?(0,b.Z)((0,b.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,b.Z)((0,b.Z)({},t),{},{toasts:[]}):(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,b.Z)((0,b.Z)({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return(0,b.Z)((0,b.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,b.Z)((0,b.Z)({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},rn=[],on={toasts:[],pausedAt:void 0},an=function(n){on=en(on,n),rn.forEach((function(n){n(on)}))},sn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},cn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,b.Z)((0,b.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||W()})}(t,n,e);return an({type:2,toast:r}),r.id}},un=function(n,t){return cn("blank")(n,t)};un.error=cn("error"),un.success=cn("success"),un.loading=cn("loading"),un.custom=cn("custom"),un.dismiss=function(n){an({type:3,toastId:n})},un.remove=function(n){return an({type:4,toastId:n})},un.promise=function(n,t,e){var r=un.loading(t.loading,(0,b.Z)((0,b.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return un.success(V(t.success,n),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){un.error(V(t.error,n),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.error))})),n};var ln=function(n,t){an({type:1,toast:{id:n,height:t}})},dn=function(){an({type:5,time:Date.now()})},pn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useState)(on),e=(0,p.Z)(t,2),r=e[0],o=e[1];(0,u.useEffect)((function(){return rn.push(o),function(){var n=rn.indexOf(o);n>-1&&rn.splice(n,1)}}),[r]);var a=r.toasts.map((function(t){var e,r;return(0,b.Z)((0,b.Z)((0,b.Z)((0,b.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||sn[t.type],style:(0,b.Z)((0,b.Z)((0,b.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,b.Z)((0,b.Z)({},r),{},{toasts:a})}(n),e=t.toasts,r=t.pausedAt;(0,u.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return un.dismiss(t.id)}),e);t.visible&&un.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,u.useCallback)((function(){r&&an({type:6,time:Date.now()})}),[r]),a=(0,u.useCallback)((function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,l=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),d=l.findIndex((function(t){return t.id===n.id})),p=l.filter((function(n,t){return t<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,g.Z)(i?[p+1]:[0,p])).reduce((function(n,t){return n+(t.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:ln,startPause:dn,endPause:o,calculateOffset:a}}},fn=Y(P||(P=(0,o.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),mn=Y(_||(_=(0,o.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),hn=Y(T||(T=(0,o.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),gn=Q("div")(F||(F=(0,o.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),fn,mn,(function(n){return n.secondary||"#fff"}),hn),bn=Y(L||(L=(0,o.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),vn=Q("div")(M||(M=(0,o.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),bn),xn=Y(S||(S=(0,o.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),yn=Y(H||(H=(0,o.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),Zn=Q("div")(q||(q=(0,o.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),xn,yn,(function(n){return n.secondary||"#fff"})),wn=Q("div")(B||(B=(0,o.Z)(["\n  position: absolute;\n"]))),kn=Q("div")(K||(K=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),jn=Y(U||(U=(0,o.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Cn=Q("div")($||($=(0,o.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),jn),En=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?u.createElement(Cn,null,e):e:"blank"===r?null:u.createElement(kn,null,u.createElement(vn,(0,b.Z)({},o)),"loading"!==r&&u.createElement(wn,null,"error"===r?u.createElement(gn,(0,b.Z)({},o)):u.createElement(Zn,(0,b.Z)({},o))))},zn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Nn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},An=Q("div")(G||(G=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Dn=Q("div")(J||(J=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),On=u.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,a=t.height?function(n,t){var e=n.includes("top")?1:-1,r=X()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[zn(e),Nn(e)],o=(0,p.Z)(r,2),a=o[0],i=o[1];return{animation:t?"".concat(Y(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(Y(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},i=u.createElement(En,{toast:t}),s=u.createElement(Dn,(0,b.Z)({},t.ariaProps),V(t.message,t));return u.createElement(An,{className:t.className,style:(0,b.Z)((0,b.Z)((0,b.Z)({},a),r),t.style)},"function"==typeof o?o({icon:i,message:s}):u.createElement(u.Fragment,null,i,s))}));!function(n,t,e,r){j.p=t,D=n,O=e,I=r}(u.createElement);var In,Pn,_n,Tn,Fn,Ln,Mn,Sn=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,a=n.children,i=u.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return u.createElement("div",{ref:i,className:e,style:r},a)},Hn=A(R||(R=(0,o.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),qn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,a=n.gutter,i=n.children,s=n.containerStyle,c=n.containerClassName,l=pn(o),d=l.toasts,p=l.handlers;return u.createElement("div",{style:(0,b.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,b.Z)((0,b.Z)({left:0,right:0,display:"flex",position:"absolute",transition:X()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return u.createElement(Sn,{id:n.id,key:n.id,onHeightUpdate:p.updateHeight,className:n.visible?Hn:"",style:o},"custom"===n.type?V(n.message,n):i?i(n):u.createElement(On,{toast:n,position:e}))})))},Bn=un,Kn=a.Z.form(In||(In=(0,o.Z)(["\n  padding: 15px 10px;\n  width: 500px;\n  border: 5px solid black;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n"]))),Un=a.Z.input(Pn||(Pn=(0,o.Z)(["\n  width: 50%;\n  height: 30px;\n  font-size: 24px;\n"]))),$n=a.Z.p(_n||(_n=(0,o.Z)(["\nmargin-top: 10px;\nmargin-bottom: 10px;\nfont-size: 24px;\n"]))),Gn=a.Z.button(Tn||(Tn=(0,o.Z)(["\n  margin-top: 10px;\n  display: block;\n  padding: 10px 15px;\n  width: 30%;\n  font-size: 16px;\n  background-color: black;\n  color: white;\n  border: 2px solid black;\n  border-radius: 7px;\n  cursor: pointer;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover {\n    color: black;\n    background-color: white;\n  }\n"]))),Jn=function(){var n=(0,u.useState)(""),t=(0,p.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(""),a=(0,p.Z)(o,2),i=a[0],c=a[1],f=(0,l.I0)(),g=(0,l.v9)((function(n){return n.contacts.items})),b=(0,l.v9)((function(n){return n.contacts.isLoading})),v=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":c(n.currentTarget.value);break;default:return}},x=function(){var n=(0,d.Z)(m().mark((function n(t){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(g.filter((function(n){return n.name===t.name})).length>0)){n.next=3;break}return Bn.error("".concat(e," is already exists")),n.abrupt("return");case 3:try{f((0,h.uK)(t)),Bn.success("Contact has been added successfully")}catch(r){}case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,d.Z)(m().mark((function n(t){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),x({name:e,number:i}),r(""),c("");case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,s.jsxs)(Kn,{onSubmit:y,children:[(0,s.jsxs)("label",{title:"Name",children:[(0,s.jsx)($n,{children:"Name"}),(0,s.jsx)(Un,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",onChange:v,value:e})]}),(0,s.jsxs)("label",{title:"Number",children:[(0,s.jsx)($n,{children:"Number"}),(0,s.jsx)(Un,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"123-45-67",onChange:v,value:i})]}),(0,s.jsx)(Gn,{type:"submit",disabled:b,children:"Add contact"}),(0,s.jsx)(qn,{position:"top-right"})]})},Rn=a.Z.div(Fn||(Fn=(0,o.Z)(["\n  & p {\n    margin-bottom: 5px;\n  }\n  & ul {\n    margin-top: 10px;\n  }\n  & li {\n    font-size: 22px;\n  }\n"]))),Yn=a.Z.input(Ln||(Ln=(0,o.Z)(["\n  width: 50%;\n  height: 30px;\n  font-size: 24px;\n"]))),Qn=(0,e(6382).oM)({name:"filter",initialState:"",reducers:{filterContacts:function(n,t){return t.payload}}}).actions.filterContacts,Vn=a.Z.button(Mn||(Mn=(0,o.Z)(["\n  margin-top: 10px;\n  margin-left: 10px;\n  padding: 5px 10px;\n  font-size: 16px;\n  background-color: black;\n  color: white;\n  border: 2px solid black;\n  border-radius: 7px;\n  cursor: pointer;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover {\n    color: black;\n    background-color: white;\n  }\n"]))),Wn=function(n){var t=n.id,e=(0,l.I0)(),r=(0,l.v9)((function(n){return n.contacts.isLoading}));return(0,s.jsx)(Vn,{type:"button",name:"Delete",id:t,onClick:function(){return e((0,h.GK)(t))},disabled:r,children:r?"Deleting...":"Delete"})},Xn=function(){var n=(0,l.v9)((function(n){return n.contacts.items})).data,t=(0,l.v9)((function(n){return n.filter})),e=t.toLowerCase(),r=n.filter((function(n){return n.name.toLowerCase().includes(e)})),o=(0,l.I0)();return(0,s.jsxs)(Rn,{children:[(0,s.jsx)("label",{title:"Find contacts by name",children:(0,s.jsx)(Yn,{type:"text",name:"filter",placeholder:"Find contact",onChange:function(n){o(Qn(n.currentTarget.value))},value:t})}),(0,s.jsx)("ul",{children:r.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("span",{children:[n.name,": ",n.number]}),(0,s.jsx)(Wn,{id:n.id})]},n.id)}))})]})};function nt(){var n=(0,l.v9)((function(n){return n.contacts.items})),t=(0,l.I0)();return(0,u.useEffect)((function(){t((0,h.yF)())}),[t]),(0,s.jsxs)(c,{title:"Phonebook",children:[(0,s.jsx)("h1",{children:"Phonebook"}),(0,s.jsx)(Jn,{}),(0,s.jsx)("h2",{children:"Contacts"}),n.length>0?(0,s.jsx)(Xn,{name:"Contacts"}):(0,s.jsx)("p",{children:"Phonebook is empty"})]})}}}]);
//# sourceMappingURL=410.fc44f882.chunk.js.map