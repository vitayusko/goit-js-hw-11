import{S as u,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(n){const s=`https://pixabay.com/api/?key=44064586-c85ee0d0f4282a04fbc0070f7&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;console.log("url",s);try{return await(await fetch(s)).json()}catch(e){throw e}}function f(n){const o=document.querySelector(".gallery");if(o.innerHTML="",n.length===0){iziToast.error({message:"Sorry, there are no images matching your search. Please try again!"});return}const s=n.map(e=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img src="${e.webformatURL}" alt="${e.tags}">
                    </a>
                    <ul class="item-info">
                        <li><h3>Likes</h3><p>${e.likes}</p></li>
                        <li><h3>Views</h3><p>${e.views}</p></li>
                        <li><h3>Comments</h3><p>${e.comments}</p></li>
                        <li><h3>Downloads</h3><p>${e.downloads}</p></li>
                    </ul>
                </li>
            `).join("");o.innerHTML=`<ul class="gallery">${s}</ul>`,new u(".gallery a",{captionsData:"alt",captionDelay:300})}const a=document.querySelector(".form"),y=document.querySelector(".input"),c=document.getElementById("loader");a.addEventListener("submit",async n=>{n.preventDefault();const o=y.value.trim();if(o===""){l.error({title:"Error:",message:"Please enter a search term.",position:"topRight"});return}try{c.style.display="block";const e=await p(o);typeof e=="string"?l.error({title:"Error:",message:e,position:"topRight"}):f(e)}catch{l.error({title:"Error:",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{c.style.display="none",a.reset()}});
//# sourceMappingURL=commonHelpers.js.map
