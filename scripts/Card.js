import { templateCard, like, openImagePopup } from './index.js';
export default class Card {
    constructor(item, template) {
        this._name = item.name;
        this._link =  item.link;
        this._template = template;
    }
    _getTemplate() {
        const baseGallery = templateCard
            .querySelector('.gallery__item')
            .cloneNode(true);
        return baseGallery;
    }
    _setListener() {
        this._card.querySelector('.gallery__delete').addEventListener('click', () => this._card.closest('.gallery__item').remove());
        this._galleryImage.addEventListener('click', () => openImagePopup(this._galleryName, this._galleryImage));
        this._card.querySelector('.gallery__like').addEventListener('click', like);
        return this._card;
    }

    generateCard() {
        this._card = this._getTemplate();
        this._galleryName = this._card.querySelector('.gallery__title');
        this._galleryImage = this._card.querySelector('.gallery__image');
        this._galleryImage.setAttribute('src', this._link);
        this._galleryImage.setAttribute('alt', this._name);
        this._galleryName.textContent = this._name;
        this._card = this._setListener();
        return this._card;
    }
    
}

