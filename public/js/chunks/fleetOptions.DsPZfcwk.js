import{s as a,dk as o,d8 as t,al as n}from"../app.CNUXP74Q.js";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=a("bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a("caravan",[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=a("container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["path",{d:"M15 19h7",key:"1askl3"}],["path",{d:"M16 19V2",key:"1gf9nk"}],["path",{d:"M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828",key:"enx9tf"}],["path",{d:"M7 19h4",key:"fumhkk"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]),c=[{value:"car",label:"Car",icon:o},{value:"van",label:"Van",icon:v},{value:"truck",label:"Truck",icon:t},{value:"bus",label:"Bus",icon:i},{value:"motorcycle",label:"Motorcycle",icon:u},{value:"forklift",label:"Forklift",icon:k},{value:"trailer",label:"Trailer",icon:s},{value:"other",label:"Other",icon:n}];function p(e){return(c.find(l=>l.value===e)||c[0]).icon}const h=[{value:"active",label:"Active",color:"success"},{value:"maintenance",label:"In maintenance",color:"warning"},{value:"inactive",label:"Inactive",color:"default"},{value:"sold",label:"Sold",color:"error"}],y=[{value:"petrol",label:"Petrol"},{value:"diesel",label:"Diesel"},{value:"electric",label:"Electric"},{value:"hybrid",label:"Hybrid"},{value:"lpg",label:"LPG"},{value:"cng",label:"CNG"}],f=[{value:"service",label:"Service",color:"blue"},{value:"repair",label:"Repair",color:"volcano"},{value:"tyres",label:"Tyres",color:"purple"},{value:"inspection",label:"Inspection",color:"cyan"},{value:"insurance",label:"Insurance",color:"geekblue"},{value:"other",label:"Other",color:"default"}],M=[{value:"scheduled",label:"Scheduled",color:"processing"},{value:"in_progress",label:"In progress",color:"warning"},{value:"completed",label:"Completed",color:"success"}],x=[{value:"active",label:"Out",color:"processing"},{value:"completed",label:"Returned",color:"success"},{value:"cancelled",label:"Cancelled",color:"default"}];function d(e,l){return e.find(r=>r.value===l)||{value:l,label:l||"—",color:"default"}}function E(e,l){return d(e,l).label}function S(e,l=30){return e==null?null:e<0?{color:"error",text:`Overdue by ${Math.abs(e)}d`,level:"overdue"}:e===0?{color:"error",text:"Due today",level:"overdue"}:e<=l?{color:"warning",text:`${e}d left`,level:"soon"}:null}export{x as A,y as F,f as M,c as V,h as a,M as b,S as e,E as l,d as o,p as t};
