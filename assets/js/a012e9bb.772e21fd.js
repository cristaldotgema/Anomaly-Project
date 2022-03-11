"use strict";(self.webpackChunkanomaly_project=self.webpackChunkanomaly_project||[]).push([[5322],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),o=n(9960),i=n(3725),a=n(6010),c="cardContainer_woeA",l="cardContainerLink_iOSj",s="cardTitle_pNjP",u="cardDescription_qC_k",d=n(3919),m=n(5999);function p(e){var t=e.href,n=e.children,i=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&l);return t?r.createElement(o.Z,{href:t,className:i},n):r.createElement("div",{className:i},n)}function f(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:o},n," ",o),r.createElement("div",{className:(0,a.Z)("text--truncate",u),title:i},i))}function g(e){var t=e.item,n=(0,i.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function y(e){var t,n=e.item,o=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:o,title:n.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(h,{item:e}))})))}},6283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(5360),c=n(3725),l=["components"],s={sidebar_position:1,title:"Lore - Setting",description:"The world and setting, and what's going on.",slug:"/anomaly-rising-lore/lore-setting"},u="Lore: Setting",d={unversionedId:"anomaly-rising-lore/Lore - Setting/index",id:"anomaly-rising-lore/Lore - Setting/index",title:"Lore - Setting",description:"The world and setting, and what's going on.",source:"@site/docs/anomaly-rising-lore/Lore - Setting/index.md",sourceDirName:"anomaly-rising-lore/Lore - Setting",slug:"/anomaly-rising-lore/lore-setting",permalink:"/docs/anomaly-rising-lore/lore-setting",editUrl:"https://github.com/cristaldotgema/Anomaly-Project/docs/anomaly-rising-lore/Lore - Setting/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Lore - Setting",description:"The world and setting, and what's going on.",slug:"/anomaly-rising-lore/lore-setting"},sidebar:"tutorialSidebar",previous:{title:"Spells & Practices",permalink:"/docs/anomaly-rising-lore/lore-anomalies-and-magic/magical-energy/where-to-find-energy"},next:{title:"Country - South Wakane",permalink:"/docs/anomaly-rising-lore/lore-setting/outside-paradiso/country-south-wakane"}},m={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lore-setting"},"Lore: Setting"),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"paradiso"},"Paradiso"),(0,i.kt)("p",{parentName:"blockquote"},"The main power-hungry colonial power.")),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"wakane"},"Wakane"),(0,i.kt)("p",{parentName:"blockquote"},"The main setting of the story, a colonized country.")),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"outside-paradiso"},"Outside Paradiso"),(0,i.kt)("p",{parentName:"blockquote"},"Everywhere else and what's up.")))}g.isMDXComponent=!0}}]);