import Card from './Card.js';
import FormValidator from './FormValidator.js';

const container = document.querySelector('.page');
const closeButtons = document.querySelectorAll('.popup__button-close');
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.profile-popup');
const profileForm = document.forms['profile-form']
const createForm = document.forms['create-form']
const popupCreate = document.querySelector('.popup-create');
const popUpEdit = document.querySelector('.profile__edit');
const username = document.querySelector('.profile__name');
const role = document.querySelector('.profile__role');
const popupUsername = document.querySelector('.popup__username');
const popupRole = document.querySelector('.popup__role');
const galleryContainer = document.querySelector('.gallery');
const cardButtonAdd = document.querySelector('.profile__add');
const imagePopup = document.querySelector('.popup-image');
const popupImageTitle = document.querySelector('.popup-image__title');
export const templateCard = document.querySelector('#gallery-template').content;
const popupCreateName = document.querySelector('.popup__name');
const popupCreateUrl = document.querySelector('.popup__url');
const popupImageFull = document.querySelector('.popup__image')


function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeKeyOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeKeyOverlay);
  if(popup.classList.contains('profile-popup')) {
    profileFormValidator.clearInputValue(popup);
  }
  else {
    cardFormValidator.clearInputValue(popup);
  }
}

function saveProfileForm(evt) {
  evt.preventDefault();
  username.textContent = popupUsername.value;
  role.textContent = popupRole.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', saveProfileForm);

export function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}



export function openImagePopup(galleryCardTitle, galleryCardImage) {
  popupImageTitle.textContent = galleryCardTitle.textContent;
  openPopup(imagePopup);
  popupImageFull.src = galleryCardImage.src;
  popupImageFull.setAttribute('alt', galleryCardTitle.textContent);
}

cardButtonAdd.addEventListener('click', () => openPopup(popupCreate));


function editProfilePopup() {
  openPopup(profilePopup);
  popupUsername.value = username.textContent;
  popupRole.value = role.textContent;
}

popUpEdit.addEventListener('click', editProfilePopup);


closeButtons.forEach((button) => {
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
  const cardElement = new Card(initialCards[j], templateCard);
  galleryContainer.prepend(cardElement.generateCard());
}

function createNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: popupCreateName.value,
    link: popupCreateUrl.value
  };
  const cardElement = new Card(card, templateCard);
  galleryContainer.prepend(cardElement.generateCard());
  closePopup(popupCreate);
  evt.target.reset();
}
createForm.addEventListener('submit', createNewCard);

const profileFormValidator = new FormValidator(forms, profileForm);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(forms, createForm);
cardFormValidator.enableValidation();




