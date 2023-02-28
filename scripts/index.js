let container = document.querySelector('.page');
let popUpClosed = container.querySelector('.popup__button-close');
let popUp = container.querySelector('.popup');
let popUpEdit = container.querySelector('.profile__edit');
let Username = container.querySelector('.profile__name');
let Role = container.querySelector('.profile__role');
let popupUsername = container.querySelector('.popup__username');
let popupRole = container.querySelector('.popup__role');
let popupForm = container.querySelector('.popup__form');
let cardName = container.querySelectorAll('.gallery__title');
let cardImage = container.querySelectorAll('.gallery__image');
let likes = container.querySelectorAll('.gallery__like');
let galleryItems = container.querySelectorAll('.gallery__item');
let galleryDelete = container.querySelectorAll('.gallery__delete');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function popUpClose() {
    popUp.classList.remove('popup_opened');
}

function popUpOpen() {
    popUp.classList.add('popup_opened');
    popupUsername.value = Username.textContent;
    popupRole.value = Role.textContent;
}

function popUpSaved(evt) {
    evt.preventDefault();
    Username.textContent = popupUsername.value;
    Role.textContent = popupRole.value;
    popUp.classList.remove('popup_opened');
}



likes.forEach((likes) => likes.addEventListener('click', () => likes.classList.toggle('gallery__like_active')));
galleryDelete.forEach((galleryDelete) => galleryDelete.addEventListener('click', () => galleryDelete.closest('.gallery__item').remove()));


popUpEdit.addEventListener('click', popUpOpen);
popUpClosed.addEventListener('click', popUpClose);
popupForm.addEventListener('submit', popUpSaved);




