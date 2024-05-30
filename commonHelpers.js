import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(i){const s=`https://pixabay.com/api/?key=44095628-d0027d9df3d6429662d87f006&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;console.log("url",s);try{return await(await fetch(s)).json()}catch(e){throw e}}function m(i){const o=document.querySelector(".gallery");if(o.innerHTML="",i.length===0){iziToast.error({message:"Sorry, there are no images matching your search. Please try again!"});return}const s=i.map(e=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img src="${e.webformatURL}" alt="${e.tags}">
                    </a>
                    <ul class="item-info">
                        <li class= "item-list"><h3>Likes</h3><p>${e.likes}</p></li>
                        <li class= "item-list"><h3>Views</h3><p>${e.views}</p></li>
                        <li class= "item-list"><h3>Comments</h3><p>${e.comments}</p></li>
                        <li class= "item-list"><h3>Downloads</h3><p>${e.downloads}</p></li>
                    </ul>
                </li>
            `).join("");o.innerHTML=`<ul class="gallery">${s}</ul>`,new u(".gallery a",{captionsData:"alt",captionDelay:300})}const a=document.querySelector(".form"),f=document.querySelector(".input"),c=document.getElementById("loader");a.addEventListener("submit",async i=>{i.preventDefault();const o=f.value.trim();if(o===""){l.error({title:"Error:",message:"Please enter a search term.",position:"topRight"});return}try{c.style.display="block";const e=(await p(o)).hits;typeof e=="string"?l.error({title:"Error:",message:e,position:"topRight"}):m(e)}catch{l.error({title:"Error:",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{c.style.display="none",a.reset()}});
//# sourceMappingURL=commonHelpers.js.map
