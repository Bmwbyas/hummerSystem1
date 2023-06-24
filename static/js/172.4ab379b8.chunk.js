"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[172],{67575:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),a=n(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=n(8711),c=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="CheckOutlined";var s=a.forwardRef(c)},29529:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),a=n(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},i=n(8711),c=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="UserOutlined";var s=a.forwardRef(c)},77268:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(29439),a=n(75179),o=n(72791),i=n(71929),c=n(54745);function s(e,t,n){return function(s){var l=s.prefixCls,u=s.style,d=o.useRef(null),f=o.useState(0),p=(0,r.Z)(f,2),m=p[0],g=p[1],v=o.useState(0),y=(0,r.Z)(v,2),h=y[0],b=y[1],O=(0,a.Z)(!1,{value:s.open}),S=(0,r.Z)(O,2),C=S[0],x=S[1],E=(0,o.useContext(i.E_).getPrefixCls)(t||"select",l);return o.useEffect((function(){if(x(!0),"undefined"!==typeof ResizeObserver){var e=new ResizeObserver((function(e){var t=e[0].target;g(t.offsetHeight+8),b(t.offsetWidth)})),t=setInterval((function(){var r,a=n?".".concat(n(E)):".".concat(E,"-dropdown"),o=null===(r=d.current)||void 0===r?void 0:r.querySelector(a);o&&(clearInterval(t),e.observe(o))}),10);return function(){clearInterval(t),e.disconnect()}}}),[]),o.createElement(c.ZP,{theme:{token:{motionDurationFast:"0.01s",motionDurationMid:"0.01s",motionDurationSlow:"0.01s"}}},o.createElement("div",{ref:d,style:{paddingBottom:m,position:"relative",width:"fit-content",minWidth:h}},o.createElement(e,Object.assign({},s,{style:Object.assign(Object.assign({},u),{margin:0}),open:C,visible:C,getPopupContainer:function(){return d.current}}))))}}},19581:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(29439),a=n(72791);function o(){var e=a.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},2962:function(e,t,n){n.d(t,{C:function(){return U}});var r=n(4942),a=n(29439),o=n(81694),i=n.n(o),c=n(88829),s=n(88834),l=n(72791),u=n(71929),d=n(52832),f=n(70635),p=l.createContext("default"),m=function(e){var t=e.children,n=e.size,r=l.useContext(p);return l.createElement(p.Provider,{value:n||r},t)},g=p,v=n(55564),y=n(89922),h=n(67521),b=function(e){var t,n,a=e.antCls,o=e.componentCls,i=e.iconCls,c=e.avatarBg,s=e.avatarColor,l=e.avatarSizeBase,u=e.avatarSizeLG,d=e.avatarSizeSM,f=e.avatarFontSizeBase,p=e.avatarFontSizeLG,m=e.avatarFontSizeSM,g=e.borderRadius,v=e.borderRadiusLG,y=e.borderRadiusSM,b=e.lineWidth,O=e.lineType,S=function(e,t,n){var a;return a={width:e,height:e,lineHeight:"".concat(e-2*b,"px"),borderRadius:"50%"},(0,r.Z)(a,"&".concat(o,"-square"),{borderRadius:n}),(0,r.Z)(a,"".concat(o,"-string"),{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"}),(0,r.Z)(a,"&".concat(o,"-icon"),(0,r.Z)({fontSize:t},"> ".concat(i),{margin:0})),a};return(0,r.Z)({},o,Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(e)),(t={position:"relative",display:"inline-block",overflow:"hidden",color:s,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:c,border:"".concat(b,"px ").concat(O," transparent")},(0,r.Z)(t,"&-image",{background:"transparent"}),(0,r.Z)(t,"".concat(a,"-image-img"),{display:"block"}),t)),S(l,f,g)),(n={},(0,r.Z)(n,"&-lg",Object.assign({},S(u,p,v))),(0,r.Z)(n,"&-sm",Object.assign({},S(d,m,y))),(0,r.Z)(n,"> img",{display:"block",width:"100%",height:"100%",objectFit:"cover"}),n)))},O=function(e){var t,n=e.componentCls,a=e.avatarGroupBorderColor,o=e.avatarGroupSpace;return(0,r.Z)({},"".concat(n,"-group"),(t={display:"inline-flex"},(0,r.Z)(t,"".concat(n),{borderColor:a}),(0,r.Z)(t,"> *:not(:first-child)",{marginInlineStart:o}),t))},S=(0,v.Z)("Avatar",(function(e){var t=e.colorTextLightSolid,n=e.controlHeight,r=e.controlHeightLG,a=e.controlHeightSM,o=e.fontSize,i=e.fontSizeLG,c=e.fontSizeXL,s=e.fontSizeHeading3,l=e.marginXS,u=e.colorBorderBg,d=e.colorTextPlaceholder,f=(0,y.TS)(e,{avatarBg:d,avatarColor:t,avatarSizeBase:n,avatarSizeLG:r,avatarSizeSM:a,avatarFontSizeBase:Math.round((i+c)/2),avatarFontSizeLG:s,avatarFontSizeSM:o,avatarGroupSpace:-l,avatarGroupBorderColor:u});return[b(f),O(f)]})),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=function(e,t){var n,o,p=l.useContext(g),m=l.useState(1),v=(0,a.Z)(m,2),y=v[0],h=v[1],b=l.useState(!1),O=(0,a.Z)(b,2),x=O[0],E=O[1],Z=l.useState(!0),w=(0,a.Z)(Z,2),k=w[0],z=w[1],P=l.useRef(null),j=l.useRef(null),M=(0,s.sQ)(t,P),N=l.useContext(u.E_).getPrefixCls,D=function(){if(j.current&&P.current){var t=j.current.offsetWidth,n=P.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&h(n-2*a<t?(n-2*a)/t:1)}}};l.useEffect((function(){E(!0)}),[]),l.useEffect((function(){z(!0),h(1)}),[e.src]),l.useEffect((function(){D()}),[e.gap]);var L,T=e.prefixCls,B=e.shape,R=void 0===B?"circle":B,I=e.size,F=void 0===I?"default":I,W=e.src,G=e.srcSet,H=e.icon,K=e.className,_=e.rootClassName,A=e.alt,U=e.draggable,q=e.children,V=e.crossOrigin,X=C(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),Q="default"===F?p:F,Y=Object.keys("object"===typeof Q&&Q||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),J=(0,d.Z)(Y),$=l.useMemo((function(){if("object"!==typeof Q)return{};var e=f.c.find((function(e){return J[e]})),t=Q[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:H?t/2:18}:{}}),[J,Q]),ee=N("avatar",T),te=S(ee),ne=(0,a.Z)(te,2),re=ne[0],ae=ne[1],oe=i()((n={},(0,r.Z)(n,"".concat(ee,"-lg"),"large"===Q),(0,r.Z)(n,"".concat(ee,"-sm"),"small"===Q),n)),ie=l.isValidElement(W),ce=i()(ee,oe,(o={},(0,r.Z)(o,"".concat(ee,"-").concat(R),!!R),(0,r.Z)(o,"".concat(ee,"-image"),ie||W&&k),(0,r.Z)(o,"".concat(ee,"-icon"),!!H),o),K,_,ae),se="number"===typeof Q?{width:Q,height:Q,lineHeight:"".concat(Q,"px"),fontSize:H?Q/2:18}:{};if("string"===typeof W&&k)L=l.createElement("img",{src:W,draggable:U,srcSet:G,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:A,crossOrigin:V});else if(ie)L=W;else if(H)L=H;else if(x||1!==y){var le="scale(".concat(y,") translateX(-50%)"),ue={msTransform:le,WebkitTransform:le,transform:le},de="number"===typeof Q?{lineHeight:"".concat(Q,"px")}:{};L=l.createElement(c.Z,{onResize:D},l.createElement("span",{className:"".concat(ee,"-string"),ref:j,style:Object.assign(Object.assign({},de),ue)},q))}else L=l.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:j},q);return delete X.onError,delete X.gap,re(l.createElement("span",Object.assign({},X,{style:Object.assign(Object.assign(Object.assign({},se),$),X.style),className:ce,ref:M}),L))};var E=l.forwardRef(x),Z=n(85501),w=n(71810),k=function(e){return e?"function"===typeof e?e():e:null},z=n(29464),P=n(56904),j=n(10278),M=n(58686),N=n(8876),D=function(e){var t,n=e.componentCls,a=e.popoverBg,o=e.popoverColor,i=e.width,c=e.fontWeightStrong,s=e.popoverPadding,l=e.boxShadowSecondary,u=e.colorTextHeading,d=e.borderRadiusLG,f=e.zIndexPopup,p=e.marginXS,m=e.colorBgElevated;return[(0,r.Z)({},n,Object.assign(Object.assign({},(0,h.Wf)(e)),(t={position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":m,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"}},(0,r.Z)(t,"".concat(n,"-content"),{position:"relative"}),(0,r.Z)(t,"".concat(n,"-inner"),{backgroundColor:a,backgroundClip:"padding-box",borderRadius:d,boxShadow:l,padding:s}),(0,r.Z)(t,"".concat(n,"-title"),{minWidth:i,marginBottom:p,color:u,fontWeight:c}),(0,r.Z)(t,"".concat(n,"-inner-content"),{color:o}),t))),(0,M.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),(0,r.Z)({},"".concat(n,"-pure"),(0,r.Z)({position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"},"".concat(n,"-content"),{display:"inline-block"}))]},L=function(e){var t=e.componentCls;return(0,r.Z)({},t,N.i.map((function(n){var a,o=e["".concat(n,"6")];return(0,r.Z)({},"&".concat(t,"-").concat(n),(a={"--antd-arrow-background-color":o},(0,r.Z)(a,"".concat(t,"-inner"),{backgroundColor:o}),(0,r.Z)(a,"".concat(t,"-arrow"),{background:"transparent"}),a))})))},T=function(e){var t,n=e.componentCls,a=e.lineWidth,o=e.lineType,i=e.colorSplit,c=e.paddingSM,s=e.controlHeight,l=e.fontSize,u=e.lineHeight,d=e.padding,f=s-Math.round(l*u),p=f/2,m=f/2-a,g=d;return(0,r.Z)({},n,(t={},(0,r.Z)(t,"".concat(n,"-inner"),{padding:0}),(0,r.Z)(t,"".concat(n,"-title"),{margin:0,padding:"".concat(p,"px ").concat(g,"px ").concat(m,"px"),borderBottom:"".concat(a,"px ").concat(o," ").concat(i)}),(0,r.Z)(t,"".concat(n,"-inner-content"),{padding:"".concat(c,"px ").concat(g,"px")}),t))},B=(0,v.Z)("Popover",(function(e){var t=e.colorBgElevated,n=e.colorText,r=e.wireframe,a=(0,y.TS)(e,{popoverBg:t,popoverColor:n,popoverPadding:12});return[D(a),L(a),r&&T(a),(0,j._y)(a,"zoom-big")]}),(function(e){return{zIndexPopup:e.zIndexPopupBase+30,width:177}})),R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function I(e){var t=e.hashId,n=e.prefixCls,r=e.className,a=e.style,o=e.placement,c=void 0===o?"top":o,s=e.title,u=e.content,d=e.children;return l.createElement("div",{className:i()(t,n,"".concat(n,"-pure"),"".concat(n,"-placement-").concat(c),r),style:a},l.createElement("div",{className:"".concat(n,"-arrow")}),l.createElement(P.G,Object.assign({},e,{className:t,prefixCls:n}),d||function(e,t,n){if(t||n)return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:"".concat(e,"-title")},k(t)),l.createElement("div",{className:"".concat(e,"-inner-content")},k(n)))}(n,s,u)))}var F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},W=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?l.createElement(l.Fragment,null,t&&l.createElement("div",{className:"".concat(r,"-title")},k(t)),l.createElement("div",{className:"".concat(r,"-inner-content")},k(n))):null},G=l.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,o=e.content,c=e.overlayClassName,s=e.placement,d=void 0===s?"top":s,f=e.trigger,p=void 0===f?"hover":f,m=e.mouseEnterDelay,g=void 0===m?.1:m,v=e.mouseLeaveDelay,y=void 0===v?.1:v,h=e.overlayStyle,b=void 0===h?{}:h,O=F(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),S=l.useContext(u.E_).getPrefixCls,C=S("popover",n),x=B(C),E=(0,a.Z)(x,2),Z=E[0],k=E[1],P=S(),j=i()(c,k);return Z(l.createElement(w.Z,Object.assign({placement:d,trigger:p,mouseEnterDelay:g,mouseLeaveDelay:y,overlayStyle:b},O,{prefixCls:C,overlayClassName:j,ref:t,overlay:l.createElement(W,{prefixCls:C,title:r,content:o}),transitionName:(0,z.mL)(P,"zoom-big",O.transitionName),"data-popover-inject":!0})))}));G._InternalPanelDoNotUseOrYouWillBeFired=function(e){var t=e.prefixCls,n=R(e,["prefixCls"]),r=(0,l.useContext(u.E_).getPrefixCls)("popover",t),o=B(r),i=(0,a.Z)(o,2),c=i[0],s=i[1];return c(l.createElement(I,Object.assign({},n,{prefixCls:r,hashId:s})))};var H=G,K=n(61113),_=function(e){var t=l.useContext(u.E_),n=t.getPrefixCls,o=t.direction,c=e.prefixCls,s=e.className,d=e.rootClassName,f=e.maxCount,p=e.maxStyle,g=e.size,v=n("avatar",c),y="".concat(v,"-group"),h=S(v),b=(0,a.Z)(h,2),O=b[0],C=b[1],x=i()(y,(0,r.Z)({},"".concat(y,"-rtl"),"rtl"===o),s,d,C),w=e.children,k=e.maxPopoverPlacement,z=void 0===k?"top":k,P=e.maxPopoverTrigger,j=void 0===P?"hover":P,M=(0,Z.Z)(w).map((function(e,t){return(0,K.Tm)(e,{key:"avatar-key-".concat(t)})})),N=M.length;if(f&&f<N){var D=M.slice(0,f),L=M.slice(f,N);return D.push(l.createElement(H,{key:"avatar-popover-key",content:L,trigger:j,placement:z,overlayClassName:"".concat(y,"-popover")},l.createElement(E,{style:p},"+".concat(N-f)))),O(l.createElement(m,{size:g},l.createElement("div",{className:x,style:e.style},D)))}return O(l.createElement(m,{size:g},l.createElement("div",{className:x,style:e.style},M)))},A=E;A.Group=_;var U=A},52832:function(e,t,n){var r=n(72791),a=n(19581),o=n(70635);t.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,r.useRef)({}),n=(0,a.Z)(),i=(0,o.Z)();return(0,r.useEffect)((function(){var r=i.subscribe((function(r){t.current=r,e&&n()}));return function(){return i.unsubscribe(r)}}),[]),t.current}},25390:function(e,t,n){n.d(t,{Fm:function(){return p}});var r=n(4942),a=n(67134),o=n(18303),i=new a.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),c=new a.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),s=new a.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),l=new a.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),u=new a.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new a.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),f={"move-up":{inKeyframes:new a.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),outKeyframes:new a.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}})},"move-down":{inKeyframes:i,outKeyframes:c},"move-left":{inKeyframes:s,outKeyframes:l},"move-right":{inKeyframes:u,outKeyframes:d}},p=function(e,t){var n,a=e.antCls,i="".concat(a,"-").concat(t),c=f[t],s=c.inKeyframes,l=c.outKeyframes;return[(0,o.R)(i,s,l,e.motionDurationMid),(n={},(0,r.Z)(n,"\n        ".concat(i,"-enter,\n        ").concat(i,"-appear\n      "),{opacity:0,animationTimingFunction:e.motionEaseOutCirc}),(0,r.Z)(n,"".concat(i,"-leave"),{animationTimingFunction:e.motionEaseInOutCirc}),n)]}},54170:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function c(e,t){return 0===e.indexOf(t)}function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,r.Z)({},n);var s={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||c(n,o))||t.data&&c(n,i)||t.attr&&a.includes(n))&&(s[n]=e[n])})),s}}}]);
//# sourceMappingURL=172.4ab379b8.chunk.js.map