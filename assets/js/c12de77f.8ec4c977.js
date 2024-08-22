"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[1253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const o={status:"status_wO4R",table:"table_BTcp",header:"header_f3_u",data:"data_R24y",badge:"badge_ZJra",badgeOperational:"badgeOperational_HLAJ badge_ZJra",badgeLimited:"badgeLimited_ZTbn badge_ZJra",badgeCritical:"badgeCritical_fwtW badge_ZJra",errorMessage:"errorMessage_ATW_",loading:"loading_ZfdE errorMessage_ATW_",legend:"legend_vFNn"};function r(){const[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.status.io/1.0/status/5ccca60e07680b4ae9900d24");if(!e.ok)throw new Error("Network response was not ok");const n=await e.json(),a=n?.result?.status?.filter((e=>"VMWare Infrastructure"===e.name));if(!a)throw new Error("VMWare Infrastructure not found");const o={AP:[],EMEA:[],AMERICAS:[]};a[0].containers.forEach((e=>{e.name.includes("EU")?o.EMEA.push(e):e.name.includes("AP")?o.AP.push(e):o.AMERICAS.push(e)})),t(o)}catch(e){r(e.message)}})()}),[]),a.createElement("div",{className:o.status},e?a.createElement(a.Fragment,null,a.createElement("div",{className:o.table},a.createElement("div",{className:o.header},"Americas"),a.createElement("div",{className:o.header},"Europe"),a.createElement("div",{className:o.header},"AP"),a.createElement("div",{className:o.data},e.AMERICAS.map((e=>a.createElement("span",{key:e.name,className:"Operational"===e.status?o.badgeOperational:"Limited Capacity"===e.status?o.badgeLimited:o.badgeCritical},e.name)))),a.createElement("div",{className:o.data},e.EMEA.map((e=>a.createElement("span",{key:e.name,className:"Operational"===e.status?o.badgeOperational:"Limited Capacity"===e.status?o.badgeLimited:o.badgeCritical},e.name)))),a.createElement("div",{className:o.data},e.AP.map((e=>a.createElement("span",{key:e.name,className:"Operational"===e.status?o.badgeOperational:"Limited Capacity"===e.status?o.badgeLimited:o.badgeCritical},e.name))))),a.createElement("div",{style:{paddingTop:"16px",justifyContent:"end",display:"flex",gap:"8px"}},a.createElement("span",{className:`${o.badgeOperational} ${o.legend}`},"High Capacity"),a.createElement("span",{className:`${o.badgeLimited} ${o.legend}`},"Moderate Capacity"),a.createElement("span",{className:`${o.badgeCritical} ${o.legend}`},"Low Capacity"))):n?a.createElement("div",{className:o.errorMessage},a.createElement("span",null,"There is currently an issue with the Tech Zone status page. To manually view the status, please visit"," ",a.createElement("a",{href:"https://techzone.status.io",target:"_blank"},"techzone.status.io"))):a.createElement("div",{className:o.loading},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{animation:"spin 2s linear infinite"}},a.createElement("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}))))}},47:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(15);const i={title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},s=void 0,l={unversionedId:"cloud-pak-aiops/alert-lab/lab-environment/index",id:"cloud-pak-aiops/alert-lab/lab-environment/index",title:"2. Lab Environment",description:"Lab Environment",source:"@site/labs/cloud-pak-aiops/alert-lab/2-lab-environment/index.md",sourceDirName:"cloud-pak-aiops/alert-lab/2-lab-environment",slug:"/cloud-pak-aiops/alert-lab/lab-environment/",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/cloud-pak-aiops/alert-lab/2-lab-environment/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/introduction/"},next:{title:"3. Event and Alert Terminology",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/alert-concepts/"}},c={},p=[{value:"2.1: Prerequisites",id:"21-prerequisites",level:2},{value:"Obtain your Entitlement key",id:"obtain-your-entitlement-key",level:3},{value:"2.2: Requesting a Lab Environment",id:"22-requesting-a-lab-environment",level:2},{value:"2.3: Accessing your Lab Environment",id:"23-accessing-your-lab-environment",level:2},{value:"2.4: Running &#39;oc&#39; Commands to Connect to the Cluster",id:"24-running-oc-commands-to-connect-to-the-cluster",level:2},{value:"2.5: Log in to the Cloud Pak for AIOps console",id:"25-log-in-to-the-cloud-pak-for-aiops-console",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this Lab, you will have access to one OpenShift cluster via a bastion virtual\nmachine that has installed Red Hat Enterprise Linux (RHEL). Note that inside\nOpenShift, the cluster has installed the Cloud Pak for AIOps. It also has\ninstalled the Red Hat OpenShift Data Foundation (ODF) which is a\nsoftware-defined, container-native storage solution that provides storage\nclasses that will be used by the Cloud Pak for AIOps to dynamically request\nstorage."),(0,o.kt)("p",null,"The following diagram describes the infrastructure for the Lab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(742).Z,width:"1368",height:"566"})),(0,o.kt)("h2",{id:"21-prerequisites"},"2.1: Prerequisites"),(0,o.kt)("h3",{id:"obtain-your-entitlement-key"},"Obtain your Entitlement key"),(0,o.kt)("p",null,"You will need an IBM ID to request an entitlement key. You can create an IBM ID\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776"},"here"),"."),(0,o.kt)("p",null,"To complete this lab you will need an entitlement key. Navigate to\n",(0,o.kt)("a",{parentName:"p",href:"https://myibm.ibm.com/products-services/containerlibrary"},(0,o.kt)("strong",{parentName:"a"},"this link"))," to\nobtain your ",(0,o.kt)("strong",{parentName:"p"},"entitlement key")," that is assigned to your IBM ID which will grant\nyou access to the IBM Entitled Registry. Copy this into a text editor as we will\nneed it later in the Lab."),(0,o.kt)("p",null,"You can check your entitlement for the Cloud Pak for AIOPs by clicking ",(0,o.kt)("strong",{parentName:"p"},"View\nLibrary")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6537).Z,width:"1451",height:"400"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If your entitlement key is not valid for the Cloud Pak for AIOPs, you can\nregister for a 60 day trial using the following link:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/account/reg/us-en/login?formid=urx-51074"},"Request trial"),".")),(0,o.kt)("h2",{id:"22-requesting-a-lab-environment"},"2.2: Requesting a Lab Environment"),(0,o.kt)("p",null,"Below is a live chart showing Tech Zone capacity in each available region. When\nrequesting your environment it would be wise to select the region that has the\nmost capacity available."),(0,o.kt)(r.Z,{mdxType:"TechZoneStatus"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Follow\n",(0,o.kt)("a",{parentName:"p",href:"/waiops-tech-jam/labs/jam-in-a-box/#requesting-a-lab-environment"},"these instructions"),"\nfor step by step guidance on requesting a new lab environment in IBM Tech Zone.")),(0,o.kt)("p",null,"Request Tech Zone environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://techzone.ibm.com/my/reservations/create/64c2a0166c515100179d63e2"},"Jam-in-a-Box: CP4WAIOps - Explore"))),(0,o.kt)("h2",{id:"23-accessing-your-lab-environment"},"2.3: Accessing your Lab Environment"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Once you have received an eMail confirming that your environment is ready,\nfollow\n",(0,o.kt)("a",{parentName:"p",href:"/waiops-tech-jam/labs/jam-in-a-box/#accessing-a-lab-environment"},"these instructions"),"\nfor step by step guidance on accessing your lab environment in IBM Tech Zone.")),(0,o.kt)("h2",{id:"24-running-oc-commands-to-connect-to-the-cluster"},"2.4: Running 'oc' Commands to Connect to the Cluster"),(0,o.kt)("p",null,"In the previous section, we described how to access the bastion VM. Now we will\nconnect to the OpenShift cluster using the OpenShift CLI (oc commands)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From the bastion VM desktop, open a ",(0,o.kt)("strong",{parentName:"li"},"Terminal")," window (you may need to click\non ",(0,o.kt)("strong",{parentName:"li"},"Activities")," in the top-left to remove the screen-saver)"),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Terminal")," window, copy & paste the ",(0,o.kt)("strong",{parentName:"li"},"oc")," command below to login\ninto the cluster. Get your ",(0,o.kt)("strong",{parentName:"li"},"kubeadmin")," password from your environment\ndetails page. This command will make a connection to your cluster and\nauthenticate you, so you will be ready to start issuing oc commands during the\nLab as needed.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc login --server=https://api.ocp.techzone.lan:6443 --username kubeadmin --password <your password>\n")),(0,o.kt)("h2",{id:"25-log-in-to-the-cloud-pak-for-aiops-console"},"2.5: Log in to the Cloud Pak for AIOps console"),(0,o.kt)("p",null,"Now you are going to locate the console URL and the admin login credentials from\nyour deployed instance of the Cloud Pak for AIOps."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Pak for AIOps URL")," to access the console by running the\nfollowing command from the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo -e \"https://$(oc get route -n cp4waiops cpd -o jsonpath='{.spec.host}')\\n\"\n")),(0,o.kt)("p",null,"Find the ",(0,o.kt)("strong",{parentName:"p"},"password")," for the ",(0,o.kt)("strong",{parentName:"p"},"admin")," username by running the following\ncommand from the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 -d ; echo -e \"\\n\"\n")),(0,o.kt)("p",null,"Open a Firefox browser window and copy & paste the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Pak for AIOps URL"),"\nthat you got in the previous step. Note that you will get one or more security\n",(0,o.kt)("strong",{parentName:"p"},"Warning: Potential Security Risk Ahead"),". This is because we have used\nself-signed certificates for this Lab. Just accept the risk and continue. Make\nsure you can login as ",(0,o.kt)("strong",{parentName:"p"},"admin"),", as shown below, using the password from the\nprevious command."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7775).Z,width:"2160",height:"1090"})),(0,o.kt)("p",null,"After you login, you will land into the Cloud Pak for AIOps home page as shown\nbelow:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8452).Z,width:"1433",height:"819"})))}m.isMDXComponent=!0},6537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entitlement_check-ee91e1e8bda89fdbbd3ca294767e2a2c.png"},8452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-page-d444ac8fcfdfc8b63baa5cd143049398.png"},742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/intro.drawio-ba98a624bcd29f3c6716b90b6f479437.png"},7775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-91be2a1b85ebd0f9dc49c46c3eabcd2b.png"}}]);