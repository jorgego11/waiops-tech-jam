"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[8470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"6. Topology Applications and Business Criticality",description:"Create and configure topology applications",sidebar_position:6},r=void 0,s={unversionedId:"cloud-pak-aiops/topology-lab/topology-applications/index",id:"cloud-pak-aiops/topology-lab/topology-applications/index",title:"6. Topology Applications and Business Criticality",description:"Create and configure topology applications",source:"@site/labs/cloud-pak-aiops/topology-lab/6-topology-applications/index.mdx",sourceDirName:"cloud-pak-aiops/topology-lab/6-topology-applications",slug:"/cloud-pak-aiops/topology-lab/topology-applications/",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/topology-lab/topology-applications/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/cloud-pak-aiops/topology-lab/6-topology-applications/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. Topology Applications and Business Criticality",description:"Create and configure topology applications",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Topology Group Templates",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/topology-lab/topology-templates/"},next:{title:"1. Introduction",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/introduction/"}},l={},p=[{value:"6.1: Business Criticality",id:"61-business-criticality",level:2},{value:"Defining Business Criticality",id:"defining-business-criticality",level:3},{value:"6.2: Applications or Services?",id:"62-applications-or-services",level:2},{value:"Defining Applications",id:"defining-applications",level:3},{value:"6.3: Alert Topological Correlation",id:"63-alert-topological-correlation",level:2},{value:"Creating a Webhook Connection",id:"creating-a-webhook-connection",level:3},{value:"Creating a Webhook Event Loader Script",id:"creating-a-webhook-event-loader-script",level:3},{value:"Validating Topological Correlation",id:"validating-topological-correlation",level:3},{value:"6.4: Lab Recap",id:"64-lab-recap",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"61-business-criticality"},"6.1: Business Criticality"),(0,a.kt)("p",null,"The business criticality of a resource provides an indication of how critical to the business\nthat resource is, and therefore how important any related problems might be. You can define the levels\nof business criticality for your applications, resource groups and resources,\nand then view a list of them on the Business criticality page."),(0,a.kt)("p",null,"Lets have a quick overview of Policies as they leverage Business Criticality. Policies are rules that contain multiple\ncondition and action sets. They can be triggered to reduce noise by suppressing alerts, grouping alerts together, automatically\npromote alerts to incidents, assign runbooks to remediate alerts, etc."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The topic of ",(0,a.kt)("strong",{parentName:"p"},"Policies")," is outside the scope of this Lab, but additional information can be found in the product\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=policies-creating"},(0,a.kt)("strong",{parentName:"a"},"documentation")),".")),(0,a.kt)("p",null,"Business Criticality plays a major factor in making sure that Policies reflect business priorities in terms\nof what applications affect business operations the most.\nPolicies can be defined in a way that considers the Business criticality as a factor to take an action\nsuch as promoting Alerts to an Incident that IT Ops. personnel can see in the Incident View. "),(0,a.kt)("h3",{id:"defining-business-criticality"},"Defining Business Criticality"),(0,a.kt)("p",null,"Now we will define some business criticality values that can then be assigned to an application later in the Lab."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the burger menu in the top-left, navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Operate \u2192 Resource management"),"."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Resource management")," page, click on the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," gear icon in the top-right and select\n",(0,a.kt)("strong",{parentName:"li"},"Topology configuration"),". ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4177).Z,width:"1227",height:"201"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Topology configuration")," page, in the ",(0,a.kt)("strong",{parentName:"li"},"Business criticality")," card, select ",(0,a.kt)("strong",{parentName:"li"},"Configure"),". ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8002).Z,width:"1227",height:"416"})),(0,a.kt)("p",null,"The Business criticality page is displayed listing any existing criticality definitions in a table format\nby name, description, and criticality value, in sortable columns. For the purpose of the Lab, we will use\nthe predefined criticality values but note that you can custom define these values to better represent\nyour specific IT environment. "),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Start with presets"),", inspect the preset values and click on ",(0,a.kt)("strong",{parentName:"p"},"Add"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(687).Z,width:"3350",height:"1546"})," "),(0,a.kt)("p",null,"We have now defined three tiers of business criticality as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6502).Z,width:"3350",height:"1512"})),(0,a.kt)("h2",{id:"62-applications-or-services"},"6.2: Applications or Services?"),(0,a.kt)("p",null,"Based on customer feedback, starting in v4.1, the Cloud Pak for AIOps provides the option to call a\ncollection of topology groups an ",(0,a.kt)("strong",{parentName:"p"},"Application")," or a ",(0,a.kt)("strong",{parentName:"p"},"Service"),". From a product functionality point of view, there is no\ndifference between these two terms. But depending on the customer industry, these two terms represent two different abstractions.\nIn the Telecommunications industry, a ",(0,a.kt)("em",{parentName:"p"},"Service")," represents a group of interconnected components such as routers, switches, firewalls, etc.\nthat participate in the operation of voice and data communications. In mostly every other industry, an ",(0,a.kt)("em",{parentName:"p"},"Application")," represents a set of IT resources\nthat performs a specific function directly for an end user or, in some cases, for another Application. In this Lab, we\nare using the term ",(0,a.kt)("em",{parentName:"p"},"Application"),". "),(0,a.kt)("p",null,"In summary, an Application, in the context of the Cloud Pak for AIOps, is a collection of topology resource groups that represent a complete IT solution stack. Applications,\nwhen combined with resource-level event correlation and grouping mechanisms,\nprovide roll-up incident visibility. In other words, Alerts impacting resources will also surface\nas impacting the Applications that those resources belong to. This improves overall visibility and\nallows the prioritization of incident resolution based on the business criticality that has been preassigned to the impacted applications."),(0,a.kt)("h3",{id:"defining-applications"},"Defining Applications"),(0,a.kt)("p",null,"You define and edit applications by adding (or removing) resource groups, icons and tags,\nassigning business criticality levels, and setting service disruption costs."),(0,a.kt)("p",null,"Lets define a fictional application based on the existing topology resource groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the burger menu in the top-left, navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Operate \u2192 Resource management"),"."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Resource management")," page, click the ",(0,a.kt)("strong",{parentName:"li"},"Define application")," button in the top-right. "),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Define application")," page, we will select a subset of the resource groups defined in previous\nchapters using Topology Group Templates. These are the resource groups that belong to our fictional application.\nLets select APPSERVER-computer1000, APPSERVER-computer1001 and ROUTER-router1 as shown below: ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5718).Z,width:"1227",height:"681"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next")," to preview the application. ")),(0,a.kt)("p",null,"As we preview the application, we can use the checkbox to deselect resource groups on the right sidebar\nin order to visualize the application without those groups. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this preview step, we realize that we don't need the ROUTER-router1 resource group, so click on the (-) minus sign to remove\nthe ROUTER-router1 resource group from this application. ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1008).Z,width:"1227",height:"681"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should be left with the topology preview as\nshown below:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3054).Z,width:"1227",height:"681"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next")," to add additional details."),(0,a.kt)("li",{parentName:"ul"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Name")," for the application, for example ",(0,a.kt)("strong",{parentName:"li"},"Order Capture Backend")),(0,a.kt)("li",{parentName:"ul"},"Set an ",(0,a.kt)("strong",{parentName:"li"},"Icon")," for the application, using the drop-down list select the ",(0,a.kt)("strong",{parentName:"li"},"backend")," icon. This icon is used to identify the application\nresource type in the topology view of your applications."),(0,a.kt)("li",{parentName:"ul"},"Mark the application as a ",(0,a.kt)("strong",{parentName:"li"},"favorite")," by clicking on the heart icon. "),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Add tags")," field, type ",(0,a.kt)("strong",{parentName:"li"},"orderBackend")," and select ",(0,a.kt)("strong",{parentName:"li"},"Create new tag"),". Tags can be used to\nidentify similar applications and to distinguish applications from other applications."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Business criticality")," field, select ",(0,a.kt)("strong",{parentName:"li"},"Tier 1"),"."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Estimated cost per minute for service disruption"),", type ",(0,a.kt)("strong",{parentName:"li"},"750"),". This numerical value, represents the\nestimated disruption cost (in local currency) for the business per minute if this application is down.\nThis information is used on the ",(0,a.kt)("strong",{parentName:"li"},"AIOps insights")," dashboard.")),(0,a.kt)("p",null,"You should see the application details as shown below: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1178).Z,width:"1423",height:"667"})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Define application"),". ")),(0,a.kt)("p",null,"Now the application is added to the list of all applications on the page, as shown below. Note that from this\nview we can see total number of resources, the active Incidents and Alerts related to the application."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2728).Z,width:"1423",height:"667"})," "),(0,a.kt)("h2",{id:"63-alert-topological-correlation"},"6.3: Alert Topological Correlation"),(0,a.kt)("p",null,"We will see how the topology resource groups we have created are used to correlate alerts. Topological alert grouping\nhelps you understand when alerts are connected based on their topology, providing valuable context information\nfor why related alerts might occur together."),(0,a.kt)("p",null,"In order to load alerts, we need to create a webhook connection and an event loader script. "),(0,a.kt)("h3",{id:"creating-a-webhook-connection"},"Creating a Webhook Connection"),(0,a.kt)("p",null,"The webhook connection allows the Cloud Pak for AIOps to expose an API that can be used to load IT Ops events created\nby observability tools such as Datadog, Zabbix and others:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from the burger menu in the top-left navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Define \u2192 Data and tool connections")),(0,a.kt)("li",{parentName:"ul"},"from the ",(0,a.kt)("strong",{parentName:"li"},"Data and tool connections")," page click on ",(0,a.kt)("strong",{parentName:"li"},"Add connection")),(0,a.kt)("li",{parentName:"ul"},"from the ",(0,a.kt)("strong",{parentName:"li"},"Add connections")," page search for ",(0,a.kt)("strong",{parentName:"li"},"webhook"),", click on the\n",(0,a.kt)("strong",{parentName:"li"},"Generic Webhook")," tile and click ",(0,a.kt)("strong",{parentName:"li"},"Connect"),". ")),(0,a.kt)("p",null,"Fill the ",(0,a.kt)("strong",{parentName:"p"},"Add connection")," form with these values: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: event-webhook"),(0,a.kt)("li",{parentName:"ul"},"Description: custom webhook connection for events"),(0,a.kt)("li",{parentName:"ul"},"Authentication type: ",(0,a.kt)("em",{parentName:"li"},"select Username/Password")),(0,a.kt)("li",{parentName:"ul"},"Username: pick a username (e.g. test)"),(0,a.kt)("li",{parentName:"ul"},"Password: pick a password (e.g. test)")),(0,a.kt)("p",null,"Your complete form should look like this (note that your route will be different)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4302).Z,width:"1716",height:"790"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Next"),". "),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Configure event mapping")," form:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Confirm the ",(0,a.kt)("strong",{parentName:"li"},"Enable webhook")," slider is green (On)"),(0,a.kt)("li",{parentName:"ul"},"The webhook connector leverages JSONata which is a simple expression language to transform JSON data.\nYou can read about JSONata ",(0,a.kt)("a",{parentName:"li",href:"https://jsonata.org/"},"here"),'. In this Lab, we provide the JSON event format\nas expected by the Cloud Pak for AIOPs, therefore the JSONata is just a "passthrough". In a real scenario,\nyou will find this mapping capability very useful. ')),(0,a.kt)("p",null,"Enter the following JSONata configuration (use the copy helper icon (top-right) for one-click copy)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "sender":{\n      "service": sender.service,\n      "name": sender.name,\n      "type": sender.type\n   },\n   "resource":{\n      "application": resource.application,\n      "name": resource.name,\n      "hostname": resource.hostname,\n      "type": resource.type,\n      "ipaddress": resource.ipaddress,\n      "location": resource.location\n   },\n   "type":{\n      "classification": type.classification,\n      "eventType": type.eventType\n   },\n   "severity": severity,\n   "summary": summary,\n   "occurrenceTime": occurrenceTime,\n   "expirySeconds": expirySeconds\n}\n')),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Done"),". You will see a new webhook created as shown below. Note the ",(0,a.kt)("strong",{parentName:"p"},"Webhook route")," URL on the right. You will need this URL in the next step. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4529).Z,width:"1860",height:"717"})),(0,a.kt)("h3",{id:"creating-a-webhook-event-loader-script"},"Creating a Webhook Event Loader Script"),(0,a.kt)("p",null,"We will create a simple bash script that reads an event file and calls the webhook\nAPI with every event in the file as a parameter. "),(0,a.kt)("p",null,"In the same ",(0,a.kt)("em",{parentName:"p"},"lab")," folder, create a file called ",(0,a.kt)("strong",{parentName:"p"},"event-load-webhook.sh")," by running the following command in the ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," window to open the text editor\n, ",(0,a.kt)("strong",{parentName:"p"},"copy")," the bash script below (use the copy helper icon (top-right) for one-click copy), ",(0,a.kt)("strong",{parentName:"p"},"paste")," it into the text editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gedit event-load-webhook.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\n# this is the event-load-webhook.sh script\n\n# Check if a file is provided as a parameter\nif [ $# -eq 0 ]; then\n  echo "Please provide an event file as a parameter."\n  exit 1\nfi\n\n###########################################\nWEBHOOK_URL=\'<insert the webhook URL here>\'\n# Note below there is a colon character \':\' between the username and password e.g. test:test\nAUTH=<insert your chosen user name>:<insert your chosen password>\n###########################################\n\n\n# Read the event file line by line and submit the event via webhook\nwhile IFS= read -r line; do\n  curl -X POST -u $AUTH --insecure -H \'Content-Type: application/json\' $WEBHOOK_URL -d "$line"\n  echo ""\ndone < "$1"\n')),(0,a.kt)("p",null,"There are two changes you need to make to the script:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"assign to WEBHOOK_URL the webhook route of the webhook you just created in the previous step"),(0,a.kt)("li",{parentName:"ul"},"assign to AUTH the chosen user name and password of the webhook you just created in the previous step e.g. test:test")),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button in the text editor and ",(0,a.kt)("strong",{parentName:"p"},"close")," the editor window (click on the X). "),(0,a.kt)("h3",{id:"validating-topological-correlation"},"Validating Topological Correlation"),(0,a.kt)("p",null,"We will now load a set of sample events. Because these events impact resources we have in one of our topology group (billing,\ncomputer1000 and webserver) these events will be correlated."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("em",{parentName:"p"},"topology-events.json")," by running the following command in the ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," window to open the text editor,\n",(0,a.kt)("strong",{parentName:"p"},"copy")," the event data below, ",(0,a.kt)("strong",{parentName:"p"},"paste")," it into the text editor,\nclick on the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button in the text editor and ",(0,a.kt)("strong",{parentName:"p"},"close")," the editor window (click on the X). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gedit topology-events.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 web server", "name":"computer1000", "hostname":"computer1000.company.com", "type":"host", "ipaddress":"10.1.96.24", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":3, "summary":"CPU at 80% utilization", "occurrenceTime":"2023-05-05T14:40:38.000Z", "expirySeconds":0 }\n{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 api layer", "name":"billing", "hostname":"", "type":"device", "ipaddress":"10.1.96.28", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":5, "summary":"Unscheduled device restart. Review log files", "occurrenceTime":"2023-05-05T14:45:20.000Z", "expirySeconds":0 }\n{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 security layer", "name":"webserver", "hostname":"", "type":"device", "ipaddress":"10.1.96.29", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":6, "summary":"Unable to load firewall rules after reboot", "occurrenceTime":"2023-05-05T14:46:10.000Z", "expirySeconds":0 }\n')),(0,a.kt)("p",null,"Now lets submit the events via the ",(0,a.kt)("em",{parentName:"p"},"webhook event loader script")," created in the previous section by running the following command from the ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash event-load-webhook.sh topology-events.json\n")),(0,a.kt)("p",null,"First, lets see how the Application we have defined shows these events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the burger menu in the top-left navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Operate \u2192 Resource Management")," and click on the ",(0,a.kt)("strong",{parentName:"li"},"Applications")," tab")),(0,a.kt)("p",null,"Note that the events impacting the resources, have rolled-up into the impacted ",(0,a.kt)("strong",{parentName:"p"},"Application")," that contains these resources, as shown below"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9233).Z,width:"1860",height:"700"})),(0,a.kt)("p",null,"Click on the Application name (",(0,a.kt)("strong",{parentName:"p"},"Order Capture Backend"),") to see the topology resources impacted"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7483).Z,width:"1860",height:"859"})),(0,a.kt)("p",null,"Finally, lets see how these events are correlated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the burger menu in the top-left navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Operate \u2192 Incidents and alerts")," and click on the ",(0,a.kt)("strong",{parentName:"li"},"Alerts")," tab"),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Refresh alerts")," icon on the right"),(0,a.kt)("li",{parentName:"ul"},"Lets add some color to this page:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"gear")," icon in the right and select ",(0,a.kt)("strong",{parentName:"li"},"User preferences"),"."),(0,a.kt)("li",{parentName:"ul"},"From the ",(0,a.kt)("strong",{parentName:"li"},"User preferences for alerts")," pop-up, click on the ",(0,a.kt)("strong",{parentName:"li"},"Row coloring")," slider to On (green)."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")))),(0,a.kt)("p",null,"In the Alerts view, we can see a single group of alerts as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3843).Z,width:"1860",height:"387"})),(0,a.kt)("p",null,"Click on the chevron icon on the left to expand this group. See how the three events we have submitted have been grouped together.\nAlso click on the ",(0,a.kt)("strong",{parentName:"p"},"View correlation")," icon in the top-right, the Correlation column on the right, shows the topological group icon. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8871).Z,width:"1860",height:"387"})),(0,a.kt)("h2",{id:"64-lab-recap"},"6.4: Lab Recap"),(0,a.kt)("p",null,"Congratulations if you made it here!. We have seen a lot of features in a short period of time. If there\nis a single thought that you can take away from this Lab, this is it:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A real-time, unified Topology View is a core capability of the Cloud Pak for AIOps, as it allows to visualize\ntopology changes over time, anomalous alerts in context and the correlation of alerts based on the impacted topology resources.\nTopology is a key component to achieve fast incident resolution through the Cloud Pak for AIOps.")))}h.isMDXComponent=!0},2728:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/app-defined-fe42ddeba9da12e01b8b6f87fd50f74e.png"},9233:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/app-impacted-de83ba49fead044e778fea788b7fa644.png"},8002:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bus-tile-95e982c1e3d6c1e18ab38f99bdad536d.png"},1178:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/details-192540c1b6fa46190b2d958f00787d03.png"},8871:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/events-expanded-89216a874618d399f1fb868a20b76ecb.png"},3843:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/events-group-0cd215542f892bbc9058b0c52e045dfc.png"},4177:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gear-icon-99f05ea77a5c9286a3ed4f794392b467.png"},6502:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/preset-values-cf7ca878ee348e62e7ec64e3393386c9.png"},687:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/preset-a0b969262f90ad5ebd995ed445f0976d.png"},5718:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-resource-groups-72dc0f90baf3561e6424242cd88a0f04.png"},7483:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/topo-impacted-16757ff2afb2fe7deca33279810c28db.png"},3054:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/topology-final-4b61f83370906aa63343e6b318d94980.png"},1008:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/topology-preview-ee3d9ba92be8416f36045a12554de9c5.png"},4529:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/webhook-created-a3904be01b921054692f10c725f225d8.png"},4302:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/webhook-page1-39bdc480e419e00d31811ff00e97414e.png"}}]);