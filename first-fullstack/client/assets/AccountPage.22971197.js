import{_ as g,o as E,c as i,E as f,a as x,b as t,d as s,F as l,r as v,e as h,P as p,A as d,f as e,g as y,p as w,h as T,i as u}from"./index.4cf61269.js";const M={setup(){async function c(){try{await h.getMyTickets()}catch(o){p.error(o,"[getMyTickets]")}}async function _(){try{await h.getAllEvents()}catch(o){p.error(o)}}return E(()=>{c(),_()}),{account:i(()=>d.account),myTickets:i(()=>d.myTickets),myEvents:i(()=>d.events.filter(o=>o.creatorId==d.account.id))}},components:{EventsCard:f,EventDetails:x}},r=c=>(w("data-v-7a0d078c"),c=c(),T(),c),A={class:"about text-center container"},I={class:"row"},S={class:"col-12"},C=r(()=>s("div",{class:"text-light"},"my Events",-1)),P={key:0,class:"row"},b={class:"p-1 bg-dark lighten-25 rounded"},B={key:1,class:"row"},D=r(()=>s("div",{class:"col-12"},[s("span",{class:"text-shadow"},"You have not created any events")],-1)),F=[D],N={class:"row"},V={key:0,class:"col-12"},G=r(()=>s("div",{class:"text-light"},"My tickets",-1)),L={class:"mx-5 px-5"},Y={class:"my-5"},j={key:1,class:"fs-1 text-light"};function q(c,_,o,n,z,H){const m=u("EventsCard"),k=u("EventDetails");return e(),t("div",A,[s("div",I,[s("div",S,[C,n.myEvents?(e(),t("div",P,[(e(!0),t(l,null,v(n.myEvents,a=>(e(),t("div",{class:"col-md-3 mt-4 hover-effect",key:a.id},[s("div",b,[y(m,{event:a},null,8,["event"])])]))),128))])):(e(),t("div",B,F))])]),s("div",N,[n.myTickets?(e(),t("div",V,[G,(e(!0),t(l,null,v(n.myTickets,a=>(e(),t("div",L,[s("div",Y,[y(k,{event:a.event},null,8,["event"])])]))),256))])):(e(),t("div",j," Get tickets! "))])])}const K=g(M,[["render",q],["__scopeId","data-v-7a0d078c"]]);export{K as default};
