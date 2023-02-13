let container = document.querySelector('.page');
let popUpClosed = container.querySelector('.popup__button_close');
let popUp = container.querySelector('.popup');
let popUpSave = container.querySelector('.popup__button');
let popUpEdit = container.querySelector('.profile__edit');
let Username = container.querySelector('.profile__name');
let Role = container.querySelector('.profile__role');
let popupUsername = container.querySelector('.popup__username');
let popupRole = container.querySelector('.popup__role');



function popUpClose() {
    popUp.classList.remove('popup__close');
}

function popUpOpen() {
    popUp.classList.add('popup__close');
    popupUsername.value = Username.textContent;
    popupRole.value = Role.textContent;
}

function popUpSaved(evt) {
    evt.preventDefault();
    Username.textContent = popupUsername.value;
    Role.textContent = popupRole.value;
    popUp.classList.remove('popup__close');
}

popUpEdit.addEventListener('click', popUpOpen);
popUpClosed.addEventListener('click', popUpClose);
popUpSave.addEventListener('submit', popUpSaved);


