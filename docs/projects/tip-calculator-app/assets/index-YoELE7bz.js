(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector("form"),u=document.querySelector(".result__category__item__tip"),a=document.querySelector(".result__category__item__price"),p=document.querySelector(".result__reset-btn");if(!c||!u||!a||!p)throw new Error("Not found  element");const d=()=>{const i=()=>{const t=new FormData(c),o=e=>e.replace(/-[a-z]/g,r=>r.slice(1).toUpperCase());return Array.from(t).reduce((e,[r,l])=>(e[o(r)]=parseInt(l),e),{})},n=()=>{const{customTip:t,bill:o,tip:e}=i();return t&&t>0?o*(t/100):o*(e/100)};return{getTipAmountByPeople:()=>{const{people:t}=i();return t>0?n()/t:0},getTotal:()=>{const{bill:t,people:o}=i();return o>0?(t+n())/o:0},validatePeople:()=>i().people>0,isActive:()=>{const{bill:t,people:o}=i();return!(t>0&&o>0)}}},s=d();c.addEventListener("change",i=>{const n=i.target;if(n.name==="people"&&(s.validatePeople()?n.setAttribute("aria-invalid","false"):n.setAttribute("aria-invalid","true")),["bill","people","tip","custom-tip"].some(t=>t===n.name)){const t=s.getTipAmountByPeople(),o=s.getTotal();u.textContent=t>0?`$${t.toFixed(2)}`:"$0.00",a.textContent=o>0?`$${s.getTotal().toFixed(2)}`:"$0.00"}p.disabled=s.isActive()});c.addEventListener("reset",()=>{u.textContent="$0.00",a.textContent="$0.00"});
