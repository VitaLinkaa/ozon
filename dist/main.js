!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){const t=document.querySelectorAll(".goods .card"),e=(document.getElementById("discount-checkbox"),document.getElementById("min")),n=document.getElementById("max");t.forEach(t=>{const o=t.querySelector(".card-price"),c=parseFloat(o.textContent);e.value&&c<e.value||n.value&&c>n.value?t.parentNode.style.display="none":t.parentNode.style.display=""})}n.r(e),function(t){const e=document.querySelector(".goods");return fetch("../db/db.json").then(t=>{if(t.ok)return t.json();throw new Error("Данные не были получены, ошибка:"+t.status)}).then(t=>t).catch(t=>{console.warn(t),e.innerHTML='<div style="color:red; font-size: 20px;">Что-то пошло не так!</div>'})}().then(t=>{!function(t){const e=document.querySelector(".goods");t.goods.forEach(t=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`\n                <div class="card" data-category="${t.category}">\n                  ${t.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n                  \n\t\t\t\t\t\t\t\t\t<div class="card-img-wrapper">\n\t\t\t\t\t\t\t\t\t\t<span class="card-img-top"\n\t\t\t\t\t\t\t\t\t\t\tstyle="background-image: url('${t.img}')"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="card-body justify-content-between">\n\t\t\t\t\t\t\t\t\t\t<div class="card-price" style ="${t.sale?"color: #D21D1D":""}" >${t.price} p.</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class="card-title">${t.title}</h5>\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-primary">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n    `,e.appendChild(n)})}(t),o(),document.querySelectorAll(".filter-check_checkbox").forEach(t=>{t.addEventListener("change",(function(){this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")}))}),function(){const t=document.getElementById("cart"),e=document.querySelector(".cart"),n=document.querySelector(".cart-close");t.addEventListener("click",()=>{e.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{e.style.display="none",document.body.style.overflow=""})}(),function(){const t=document.querySelectorAll(".goods .card"),e=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty"),o=document.querySelector(".counter");function c(){const t=e.querySelectorAll(".card"),c=e.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");let l=0;o.textContent=t.length,c.forEach(t=>{let e=parseFloat(t.textContent);l+=e,console.log(l)}),r.textContent=l,0!==t.length?n.remove():e.appendChild(n)}t.forEach(t=>{t.querySelector(".btn").addEventListener("click",()=>{const n=t.cloneNode(!0);e.appendChild(n),c();const o=n.querySelector(".btn");o.textContent="Удалить из корзины",o.addEventListener("click",()=>{n.remove(),c()})})})}(),function(){const t=document.querySelectorAll(".goods .card"),e=document.getElementById("discount-checkbox"),n=document.getElementById("min"),c=document.getElementById("max"),r=document.querySelector(".search-wrapper_input"),l=document.querySelector(".search-btn");e.addEventListener("click",()=>{t.forEach(t=>{e.checked?t.querySelector(".card-sale")||(t.parentNode.style.display="none"):t.parentNode.style.display=""})}),n.addEventListener("change",o),c.addEventListener("change",o),l.addEventListener("click",()=>{const e=new RegExp(r.value.trim(),"i");t.forEach(t=>{const n=t.querySelector(".card-title");e.test(n.textContent)?t.parentNode.style.display="":t.parentNode.style.display="none"}),r.value=""})}(),function(){const t=document.querySelectorAll(".goods .card"),e=document.querySelector(".catalog-list"),n=document.querySelector(".catalog-button"),o=e.querySelectorAll("li"),c=document.querySelector(".catalog"),r=new Set;t.forEach(t=>{r.add(t.dataset.category)}),r.forEach(t=>{const n=document.createElement("li");n.textContent=t,e.appendChild(n)}),n.addEventListener("click",e=>{c.style.display?c.style.display="":c.style.display="block","LI"===e.target.tagName&&(t.forEach(t=>{t.dataset.category===e.target.textContent?t.parentNode.style.display="":t.parentNode.style.display="none"}),o.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}))})}()})}]);