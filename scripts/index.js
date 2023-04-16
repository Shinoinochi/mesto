import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const container = document.querySelector('.page');
const buttonsClose = document.querySelectorAll('.popup__button-close');
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.profile-popup');
const formProfile = document.forms['profile-form']
const formCreate = document.forms['create-form']
const popupCreate = document.querySelector('.popup-create');
const buttonPopupEdit = document.querySelector('.profile__edit');
const username = document.querySelector('.profile__name');
const role = document.querySelector('.profile__role');
const inputNamePopupUser = document.querySelector('.popup__username');
const inputRolePopupUser = document.querySelector('.popup__role');
const containerGallery = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__add');
const popupImage = document.querySelector('.popup-image');
const popupImageTitle = document.querySelector('.popup-image__title');
const templateCard = document.querySelector('#gallery-template').content;
const inputNameFormCreateCard = document.querySelector('.popup__name');
const inputUrlFormCreateCard = document.querySelector('.popup__url');
const popupImageFull = document.querySelector('.popup__image')


// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   window.addEventListener('keydown', closeKeyOverlay);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   window.removeEventListener('keydown', closeKeyOverlay);
// }

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



export function openImagePopup(data) {
  newPopupImage.open();
  newPopupImage.setEventListeners();
  popupImageTitle.textContent = data.name;
  popupImageFull.src = data.link;
  popupImageFull.setAttribute('alt', data.name);
}

function handleOpenPopupCreateCard() {
  newPopupCard.open();
  newPopupCard.setEventListeners();
  formCreate.reset();
  cardFormValidator.clearInputValue();
}

buttonAddCard.addEventListener('click', handleOpenPopupCreateCard);
const newPopupCard = new Popup(popupCreate);
const newPopupForm = new Popup(popupProfile);
const newPopupImage = new Popup(popupImage);
function editProfilePopup() {
  newPopupForm.open();
  newPopupForm.setEventListeners();
  inputNamePopupUser.value = username.textContent;
  inputRolePopupUser.value = role.textContent;
  profileFormValidator.clearInputValue();
}

buttonPopupEdit.addEventListener('click', editProfilePopup);


buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  //button.addEventListener('click', () => closePopup(popup));
});

// popups.forEach((pop) => {
//   pop.addEventListener('click', (evt) =>  closeClickOverlay(pop, evt));
// });



function closeKeyOverlay(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
    closePopup(popup);
  }
}
// function closeClickOverlay(pop, evt) {
//   if (evt.currentTarget === evt.target) {
//     closePopup(pop);
//   }
// }


function createCard(element, template) {
  const cardElement = new Card(element, template);
  const newCard = cardElement.generateCard();
  return newCard;
}
function renderCard(card, template, container) {
  container.prepend(createCard(card, template));
}

function createNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: inputNameFormCreateCard.value,
    link: inputUrlFormCreateCard.value
  };
  renderCard(card, templateCard, containerGallery);
  closePopup(popupCreate);
  evt.target.reset();
}
// initialCards.forEach(item => renderCard(item, templateCard, containerGallery));

formCreate.addEventListener('submit', createNewCard);

const profileFormValidator = new FormValidator(forms, formProfile);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(forms, formCreate);
cardFormValidator.enableValidation();




const cardItems = new Section({
  data : initialCards,
  renderer : (item) => {
    const card = new Card(item, templateCard);
    const cardElement = card.generateCard();
    cardItems.addItem(cardElement);
  }
  
}, containerGallery)
cardItems.renderItems();
