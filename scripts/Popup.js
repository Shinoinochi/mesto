
export default class Popup {
    constructor(popupSelector) {
        this._selector = popupSelector;
        this._closeButton = this._selector.querySelector('.popup__button-close');
    }
    open() {
        this._selector.classList.add('popup_opened');
        
    }
    close() {
        this._selector.classList.remove('popup_opened');
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
          }
    }
    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt); 
        });
        this._selector.addEventListener('click', (evt) => {
            if (evt.currentTarget === evt.target) {
                this.close();
              }
        });

    }
}