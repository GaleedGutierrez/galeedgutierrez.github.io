(()=>{"use strict";var e={480:(e,t,n)=>{n.d(t,{Ap:()=>o,Aw:()=>i,E7:()=>_,Gv:()=>a,Qx:()=>r,SF:()=>d,TM:()=>m,Ud:()=>g,_c:()=>s,iT:()=>u,nv:()=>l,rj:()=>c});document.getElementById("head-id");var o=document.getElementById("header__menu-sandwich-id"),i=document.getElementById("header__nav-container-id"),c=document.getElementById("nav__input-radio-id-1"),r=document.getElementById("nav__input-radio-id-2"),d=document.getElementById("nav__input-radio-id-3"),a=(document.getElementById("nav__input-radio-id-4"),document.getElementById("nav__input-radio-id-5")),u=(document.getElementById("header-id"),document.getElementById("header__nav-home")),m=document.getElementById("header__nav-about"),s=document.getElementById("header__nav-projects"),l=document.getElementById("header__nav-contact"),_=(document.getElementById("header__theme-input-id"),document.getElementById("header__menu-options-changes-id")),g=document.getElementById("header__options-id");document.getElementById("about"),document.getElementById("about-me__button-id"),document.getElementById("about-me__more-information-container-id"),document.getElementById("portfolio__projects-container-id")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(480),t=[e.iT,e.TM,e._c,e.nv],o=function(t){({home:function(){return e.rj.checked=!0},about:function(){return e.Qx.checked=!0},projects:function(){return e.SF.checked=!0},contact:function(){return e.Gv.checked=!0}})[t]()},i=new IntersectionObserver((function(e){e.filter((function(e){return e.isIntersecting})).forEach((function(e){var t=e.target.getAttribute("id");o(t)}))}),{threshold:.2});t.forEach((function(e){var t=e.getAttribute("href"),n=document.querySelector(t);n&&i.observe(n)}));var c=function(){e.Aw.classList.remove("g-header__menu-container--visible"),e.Ap.classList.remove("a-sandwich-menu--active")},r=function(){e.Ud.classList.remove("g-header__options--visible"),e.E7.classList.remove("g-header__changes-options-menu--active")};window.addEventListener("resize",(function(){screen.width<768&&r(),screen.width>=768&&c()})),e.iT.onclick=function(){return o("home")},e.TM.onclick=function(){return o("about")},e._c.onclick=function(){return o("projects")},e.nv.onclick=function(){return o("contact")},e.Ap.onclick=function(){return e.Aw.classList.toggle("g-header__menu-container--visible"),void e.Ap.classList.toggle("a-sandwich-menu--active")},e.Aw.onclick=function(){return c()},e.E7.onclick=function(){return e.Ud.classList.toggle("g-header__options--visible"),void e.E7.classList.toggle("g-header__changes-options-menu--active")},e.Ud.onclick=function(){return r()}})()})();