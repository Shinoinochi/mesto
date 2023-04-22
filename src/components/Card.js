export default class Card {
    constructor({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link =  data.link;
        this._handleCardClick = handleCardClick;
        this._template = templateSelector;
    }
    _getTemplate() {
        const baseGallery = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        return baseGallery;
    }
    _setListener() {
        this._card.querySelector('.gallery__delete').addEventListener('click', () => this._card.remove());
        this._galleryImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
        this._buttonLike.addEventListener('click', () => this._buttonLike.classList.toggle('gallery__like_active'));
        return this._card;
    }

    generateCard() {
        this._card = this._getTemplate();
        this._galleryName = this._card.querySelector('.gallery__title');
        this._galleryImage = this._card.querySelector('.gallery__image');
        this._galleryImage.setAttribute('src', this._link);
        this._galleryImage.setAttribute('alt', this._name);
        this._galleryName.textContent = this._name;
        this._buttonLike = this._card.querySelector('.gallery__like');
        this._card = this._setListener();
        return this._card;
    }
    
}

