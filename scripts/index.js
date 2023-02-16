let container = document.querySelector('.page');
let popUpClosed = container.querySelector('.popup__button-close');
let popUp = container.querySelector('.popup');
let popUpEdit = container.querySelector('.profile__edit');
let Username = container.querySelector('.profile__name');
let Role = container.querySelector('.profile__role');
let popupUsername = container.querySelector('.popup__username');
let popupRole = container.querySelector('.popup__role');
let popupForm = container.querySelector('.popup__form');


function popUpClose() {
    popUp.classList.remove('popup_opened');
}

function popUpOpen() {
    popUp.classList.add('popup_opened');
    popupUsername.value = Username.textContent;
    popupRole.value = Role.textContent;
}

function popUpSaved(evt) {
    evt.preventDefault();
    Username.textContent = popupUsername.value;
    Role.textContent = popupRole.value;
    popUp.classList.remove('popup_opened');
}

popUpEdit.addEventListener('click', popUpOpen);
popUpClosed.addEventListener('click', popUpClose);
popupForm.addEventListener('submit', popUpSaved);


