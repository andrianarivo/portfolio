const validateContactForm = () => {
  let contactForm = document.forms['contact-form'];
  let contactEmail = contactForm['email'].value;
  let formIsValid = contactEmail.toLowerCase() === contactEmail;
  let formValidationText = document.querySelector('.form-validation-text');
  if (formIsValid) {
    console.log('form is valid');
    formValidationText.style.display = 'none';
  } else {
    console.log('form is not valid');
    formValidationText.style.display = 'block';
  }
  return formIsValid;
};
