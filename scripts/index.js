const container = document.querySelector('.page');
const closeButtons = container.querySelectorAll('.popup__button-close');
const popup = container.querySelector('.popup');
const popups = container.querySelectorAll('.popup');
const profilePopup = container.querySelector('.profile-popup');
const profileForm = document.forms['profile-form']
const createForm = document.forms['create-form']
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
const templateCard = document.querySelector('#gallery-template').content;
const popupCreateName = container.querySelector('.popup__name');
const popupCreateUrl = container.querySelector('.popup__url');
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
  const baseGallery = templateCard.querySelector('.gallery__item').cloneNode(true);
  const galleryCardTitle = baseGallery.querySelector('.gallery__title');
  const galleryCardImage = baseGallery.querySelector('.gallery__image');
  baseGallery.querySelector('.gallery__delete').addEventListener('click', () => baseGallery.closest('.gallery__item').remove());
  galleryCardImage.addEventListener('click', () => openImagePopup(baseGallery));
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

function openImagePopup(item) {
  const popupTitle = item.querySelector('.gallery__title');
  popupImageTitle.textContent = popupTitle.textContent;
  const popupImage = item.querySelector('.gallery__image');
  openPopup(imagePopup);
  const popupImageFull = document.querySelector('.popup__image')
  popupImageFull.src = popupImage.src;
  popupImageFull.setAttribute('alt', popupImageTitle.textContent);
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
  window.addEventListener('keydown',(evt) => closeKeyOverlay(pop, evt));
});



function closeKeyOverlay(pop, evt) {
  if (evt.key === "Escape") {
    closePopup(pop);
  }
}
function closeClickOverlay(pop, evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(pop);
  }
}

