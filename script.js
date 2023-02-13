let container = document.querySelector('.page');
let popUpButton = container.querySelector('.popup__button');
let popUp = container.querySelector('.popup');
let popUpOp = container.querySelector('.profile__add');


function popUpClose() {
    popUp.classList.remove('popup__close');
}

function popUpOpen() {
    popUp.classList.add('popup__close');
}

popUpOp.addEventListener('click', popUpOpen);
popUpButton.addEventListener('click', popUpClose);


