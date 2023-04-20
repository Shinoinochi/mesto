import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popup) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    }
    _getInputValues() {
        const formArray = {};
        this._inputList.forEach((input) => {
            formArray[input.name] = input.value;
        });
        return formArray;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
    close() {
        super.close();
        this._form.reset();
    }
}