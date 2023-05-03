import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
    constructor(handleFormSubmit, popup) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }
    setEventListeners() {
        this._form.addEventListener('click', (evt) => {
            evt.preventDefault();;
            this._handleFormSubmit(this._cardData, this._cardApi);
            this.close();
        });
        super.setEventListeners();
    }
    close() {
        super.close();
    }

    getData(cardData, cardApi) {
        this._cardData = cardData;
        this._cardApi = cardApi;
    }
}