const container = document.querySelector('.page');
const profileCloseButton = container.querySelector('.profile__close-button');
const popup = container.querySelector('.popup');
const profilePopup = container.querySelector('.profile-popup');
const profileForm = document.forms['profile-form']
const createForm = document.forms['create-form']
const popUpAddClose = container.querySelector('.popup__buttonAdd-close');
const popupCreate = container.querySelector('.popup-create');
const popUpEdit = container.querySelector('.profile__edit');
const username = container.querySelector('.profile__name');
const role = container.querySelector('.profile__role');
const popupUsername = container.querySelector('.popup__username');
const popupRole = container.querySelector('.popup__role');
const galleryContainer = container.querySelector('.gallery');
const cardButtonAdd = container.querySelector('.profile__add');
const imagePopup = container.querySelector('.popup-image');
const popupImageTitle = container.querySelector('.popup-image__title');
const popupImageButton = container.querySelector('.popup__button-image');
const templateCard = document.querySelector('#gallery-template').content;
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


function createCard(item) {
  let baseGallery = templateCard.querySelector('.gallery__item').cloneNode(true);
  let galleryCardTitle = baseGallery.querySelector('.gallery__title');
  let galleryCardImage = baseGallery.querySelector('.gallery__image');
  baseGallery.querySelector('.gallery__delete').addEventListener('click', () => baseGallery.closest('.gallery__item').remove());
  galleryCardImage.addEventListener('click', openImagePopup);
  baseGallery.querySelector('.gallery__like').addEventListener('click', like);
  galleryCardImage.setAttribute('src', item.link);
  galleryCardTitle.setAttribute('alt', item.name);
  galleryCardTitle.textContent = item.name;
  return baseGallery;
}

for (let j = 0; j < initialCards.length; j++) {
  let cardElement = createCard(initialCards[j]);
  galleryContainer.prepend(cardElement);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function saveProfilePopup(evt) {
  evt.preventDefault();
  username.textContent = popupUsername.value;
  role.textContent = popupRole.value;
  closePopup(profilePopup);
}

profileCloseButton.addEventListener('click', () =>closePopup(profilePopup));
profileForm.addEventListener('submit', saveProfilePopup);


function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}

function createNewCard(evt) {
  evt.preventDefault();
  const name = container.querySelector('.popup__name');
  const url = container.querySelector('.popup__url');
  const card = {
    name: name.value,
    link: url.value
  };
  createCard(card);
  galleryContainer.prepend(createCard(card));
  closePopup(popupCreate);
  evt.target.reset();
}

function openImagePopup(event) {
  const popupTitle = event.currentTarget.closest(".gallery__item").querySelector('.gallery__title');
  popupImageTitle.textContent = popupTitle.textContent;
  const popupImage = event.currentTarget;
  openPopup(imagePopup);
  document.querySelector('.popup__image').src = popupImage.src;
}

cardButtonAdd.addEventListener('click', () => openPopup(popupCreate));
popUpAddClose.addEventListener('click', () => closePopup(popupCreate));

function editPopup() {
  openPopup(profilePopup);
  popupUsername.value = username.textContent;
  popupRole.value = role.textContent;
}

popUpEdit.addEventListener('click', editPopup);
popupImageButton.addEventListener('click', () => closePopup(imagePopup));
createForm.addEventListener('submit', createNewCard);



