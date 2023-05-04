export default class Card {
    constructor({data, handleCardClick, handleDeleteCard, handleLikeClick, userId}, templateSelector) {
        this._cardsData = data;
        this._name = data.name;
        this._link =  data.link;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._template = templateSelector;
        this._handleCardLike = handleLikeClick;
        this._userId = userId
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
        this._card.querySelector('.gallery__delete').addEventListener('click', () => { this._handleDeleteCard(this._card, this._cardsData)});
        this._galleryImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
        this._buttonLike.addEventListener('click', () => this._handleCardLike(this));
        return this._card;
    }
    updateLikesData(likeData, card) {
        if (likeData.find((element) => element._id === "26d399721e24ac5ac294ce39")) {
            this._checkLike(likeData);
        }
        card.querySelector('.gallery__like-count').textContent = likeData.length;
        
    }
    _checkLike(isLiked) {
        if (isLiked) {
            this._buttonLike.classList.add('gallery__like_active');
        }
        else { 
            this._buttonLike.classList.remove('gallery__like_active');
        }
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
    check(card, item) {
        if(item.owner._id !== "26d399721e24ac5ac294ce39") {
           card.querySelector('.gallery__delete').remove();
        }
    }
    like(isLiked, cardApi) {
        this._cardsData = cardApi;
        this._card.querySelector('.gallery__like-count').textContent = this._cardsData.likes.length;
        this._checkLike(isLiked);
    }
}

