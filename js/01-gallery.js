import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`).join("");

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

console.log(galleryItems);

gallery.addEventListener("click", openOriginalImg);

function openOriginalImg(e) {
    e.preventDefault();
    if (e.target.tagName !== "IMG") {
        return;
    }

    const dataSrc = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${dataSrc}">
`)
instance.show()

    gallery.addEventListener("keydown", onCloseEsc);

    function onCloseEsc(e) {
        if (e.code === 'Escape') {
            gallery.removeEventListener("keydown", onCloseEsc);
            instance.close()
        }
    }
}

