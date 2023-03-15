const showInputError = (formElement, inputElement, inputError, errorMessage) => {
    const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
    const error = inputElement.classList.add(inputError);
    errorElement.textContent = errorMessage;
  }
  
  const hideInputError = (formElement, inputElement, inputError) => {
    const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
    inputElement.classList.remove(inputError);
    errorElement.textContent = '';
  }
  
 
  const checkInputValidation = (formElement, inputElement, inputError) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputError, inputElement.validationMessage);
    }
    else {
      hideInputError(formElement, inputElement, inputError);
    }
  }
  
  const setEventListeners = (formElement, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass, inputError) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const elemFirst = formElement.querySelector(inputName);
    const elemSecond = formElement.querySelector(inputRole);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        const check = elemFirst.validity.valid && elemSecond.validity.valid;
        checkInputValidation(formElement, inputElement, inputError);
        checkButton(check, formElement, submitButtonSelector, inactiveButtonClass);
      });
    });
  }
  
  function checkButton(check, formElement, submitButtonSelector, inactiveButtonClass) {
    const button = formElement.querySelector(submitButtonSelector);
    if (check) {
      button.removeAttribute('disabled');
      button.classList.remove(inactiveButtonClass);
    }
    else {
      button.setAttribute('disabled', true);
      button.classList.add(inactiveButtonClass);
    }
  }
  
  function clearInputValue(popup) {
    popupElements = popup.querySelectorAll('.popup__input');
    popupElements.forEach((element) => {
      hideInputError(popup, element);
      element.classList.remove('popup__input-error');
    });
    
  }

const forms = ({
    formSelector: '.form',
    inputSelector: '.popup__input',
    inputName: '.form__input-first',
    inputRole: '.form__input-second',
    inputError: 'popup__input-error',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled'
  }); 

  function enableValidation ({formSelector, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass, inputError}) {
    const formList = Array.from(container.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        checkButton(false, formElement, submitButtonSelector, inactiveButtonClass);
      });
      setEventListeners(formElement, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass, inputError);
    });
  }
  enableValidation(forms);
