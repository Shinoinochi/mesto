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
const templateCard = document.querySelector('#gallery-template').content;
const popupCreateName = document.querySelector('.popup__name');
const popupCreateUrl = document.querySelector('.popup__url');


function createCard(item) {
  const baseGallery = templateCard.querySelector('.gallery__item').cloneNode(true);
  const galleryCardTitle = baseGallery.querySelector('.gallery__title');
  const galleryCardImage = baseGallery.querySelector('.gallery__image');
  baseGallery.querySelector('.gallery__delete').addEventListener('click', () => baseGallery.closest('.gallery__item').remove());
  galleryCardImage.addEventListener('click', () => openImagePopup(galleryCardTitle, galleryCardImage));
  baseGallery.querySelector('.gallery__like').addEventListener('click', like);
  galleryCardImage.setAttribute('src', item.link);
  galleryCardImage.setAttribute('alt', item.name);
  galleryCardTitle.textContent = item.name;
  return baseGallery;
}

for (let j = 0; j < initialCards.length; j++) {
  const cardElement = createCard(initialCards[j]);
  galleryContainer.prepend(cardElement);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closeKeyOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeKeyOverlay);
  clearInputValue(popup);
}

function saveProfileForm(evt) {
  evt.preventDefault();
  username.textContent = popupUsername.value;
  role.textContent = popupRole.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', saveProfileForm);

function like(evt) {
  const likeItem = evt.currentTarget;
  likeItem.classList.toggle('gallery__like_active');
}

function createNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: popupCreateName.value,
    link: popupCreateUrl.value
  };
  createCard(card);
  galleryContainer.prepend(createCard(card));
  closePopup(popupCreate);
  evt.target.reset();
}

function openImagePopup(galleryCardTitle, galleryCardImage) {
  popupImageTitle.textContent = galleryCardTitle.textContent;
  openPopup(imagePopup);
  const popupImageFull = document.querySelector('.popup__image')
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
createForm.addEventListener('submit', createNewCard);

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

