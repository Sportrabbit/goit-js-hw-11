import{s as c,i as u}from"./assets/vendor-8ce50246.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function p(o){const e="42321228-2dc7965d40466a0a646776a28",s="https://pixabay.com",l="/api/",t=`?key=${e}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,r=s+l+t;return fetch(r).then(i=>i.json())}let a;const n={form:document.querySelector(".form"),input:document.querySelector(".input-search"),button:document.querySelector(".button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function f(o){return o.map(e=>`
        <li class="gallery-item"><a href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class="info">
        <p><span class="info-text">Likes</span>${e.likes}</p>
        <p><span class="info-text">Views</span>${e.views}</p>
        <p><span class="info-text">Comments</span>${e.comments}</p>
        <p><span class="info-text">Downloads</span>${e.downloads}</p>
        </div>
        </li>
        `).join("")}function m(o){const e=f(o);n.gallery.innerHTML=e,typeof a<"u"?a.refresh():a=new c(".gallery a",{captionsData:"alt",captionsDelay:250})}n.loader.style.display="none";n.form.addEventListener("submit",y);function y(o){if(o.preventDefault(),n.input.value.trim()===""||n.input.value.trim().lenght===0)return;n.gallery.innerHTML="",n.loader.style.display="block";const e=o.target.elements.search.value;p(e).then(s=>{s.hits.lenght===0?(d(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInLeft"})):m(s.hits)}).catch(s=>{alert(s)}).finally(()=>{n.loader.style.display="none"}),o.target.reset()}function d(){n.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map