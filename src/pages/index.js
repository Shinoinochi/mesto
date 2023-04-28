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

fetch('https://nomoreparties.co/v1/cohort-65/users/me',
{
  headers: {
    authorization: '6b7c306a-38f3-4456-bb25-4b5474285830'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 

function saveProfileForm(handleFormSubmit) {
  userInfo.setUserInfo({
    userName: handleFormSubmit.name,
    userAbout: handleFormSubmit.text
  });
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
    const cardElement = createCard(item);
    cardItems.addItem(cardElement);
  }
  
}, '.gallery')
userPopupForm.setEventListeners();
popupCreateCard.setEventListeners();
image.setEventListeners();
cardItems.renderItems();


