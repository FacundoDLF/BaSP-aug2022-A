window.onload = function(){
  
  // ------- globals
  var contentLetters = false;
  var contentNumbers = false;
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
  var emailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  // ------- events / calls
  var spFirstName = document.querySelector('#signup-firstName');
  var spFirstNameError = document.querySelector('#error-firstName');
  spFirstNameError.classList.add('signup-error');

  var spLastName = document.querySelector('#signup-lastName');
  var spLastNameError = document.querySelector('#error-lastName');
  spLastNameError.classList.add('signup-error');

  var spDNI = document.querySelector('#signup-DNI');
  var spDNIError = document.querySelector('#error-DNI');
  spDNIError.classList.add('signup-error');

  var spBirthDate = document.querySelector('#signup-birthdate');
  var spBirthDateError = document.querySelector('#error-birthDate');
  spBirthDateError.classList.add('signup-error');

  var spPhone = document.querySelector('#signup-phone');
  var spPhoneError = document.querySelector('#error-phone');
  spPhoneError.classList.add('signup-error');

  var spLocation = document.querySelector('#signup-location');
  var spLocationError= document.querySelector('#error-location');
  spLocationError.classList.add('signup-error');

  var spAdress = document.querySelector('#signup-adress');
  var spAdressError = document.querySelector('#error-adress');
  spAdressError.classList.add('signup-error');

  var spPostalCode = document.querySelector('#signup-postalcode');
  var spPostalCodeError = document.querySelector('#error-postalCode');
  spPostalCodeError.classList.add('signup-error');

  var spEmail = document.querySelector('#signup-email');
  var spEmailError = document.querySelector('#error-email');
  spEmailError.classList.add('signup-error');

  var spPassword = document.querySelector('#signup-password');
  var spPasswordError = document.querySelector('#error-password');
  spPasswordError.classList.add('signup-error');

  var spRepeatPassword = document.querySelector('#signup-repeatpassword');
  var spRepeatPasswordError = document.querySelector('#error-repeatpassword');
  spRepeatPasswordError.classList.add('signup-error');

  var signupButton = document.querySelector('#btn-signup');

  // ---------  functions
  function containNumbers(_data){
    for (var index = 0; index < numbers.length; index++) {
      for (var i = 0; i < _data.length; i++){
        if (contentNumbers === false){
          if (numbers[index] === _data[i]){
            contentNumbers = true;
          } else {
            contentNumbers = false;
          }
        }
      }
    }
    return contentNumbers;
  }

  function containLetters(_data){
    for (var index = 0; index < alphabet.length; index++) {
      for (var i = 0; i < _data.length; i++) {
        if (contentLetters === false) {
          contentLetters = alphabet[index] === _data[i];
        }
      }
    }
    return contentLetters;
  }

  function containOnlyNumbers(_data){
    for (var index = 0; index < _data.length; index++) {
      if (isNaN(_data[index])){
        return false;
      }      
    }
    return true;
  }

  function containOnlyLetters(_data){
    for (var index = 0; index < _data.length; index++) {
      if (isNaN(_data[index])){
        return true;
      }      
    }
    return false;
  }

  function containSpace(_data){
    for (var index = 1; _data.length -1 ; index++){
      if (_data[index] === ' ') {
        return true;
      }
    }
    return false;
  }

  // ---------  validations
  function validateName(_name){
    if (containOnlyLetters(_name) && _name.length >= 3){
      return true;
    }
    return false;
  }

  function validateDNI(_dni){
    if (containOnlyNumbers(_dni) && _dni.length > 7){
      return true;
    }
    return false;
  }

  function validateDateFormat(_date){
    var slash = _date.split('-');
    var _year = slash[0];
    var _month = slash[1];
    var _day = slash[2];
    if (_year.length === 4 &&  _month >=1 && _day >= 1 && _day) {
      return true;
    }
    return false;
  }

  function validatePhone(_phone){
    if (containOnlyNumbers(_phone) && _phone.length === 10) {
      return true;
    }
    return false;
  }

  function validateLocation(_location){
    if (containLetters(_location) && _location.length > 3) {
      return true;
    }
    return false;
  }

  function validateAdress(_adress){
    if (containNumbers(_adress) && containLetters(_adress) && _adress.length >= 5 && containSpace(_adress)) {
      return true;    
    }
    return false;
  }
  
  function validatePostalCode(_code){
    if (containOnlyNumbers(_code) && _code.length >= 4 && _code.length <= 5) {
      return true;
    }
    return false;
  }

  function validateEmail(_email){
    if (emailFormat.test(_email)){
      return true;
    }
    return false;
  }

  function validatePassword(_password){
    if (containLetters(_password) && containNumbers(_password) && _password.length >= 8) {
      return true;
    }
    return false;
  }

  function validateRepeatPassword(_repeat, _password){
    if (validatePassword(_repeat) && _repeat === _password) {
      return true;
    }
    return false;
  }

  // -------- first name processing
  spFirstName.addEventListener('blur', function(){
    spFirstName.classList.remove('border-green', 'border-red');
    if (validateName(spFirstName.value)) {
      spFirstName.classList.add('border-green');
    } else {
      spFirstName.classList.add('border-red');
      spFirstNameError.innerHTML = 'Only letters';
    }
  });
  spFirstName.onfocus = function(){
    spFirstNameError.innerHTML = '';
  }

  // -------- last name processing
  spLastName.addEventListener('blur', function(){
    spLastName.classList.remove('border-green', 'border-red');
    if (validateName(spLastName.value)) {
      spLastName.classList.add('border-green');
    } else {
      spLastName.classList.add('border-red');
      spLastNameError.innerHTML = 'Only letters';
    }
  });
  spLastName.onfocus = function(){
    spLastNameError.innerHTML = '';
  }

  // -------- dni processing
  spDNI.addEventListener('blur', function(){
    spDNI.classList.remove('border-green', 'border-red');
    if (validateDNI(spDNI.value)) {
      spDNI.classList.add('border-green');
    } else {
      spDNI.classList.add('border-red');
      spDNIError.innerHTML = 'Only numbers';
    }
  });
  spDNI.onfocus = function(){
    spDNIError.innerHTML = '';
  }
  
  // -------- birth date processing
  spBirthDate.addEventListener('blur', function(){
    spBirthDate.classList.remove('border-green', 'border-red');
    if (validateDateFormat(spBirthDate.value)) {
      spBirthDate.classList.add('border-green');
      console.log(spBirthDate.value);
    } else {
      spBirthDate.classList.add('border-red');
      spBirthDateError.innerHTML = 'Format DD/MM/YYYY';
    }
  });
  spBirthDate.onfocus = function(){
    spBirthDateError.innerHTML = '';
  }

  // -------- phone processing
  spPhone.addEventListener('blur', function(){
    spPhone.classList.remove('border-green', 'border-red');
    if (validatePhone(spPhone.value)) {
      spPhone.classList.add('border-green');
    } else {
      spPhone.classList.add('border-red');
      spPhoneError.innerHTML = 'Only numbers';
    }
  });
  spPhone.onfocus = function(){
    spPhoneError.innerHTML = '';
  }

  // -------- location processing
  spLocation.addEventListener('blur', function(){
    spLocation.classList.remove('border-green', 'border-red');
    if (validateLocation(spLocation.value)) {
      spLocation.classList.add('border-green');
    } else {
      spLocation.classList.add('border-red');
      spLocationError.innerHTML = 'Only letters';
    }
  });
  spLocation.onfocus = function(){
    spLocationError.innerHTML = '';
  }

  // -------- adress processing
  spAdress.addEventListener('blur', function(){
    spAdress.classList.remove('border-green', 'border-red');
    if (validateAdress(spAdress.value)) {
      spAdress.classList.add('border-green');
    } else {
      spAdress.classList.add('border-red');
      spAdressError.innerHTML = 'Only letters & numbers';
    }
  });
  spAdress.onfocus = function(){
    spAdressError.innerHTML = '';
  }

  // -------- postal code processing
  spPostalCode.addEventListener('blur', function(){
    spPostalCode.classList.remove('border-green', 'border-red');
    if (validatePostalCode(spPostalCode.value)) {
      spPostalCode.classList.add('border-green');
    } else {
      spPostalCode.classList.add('border-red');
      spPostalCodeError.innerHTML = 'Only numbers';
    }
  });
  spPostalCode.onfocus = function(){
    spPostalCodeError.innerHTML = '';
  }

  // -------- email processing
  spEmail.addEventListener('blur', function(){
    spEmail.classList.remove('border-green', 'border-red');
    if (validateEmail(spEmail.value)) {
      spEmail.classList.add('border-green');
    } else {
      spEmail.classList.add('border-red');
      spEmailError.innerHTML = 'Invalid email';
    }
  });
  spEmail.onfocus = function(){
    spEmailError.innerHTML = '';
  }

  // -------- password processing
  spPassword.addEventListener('blur', function(){
    spPassword.classList.remove('border-green', 'border-red');
    if (validatePassword(spPassword.value)) {
      spPassword.classList.add('border-green');
    } else {
      spPassword.classList.add('border-red');
      spPasswordError.innerHTML = 'Invalid password';
    }
  });
  spPassword.onfocus = function(){
    spPasswordError.innerHTML = '';
  }

  // -------- repeat password processing
  spRepeatPassword.addEventListener('blur', function(){
    spRepeatPassword.classList.remove('border-green', 'border-red');
    if (validateRepeatPassword(spRepeatPassword.value, spPassword.value)) {
      spRepeatPassword.classList.add('border-green');
    } else {
      spRepeatPassword.classList.add('border-red');
      spRepeatPasswordError.innerHTML = 'Password not match';
    }
  });
  spRepeatPassword.onfocus = function(){
    spRepeatPasswordError.innerHTML = '';
  }

  var dataUser = null;
  if(localStorage.getItem('dataUser') != null){
    dataUser = JSON.parse(localStorage.getItem('dataUser'));
    dataUser.firstName = spFirstName.value;
    dataUser.lastName = spLastName.value;
    dataUser.dni = spDNI.value;
    dataUser.birthDate = spBirthDate.value;
    dataUser.phone = spPhone.value;
    dataUser.location = spLocation.value;
    dataUser.adress = spAdress.value;
    dataUser.postalCode = spPostalCode.value;
    dataUser.email = spEmail.value;
    dataUser.password = spPassword.value;
    dataUser.confirmPassword = spRepeatPassword.value;
  }

  // --------- create button
  signupButton.addEventListener('click', function(e){
    e.preventDefault();    
    var newDate = spBirthDate.value.split('-');
    var formatDate = newDate[1] + '/' + newDate[2] + '/' + newDate[0];
    console.log(spBirthDate.value);
    console.log(formatDate);
    var messageCreate = [];
    var failure = false;

    if (!validateName(spFirstName.value)){
      messageCreate.push('Invalid first name\n');
      failure = true;
    }

    if (!validateName(spLastName.value)){
      messageCreate.push('Invalid last name\n');
      failure = true;
    }

    if (!validateDNI(spDNI.value)){
      messageCreate.push('Invalid DNI\n');
      failure = true;
    }

    if (!validateDateFormat(spBirthDate.value)){
      messageCreate.push('Invalid date\n');
      failure = true;
    }

    if (!validatePhone(spPhone.value)){
      messageCreate.push('Invalid phone\n');
      failure = true;
    }

    if (!validateLocation(spLocation.value)){
      messageCreate.push('Invalid location\n');
      failure = true;
    }

    if (!validateAdress(spAdress.value)){
      messageCreate.push('Invalid adress\n');
      failure = true;
    }

    if (!validatePostalCode(spPostalCode.value)){
      messageCreate.push('Invalid postal code\n');
      failure = true;
    }

    if (!validateEmail(spEmail.value)){
      messageCreate.push('Invalid email\n');
      failure = true;
    }

    if (!validatePassword(spPassword.value)) {
      messageCreate.push('Invalid password\n');
      failure = true;
    }

    if (!validateRepeatPassword(spRepeatPassword.value, spPassword.value)) {
      messageCreate.push('Invalid confirmation\n');
      failure = true;
    }

    if (failure){
      alert(messageCreate);
      return false;
    } else {
      alert(
        'First name: ' + spFirstName.value +
        '\nLast name: ' + spLastName.value +
        '\nDNI: ' + spDNI.value +
        '\nBirth date: ' + spBirthDate.value +
        '\nPhone: ' + spPhone.value +
        '\nLocation: ' + spLocation.value +
        '\nAdress: ' + spAdress.value +
        '\nPostal code: ' + spPostalCode.value +
        '\nEmail: ' + spEmail.value +
        '\nPassword: ' + spPassword.value +
        '\nConfirm password: ' + spRepeatPassword.value
      );
      
      // --------- HTTP request
      var urlSignUp = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
      var urlSignUpParams = '?name=' + spFirstName.value + 
                            '&lastName=' + spLastName.value +
                            '&dni=' + spDNI.value +
                            '&dob=' + formatDate +
                            '&phone=' + spPhone.value +
                            '&city=' + spLocation.value +
                            '&address=' + spAdress.value +
                            '&zip=' + spPostalCode.value +
                            '&email=' + spEmail.value +
                            '&password=' + spPassword.value +
                            '&password=' + spRepeatPassword.value;
      fetch(urlSignUp + urlSignUpParams)
      .then(function(response){
        return response.json();
      })
      .then(function(response){  
        if (response.success){ 
          localStorage.setItem('dataUser', JSON.stringify(response.data));
          alert(response.msg + '\n request:\n' + JSON.stringify(response.data));
          localStorage.setItem('name', spFirstName.value);
          localStorage.setItem('lastName', spLastName.value);
          localStorage.setItem('dni', spDNI.value);
          localStorage.setItem('dob', spBirthDate.value);
          localStorage.setItem('phone', spPhone.value);
          localStorage.setItem('city', spLocation.value);
          localStorage.setItem('address', spAdress.value);
          localStorage.setItem('zip', spPostalCode.value);
          localStorage.setItem('email', spEmail.value);
          localStorage.setItem('password', spPassword.value);
          localStorage.setItem('repeatPassword', spRepeatPassword.value);
        } else {
          alert('SignUp failure :(');
        }
      })
      .catch(function(error){
        alert(error);
      })
    }
  });

  spFirstName.value = localStorage.getItem('name');
  spLastName.value = localStorage.getItem('lastName');
  spDNI.value = localStorage.getItem('dni');
  spBirthDate.value = localStorage.getItem('dob');
  spPhone.value = localStorage.getItem('phone');
  spLocation.value = localStorage.getItem('city');
  spAdress.value = localStorage.getItem('address');
  spPostalCode.value = localStorage.getItem('zip');
  spEmail.value = localStorage.getItem('email');
  spPassword.value = localStorage.getItem('password');
  spRepeatPassword.value = localStorage.getItem('repeatPassword');
}