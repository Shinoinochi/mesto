import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(data, selector) {
        super(selector);
        this._name = data.name;
        this._link = data.link;
    }
    open() {
        this._popupImageSelector = this._selector.querySelector('.popup__image');
        this._selector.querySelector('.popup-image__title').textContent = this._name;
        this._popupImageSelector.src = this._link;
        this._popupImageSelector.setAttribute('alt', this._name);
        super.open();
    }
}