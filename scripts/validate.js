const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  }
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
    errorElement.textContent = '';
  }
  
  
  const checkInputValidation = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
      hideInputError(formElement, inputElement);
    }
  }
  
  const setEventListeners = (formElement, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const elemFirst = formElement.querySelector(inputName);
    const elemSecond = formElement.querySelector(inputRole);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        const check = elemFirst.validity.valid && elemSecond.validity.valid;
        checkInputValidation(formElement, inputElement);
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
  
const forms = ({
    formSelector: '.form',
    inputSelector: '.popup__input',
    inputName: '#username-input',
    inputRole: '#role-input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
  }); 

  function enableValidation ({formSelector, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass}) {
    const formList = Array.from(container.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        checkButton(false, formElement, submitButtonSelector, inactiveButtonClass);
      });
      setEventListeners(formElement, submitButtonSelector, inputSelector, inputName, inputRole, inactiveButtonClass);
    });
  }
  enableValidation(forms);
