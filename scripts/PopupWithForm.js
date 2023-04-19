import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(handleFormSubmit, selector) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = selector.querySelector('.popup__form');
        this._inputList = Array.from(selector.querySelectorAll('.popup__input'));
    }
    _getInputValues() {
        this._formArray = {};
        this._inputList.forEach((input) => {
            this._formArray[input.name] = input.value;
        });
       
        return this._formArray;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            this._handleFormSubmit(evt, this._getInputValues());
        });
        super.setEventListeners();
    }
    close() {
        super.close();
        this._form.reset();
    }
}