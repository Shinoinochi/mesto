import Card from './Card.js';
import FormValidator from './FormValidator.js';

const container = document.querySelector('.page');
const buttonsClose = document.querySelectorAll('.popup__button-close');
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.profile-popup');
const formProfile = document.forms['profile-form']
const formCreate = document.forms['create-form']
const popupCreate = document.querySelector('.popup-create');
const popupEdit = document.querySelector('.profile__edit');
const username = document.querySelector('.profile__name');
const role = document.querySelector('.profile__role');
const inputNamePopupUser = document.querySelector('.popup__username');
const inputRolePopupUser = document.querySelector('.popup__role');
const containerGallery = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__add');
const popupImage = document.querySelector('.popup-image');
const popupImageTitle = document.querySelector('.popup-image__title');
export const templateCard = document.querySelector('#gallery-template').content;
const inputNameFormCreateCard = document.querySelector('.popup__name');
const inputUrlFormCreateCard = document.querySelector('.popup__url');
const popupImageFull = document.querySelector('.popup__image')


function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeKeyOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeKeyOverlay);
}

function saveProfileForm(evt) {
  evt.preventDefault();
  username.textContent = inputNamePopupUser.value;
  role.textContent = inputRolePopupUser.value;
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', saveProfileForm);

export function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}



export function openImagePopup(galleryCardTitle, galleryCardImage) {
  popupImageTitle.textContent = galleryCardTitle.textContent;
  openPopup(popupImage);
  popupImageFull.src = galleryCardImage.src;
  popupImageFull.setAttribute('alt', galleryCardTitle.textContent);
}

buttonAddCard.addEventListener('click', () => { 
  openPopup(popupCreate);
  cardFormValidator.clearInputValue();
});


function editProfilePopup() {
  openPopup(popupProfile);
  inputNamePopupUser.value = username.textContent;
  inputRolePopupUser.value = role.textContent;
  profileFormValidator.clearInputValue();
}

popupEdit.addEventListener('click', editProfilePopup);


buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popups.forEach((pop) => {
  pop.addEventListener('click', (evt) =>  closeClickOverlay(pop, evt));
});



function closeKeyOverlay(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
    closePopup(popup);
  }
}
function closeClickOverlay(pop, evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(pop);
  }
}

for (let j = 0; j < initialCards.length; j++) {
  createCard(initialCards[j], templateCard);
}
function createCard(element, template) {
  const cardElement = new Card(element, template);
  containerGallery.prepend(cardElement.generateCard());
}
function createNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: inputNameFormCreateCard.value,
    link: inputUrlFormCreateCard.value
  };
  createCard(card, templateCard);
  closePopup(popupCreate);
  evt.target.reset();
}
formCreate.addEventListener('submit', createNewCard);

const profileFormValidator = new FormValidator(forms, formProfile);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(forms, formCreate);
cardFormValidator.enableValidation();




