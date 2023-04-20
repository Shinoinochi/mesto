import '../styles/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { validationConfig } from '../utils/validate.js';
import { initialCards } from '../utils/initialCards.js';
const formProfile = document.forms['profile-form']
const formCreate = document.forms['create-form']
const buttonPopupEdit = document.querySelector('.profile__edit');
const inputNamePopupUser = document.querySelector('.popup__username');
const inputRolePopupUser = document.querySelector('.popup__role');
const buttonAddCard = document.querySelector('.profile__add');

function saveProfileForm(handleFormSubmit) {
  userInfo.setUserInfo({
    userName: handleFormSubmit.name,
    userAbout: handleFormSubmit.text
  });
}

export function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}

buttonAddCard.addEventListener('click', handleOpenPopupCreateCard);
function handleOpenPopupCreateCard() {
  popupCreateCard.open();
  cardFormValidator.hideInputsErrors();
  cardFormValidator.checkButton();
}
const popupCreateCard = new PopupWithForm(createNewCard, '.popup-create');
const userPopupForm = new PopupWithForm(saveProfileForm, '.profile-popup');
const userInfo = new UserInfo({userNameSelector: '.profile__name', userAboutSelector: '.profile__role'});

buttonPopupEdit.addEventListener('click', editProfilePopup);
function editProfilePopup() {
  userPopupForm.open();
  const currentUserData = userInfo.getUserInfo();
  inputNamePopupUser.value = currentUserData.name;
  inputRolePopupUser.value = currentUserData.about;
  profileFormValidator.hideInputsErrors();
}

function createCard(item) {
  const card = renderCard(item);
  const newCard = card.generateCard();
  return newCard;
}

function createNewCard(data) {
  const card = {
    name: data.name,
    link: data.text
  };
  cardItems.addItem(createCard(card));
}
const image = new PopupWithImage('.popup-image');
function renderCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (data) => {
      
      image.open(data);
      image.setEventListeners();
  }
  }, 
  '#gallery-template');
  return card;
}

const profileFormValidator = new FormValidator(validationConfig, formProfile);
const cardFormValidator = new FormValidator(validationConfig, formCreate);
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardItems = new Section({
  data : initialCards,
  renderer : (item) => {
    const card = renderCard(item);
    const cardElement = card.generateCard();
    cardItems.addItem(cardElement);
  }
  
}, '.gallery')
userPopupForm.setEventListeners();
popupCreateCard.setEventListeners();
cardItems.renderItems();


