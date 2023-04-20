export default class FormValidator {
    constructor(formData, formElement) {
        this._formData = formData;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formData.inputSelector));
        this._button = this._formElement.querySelector(this._formData.submitButtonSelector);
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


    _checkButton(_inputList) {
        this._check = this._inputList.every(list => list.validity.valid);
          if (this._check) {
              this._button.removeAttribute('disabled');
              this._button.classList.remove(this._formData.inactiveButtonClass);
          }
          else {
              this._button.setAttribute('disabled', true);
              this._button.classList.add(this._formData.inactiveButtonClass);
          }
      }

    clearInputValue() {
        this._inputList.forEach((element) => {
          this._hideInputError(element);
          element.classList.remove(this._formData.inputError);
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
       
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._checkButton(this._inputList);
        });
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidation(inputElement);
            this._checkButton(this._inputList);
          });
        });
      }
    enableValidation() {
        this._setEventListeners(); 
    }
}


