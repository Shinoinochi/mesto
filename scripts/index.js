import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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
const templateCard = document.querySelector('#gallery-template').content;
const inputNameFormCreateCard = document.querySelector('.popup__name');
const inputUrlFormCreateCard = document.querySelector('.popup__url');

function saveProfileForm(evt, handleFormSubmit) {
  evt.preventDefault();
  userInfo.setUserInfo({
    userName: handleFormSubmit.name,
    userAbout: handleFormSubmit.text
  });
  userPopupForm.close();
}

export function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}

buttonAddCard.addEventListener('click', handleOpenPopupCreateCard);
function handleOpenPopupCreateCard() {
  newPopupCard.open();
  formCreate.reset();
  cardFormValidator.clearInputValue();

}const popupCreateForm = new PopupWithForm(createNewCard, popupCreate);
const userPopupForm = new PopupWithForm(saveProfileForm, popupProfile);
const newPopupCard = new Popup(popupCreate);
const userInfo = new UserInfo({userNameSelector: username, userAboutSelector: role});

buttonPopupEdit.addEventListener('click', editProfilePopup);
function editProfilePopup() {
  userPopupForm.open();
  const currentUserData = userInfo.getUserInfo();
  inputNamePopupUser.value = currentUserData.name;
  inputRolePopupUser.value = currentUserData.about;
  profileFormValidator.clearInputValue();
}

function createCard(element, template) {
  const cardElement = new Card({ 
    data: element, 
    handleCardClick: (data) => {
      const image = new PopupWithImage(data, popupImage);
      image.open(data);
      image.setEventListeners();
  }
  }, 
  template);
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
  popupCreateForm.close();
  evt.target.reset();
}

const profileFormValidator = new FormValidator(forms, formProfile);
const cardFormValidator = new FormValidator(forms, formCreate);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardItems = new Section({
  data : initialCards,
  renderer : (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (data) => {
        const image = new PopupWithImage(data, popupImage);
        image.open(data);
        image.setEventListeners();
    }}, templateCard);
    const cardElement = card.generateCard();
    cardItems.addItem(cardElement);
  }
  
}, containerGallery)
userPopupForm.setEventListeners();
popupCreateForm.setEventListeners();
newPopupCard.setEventListeners();
cardItems.renderItems();


