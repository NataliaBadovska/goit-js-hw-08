
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery');
galleryConteiner.insertAdjacentHTML('beforeend', createsGalleryMurkup(galleryItems));

galleryConteiner.addEventListener('click', onPaletteContainerClick);

function createsGalleryMurkup(gallery) {
    return gallery.map(({ original, preview, description }) => {
      
    return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
      />
     </a>
    </li>`;
        }).join('');
}

function onPaletteContainerClick(evt) {
  const isGalleryImg = evt.target.classList.contains('gallery__image');

  if (!isGalleryImg) {
    return;
  } else {
    evt.preventDefault();
 
  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  lightbox.open();

  }

}

