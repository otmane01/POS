const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/jspdf.es.min.BJ9x852Y.js","app.CNUXP74Q.js"])))=>i.map(i=>d[i]);
import{_ as x,A as P,bW as F}from"../app.CNUXP74Q.js";function R(){try{return P().exportSettings}catch{return{scope:"all",totals:!0,pdf_orientation:"landscape",filename_date:!1,pdf_meta:!1}}}function A(t){return t.filename_date?`_${F().format("YYYY-MM-DD")}`:""}function h(t){return String(t.title??t.key??"")}function b(t,e){if(typeof t.exportValue=="function")return t.exportValue(e);const s=t.dataIndex||t.key,n=s?e[s]:"";return n==null?"":typeof n=="object"?JSON.stringify(n):n}function f(t){return t.filter(e=>e.key!=="actions"&&e.key!=="image"&&e.exportable!==!1)}function Y(t,e,s,n="Total"){const o=f(t);return o.some(r=>r.sum)?o.map((r,u)=>{if(r.sum){const i=r.dataIndex??r.key,l=e.reduce((c,a)=>c+(Number(a==null?void 0:a[i])||0),0);return s(r,l)}return u===0?n:""}):null}const _=/[֐-׿؀-ۿ܀-ݏݐ-ݿࢠ-ࣿיִ-﷿ﹰ-﻿]/;function E(t,e,s){if(_.test(String(t??"")))return!0;const n=f(e);return n.some(o=>_.test(h(o)))?!0:s.some(o=>n.some(r=>_.test(String(b(r,o)??""))))}function L(t,e,s,{subtitle:n=[],landscape:o=!0,foot:r=null,rtl:u=!1}={}){const i=f(e),l=a=>String(a??"").replace(/[&<>"]/g,d=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[d]),c=Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(a=>a.outerHTML).join(`
`);return`<!doctype html><html${u?' dir="rtl"':""}><head>
    <base href="${window.location.origin}/" />
    <title>${l(t)}</title>
    ${c}
    <style>
      @page { size: A4 ${o?"landscape":"portrait"}; margin: 0.3cm; }
      @media print { body, body * { visibility: visible !important; } }
      body { margin: 0.3cm; font-family: Arial, sans-serif; }
      .print-header { font-weight: 600; margin-bottom: 6px; font-size: 14px; }
      .print-sub { font-size: 11px; line-height: 1.5; margin-bottom: 10px; }
      table { width: 100%; border-collapse: collapse; }
      /* Cells may carry newlines (a variant product stacks one value per line);
         without pre-line the browser would collapse them onto one row. */
      th, td { border: 1px solid #ddd; padding: 6px 8px; font-size: 10px; text-align: ${u?"right":"left"}; white-space: pre-line; }
      th { background: #f5f5f5; font-weight: bold; }
      tr:nth-child(even) { background: #f9f9f9; }
    </style></head><body>
    <div class="print-header">${l(t)}</div>
    ${n.length?`<div class="print-sub">${n.map(l).join(" &nbsp;·&nbsp; ")}</div>`:""}
    <table>
      <thead><tr>${i.map(a=>`<th>${l(h(a))}</th>`).join("")}</tr></thead>
      <tbody>${s.map(a=>`<tr>${i.map(d=>`<td>${l(b(d,a))}</td>`).join("")}</tr>`).join("")}</tbody>
      ${r?`<tfoot><tr>${r.map(a=>`<td style="font-weight:bold;background:#f0f0f0">${l(a)}</td>`).join("")}</tr></tfoot>`:""}
    </table></body></html>`}const m="Vazirmatn",T="/fonts/Vazirmatn-Bold.ttf",z=["ar","fa","ur","he"];function D(t){try{return t.addFont(T,m,"normal"),t.addFont(T,m,"bold"),t.setFont(m,"normal"),m}catch{return"helvetica"}}function j(){return typeof document>"u"?!1:document.documentElement.dir==="rtl"?!0:z.includes(String(document.documentElement.lang||"").slice(0,2))}async function C(t,e,s,{foot:n=null}={}){const o=await x(()=>import("./xlsx.BGhuli8m.js"),[]),r=f(e),u=[r.map(h),...s.map(c=>r.map(a=>b(a,c))),...n?[n]:[]],i=o.utils.aoa_to_sheet(u),l=o.utils.book_new();o.utils.book_append_sheet(l,i,"Report"),o.writeFile(l,`${t}${A(R())}.xlsx`)}async function V(t,e,s,{landscape:n=null,foot:o=null}={}){var v;const[{jsPDF:r},u]=await Promise.all([x(()=>import("./jspdf.es.min.BJ9x852Y.js"),__vite__mapDeps([0,1])),x(()=>import("./jspdf.plugin.autotable.CxxEjV4y.js"),[])]),i=u.default||u.autoTable,l=f(e),c=R(),a=n??c.pdf_orientation!=="portrait",d=new r({orientation:a?"landscape":"portrait"}),y=D(d),g=j(),w=g?d.internal.pageSize.getWidth()-14:14,S=g?{align:"right"}:void 0;d.setFontSize(14),d.text(String(t),w,15,S);let $=22;if(c.pdf_meta){let p="";try{p=((v=P().user)==null?void 0:v.company)||""}catch{}d.setFontSize(9),d.setTextColor(120),d.text(`${p?p+" — ":""}${F().format("YYYY-MM-DD HH:mm")}`,w,21,S),d.setTextColor(0),$=26}i(d,{head:[l.map(h)],body:s.map(p=>l.map(k=>String(b(k,p)))),startY:$,styles:{fontSize:8,font:y,halign:g?"right":"left"},headStyles:{fillColor:[109,40,217],font:y,fontStyle:"bold"},...o?{foot:[o.map(p=>String(p))],footStyles:{fillColor:[240,240,240],textColor:20,fontStyle:"bold",font:y},showFoot:"lastPage"}:{}}),d.save(`${String(t).replace(/\s+/g,"_")}${A(c)}.pdf`)}function M(t,e,s,{subtitle:n=[],landscape:o=!0,win:r=null,foot:u=null}={}){const i=r||window.open("","_blank");if(!i){window.alert("Please allow popups to print");return}const l=E(t,e,s);i.document.open(),i.document.write(L(t,e,s,{subtitle:n,landscape:o,foot:u,rtl:l})),i.document.close(),i.focus(),setTimeout(()=>{i.print(),i.close()},400)}export{V as a,R as b,C as e,M as p,Y as t};
