export default class FormValidator {
    constructor(formData, formElement) {
        this._formData = formData;
        this._formElement = formElement;
    }   
    _showInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`.form__${inputElement.id}-error`);
        this._error = inputElement.classList.add(this._formData.inputError);
        this._errorElement.textContent = inputElement.validationMessage;
      }
    _hideInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`.form__${inputElement.id}-error`);
        inputElement.classList.remove(this._formData.inputError);
        this._errorElement.textContent = '';
      }


    _checkButton(check) {
        this._button = this._formElement.querySelector(this._formData.submitButtonSelector);
        if (check) {
          this._button.removeAttribute('disabled');
          this._button.classList.remove(this._formData.inactiveButtonClass);
        }
        else {
          this._button.setAttribute('disabled', true);
          this._button.classList.add(this._formData.inactiveButtonClass);
        }
      }

    clearInputValue(popup) {
        this._popupElements = popup.querySelectorAll('.popup__input');
        this._popupElements.forEach((element) => {
          this._hideInputError(element);
          element.classList.remove('popup__input-error');
        });
        
      }
    _checkInputValidation(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        }
        else {
          this._hideInputError(inputElement);
        }
      }
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formData.inputSelector));
        this._elemFirst = this._formElement.querySelector(this._formData.inputName);
        this._elemSecond = this._formElement.querySelector(this._formData.inputRole);
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._checkButton(false);
        });
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._check = this._elemFirst.validity.valid && this._elemSecond.validity.valid;
            this._checkInputValidation(inputElement);
            this._checkButton(this._check);
          });
        });
      }
    enableValidation() {
        this._setEventListeners(); 
    }
}


