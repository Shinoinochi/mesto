import '../styles/index.css';
import { renderLoading } from '../utils/utils.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { validationConfig } from '../utils/validate.js';
import PopupConfirm from '../components/PopupConfirm.js';
const formProfile = document.forms['profile-form'];
const formCreate = document.forms['create-form'];
const formAvatar = document.forms['avatar-form'];
const buttonPopupEdit = document.querySelector('.profile__edit');
const inputNamePopupUser = document.querySelector('.popup__username');
const inputRolePopupUser = document.querySelector('.popup__role');
const buttonAddCard = document.querySelector('.profile__add');
const userLogoApi = document.querySelector('.profile__image');
const userLogo = document.querySelector('.profile__avatar-button');
let userId;

const popupConfirm = new PopupConfirm(handleCorfirm, '.popup-confirm');
const popupCreateCard = new PopupWithForm(createNewCard, '.popup-create');
const userPopupForm = new PopupWithForm(saveProfileForm, '.profile-popup');
const userAvatarForm = new PopupWithForm(setAvatar ,'.popup-avatar');
const userInfo = new UserInfo({userNameSelector: '.profile__name', userAboutSelector: '.profile__role'});
const popupImage = new PopupWithImage('.popup-image');
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: '6b7c306a-38f3-4456-bb25-4b5474285830',
    'Content-Type': 'application/json'
  },
});

const cardItems = new Section({
  renderer : (item) => {
    const cardElement = createCard(item);
    cardItems.addItem(cardElement);
  }
}, '.gallery');
  
function setAvatar(data) {
  api.setUserLogo(data.text)
  .then(() => {
    userLogoApi.src = data.text;
    userAvatarForm.close();
  })
  .catch((err) => {
    console.log(err);
  });
}

userLogo.addEventListener('click', handleOpenPopupAvatar);
function handleOpenPopupAvatar() {
  userAvatarForm.open();
  profileAvatarFormValidator.hideInputsErrors();
  profileAvatarFormValidator.checkButton();
}

function saveProfileForm(handleFormSubmit, submitButton) {
  renderLoading(true, submitButton)
  api.editUser(handleFormSubmit.name, handleFormSubmit.link)
  .then(() => {
    userInfo.setUserInfo({
      userName: handleFormSubmit.name,
      userAbout: handleFormSubmit.link
    });
    userPopupForm.close();
  })
  .catch((err) => {
    console.log(err.status);
  })
  .finally(() => {
    renderLoading(false, submitButton);
  });
}

buttonAddCard.addEventListener('click', handleOpenPopupCreateCard);
function handleOpenPopupCreateCard() {
  popupCreateCard.open();
  cardFormValidator.hideInputsErrors();
  cardFormValidator.checkButton();
}

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
  card.check(newCard, item);
  card.updateLikesData(item.likes, newCard);
  return newCard;
}

function createNewCard(data, submitButton) {
  renderLoading(true, submitButton)
  api.addNewCard(data)
  .then(res => {
    cardItems.addItem(createCard(res));
    popupCreateCard.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, submitButton)
  });  
}

const handleLikeClick = (cardApi) => {
  if(cardApi._cardsData.likes.find((element) => element._id === userId)) {
    api.getLikes('DELETE', cardApi._cardsData._id)
    .then((data) => {
      cardApi.like(false, data);
    }).catch((err) => {
      console.log(err);
    });
  }
  else {
    api.getLikes('PUT', cardApi._cardsData._id)
    .then((data) => {
      cardApi.like(true, data);
    }).catch((err) => {
      console.log(err);
    });
  }
}

function handleCorfirm(card, cardApi) {
 
  api.deleteCard(cardApi._id)
  .then(() => {
    card.remove();
    popupConfirm.close();
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleDeleteCard(data, cardApi) {
  popupConfirm.getData(data, cardApi);
  popupConfirm.open();
}

function renderCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (data) => {
      popupImage.open(data);
  },
    handleDeleteCard,
    handleLikeClick,
    userId
  }, 
  '#gallery-template');
  return card;
}

const profileFormValidator = new FormValidator(validationConfig, formProfile);
const cardFormValidator = new FormValidator(validationConfig, formCreate);
const profileAvatarFormValidator = new FormValidator(validationConfig, formAvatar);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
profileAvatarFormValidator.enableValidation();

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
.then(items => {
  userInfo.setUserInfo({
    userName: items[0].name,
    userAbout: items[0].about
  });
  userLogoApi.src = items[0].avatar;
  userId = items[0]._id;
  cardItems.renderItems(items[1]);
})
.catch((err) => {
  console.log(err);
});

popupConfirm.setEventListeners();
userPopupForm.setEventListeners();
popupCreateCard.setEventListeners();
userAvatarForm.setEventListeners();
popupImage.setEventListeners();

