let container = document.querySelector('.page');
let popUpClosed = container.querySelector('.popup__button-close');
let popUp = container.querySelector('.popup');
let popUpAdd = container.querySelector('.popup-create');
let popUpAddClose = container.querySelector('.popup__buttonAdd-close');
let popUpCreate = container.querySelector('.popup-create');
let popUpEdit = container.querySelector('.profile__edit');
let Username = container.querySelector('.profile__name');
let Role = container.querySelector('.profile__role');
let popupUsername = container.querySelector('.popup__username');
let popupRole = container.querySelector('.popup__role');
let popupForm = container.querySelector('.popup__form');
const galleryContainer = container.querySelector('.gallery');
let cardName = container.querySelectorAll('.gallery__title');
let cardImage = container.querySelectorAll('.gallery__image');
let likes = container.querySelectorAll('.gallery__like');
let galleryItems = container.querySelectorAll('.gallery__item');
let galleryDelete = container.querySelectorAll('.gallery__delete');
const buttonCreate = container.querySelector('.popup__button-create');
const buttonPopAdd = container.querySelector('.profile__add');
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
function update() {

  likes = document.querySelectorAll('.gallery__like');
  galleryDelete = document.querySelectorAll('.gallery__delete');
  console.log(likes, galleryDelete);
}
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
function popUpAddOpen() {
  popUpAdd.classList.add('popup_opened');
}
function buttonPopUpAddClose() {
  popUpAdd.classList.remove('popup_opened');
}
function create(nameValue, urlValue) {
  const template = document.querySelector('#gallery-template').content;
  console.log(template);
  const galleryItem = template.querySelector('.gallery__item').cloneNode(true);
  galleryItem.querySelector('.gallery__title').textContent = nameValue;
  galleryItem.querySelector('.gallery__image').src = urlValue;
  galleryContainer.prepend(galleryItem);
  popUpAdd.classList.remove('popup_opened');
  console.log(likes, galleryDelete);
}





buttonCreate.addEventListener('click', function() {
  const name = container.querySelector('.popup__name');
  const url = container.querySelector('.popup__url');
  create(name.value, url.value);
  update();
  likes.forEach((likes) => likes.addEventListener('click', () => likes.classList.toggle('gallery__like_active')));
  galleryDelete.forEach((galleryDelete) => galleryDelete.addEventListener('click', () => galleryDelete.closest('.gallery__item').remove()));
});

likes.forEach((likes) => likes.addEventListener('click', () => likes.classList.toggle('gallery__like_active')));
galleryDelete.forEach((galleryDelete) => galleryDelete.addEventListener('click', () => galleryDelete.closest('.gallery__item').remove()));
buttonPopAdd.addEventListener('click', popUpAddOpen);
popUpAddClose.addEventListener('click', buttonPopUpAddClose);
popUpEdit.addEventListener('click', popUpOpen);
popUpClosed.addEventListener('click', popUpClose);
popupForm.addEventListener('submit', popUpSaved);




