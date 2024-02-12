'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotosByRequest } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import { refs } from './js/render-functions';


refs.loader.style.display = 'none';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    clearGallery();

    e.preventDefault();
    if (refs.input.value.trim() === '' || refs.input.value.trim().length === 0) {
        return;
    }
    refs.gallery.innerHTML = '';
    refs.loader.style.display = 'block';
    
    const userRequest = e.target.elements.search.value;
    getPhotosByRequest(userRequest)
    .then(data => {
        if (data.hits.lenght === 0) {
            clearGallery();
            iziToast.error({
                message:
                `Sorry, there are no images matching your search query. Please try again!`,
                position: 'topRight',
                transitionIn: 'fadeInLeft',
            });
        } else {
            renderPhotos(data.hits);
        }
    })
    .catch(err => {
        iziToast.error({
            message: err.message || 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            transitionIn: 'fadeInLeft',
        });
    })
    .finally(() => {
        refs.loader.style.display = 'none';
    });
    
    e.target.reset();
}

function clearGallery() {
    refs.gallery.innerHTML = '';
}