import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.getElementById('loader');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const query = input.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error:',
            message: 'Please enter a search term.',
            position: 'topRight',
        });
        return;
    }

    try {
        loader.style.display = 'block';
        const response = await fetchImages(query); // Pass the query to fetchImages
        const images = response; // response is the array of image objects
        if (typeof images === 'string') {
            iziToast.error({
                title: 'Error:',
                message: images,
                position: 'topRight',
            });
        } else {
            renderImages(images);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error:',
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        loader.style.display = 'none';
        form.reset();
    }
});
