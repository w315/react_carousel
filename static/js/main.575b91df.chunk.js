(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),c=a(5),r=a(6),l=a(8),i=a(7),o=a(1),u=a.n(o),m=(a(13),a(2)),b=(a(14),a(0)),j=function(e){var t=e.img,a=Object(o.useState)(0),n=Object(m.a)(a,2),s=n[0],c=n[1],r=Object(o.useRef)(null),l=Object(o.useState)(130),i=Object(m.a)(l,2),u=i[0],j=i[1],p=Object(o.useState)(3),d=Object(m.a)(p,2),g=d[0],_=d[1],h=Object(o.useState)(1e3),v=Object(m.a)(h,2),O=v[0],x=v[1],C=function(e){var a,n=r.current,l=(null===n||void 0===n||null===(a=n.querySelector("li"))||void 0===a?void 0:a.offsetWidth)||0,i=s+e;if(i>=0&&i<t.length){c(i);var o=i*l;n&&(n.style.transform="translateX(-".concat(o,"px)"))}};return Object(b.jsx)("div",{className:"Carousel",children:Object(b.jsxs)("div",{className:"Carousel__container",children:[Object(b.jsx)("ul",{className:"Carousel__list",ref:r,children:t.map((function(e,t){return Object(b.jsx)("li",{className:"Carousel__item",children:Object(b.jsx)("img",{src:e,alt:"".concat(t),className:"Carousel__img"})},"".concat(t+1))}))}),Object(b.jsxs)("div",{className:"Carousel__control",children:[Object(b.jsx)("button",{type:"button",className:"Carousel__btn Carousel__btn_prev",onClick:function(){return C(-g)},children:"Prev"}),Object(b.jsx)("button",{type:"button",className:"Carousel__btn Carousel__btn_next","data-cy":"next",onClick:function(){return C(g)},children:"Next"})]}),Object(b.jsxs)("div",{className:"Carousel__inputs",children:[Object(b.jsxs)("label",{className:"Carousel__label",children:["Image width",Object(b.jsx)("input",{type:"number",value:u,min:50,max:350,className:"Carousel__input",placeholder:"Enter numbers in px",onChange:function(e){var t=parseInt(e.target.value,10);j(t),C(0);var a=document.querySelectorAll(".Carousel__img");Array.from(a).forEach((function(e){if(e instanceof HTMLImageElement){var a,n=e.cloneNode(!0);n.style.width="".concat(t,"px"),null===(a=e.parentElement)||void 0===a||a.replaceChild(n,e)}}));var n=document.querySelector(".Carousel__container"),s=t*g;n.style.width="".concat(s,"px")}})]}),Object(b.jsxs)("label",{className:"Carousel__label",children:["Step",Object(b.jsx)("input",{type:"number",value:g,min:1,max:t.length-1,className:"Carousel__input",placeholder:"Enter numbers",onChange:function(e){var t=parseInt(e.target.value,10);_(t)}})]}),Object(b.jsxs)("label",{className:"Carousel__label",children:["Animation duration",Object(b.jsx)("input",{type:"number",value:O,step:500,min:500,max:2500,className:"Carousel__input",placeholder:"Enter numbers is seconds",onChange:function(e){var t=parseInt(e.target.value,10);x(t),document.querySelector(".Carousel__list").style.transition="transform ".concat(t,"ms ease-in")}})]})]})]})})},p=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.images;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(b.jsx)(j,{img:this.state.images})]})})}}]),a}(u.a.Component),d=p;s.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.575b91df.chunk.js.map