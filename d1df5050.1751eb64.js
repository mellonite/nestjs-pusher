(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(88)),a={id:"event-chunking",title:"Event Chunking"},u={unversionedId:"event-chunking",id:"event-chunking",isDocsHomePage:!1,title:"Event Chunking",description:"Event Chunking",source:"@site/docs/event-chunking.md",slug:"/event-chunking",permalink:"/nestjs-pusher/docs/event-chunking",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/event-chunking.md",version:"current"},c=[{value:"Event Chunking",id:"event-chunking",children:[]},{value:"When should you use it",id:"when-should-you-use-it",children:[]},{value:"How to enable/disable event chunking",id:"how-to-enabledisable-event-chunking",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"event-chunking"},"Event Chunking"),Object(i.b)("p",null,"By default, nestjs-pusher will enable event chunking with 9MB limit (Pusher.js established 10MB as it limit) therefore\nif you want to disable you just need to pass enabled property as false."),Object(i.b)("p",null,"Chunking is a good technique when dealing with large payloads per event so in order\nto avoid exceeding Pusher.js limit we need to start slicing the payload into pieces\nand stream them to the client/consumer."),Object(i.b)("h2",{id:"when-should-you-use-it"},"When should you use it"),Object(i.b)("p",null,"As i mentioned above if you are dealing with large payloads you would eventually\nneed to chunk them but even when you are working with small/medium payloads it is very useful\nbecause allows faster streaming to the client and a little smoother but there might be\nsome caveats depending upon your usage scenario."),Object(i.b)("h2",{id:"how-to-enabledisable-event-chunking"},"How to enable/disable event chunking"),Object(i.b)("p",null,"You have to pass to PusherModule.forRoot parameter the 2nd parameter with enabled set\nto true or false depending on what you are trying to do.\nIf you do set enabled as true, you need to be sure that your limit property does not pass\n10MB or is a negative/zero number."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [PusherModule.forRoot(pusherOptions, {\n    enabled: true,\n    limit: 9000\n  })],\n})\nexport class AppModule {}\n")))}s.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},h=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,b=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return t?o.a.createElement(b,u(u({ref:n},l),{},{components:t})):o.a.createElement(b,u({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=h;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);