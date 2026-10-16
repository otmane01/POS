import{s as t,aS as n,d8 as r,al as o}from"../app.CNUXP74Q.js";import{B as c}from"./boxes.3s6Y1AyK.js";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=t("armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=t("laptop",[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]),f=[{value:"in_use",label:"In use",color:"success"},{value:"maintenance",label:"In maintenance",color:"warning"},{value:"retired",label:"Retired",color:"default"}],k=[{value:"service",label:"Service",color:"blue"},{value:"repair",label:"Repair",color:"volcano"},{value:"inspection",label:"Inspection",color:"cyan"},{value:"calibration",label:"Calibration",color:"purple"},{value:"upgrade",label:"Upgrade",color:"geekblue"},{value:"other",label:"Other",color:"default"}],g=[{value:"scheduled",label:"Scheduled",color:"processing"},{value:"in_progress",label:"In progress",color:"warning"},{value:"completed",label:"Completed",color:"success"},{value:"cancelled",label:"Cancelled",color:"default"}],y=[{value:"assigned",label:"Out",color:"processing"},{value:"returned",label:"Returned",color:"success"}],M=[{value:"none",label:"None",hint:"Book value stays at cost"},{value:"straight_line",label:"Straight line",hint:"Equal charge every month of the life"},{value:"declining_balance",label:"Declining balance",hint:"Double rate on the remaining value — front-loaded"}],p=[{match:/laptop|computer|pc|it|electronic/i,icon:s},{match:/tool|equipment|machine/i,icon:n},{match:/vehicle|car|truck|van/i,icon:r},{match:/furniture|chair|desk|office/i,icon:i},{match:/building|property|premise|land/i,icon:u},{match:/server|network|hardware/i,icon:h},{match:/stock|material|supply/i,icon:c}];function m(e){const a=p.find(l=>l.match.test(e||""));return a?a.icon:o}function d(e,a){return e.find(l=>l.value===a)||{value:a,label:a||"—",color:"default"}}function S(e,a){return d(e,a).label}function T(e){return e==null?"default":e<0?"error":e<=7?"warning":e<=30?"processing":"success"}function E(e){return e==null?"—":e<0?`${Math.abs(e)} day${Math.abs(e)===1?"":"s"} late`:e===0?"Today":`in ${e} day${e===1?"":"s"}`}export{f as A,M as D,k as M,E as a,y as b,m as c,T as d,g as e,S as l,d as o};
