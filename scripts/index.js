const container = document.querySelector('.page');
const profileCloseButton = container.querySelector('.profile__close-button');
// const popUp = container.querySelector('.popup');

const profilePopup = container.querySelector('.profile-popup');

const popUpAdd = container.querySelector('.popup-create');
let popUpAddClose = container.querySelector('.popup__buttonAdd-close');
let popUpCreate = container.querySelector('.popup-create');
let popUpEdit = container.querySelector('.profile__edit');
let username = container.querySelector('.profile__name');
let role = container.querySelector('.profile__role');
let popupUsername = container.querySelector('.popup__username');
let popupRole = container.querySelector('.popup__role');
let popupForms = container.querySelectorAll('.popup__form');
const galleryContainer = container.querySelector('.gallery');


let cardName = container.querySelectorAll('.gallery__title');
let cardImage = container.querySelectorAll('.gallery__image');
let likes = container.querySelectorAll('.gallery__like');

let galleryItems = container.querySelectorAll('.gallery__item');
let galleryDelete = container.querySelectorAll('.gallery__delete');
const buttonCreate = container.querySelector('.popup__button-create');
const buttonPopAdd = container.querySelector('.profile__add');
const popupImageContainer = container.querySelector('.popup-image');
const galleryImage = container.querySelectorAll('.gallery__image');
const galleryTitle = container.querySelector('.gallery__title');
const popupTitle = container.querySelector('.popup-image__title');
const popupImageButton = container.querySelector('.popup__button-image');
const template = document.querySelector('#gallery-template').content;
let popupImage;
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
  galleryItems = container.querySelectorAll('.gallery__item');
  likes = document.querySelectorAll('.gallery__like');
  galleryDelete = document.querySelectorAll('.gallery__delete');
  updateImages();
}
for (let j = 0; j < initialCards.length; j++) {
  let baseGallery = template.querySelector('.gallery__item').cloneNode(true);
  baseGallery.querySelector('.gallery__title').textContent = initialCards[j].name;
  baseGallery.querySelector('.gallery__image').setAttribute('src', initialCards[j].link);
  baseGallery.querySelector('.gallery__image').setAttribute('alt', initialCards[j].name);
  galleryContainer.prepend(baseGallery);
  update();
}

function closeProfile() {
    profilePopup.classList.remove('popup_opened');
}

function popUpOpen() {
    profilePopup.classList.add('popup_opened');
    popupUsername.value = username.textContent;
    popupRole.value = role.textContent;
}

function popUpAddOpen() {
  popUpAdd.classList.add('popup_opened');
}

function buttonPopUpAddClose() {
  popUpAdd.classList.remove('popup_opened');
}

function create(nameValue, urlValue) {
  const template = document.querySelector('#gallery-template').content;
  const galleryItem = template.querySelector('.gallery__item').cloneNode(true);
  galleryItem.querySelector('.gallery__title').textContent = nameValue;
  galleryItem.querySelector('.gallery__image').setAttribute('src', urlValue);
  galleryItem.querySelector('.gallery__image').setAttribute('alt', nameValue);
  galleryContainer.prepend(galleryItem);
  popUpAdd.classList.remove('popup_opened');
}

function popupImageClose() {
  popupImageContainer.classList.remove('popup_opened');
}

function like(evt) {
  const likeItem = evt.currentTarget;
  if (likeItem.classList.contains('gallery__like_active')) {
    likeItem.classList.remove('gallery__like_active');
  }
  else {
    likeItem.classList.add('gallery__like_active');
  }
}

function createNew(evt) {
  evt.preventDefault();
  const name = container.querySelector('.popup__name');
  const url = container.querySelector('.popup__url');
  create(name.value, url.value);
  update();
  likes.forEach((likes) => likes.addEventListener('click', like));
  galleryDelete.forEach((galleryDelete) => galleryDelete.addEventListener('click', () => galleryDelete.closest('.gallery__item').remove()));
  popUpAdd.classList.remove('popup_opened');
  name.value = '';
  url.value = '';
}

function openFull(event) {
  const titleG = event.currentTarget.closest(".gallery__item").querySelector('.gallery__title');
  popupTitle.textContent = titleG.textContent;
  popupImage = event.currentTarget;
  popupImageContainer.classList.add('popup_opened')
  document.querySelector('.popup__image').src = popupImage.src;
  update();
}

function updateImages() {
  for (const imageIndex of container.querySelectorAll('.gallery__image')) {
    imageIndex.addEventListener('click', openFull);
  }
}
updateImages();

likes.forEach((likes) => likes.addEventListener('click', like));

galleryDelete.forEach((galleryDelete) => galleryDelete.addEventListener('click', () => galleryDelete.closest('.gallery__item').remove()));
buttonPopAdd.addEventListener('click', popUpAddOpen);
popUpAddClose.addEventListener('click', buttonPopUpAddClose);
popUpEdit.addEventListener('click', popUpOpen);
popupImageButton.addEventListener('click', popupImageClose);
profileCloseButton.addEventListener('click', closeProfile);

function popUpSaved(evt) {
  evt.preventDefault();
  username.textContent = popupUsername.value;
  role.textContent = popupRole.value;
  profilePopup.classList.remove('popup_opened');
}

popupForms[0].addEventListener('submit', popUpSaved);
popupForms[1].addEventListener('submit', createNew);



