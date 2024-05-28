import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems as images } from "./gallery-items";
// Change code below this line
const container = document.querySelector(".gallery");

function createMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

container.innerHTML = createMarkup(images);

new SimpleLightbox(".gallery a", {});
