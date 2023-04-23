import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupImageSelector = this._popup.querySelector('.popup__image');
        this._popupImageTitle = this._popup.querySelector('.popup-image__title');
    }
    open(data) {
        this._popupImageTitle.textContent = data.name;
        this._popupImageSelector.src = data.link;
        this._popupImageSelector.setAttribute('alt', data.name);
        super.open();
    }
}