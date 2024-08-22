"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[7006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment.",sidebar_position:1},i=void 0,l={unversionedId:"cloud-pak-aiops/netcool-lab/introduction/index",id:"cloud-pak-aiops/netcool-lab/introduction/index",title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment.",source:"@site/labs/cloud-pak-aiops/netcool-lab/1-introduction/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/1-introduction",slug:"/cloud-pak-aiops/netcool-lab/introduction/",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/netcool-lab/introduction/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/cloud-pak-aiops/netcool-lab/1-introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jam-in-a-Box",permalink:"/waiops-tech-jam/labs/jam-in-a-box/"},next:{title:"2. Lab Environment",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/netcool-lab/lab-environment/"}},c={},s=[{value:"Lab Content",id:"lab-content",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Coined by Gartner, AIOps\u2014i.e. artificial intelligence for IT operations\u2014is the application of artificial intelligence (AI) capabilities,\nsuch as natural language processing and machine learning models, to automate and streamline operational workflows.\nThe IBM Cloud Pak for AIOps is an AIOps platform that deploys advanced, explainable AI using the IT Operations\n(ITOps) toolchain data so that you can confidently assess, diagnose, and resolve incidents across mission-critical workloads."),(0,a.kt)("p",null,"IBM Cloud Pak for AIOps eases the path to adopting advanced AI for ITOps to decrease your operational\ncosts. You can increase your customer satisfaction by proactively avoiding incidents and\naccelerating your time to resolution."),(0,a.kt)("p",null,"By integrating multiple separate, manual IT operations tools with into a single, intelligent, and automated IT\noperations platform, AIOps enables IT operations teams to respond more quickly\u2014even proactively\u2014to slowdowns and outages,\nwith end-to-end visibility and context. It bridges the gap between an increasingly diverse, dynamic, and difficult to monitor\nIT landscape and siloed teams, on the one hand, and user expectations for little or no interruption in application performance and availability, on the other. "),(0,a.kt)("h3",{id:"lab-content"},"Lab Content"),(0,a.kt)("p",null,"Welcome to the Netcool + Cloud Pak for AIOps Lab. You will be going through several exercises that will help\nyou learn key skills around how to add advanced AIOps capabilities to an existing Netcool OMNIbus deployment."),(0,a.kt)("p",null,"In this Lab, we will explore the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to consume events from ObjectServers via the AIOps Netcool Connector"),(0,a.kt)("li",{parentName:"ul"},"How to show netcool events custom fields in the AIOps Alert View"),(0,a.kt)("li",{parentName:"ul"},"How to enrich AIOps Alerts leveraging Impact policies."),(0,a.kt)("li",{parentName:"ul"},"== COMPLETE ITEMS  == ")),(0,a.kt)("p",null,"The lab should be executed in the numbered order that you see on the left side of the screen in the navigation pane as each section depend on work completed in prior sections."))}d.isMDXComponent=!0}}]);