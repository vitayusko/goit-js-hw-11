import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// function renderImages(images) {
//     const gallery = document.querySelector('.gallery');
//     gallery.innerHTML = '';
//     if (images.length === 0) {
//         iziToast.error({
//             message: 'Sorry, there are no images matching your search. Please try again!',
//         });
//         return;
//     }
//     const galleryHtml = images
//         .map(img => {
//             return `
//                 <li class="gallery-item">
//                     <a class="gallery-link" href="${img.largeImageURL}">
//                         <img src="${img.webformatURL}" alt="${img.tags}">
//                     </a>
//                     <ul class="item-info">
//                         <li class= "item-list"><h3>Likes</h3><p>${img.likes}</p></li>
//                         <li class= "item-list"><h3>Views</h3><p>${img.views}</p></li>
//                         <li class= "item-list"><h3>Comments</h3><p>${img.comments}</p></li>
//                         <li class= "item-list"><h3>Downloads</h3><p>${img.downloads}</p></li>
//                     </ul>
//                 </li>
//             `;
//         })
//         .join('');
//     gallery.innerHTML = `<ul class="gallery">${galleryHtml}</ul>`;

//     new SimpleLightbox('.gallery a', {
//         captionsData: 'alt',
//         captionDelay: 300,
//     });
// }

// export default renderImages;

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
});

function renderImages(images) {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
    if (images.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search. Please try again!',
        });
        return;
    }
    const galleryHtml = images
        .map(img => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${img.largeImageURL}">
                        <img src="${img.webformatURL}" alt="${img.tags}">
                    </a>
                    <ul class="item-info">
                        <li class="item-list"><h3>Likes</h3><p>${img.likes}</p></li>
                        <li class="item-list"><h3>Views</h3><p>${img.views}</p></li>
                        <li class="item-list"><h3>Comments</h3><p>${img.comments}</p></li>
                        <li class="item-list"><h3>Downloads</h3><p>${img.downloads}</p></li>
                    </ul>
                </li>
            `;
        })
        .join('');
    galleryElement.innerHTML = galleryHtml;

    gallery.refresh();
}

export default renderImages;
