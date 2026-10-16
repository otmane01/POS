import{bn as ut,by as ct,bz as pt,r as c,bW as Q,o as mt,j as y,c as p,e as w,m as s,p as d,q as _,l as o,bA as i,bP as a,F as V,G as j,H as S,k as n,bx as _t,I as vt,J as lt,x as yt,bO as H,br as W,bF as bt,bK as ft}from"../app.CNUXP74Q.js";import{_ as ht}from"./PageHeader.lfAx1UTO.js";import{_ as gt}from"./DateRangePicker.BBi3joWf.js";import{_ as xt}from"./ViewCurrencySelect.BptLe44Y.js";import{e as wt,a as $t}from"./exporters.B8LOt--9.js";import{P as Tt}from"./PrinterOutlined.BFcH3ns4.js";import{F as kt}from"./FileExcelOutlined.Dx8ZUtFG.js";import{F as St}from"./FilePdfOutlined.D7ws3k_E.js";import{N as Ct}from"./NumberOutlined.BmFep272.js";import{D as Dt}from"./DollarOutlined.Bk_N-2FO.js";const Pt={class:"page"},qt={class:"kpi-inner"},zt={class:"kpi-text"},It={class:"kpi-value"},Ot={key:1,class:"summary-table-wrap"},Rt={class:"summary-table"},Nt={style:{width:"55%"}},Et={class:"num",style:{width:"15%"}},Yt={class:"num",style:{width:"30%"}},Ft={class:"group-row"},Ut={colspan:"3"},Gt={class:"num"},At={class:"num"},Mt={class:"subtotal-row"},Bt={class:"num bold"},Vt={class:"num bold"},Lt={class:"num bold"},Qt={class:"grand-row"},jt={class:"num bold"},Ht={class:"num bold"},Wt={class:"num bold"},Jt={__name:"ProductsSoldSummaryReport",setup(Kt){const{t:h}=ct(),{money:P,number:ot}=pt(),C=c([Q().startOf("day"),Q()]),N=c(void 0),E=c(void 0),Y=c(void 0),F=c(void 0),U=c(""),L=c(80),g=c(!0),G=c(""),q=c([]),v=c({quantity:0,total:0,items:0}),r=c({}),z=c({}),J=c([]),K=c([]),X=c([]),st=W(()=>[{value:"completed",label:a("Completed","Completed")},{value:"pending",label:a("Pending","Pending")},{value:"ordered",label:a("Ordered","Ordered")}]),Z=e=>(e||[]).map(t=>({value:t.id,label:t.name})),nt=W(()=>(K.value||[]).map(e=>({value:e.id,label:e.username})));function $(e){const t=Number(e||0);return Number.isInteger(t)?String(t):t.toFixed(2)}function A(e){return e.category_id===null?a("Uncategorized","Uncategorized"):e.category_name}const rt=W(()=>[{key:"items",label:a("Items_Sold","Items sold"),value:v.value.items,icon:bt,color:"#1677ff",tint:"rgba(22, 119, 255, 0.12)"},{key:"qty",label:a("Total_Qty","Total qty"),value:$(v.value.quantity),icon:Ct,color:"#13c2c2",tint:"rgba(19, 194, 194, 0.12)"},{key:"total",label:a("Grand_Total","Grand total"),value:P(v.value.total),icon:Dt,color:"#6d28d9",tint:"rgba(109, 40, 217, 0.12)"},{key:"trans",label:`${a("Transactions","Transactions")} / ${a("Cust_Count","Customers")}`,value:`${r.value.transaction_count??0} / ${r.value.customer_count??0}`,icon:ft,color:"#22c55e",tint:"rgba(34, 197, 94, 0.12)"}]),dt=()=>{var e,t;return{...(e=C.value)!=null&&e[0]?{from:C.value[0].format("YYYY-MM-DD")}:{},...(t=C.value)!=null&&t[1]?{to:C.value[1].format("YYYY-MM-DD")}:{},...N.value?{warehouse_id:N.value}:{},...E.value?{user_id:E.value}:{},...Y.value?{category_id:Y.value}:{},...F.value?{statut:F.value}:{},...U.value?{search:U.value}:{}}};async function T(){g.value=!0;try{const e=await yt.get("report/products_sold_summary",dt());q.value=Array.isArray(e.categories)?e.categories:[],v.value=e.totals||{quantity:0,total:0,items:0},r.value=e.meta||{},z.value=e.company||{},J.value=e.warehouses||[],K.value=e.users||[],X.value=e.categories_list||[]}catch(e){H.error((e==null?void 0:e.message)||"Error")}finally{g.value=!1}}function tt(){const e=[];return q.value.forEach(t=>{t.items.forEach(m=>e.push({category_name:A(t),product_code:m.product_code||"",product_name:m.product_name,unit:m.unit||"",quantity:m.quantity,total:m.total})),e.push({category_name:A(t),product_code:"",product_name:a("Sub_Total","Sub Total"),unit:"",quantity:t.sub_total_quantity,total:t.sub_total})}),e.length&&e.push({category_name:"",product_code:"",product_name:a("Grand_Total","Grand Total"),unit:"",quantity:v.value.quantity,total:v.value.total}),e}const et=()=>[{title:h("Categorie"),dataIndex:"category_name"},{title:h("Code"),dataIndex:"product_code"},{title:h("ProductName"),dataIndex:"product_name"},{title:a("Unit","Unit"),dataIndex:"unit"},{title:h("Quantity"),dataIndex:"quantity"},{title:h("Total"),dataIndex:"total",exportValue:e=>P(e.total)}];async function at(e){G.value=e;try{const t=`products-sold-summary_${r.value.from}_${r.value.to}`;e==="excel"?await wt(t,et(),tt()):await $t(a("products_sold_summary","Products Sold Summary"),et(),tt())}catch(t){H.error((t==null?void 0:t.message)||"Export failed")}finally{G.value=""}}function it(){const e=window.open("","_blank","width=420,height=640");if(!e){H.error("Please allow popups to print");return}const t=u=>String(u??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),m=Number(L.value)||80,k=u=>ot(u),I=r.value.day_status==="open"?a("Day_is_still_opened","Day is still opened"):r.value.day_status==="closed"?a("Day_is_closed","Day is closed"):"",f=(u,l)=>`<div class="kv"><span class="k">${t(u)}</span><span class="s">:</span><span class="v">${t(l)}</span></div>`;let b="";q.value.forEach(u=>{b+=`<div class="cat">${t(A(u))}</div>`,b+='<table class="items">',u.items.forEach(l=>{b+=`<tr>
        <td class="name">${t(l.product_name)}</td>
        <td class="qty">${t($(l.quantity))}</td>
        <td class="amt">${t(k(l.total))}</td>
      </tr>`}),b+=`<tr class="sub">
        <td class="name">${t(a("Sub_Total","Sub Total"))}</td>
        <td class="qty">${t($(u.sub_total_quantity))}</td>
        <td class="amt">${t(k(u.sub_total))}</td>
      </tr>`,b+="</table>"});const D=r.value.from===r.value.to?r.value.from:`${r.value.from} — ${r.value.to}`,M=Q().format("DD-MM-YYYY HH:mm:ss"),O=e.document;O.open(),O.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${t(a("Day_Report","Day Report"))}</title>
    <style>
      @page { size: ${m}mm auto; margin: 0; }
      @media print { body, body * { visibility: visible !important; } }
      * { box-sizing: border-box; }
      body {
        width: ${m}mm;
        margin: 0;
        padding: 3mm 2mm;
        font-family: "Courier New", Courier, monospace;
        font-size: 11px;
        line-height: 1.35;
        color: #000;
        background: #fff;
      }
      .center { text-align: center; }
      .company { font-weight: bold; font-size: 12px; }
      .rule { border-top: 1px dashed #000; margin: 4px 0; }
      .title { font-weight: bold; font-size: 14px; margin: 4px 0 6px; }
      .kv { display: flex; }
      .kv .k { flex: 0 0 42%; text-transform: uppercase; }
      .kv .s { flex: 0 0 4%; }
      .kv .v { flex: 1 1 auto; }
      .banner { text-align: center; font-weight: bold; text-transform: uppercase; margin: 2px 0; }
      .section { font-weight: bold; text-transform: uppercase; margin: 6px 0 2px; }
      .cat { font-weight: bold; text-decoration: underline; margin-top: 6px; }
      table.items { width: 100%; border-collapse: collapse; table-layout: fixed; }
      table.items td { vertical-align: top; padding: 1px 0; word-wrap: break-word; }
      td.name { width: 58%; }
      td.qty  { width: 12%; text-align: right; padding-right: 2mm; }
      td.amt  { width: 30%; text-align: right; }
      tr.sub td { border-top: 1px solid #000; font-weight: bold; padding-top: 2px; }
      .grand { display: flex; justify-content: space-between; font-weight: bold;
               font-size: 12px; border-top: 1px solid #000; border-bottom: 1px solid #000;
               padding: 3px 0; margin-top: 6px; }
      .foot { text-align: center; margin-top: 8px; font-size: 10px; }
    </style>
  </head>
  <body>
    <div class="center company">${t(z.value.name)}</div>
    <div class="center">${t(z.value.address)}</div>
    <div class="center">${t(z.value.email)}</div>
    <div class="center">${t(z.value.phone)}</div>

    <div class="title">${t(a("Day_Report","Day Report"))}</div>

    ${f(a("Till","Till"),r.value.till||h("All"))}
    ${f(a("Sales_Person","Sales person"),r.value.sales_person||h("All"))}
    ${f(a("Cust_Count","Cust. count"),r.value.customer_count??0)}
    ${f(a("Transactions","Transactions"),r.value.transaction_count??0)}
    ${f(a("Trans_Date","Trans. date"),D)}
    ${f(a("Printed_On","Printed on"),M)}
    ${f(a("Printed_By","Printed by"),r.value.printed_by||"")}

    ${I?`<div class="rule"></div><div class="banner">${t(I)}</div>`:""}
    <div class="rule"></div>

    <div class="section">${t(h("Sales"))}</div>
    ${b||'<div class="center">—</div>'}

    <div class="grand">
      <span>${t(a("Grand_Total","Grand Total"))}</span>
      <span>${t(k(v.value.total))}</span>
    </div>

    <div class="foot">${t(a("Items_Sold","Items sold"))}: ${t(v.value.items)} &nbsp;·&nbsp; ${t(a("Total_Qty","Total qty"))}: ${t($(v.value.quantity))}</div>
  </body>
</html>`),O.close(),e.focus();let B=!1;const R=()=>{if(!B){B=!0;try{e.close()}catch{}}};try{e.onafterprint=R}catch{}setTimeout(()=>{try{e.print()}catch{}setTimeout(R,6e4)},400)}return mt(T),(e,t)=>{const m=y("a-select"),k=y("a-button"),I=y("a-space"),f=y("a-input-search"),b=y("a-card"),D=y("a-typography-text"),M=y("a-spin"),O=y("a-col"),B=y("a-row"),R=y("a-tag"),u=y("a-empty");return p(),w("div",Pt,[s(ht,{title:i(a)("products_sold_summary","Products Sold Summary"),breadcrumb:[e.$t("Reports"),i(a)("products_sold_summary","Products Sold Summary")]},{actions:d(()=>[s(I,{wrap:""},{default:d(()=>[s(xt),s(m,{value:L.value,"onUpdate:value":t[0]||(t[0]=l=>L.value=l),style:{width:"100px"},options:[{value:58,label:"58 mm"},{value:80,label:"80 mm"},{value:88,label:"88 mm"}]},null,8,["value"]),s(k,{type:"primary",disabled:g.value,onClick:it},{icon:d(()=>[s(i(Tt))]),default:d(()=>[_(" "+o(i(a)("Print_Receipt","Print Receipt")),1)]),_:1},8,["disabled"]),s(k,{loading:G.value==="excel",disabled:g.value,onClick:t[1]||(t[1]=l=>at("excel"))},{icon:d(()=>[s(i(kt))]),default:d(()=>[_(" "+o(e.$t("Export"))+" Excel ",1)]),_:1},8,["loading","disabled"]),s(k,{loading:G.value==="pdf",disabled:g.value,onClick:t[2]||(t[2]=l=>at("pdf"))},{icon:d(()=>[s(i(St))]),default:d(()=>[_(" "+o(e.$t("Export"))+" PDF ",1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title","breadcrumb"]),s(b,{size:"small",style:{"margin-bottom":"16px"}},{default:d(()=>[s(I,{wrap:""},{default:d(()=>[s(gt,{value:C.value,"onUpdate:value":t[3]||(t[3]=l=>C.value=l),"allow-clear":"",onChange:T},null,8,["value"]),s(m,{value:N.value,"onUpdate:value":t[4]||(t[4]=l=>N.value=l),style:{width:"180px"},"allow-clear":"","show-search":"","option-filter-prop":"label",placeholder:i(a)("Till","Till"),options:Z(J.value),onChange:T},null,8,["value","placeholder","options"]),s(m,{value:E.value,"onUpdate:value":t[5]||(t[5]=l=>E.value=l),style:{width:"180px"},"allow-clear":"","show-search":"","option-filter-prop":"label",placeholder:i(a)("Sales_Person","Sales person"),options:nt.value,onChange:T},null,8,["value","placeholder","options"]),s(m,{value:Y.value,"onUpdate:value":t[6]||(t[6]=l=>Y.value=l),style:{width:"180px"},"allow-clear":"","show-search":"","option-filter-prop":"label",placeholder:e.$t("Categorie"),options:Z(X.value),onChange:T},null,8,["value","placeholder","options"]),s(m,{value:F.value,"onUpdate:value":t[7]||(t[7]=l=>F.value=l),style:{width:"150px"},"allow-clear":"",placeholder:i(a)("Sale_Status","Sale status"),options:st.value,onChange:T},null,8,["value","placeholder","options"]),s(f,{value:U.value,"onUpdate:value":t[8]||(t[8]=l=>U.value=l),style:{width:"220px"},"allow-clear":"",placeholder:e.$t("Search"),onSearch:T},null,8,["value","placeholder"])]),_:1})]),_:1}),s(B,{gutter:[16,16],style:{"margin-bottom":"16px"}},{default:d(()=>[(p(!0),w(V,null,j(rt.value,l=>(p(),S(O,{key:l.key,xs:12,sm:12,md:6},{default:d(()=>[s(b,{size:"small",class:"kpi-card"},{default:d(()=>[n("div",qt,[n("div",{class:"kpi-icon",style:_t({background:l.tint,color:l.color})},[(p(),S(vt(l.icon)))],4),n("div",zt,[s(D,{type:"secondary",class:"kpi-label"},{default:d(()=>[_(o(l.label),1)]),_:2},1024),n("div",It,[g.value?(p(),S(M,{key:0,size:"small"})):(p(),w(V,{key:1},[_(o(l.value),1)],64))])])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s(b,{size:"small"},{title:d(()=>[_(o(i(a)("Day_Report","Day Report"))+" ",1),r.value.day_status==="open"?(p(),S(R,{key:0,color:"warning",style:{"margin-left":"8px"}},{default:d(()=>[_(o(i(a)("Day_is_still_opened","Day is still opened")),1)]),_:1})):r.value.day_status==="closed"?(p(),S(R,{key:1,style:{"margin-left":"8px"}},{default:d(()=>[_(o(i(a)("Day_is_closed","Day is closed")),1)]),_:1})):lt("",!0)]),extra:d(()=>[s(D,{type:"secondary",style:{"font-size":"12px"}},{default:d(()=>[_(o(i(a)("Till","Till"))+": "+o(r.value.till||e.$t("All"))+" · "+o(i(a)("Sales_Person","Sales person"))+": "+o(r.value.sales_person||e.$t("All"))+" · "+o(r.value.from)+" → "+o(r.value.to),1)]),_:1})]),default:d(()=>[s(M,{spinning:g.value},{default:d(()=>[!q.value.length&&!g.value?(p(),S(u,{key:0,description:e.$t("NodataAvailable"),style:{padding:"48px 0"}},null,8,["description"])):(p(),w("div",Ot,[n("table",Rt,[n("thead",null,[n("tr",null,[n("th",Nt,o(e.$t("ProductName")),1),n("th",Et,o(e.$t("Quantity")),1),n("th",Yt,o(e.$t("Total")),1)])]),(p(!0),w(V,null,j(q.value,l=>(p(),w("tbody",{key:l.category_id??"none"},[n("tr",Ft,[n("th",Ut,o(A(l)),1)]),(p(!0),w(V,null,j(l.items,x=>(p(),w("tr",{key:(l.category_id??0)+"-"+x.product_id+"-"+x.product_name},[n("td",null,[_(o(x.product_name)+" ",1),x.product_code?(p(),S(D,{key:0,type:"secondary",style:{display:"block","font-size":"12px"}},{default:d(()=>[_(o(x.product_code),1)]),_:2},1024)):lt("",!0)]),n("td",Gt,[_(o($(x.quantity))+" ",1),s(D,{type:"secondary",style:{"font-size":"12px"}},{default:d(()=>[_(o(x.unit),1)]),_:2},1024)]),n("td",At,o(i(P)(x.total)),1)]))),128)),n("tr",Mt,[n("td",Bt,o(i(a)("Sub_Total","Sub Total")),1),n("td",Vt,o($(l.sub_total_quantity)),1),n("td",Lt,o(i(P)(l.sub_total)),1)])]))),128)),n("tfoot",null,[n("tr",Qt,[n("td",jt,o(i(a)("Grand_Total","Grand Total")),1),n("td",Ht,o($(v.value.quantity)),1),n("td",Wt,o(i(P)(v.value.total)),1)])])])]))]),_:1},8,["spinning"])]),_:1})])}}},de=ut(Jt,[["__scopeId","data-v-a5ed5fb2"]]);export{de as default};
