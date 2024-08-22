"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[3062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"3. Event and Alert Terminology",description:"Alert Terminology",sidebar_position:3},i=void 0,s={unversionedId:"cloud-pak-aiops/alert-lab/alert-concepts/index",id:"cloud-pak-aiops/alert-lab/alert-concepts/index",title:"3. Event and Alert Terminology",description:"Alert Terminology",source:"@site/labs/cloud-pak-aiops/alert-lab/3-alert-concepts/index.mdx",sourceDirName:"cloud-pak-aiops/alert-lab/3-alert-concepts",slug:"/cloud-pak-aiops/alert-lab/alert-concepts/",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/alert-concepts/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/cloud-pak-aiops/alert-lab/3-alert-concepts/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Event and Alert Terminology",description:"Alert Terminology",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Lab Environment",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/lab-environment/"},next:{title:"4. Webhook and Kafka Data Load",permalink:"/waiops-tech-jam/labs/cloud-pak-aiops/alert-lab/webhook-integration/"}},l={},c=[{value:"Terms Definition",id:"terms-definition",level:3},{value:"Normalized Event Schema",id:"normalized-event-schema",level:3},{value:"Event Deduplication",id:"event-deduplication",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"terms-definition"},"Terms Definition"),(0,a.kt)("p",null,"Lets define some key Cloud Pak for AIOps concepts and terms that will help you understand the Lab:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Events"),": An event is a record containing structured data summarizing key attributes of an occurrence on a\nmanaged entity, which might be a network resource, some part of that resource, or other key element associated\nwith your network, services, or applications. An event may or may not indicate something anomalous and is a\npoint-in-time, immutable statement about the managed entity in question."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Event")," ",(0,a.kt)("strong",{parentName:"p"},"severity")," range is  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    6: Critical, 5: Major, 4: Minor, 3: Warning, 2: Informational, 1: Indeterminate\n")),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Alerts"),": Alerts are created when one or more events indicate an anomalous condition. Alerts represent an\nongoing anomalous condition against a single managed entity. Unlike events, alerts might evolve over time as\nthe condition changes. Alerts have a start and an end time. The creation and evolution of alerts are informed\nby events. The Cloud Pak for AIOps automatically correlates alerts to determine what alerts are likely to share a common cause."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Alert")," ",(0,a.kt)("strong",{parentName:"p"},"severity")," range is the same as Event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    6: Critical, 5: Major, 4: Minor, 3: Warning, 2: Informational, 1: Indeterminate\n")),(0,a.kt)("p",null,"Alerts have ",(0,a.kt)("strong",{parentName:"p"},"state")," which can be ",(0,a.kt)("strong",{parentName:"p"},"Open, Clear, or Closed"),". Note that the Alert ",(0,a.kt)("em",{parentName:"p"},"state")," can go from Clear back to Open if new related events arrive\nduring the same time window. "),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Alerts Groups"),": An alert group is a group of two or more alerts that Cloud Pak for AIOps has correlated\ntogether because the underlying analytics have determined that these alerts belong together. Alerts can be added\nto an alert group because of one or more of these factors:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Correlation Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Scope-based")," ",(0,a.kt)("strong",{parentName:"td"},"correlation"),": the alerts occur on a user defined scope."),(0,a.kt)("td",{parentName:"tr",align:null},"An administrator defines a ScopeID based on properties that define the scope for how alerts are grouped. Any alerts that match the scope and occur within a default time window are then automatically grouped together. An example would be where an alert storm occurs on the london145.acme.com server. All of the alerts in that storm will be grouped together as they match the alert.resource.location= london145.acme.com, and they occur within the default time window. These alerts are grouped into a scope-based subgroup.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Temporal correlation:")," The system continually analyzes past alerts to determine which alerts tend to frequently co-occur. When these alerts occur together again, they are correlated."),(0,a.kt)("td",{parentName:"tr",align:null},'A "Latency" alert on a server is regularly followed by a "Ping response time high" alert on that same server. These alerts are grouped into a temporal subgroup.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Topological correlation"),": the alerts occur on resources within a predefined section of your network topology."),(0,a.kt)("td",{parentName:"tr",align:null},"If there is a predefined section of the network that groups together a specific switch and all the nodes that depend on that switch, then any alerts occurring on that specific switch or the nodes connected to it are grouped together. These alerts are grouped into a topological subgroup.")))),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Incidents"),": Incidents represent the context which is currently severely impacting IT Operations. This includes\nall alerts that are related to the incident ranked by probable cause and information about how the affected\ntopology resources are related. The creation and evolution of incidents are informed by alerts. Incidents help\nbuild the understanding of the current situation and also can drive the remediation steps by suggesting runbooks\nthat can help with the solution of the problem. "),(0,a.kt)("p",null,"Incidents are categorized by ",(0,a.kt)("strong",{parentName:"p"},"priority")," ",(0,a.kt)("strong",{parentName:"p"},"from 1 (highest) to 5 (lowest)."),"\nIncidents have also ",(0,a.kt)("strong",{parentName:"p"},"status")," which can be ",(0,a.kt)("strong",{parentName:"p"},"Unassigned, In-progress, On-hold, or Resolved. ")),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Policies"),": Policies are rules that contain a condition and a set of actions that can be manual or automated.\nThey can be triggered to automatically promote events to alerts, reduce noise by grouping alerts into an Incident,\nand assign runbooks to remediate alerts. Each policy has an execution priority number which determines which policy runs first."),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Runbooks"),": A runbook is a controlled set of automated and manual steps that support system and network operational\nprocesses. A runbook orchestrates all types of infrastructure elements, such as applications, network components, or servers.\nWe can also use runbooks to document standard procedures that can be leveraged by IT operations."),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Actions"),": Actions are the collection of several predefined steps into a single automated tested entity that can be\nshared by multiple runbooks. Actions improve runbook efficiency by encapsulating procedures and operations."),(0,a.kt)("p",null,"The following chart shows how all these terms are related:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1040).Z,width:"843",height:"586"})),(0,a.kt)("h3",{id:"normalized-event-schema"},"Normalized Event Schema"),(0,a.kt)("p",null,"This is the normalized event schema for the Generic Webhook and Kafka integration. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "http://json-schema.org/draft-04/schema#",\n    "title": "Normalized Event schema",\n    "description": "Normalized Event for None mapping use case",\n    "type": "object",\n    "properties": {\n        "sender": {\n            "description": "Identifies the resource which sent this event. This may be the resource that is the subject of the event, or it may be some external system which is monitoring the subject.",\n            "type": "object",\n            "properties": {\n                "service": {\n                    "description": "The identifier of the service",\n                    "type": "string"\n                },\n                "name": {\n                    "description": "The descriptive name of the service",\n                    "type": "string"\n                },\n                "type": {\n                    "description": "Data source name. For examples, PagerDuty, Netcool/OMNIbus",\n                    "type": "string"\n                }\n            },\n            "required": [\n                "service",\n                "name",\n                "type"\n            ]\n        },\n        "resource": {\n            "description": "Identifies the resource that is the subject of this event. This is made up of multiple fields that describe the resource. There are a set of standard fields which should be used where applicable, but additional fields may be set.",\n            "type": "object",\n            "properties": {\n                "name": {\n                    "description": "The name of the resource. For example, myhost.example.com",\n                    "type": "string"\n                },\n                "hostname": {\n                    "description": "The hostname of the resource.",\n                    "type": "string"\n                },\n                "type": {\n                    "description": "The type of resource. For example, host",\n                    "type": "string"\n                },\n                "ipaddress": {\n                    "description": "The IP address of the resource.",\n                    "type": "string"\n                },\n                "location": {\n                    "description": "The location of the resource. For example, Dallas 10",\n                    "type": "string"\n                }\n            },\n            "required": [\n                "name",\n                "hostname",\n                "type",\n                "ipaddress",\n                "location"\n            ]\n        },\n        "type": {\n            "description": "Indicates whether the source alert is a problem or a resolution along with its classification.",\n            "type": "object",\n            "properties": {\n                "classification": {\n                    "description": "Description of the type of the event. E.g. Utilization, System status, Threshold breach",\n                    "type": "string"\n                },\n                "eventType": {\n                    "description": "String description of whether the event is \'problem\' or \'resolution\'. Note: Only these two values are permitted.",\n                    "type": "string"\n                }\n            },\n            "required": [\n                "classification",\n                "eventType"\n            ]\n        },\n        "severity": {\n            "description": "Indicates the event severity level, which indicates how the perceived capability of the managed object has been affected.",\n            "type": "integer",\n            "minimum": 0,\n            "maximum": 6\n        },\n        "summary": {\n            "description": "A human-readable description of the event.",\n            "type": "string"\n        },\n        "occurrenceTime": {\n            "description": "The time at which this event occurred. (ISO format: yyyy-mm-ddThh:mm:ss.SSSZ)",\n            "type": "string",\n            "pattern": "\\\\d{4}-[01]\\\\d-[0-3]\\\\dT[0-2]\\\\d:[0-5]\\\\d:[0-5]\\\\d(?:\\\\.\\\\d+)Z"\n        },\n        "expirySeconds": {\n            "description": "The number of seconds before the event should automatically expire. A value of zero indicates that there is no expiration.",\n            "type": "integer",\n            "minimum": 0\n        }\n    },\n    "required": [\n        "sender",\n        "resource",\n        "type",\n        "severity",\n        "summary",\n        "occurrenceTime",\n        "expirySeconds"\n    ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Event")),(0,a.kt)("p",null,"This is a sample event based on the previous schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sender": {\n        "service": "Mun SelfMonitoring",\n        "name": "Mun SelfMonitoring",\n        "type": "Datadog Observability"\n    },\n    "resource": {\n        "name": "AGG_P",\n        "hostname": "samplehost.ibm.com",\n        "type": "host",\n        "ipaddress": "10.1.96.24",\n        "location": "Dal10"\n    },\n    "type": {\n        "classification": "CEASelfMonitoring",\n        "eventType": "problem"\n    },\n    "severity": 6,\n    "summary": "Web Service - getTransferAmount() timeout",\n    "occurrenceTime": "2023-05-05T14:50:38.000Z",\n    "expirySeconds": 0\n}\n')),(0,a.kt)("h3",{id:"event-deduplication"},"Event Deduplication"),(0,a.kt)("p",null,"Occurrences of the same event are deduplicated into a single alert instance. The default correlation policy\nconstructs a ",(0,a.kt)("strong",{parentName:"p"},"deduplication key")," for events from the following elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{ event.resource }}-{{ event.type.classification }}-{{ event.type.condition }}\n")),(0,a.kt)("p",null,"When the same event occurs multiple times (the resource, classification, and condition fields are the same), then\ndeduplication increments the event count of the current alert instance to show how many times the event occurred."),(0,a.kt)("p",null,"Problem events (type.eventType = ",(0,a.kt)("em",{parentName:"p"},"problem"),") create an alert (if one does not exist). Meanwhile, resolution events (type.eventType = ",(0,a.kt)("em",{parentName:"p"},"resolution"),")\ndo not become alerts and are not visible in the Alert Viewer. They clear an alert if one exists and are ignored if no alert exists.\nFor a resolution event to clear an alert, it must have the same deduplication key as the event that\nthe alert was created from. Also, it must have occurred ",(0,a.kt)("em",{parentName:"p"},"after")," the last event that contributed to the alert."))}u.isMDXComponent=!0},1040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/funnel-ea225bc01906047a2f736331dbde1f48.png"}}]);