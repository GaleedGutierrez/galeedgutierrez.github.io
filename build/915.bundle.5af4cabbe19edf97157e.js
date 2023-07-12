"use strict";(self.webpackChunkgaleedgutierrez_github_io=self.webpackChunkgaleedgutierrez_github_io||[]).push([[915],{3535:(e,a,s)=>{s.d(a,{Z:()=>r});var t=s(3332),i=s(43);const o=(e,a)=>a.map(((a,s)=>{const t=document.createElement("figure"),i=document.createElement("img");return t.className="m-project-card__technology-icon",i.src=a,i.alt=`Icono de ${e[s]}`,i.loading="lazy",t.append(i),t})),r=e=>{const a=[];for(let t=0;t<e;t++){var s,r,c,n;const e=document.createElement("article"),l=o(i.F[t].technologies,i.F[t].technologiesIcons);e.setAttribute("class","m-project-card");const d=document.createElement("section"),p=document.createElement("img"),m=document.createElement("div"),u=document.createElement("picture"),g=document.createElement("source"),b=document.createElement("source");g.srcset=null===(s=i.F[t])||void 0===s||null===(r=s.images)||void 0===r?void 0:r.medium,g.media="(min-width: 768px)",b.srcset=null===(c=i.F[t])||void 0===c||null===(n=c.images)||void 0===n?void 0:n.large,b.media="(min-width: 1024px)",p.src=i.F[t].images.small,p.alt=`Screenshot de ${i.F[t].name}`,p.className="m-project-card__img-project",p.loading="lazy",p.width=1280,p.height=720,m.className="m-project-card__technology-icons-container",u.append(b,g,p),m.append(...l),d.append(u,m);const h=document.createElement("section"),f=document.createElement("h3"),S=document.createElement("p"),v=document.createElement("a"),z=document.createElement("figure"),w=document.createElement("img"),G=document.createElement("p"),C=document.createElement("p"),P=document.createElement("div"),y=document.createElement("a"),T=document.createElement("a");h.className="m-project-card__data-container",f.innerText=i.F[t].name,S.innerText=i.F[t].description,v.target="_blank",v.href=i.F[t].course.url,v.className="m-project-card__course-info",z.className="m-project-card__course-icon",w.src=i.F[t].course.img,w.alt=`Logo del ${i.F[t].course.name}`,w.loading="lazy",z.append(w),G.className="m-project-card__course-name",G.innerText=i.F[t].course.name,C.className="m-project-card__course-platform",C.innerText=i.F[t].course.platform,v.append(z,G,C),P.className="m-project-card__view-project-section",y.innerText="Ver proyecto",y.target="_blank",y.href=i.F[t].url,y.className="a-button",T.target="_blank",T.ariaLabel="Github",T.href=i.F[t].repository,T.innerHTML='<svg class="a-icon a-social-media-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32"><title>Github</title><path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path></svg>',P.append(y,T),h.append(f,S,v,P),e.append(d,h),a.push(e)}t.ws.append(...a)}},8980:(e,a,s)=>{s.d(a,{Z:()=>r});var t=s(3332),i=s(6661);const o=e=>{const a=t.nC.classList.contains("dark-theme");t.cD.checked=a,e&&(0,i.Z)(a)},r=function(){let{particles:e=!1,event:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=null==a?void 0:a.target;if("INPUT"===(null==s?void 0:s.tagName))return t.nC.classList.toggle("light-theme"),t.nC.classList.toggle("dark-theme"),void o(e);const i=window.matchMedia("(prefers-color-scheme: light)").matches;t.nC.classList.toggle("light-theme",i),t.nC.classList.toggle("dark-theme",!i),o(e)}},813:(e,a,s)=>{s.d(a,{O:()=>n});var t=s(3332);const i=()=>{t.Aw.classList.remove("g-header__menu-container--visible"),t.Ap.classList.remove("a-sandwich-menu--active")},o=()=>{t.Ud.classList.remove("g-header__options--visible"),t.E7.classList.remove("g-header__changes-options-menu--active")},r=new IntersectionObserver((e=>{e.filter((e=>e.isIntersecting)).forEach((e=>{const a=e.target.getAttribute("id");a&&n(a)}))}),{threshold:.2}),c=Boolean(t.rj)&&Boolean(t.Qx),n=e=>{(c?{home:()=>t.rj.checked=!0,about:()=>t.Qx.checked=!0,projects:()=>t.SF.checked=!0,contact:()=>t.Gv.checked=!0}:{projects:()=>t.SF.checked=!0,contact:()=>t.Gv.checked=!0})[e]()},l=c?[t.iT,t.TM,t._c,t.nv]:[t._c,t.nv];l.forEach((e=>{const a=e.getAttribute("href");if(!a)return;const s=document.querySelector(a);s&&r.observe(s)})),window.addEventListener("resize",(()=>{screen.width<768?o():i()})),t.iT.onclick=()=>n("home"),t.TM.onclick=()=>n("about"),t._c.onclick=()=>n("projects"),t.nv.onclick=()=>n("contact"),t.Ap.onclick=()=>(t.Aw.classList.toggle("g-header__menu-container--visible"),void t.Ap.classList.toggle("a-sandwich-menu--active")),t.Aw.onclick=()=>i(),t.E7.onclick=()=>(t.Ud.classList.toggle("g-header__options--visible"),void t.E7.classList.toggle("g-header__changes-options-menu--active")),t.Ud.onclick=()=>o()},6661:(e,a,s)=>{s.d(a,{Z:()=>t});const t=e=>{const a="#343a40",s="#dee2e6";particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:600}},color:{value:e?s:a},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:e?s:a,opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}},43:(e,a,s)=>{s.d(a,{F:()=>We});const t=s.p+"assets/images/curso-css-grid-basico.fffcec490db532cb04bf..webp",i=s.p+"assets/images/Curso-de-Animaciones-con-CSS.efb9a76644fd9c4ddc6a..webp",o=s.p+"assets/images/curso-de-consumo-de-api-rest-con-javaScript.67271f84db472136023c..webp",r=s.p+"assets/images/curso-de-css-grid-layout-2017.f0d1605bb30bd651724f..webp",c=s.p+"assets/images/curso-de-diseno-para-programadores.1f35a20b3bacdb606566..webp",n=s.p+"assets/images/curso-de-frontend-developer.666fde48e85c7fd6f006..webp",l=s.p+"assets/images/curso-de-frontend-developer-2019.8c4684b2909390b94cd5..webp",d=s.p+"assets/images/curso-de-html-y-css-2019.637a16b9b13213e24e41..webp",p=s.p+"assets/images/curso-de-introduccion-a-empaquetadores-web.201b3555b928cc0472d0..webp",m=s.p+"assets/images/curso-de-responsive-design-leonidas-esteban.c2b26a6c5de9aa1fbd10..webp",u=s.p+"assets/images/Curso-de-Responsive-Design-Maquetación-Mobile-First.9f7d316163aca3ace061..webp",g=s.p+"assets/images/curso-de-single-page-application-con-javaScript-vanilla-2021.5334e271ce1249c525cd..webp",b=s.p+"assets/images/curso-gratis-de-programacion-basica.88e1d68eb2822c653b1a..webp",h=s.p+"assets/images/curso-practico-de-html-y-css.5cf55fb011dec3fb5c60..webp",f=s.p+"assets/images/curso-practico-de-javascript.5577cf0fd7926757b7f2..webp",S=s.p+"assets/images/curso-practico-de-maquetacion-en-css.552addacfacdd6691045..webp",v=s.p+"assets/images/curso-practico-de-maquetacion-y-animaciones-con-css.d456d7a5a75103f988cc..webp",z=s.p+"assets/images/curso-profesional-consumo-api-rest-con-javascript-performance-y-usabilidad-2022.34a722cf61abf6e0a0d8..webp",w=s.p+"assets/images/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.cf74cc61367949bde2fc..webp",G=s.p+"assets/images/alura.469accad475e982305e2..webp",C=s.p+"assets/images/icons-css3-small.8574cb4ad1a5185b66e7..webp",P=s.p+"assets/images/icon-html-small.8e9f955b0ffc40c1409f..webp",y=s.p+"assets/images/icons-javascript-small.ea9447a0a861363bc061..webp",T=s.p+"assets/images/pug-icon.ce9f6388ec919c4bfc0f..webp",M=s.p+"assets/images/icons-sass-small.ebfcbffcf1b7aa96c187..webp",L=s.p+"assets/images/icons-typescript-small.7a7567b30d8742b01e1d..webp",j=s.p+"assets/images/vitejs.2af0c4e13d7f16c86614..webp",E=s.p+"assets/images/icons-webpack-small.20cb63335b6b4a233f5d..webp",k=s.p+"assets/images/100rifi.co.68e99c5e4c67b533f2a4..webp",_=s.p+"assets/images/batabit.fa43874f89b728c40821..webp",A=s.p+"assets/images/brand.7738c1f93dac0b11374d..webp",I=s.p+"assets/images/check-the-best-food.bf6f1cef16f0b8c4bb48..webp",q=s.p+"assets/images/curso-de-animaciones-con-css.cc7b893dd148acea6704..webp",H=s.p+"assets/images/curso-practico-de-frontend-developer.f6a17c32bcffff8541dc..webp",J=s.p+"assets/images/curso-practico-de-javaScript.8dfa0e0e487d4e595bc8..webp",F=s.p+"assets/images/curso-practico-de-javascript-02.6f84c749ad3f45a847dd..webp",Z=s.p+"assets/images/encriptador-de-texto-alura-challenges-one.5d76e0164907d571463b..webp",x=s.p+"assets/images/google-clone.742b6acb89750357ec42..webp",U=s.p+"assets/images/lego.6b4b28f41aa7b855d8a6..webp",N=s.p+"assets/images/mi-blog.c7771d53b6851073dfce..webp",V=s.p+"assets/images/michis-app.2f670b552280823776cf..webp",D=s.p+"assets/images/movie.es.363c127fa3a508c28b9a..webp",B=s.p+"assets/images/my-link-in-bio.8f1f3e683db8daff8b2e..webp",O=s.p+"assets/images/platzi-movies-2022.92995872319bcdb3db17..webp",R=s.p+"assets/images/platzi-video.9a0cbe5e50d5f17ce834..webp",W=s.p+"assets/images/platzi-video-curso-frontend-developer-2019.f2658af4d964e58e87b6..webp",$=s.p+"assets/images/platziv-juego-online.cb4bb2f221465f503f99..webp",Q=s.p+"assets/images/portfolio-leonidas-esteban.f1b43527e0de8be07007..webp",Y=s.p+"assets/images/proyecto-generador-de-figuras.b4763dcfc877489ba963..webp",X=s.p+"assets/images/steam.56cf2b2a2f301a03d1e0..webp",K=s.p+"assets/images/villa-platzi.fe2acfd7527abda8f9de..webp",ee=s.p+"assets/images/wikipedia-clone.c25cabebcba42243af6a..webp",ae=s.p+"assets/images/100rifi.co.70d640111d88fa65da99..webp",se=s.p+"assets/images/batabit.04ab421b7436f5a04c39..webp",te=s.p+"assets/images/brand.c334d849570962240d0f..webp",ie=s.p+"assets/images/check-the-best-food.3c99eeecbf01ca02edd6..webp",oe=s.p+"assets/images/curso-de-animaciones-con-css.e4f4b3ee6b86044872cd..webp",re=s.p+"assets/images/curso-practico-de-frontend-developer.919344f8ec7ee9ebd881..webp",ce=s.p+"assets/images/curso-practico-de-javaScript.d62e71ebb190a3edcb97..webp",ne=s.p+"assets/images/curso-practico-de-javascript-02.74752cd5e869c8816b49..webp",le=s.p+"assets/images/encriptador-de-texto-alura-challenges-one.34745c1715e2ca430fa1..webp",de=s.p+"assets/images/google-clone.6ff2935ba6972ff031de..webp",pe=s.p+"assets/images/lego.7a94cfd6f742ea6de938..webp",me=s.p+"assets/images/mi-blog.a4f4dd227a97762f5dc5..webp",ue=s.p+"assets/images/michis-app.f88b9f55bd0dfe3fa638..webp",ge=s.p+"assets/images/movie.es.4b16dc85880b27f0a6f3..webp",be=s.p+"assets/images/my-link-in-bio.6e32b1ba502b616eef31..webp",he=s.p+"assets/images/platzi-movies-2022.f3c3807f2f350b901009..webp",fe=s.p+"assets/images/platzi-video.8b78d725a435cd0148b4..webp",Se=s.p+"assets/images/platzi-video-curso-frontend-developer-2019.e23d12aa6abfb71b8822..webp",ve=s.p+"assets/images/platziv-juego-online.b4f8164aa7a9eb552fda..webp",ze=s.p+"assets/images/portfolio-leonidas-esteban.fc073ef9b42abfe5bdba..webp",we=s.p+"assets/images/proyecto-generador-de-figuras.b1613d3f522d019e0337..webp",Ge=s.p+"assets/images/steam.6d01033d5b2e3b52d333..webp",Ce=s.p+"assets/images/villa-platzi.3f2009b4c26f012d5517..webp",Pe=s.p+"assets/images/wikipedia-clone.b06c27a39cd6dc3c6076..webp",ye=s.p+"assets/images/100rifi.co.4883d830039dfa5a2cf0..webp",Te=s.p+"assets/images/batabit.f1e235a59680a5e4b52b..webp",Me=s.p+"assets/images/brand.78d70f07d0d6f6355b25..webp",Le=s.p+"assets/images/check-the-best-food.b835c9954741be821f8a..webp",je=s.p+"assets/images/curso-de-animaciones-con-css.a703d1b2add0c10ed726..webp",Ee=s.p+"assets/images/curso-practico-de-frontend-developer.e7c9f515198e7f29a3ce..webp",ke=s.p+"assets/images/curso-practico-de-javaScript.00aad9c0e6c0f9d64cc8..webp",_e=s.p+"assets/images/curso-practico-de-javascript-02.87f0d1e0da336e7c6bb5..webp",Ae=s.p+"assets/images/encriptador-de-texto-alura-challenges-one.2971f594174aa23ce7ee..webp",Ie=s.p+"assets/images/google-clone.a095ac026693fbe58006..webp",qe=s.p+"assets/images/lego.db56bfb714edc4a4299f..webp",He=s.p+"assets/images/mi-blog.383cdea6726dea446f2b..webp",Je=s.p+"assets/images/michis-app.0daa221bde8e75e41a56..webp",Fe=s.p+"assets/images/movie.es.72485ccf350aa3d39d1e..webp",Ze=s.p+"assets/images/my-link-in-bio.b5f5750bfea6a03d83a2..webp",xe=s.p+"assets/images/platzi-movies-2022.ed709483bd903b4bc934..webp",Ue=s.p+"assets/images/platzi-video.eceaf38f27fdbac58968..webp",Ne=s.p+"assets/images/platzi-video-curso-frontend-developer-2019.8235a2efcc2d0bbf5347..webp",Ve=s.p+"assets/images/platziv-juego-online.b83b4c9a377c6cd42625..webp",De=s.p+"assets/images/portfolio-leonidas-esteban.4ebc8156c1016ae8a93f..webp",Be=s.p+"assets/images/proyecto-generador-de-figuras.b5f02e6c5db5dc5cb1e6..webp",Oe=s.p+"assets/images/steam.d5098614f86257bb0849..webp",Re=s.p+"assets/images/villa-platzi.e11c637483ea879ec215..webp",We=[{id:23,name:"LEGO",technologies:["TypeScript","SASS","HTML","ViteJS"],technologiesIcons:[L,M,P,j],repository:"https://github.com/GaleedGutierrez/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021",url:"https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021/dist/",images:{small:qe,medium:pe,large:U},date:"2023-04-22T03:00:00.000Z",course:{name:"Curso Practico de Maquetacion y Animaciones con CSS",platform:"Platzi",url:"https://platzi.com/cursos/animaciones-css-practico/",img:v},description:"En este proyecto 🚀, cree una página web con temática de LEGO, utilizando diferentes técnicas de animación para darle vida y dinamismo al sitio. 🎨",author:"Galeed Gutierrez"},{id:22,name:"100tifi.co",technologies:["TypeScript","SASS","HTML","ViteJS"],technologiesIcons:[L,M,P,j],repository:"https://github.com/GaleedGutierrez/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021",url:"https://galeedgutierrez.com/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021/dist/public/index.html",images:{small:ye,medium:ae,large:k},date:"2023-04-12T03:00:00.000Z",course:{name:"Curso de Single Page Application con JavaScript Vanilla 2021",platform:"Platzi",url:"https://platzi.com/cursos/spa-javascript/",img:g},description:"Web 🌐 que usa API de rickandmortyapi.com para ver detalles de personajes de “Rick y Morty” 🧪.",author:"Galeed Gutierrez"},{id:21,name:"Encriptador de texto",technologies:["TypeScript","SASS","HTML","ViteJS"],technologiesIcons:[L,M,P,j],repository:"https://github.com/GaleedGutierrez/Encriptador-de-texto-Alura-Challenges-ONE-2023",url:"https://galeedgutierrez.com/Encriptador-de-texto-Alura-Challenges-ONE-2023/dist/",images:{small:Ae,medium:le,large:Z},date:"2023-04-01T03:00:00.000Z",course:{name:"Challenge ONE: Principiante en programación",platform:"Alura",url:"https://www.aluracursos.com/",img:G},description:"Encriptación y desencriptación de texto 📋 con un algoritmo de sustitución de vocales 🔡.",author:"Galeed Gutierrez"},{id:20,name:"Link in bio",technologies:["TypeScript","SASS","HTML","Webpack"],technologiesIcons:[L,M,P,E],repository:"https://github.com/GaleedGutierrez/Curso-de-Introduccion-a-Empaquetadores-Web/tree/main/webpack",url:"https://galeedgutierrez.com/Curso-de-Introduccion-a-Empaquetadores-Web/webpack/dist/index.html",images:{small:Ze,medium:be,large:B},date:"2023-03-11T03:00:00.000Z",course:{name:"Curso de Introducción a Empaquetadores Web",platform:"Platzi",url:"https://platzi.com/cursos/empaquetadores/",img:p},description:"Es un ejemplo de un link in bio 🔗, que dirige a una página con varios enlaces de redes sociales 📱 y otros sitios de interés 💡.",author:"Galeed Gutierrez"},{id:19,name:"Platzi Movies",technologies:["TypeScript","SASS","PUG"],technologiesIcons:[L,M,T],repository:"https://github.com/GaleedGutierrez/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022",url:"https://galeedgutierrez.com/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022/html/#home",images:{small:xe,medium:he,large:O},date:"2023-01-01T03:00:00.000Z",course:{name:"Curso de API REST con Javascript: Performance y Usabilidad",platform:"Platzi",url:"https://platzi.com/cursos/api-profesional/",img:z},description:"Descubre y disfruta de las mejores películas 🎥 con esta web que te permite buscar por nombre o categoría y ver las más populares 🚀 usando la API de The Movie DB 🍿.",author:"Galeed Gutierrez"},{id:18,name:"Platziv - Juego Online",technologies:["PUG","SASS","TypeScript","HTML","CSS","JavaScript"],technologiesIcons:[T,M,L,P,C,y],repository:"https://github.com/GaleedGutierrez/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022",url:"https://galeedgutierrez.com/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022/html/index.html",images:{small:Ve,medium:ve,large:$},date:"2022-11-09T03:00:00.000Z",course:{name:"Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!",platform:"Platzi",url:"https://platzi.com/cursos/javascript-practico-videojuegos/",img:w},description:"El juego trata de un programador 👨‍💻 que tiene que llegar a su meta ✅ evitando los diferentes bugs 👾 que puede tener en el camino.",author:"Galeed Gutierrez"},{id:17,name:"Michi App",technologies:["PUG","SASS","TypeScript","HTML","CSS","JavaScript"],technologiesIcons:[T,M,L,P,C,y],repository:"https://github.com/GaleedGutierrez/Curso-de-Consumo-de-API-REST-con-JavaScript",url:"https://galeedgutierrez.com/Curso-de-Consumo-de-API-REST-con-JavaScript/html/",images:{small:Je,medium:ue,large:V},date:"2022-05-01T03:00:00.000Z",course:{name:"Curso de Consumo de API REST con JavaScript",platform:"Platzi",url:"https://platzi.com/clases/2985-api/48425-que-es-una-api-rest/",img:o},description:"Una página que consume una API REST de gatitos, se pueden agregar y eliminar gatitos en favoritos.",author:"Galeed Gutierrez"},{id:16,name:"Figura Geométricas",technologies:["PUG","SASS","HTML","CSS","JavaScript"],technologiesIcons:[T,M,P,C,y],repository:"https://github.com/GaleedGutierrez/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/tree/main/TallerN1",url:"https://galeedgutierrez.com/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/TallerN1/html/",images:{small:ke,medium:ce,large:J},date:"2022-02-01T03:00:00.000Z",course:{name:"Curso de Programación Orientada a Objetos en JavaScript",platform:"Platzi",url:"https://platzi.com/clases/2332-javascript-poo/38616-javascript-orientado-a-objetos-basado-en-prototipo/",img:f},description:"Página para poder calcular el perímetro y área de una figura geométrica.",author:"Galeed Gutierrez"},{id:15,name:"Tienda Online",technologies:["PUG","SASS","HTML","CSS","JavaScript"],technologiesIcons:[T,M,P,C,y],repository:"https://github.com/GaleedGutierrez/Curso-Practico-de-JavaScript/tree/main/TallerN2",url:"https://galeedgutierrez.com/Curso-Practico-de-JavaScript/TallerN2/html/",images:{small:_e,medium:ne,large:F},date:"2021-12-01T03:00:00.000Z",course:{name:"Curso Practico de JavaScript",platform:"Platzi",url:"https://platzi.com/clases/2327-javascript-practico/38654-cual-es-tu-sueno-con-javascript/",img:f},description:"Página calculadora del total a pagar después de aplicar un cupón de descuento.",author:"Galeed Gutierrez"},{id:14,name:"Animationland",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/Curso-de-Animaciones-con-CSS",url:"https://galeedgutierrez.com/Curso-de-Animaciones-con-CSS/html/",images:{small:je,medium:oe,large:q},date:"2021-12-01T03:00:00.000Z",course:{name:"Curso de Animaciones con CSS",platform:"Platzi",url:"https://platzi.com/clases/2337-animaciones-css/37995-sabes-mas-de-animaciones-de-lo-que-crees/",img:i},description:"Una pequeña animación con el perrito de Cheems.",author:"Galeed Gutierrez"},{id:13,name:"Check the best food",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Curso-de-CSS-Grid-Basico",url:"https://galeedgutierrez.com/Curso-de-CSS-Grid-Basico/Proyecto/",images:{small:Le,medium:ie,large:I},date:"2021-11-01T03:00:00.000Z",course:{name:"Curso de CSS Grid Básico",platform:"Platzi",url:"https://platzi.com/clases/2474-css-grid/42182-que-es-css-grid-layout/",img:t},description:"Maquetación de una página para un restaurante.",author:"Galeed Gutierrez"},{id:12,name:"Batabit",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/Curso-de-Responsive-Design-Maquetacion-Mobile-First",url:"https://galeedgutierrez.com/Curso-de-Responsive-Design-Maquetacion-Mobile-First/html/",images:{small:Te,medium:se,large:_},date:"2021-11-01T03:00:00.000Z",course:{name:"Curso de Responsive Design: Maquetación Mobile First",platform:"Platzi",url:"https://platzi.com/clases/2030-mobile-first/33326-introduccion-al-curso/",img:u},description:"Maquetación de una página para ver la cotización de criptomonedas.",author:"Galeed Gutierrez"},{id:11,name:"Yard Sale",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/Curso-Practico-de-Frontend-Developer",url:"https://galeedgutierrez.com/Curso-Practico-de-Frontend-Developer/html/homepage.html",images:{small:Ee,medium:re,large:H},date:"2021-10-01T03:00:00.000Z",course:{name:"Curso de Frontend Developer",platform:"Platzi",url:"https://platzi.com/clases/2477-frontend-developer-practico/41501-ya-tomaste-el-curso-de-frontend-developer/",img:n},description:"Maquetación de una tienda online.",author:"Galeed Gutierrez"},{id:10,name:"Steam Burger",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/Curso-de-Disenio-para-Programadores",url:"https://galeedgutierrez.com/Curso-de-Disenio-para-Programadores/html/",images:{small:Oe,medium:Ge,large:X},date:"2021-09-01T03:00:00.000Z",course:{name:"Curso de Diseño para Developers",platform:"Platzi",url:"https://platzi.com/clases/1906-diseno-programadores/28549-bienvenida/",img:c},description:"Página web para un restaurante.",author:"Galeed Gutierrez"},{id:9,name:"Platzi Video",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/Curso-de-Frontend-Developer-2019",url:"https://galeedgutierrez.com/Curso-de-Frontend-Developer-2019/platzi-video/html/homepage.html",images:{small:Ne,medium:Se,large:W},date:"2021-09-01T03:00:00.000Z",course:{name:"Curso de Frontend Developer 2019",platform:"Platzi",url:"https://platzi.com/clases/1640-frontend-developer-2019/21874-presentacion-y-bienvenida-al-curso-de-frontend-dev/",img:l},description:"Maquetación del home, login, registro y page not found de Platzi Video.",author:"Galeed Gutierrez"},{id:8,name:"Wikipedia Clone",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/WikipediaClone",url:"https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/WikipediaClone/",images:{small:s.p+"assets/images/wikipedia-clone.89ba4ef4728cdbfe62c4..webp",medium:Pe,large:ee},date:"2021-09-01T03:00:00.000Z",course:{name:"Curso Práctico de HTML y CSS",platform:"Platzi",url:"https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/",img:h},description:"Un clone del home de Wikipedia.",author:"Galeed Gutierrez"},{id:7,name:"Google Clone",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/my-Google-clone",url:"https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/my-Google-clone/",images:{small:Ie,medium:de,large:x},date:"2021-09-01T03:00:00.000Z",course:{name:"Curso Práctico de HTML y CSS",platform:"Platzi",url:"https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/",img:h},description:"Un clone de la clásica página de búsqueda de Google.",author:"Galeed Gutierrez"},{id:6,name:"Villa Platzi",technologies:["HTML","JavaScript"],technologiesIcons:[P,y],repository:"https://github.com/GaleedGutierrez/Villa-Platzi",url:"https://galeedgutierrez.com/Villa-Platzi/",images:{small:Re,medium:Ce,large:K},date:"2021-01-01T03:00:00.000Z",course:{name:"Curso Gratis de Programación Básica",platform:"Platzi",url:"https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/",img:b},description:"Una pequeña granja en donde puedes mover a un cerdo.",author:"Galeed Gutierrez"},{id:5,name:"Generador de figuras geométricas",technologies:["HTML","JavaScript"],technologiesIcons:[P,y],repository:"https://github.com/GaleedGutierrez/Proyecto-generador-de-figuras",url:"https://galeedgutierrez.com/Proyecto-generador-de-figuras/",images:{small:Be,medium:we,large:Y},date:"2021-01-01T03:00:00.000Z",course:{name:"Curso Gratis de Programación Básica",platform:"Platzi",url:"https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/",img:b},description:"Generador de figuras geométricas.",author:"Galeed Gutierrez"},{id:4,name:"Mi Blog",technologies:["PUG","SASS","HTML","CSS"],technologiesIcons:[T,M,P,C],repository:"https://github.com/GaleedGutierrez/galeedgutierrez.github.io",url:"https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-en-CSS/html/",images:{small:He,medium:me,large:N},date:"2020-07-01T03:00:00.000Z",course:{name:"Curso Práctico de Maquetación en CSS",platform:"Platzi",url:"https://platzi.com/clases/1744-practico-css/24710-lo-que-aprenderas-sobre-maquetacion-en-css/",img:S},description:"Maquetación de un blog personal.",author:"Galeed Gutierrez"},{id:3,name:"Platzi-Video",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Platzi-Video",url:"https://galeedgutierrez.com/Platzi-Video/",images:{small:Ue,medium:fe,large:R},date:"2020-05-01T03:00:00.000Z",course:{name:"Curso de CSS Grid Layout 2017",platform:"Platzi",url:"https://platzi.com/r/galeedgutierrez",img:r},description:"Maquetación de una web reproductora de videos.",author:"Galeed Gutierrez"},{id:2,name:"Movie.es",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Movi.es",url:"https://galeedgutierrez.com/Movi.es/",images:{small:Fe,medium:ge,large:D},date:"2020-05-01T03:00:00.000Z",course:{name:"Curso de CSS Grid Layout 2017",platform:"Platzi",url:"https://platzi.com/r/galeedgutierrez",img:r},description:"Maquetación de una página de películas y series.",author:"Galeed Gutierrez"},{id:1,name:"Portfolio Leonidas Esteban",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Portafolio-LeonidasEsteban",url:"https://galeedgutierrez.com/Portafolio-LeonidasEsteban/",images:{small:De,medium:ze,large:Q},date:"2020-02-01T03:00:00.000Z",course:{name:"Curso de Responsive Design",platform:"Platzi",url:"https://platzi.com/clases/1362-responsive-design/13534-bienvenidos-al-curso-de-responsive-design/",img:m},description:"Página web para presentar los proyectos de Leonidas Esteban.",author:"Galeed Gutierrez"},{id:0,name:"Brand",technologies:["HTML","CSS"],technologiesIcons:[P,C],repository:"https://github.com/GaleedGutierrez/Brand-Platzi",url:"https://galeedgutierrez.com/Brand-Platzi/",images:{small:Me,medium:te,large:A},date:"2020-01-01T03:00:00.000Z",course:{name:"Curso de HTML y CSS 2019",platform:"Platzi",url:"https://platzi.com/clases/1492-html-css-2019/16971-introduccion-al-curso-profesional-de-desarrollo-we/",img:d},description:"Mi primer proyecto web, es una tienda de gatitos muy simple que usa PayPal para procesar los pagos.",author:"Galeed Gutierrez"}]}}]);