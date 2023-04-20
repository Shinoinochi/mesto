export default class Card {
    constructor({data, handleCardClick}, template) {
        this._name = data.name;
        this._link =  data.link;
        this._handleCardClick = handleCardClick;
        this._template = document.querySelector(template).content;
    }
    _getTemplate() {
        const baseGallery = this._template
            .querySelector('.gallery__item')
            .cloneNode(true);
        return baseGallery;
    }
    _setListener(like) {
        this._card.querySelector('.gallery__delete').addEventListener('click', () => this._card.closest('.gallery__item').remove());
        this._galleryImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
        this._card.querySelector('.gallery__like').addEventListener('click', like);
        return this._card;
    }

    generateCard(like) {
        this._card = this._getTemplate();
        this._galleryName = this._card.querySelector('.gallery__title');
        this._galleryImage = this._card.querySelector('.gallery__image');
        this._galleryImage.setAttribute('src', this._link);
        this._galleryImage.setAttribute('alt', this._name);
        this._galleryName.textContent = this._name;
        this._card = this._setListener(like);
        return this._card;
    }
    
}

