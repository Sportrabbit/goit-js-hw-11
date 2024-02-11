'use strict'

import simpleLightbox from "simplelightbox";

let lightbox;

export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.input-search'),
    button: document.querySelector('.button'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}

export function photosTemplate(photos) {
    return photos
    .map(data => {
        return `
        <li class="gallery-item"><a href="${data.largeImageURL}">
        <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
        <div class="info">
        <p><span class="info-text">Likes</span>${data.likes}</p>
        <p><span class="info-text">Views</span>${data.views}</p>
        <p><span class="info-text">Comments</span>${data.comments}</p>
        <p><span class="info-text">Downloads</span>${data.downloads}</p>
        </div>
        </li>
        `;
    })
    .join('');
}

export function renderPhotos(photos) {
    const galleryMarkup = photosTemplate(photos);
    refs.gallery.innerHTML = galleryMarkup;

    if (typeof lightbox !== 'undefined') {
        lightbox.refresh();
    } else {
        lightbox = new simpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionsDelay: 250,
        });
    }
}