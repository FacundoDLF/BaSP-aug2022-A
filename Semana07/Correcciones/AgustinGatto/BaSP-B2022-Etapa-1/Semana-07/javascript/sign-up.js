window.onload = function(){
    var expVal = (/^[a-zA-Z]{3,20}$/);
    var expValTwo = (/^[a-zA-Z]{3,20}$/);
    var expValDni = (/^[0-9]{7,20}$/);
    var expValPhone = (/^[0-9]{10,11}$/);
    var expValAdress = (/^['a-zA-Z'0-9 ]{5,20}$/);
    var expValLocation = (/^[A-Z]{3,20}$/i);
    var expValPostal = (/^[0-9]{4,5}$/);
    var expValEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var expPassword = /^['a-zA-Z'0-9]{8,20}$/;

    var firsName = document.getElementById('first-name');
    firsName.onblur = function(){
        var nameValidate = expVal.test(firsName.value);
        if (nameValidate == true){
            firsName.classList.add('border-color');
        } else if(firsName.value = ''){
            firsName.classList.remove('border-color');
            firsName.classList.add('border-red');
        }else{
            firsName.classList.add('border-red');
        };
    };
    firsName.onfocus = function(){
        firsName.classList.remove('border-color');
        firsName.classList.remove('border-red');
    };

    var lastName = document.getElementById('last-name');
    lastName.onblur = function(){
        var lastNameValidate = expValTwo.test(lastName.value);
        if (lastNameValidate == true){
            lastName.classList.add('border-color');
        } else if(lastName.value = ''){
            lastName.classList.remove('border-color')
            lastName.classList.add('border-red');
        } else{
        lastName.classList.add('border-red');
    };
    };
    lastName.onfocus = function(){
        lastName.classList.remove('border-color');
        lastName.classList.remove('red-border');
    };

    var inputDni = document.getElementById('input-dni');
    inputDni.onblur = function(){
        var dniValidate = expValDni.test(inputDni.value);
        if (dniValidate == true){
            inputDni.classList.add('border-color');
        } else if(inputDni.value = ''){
            inputDni.classList.add('border-red');
        } else{
            inputDni.classList.add('border-red');
        };
    };
    inputDni.onfocus = function(){
        inputDni.classList.remove('border-color');
        inputDni.classList.remove('red-border');
    };

   var inputDob = document.getElementById('date-of-birth');
    inputDob.onblur = function(){
        inputDob.classList.add('border-color')
     };

    var inputPhone = document.getElementById('input-phone');
    inputPhone.onblur = function(){
        var phoneValidate = expValPhone.test(inputPhone.value);
        if (phoneValidate == true){
            inputPhone.classList.add('border-color');
        } else if(inputPhone.value = ''){
            inputPhone.classList.add('border-red');
        } else{
            inputPhone.classList.add('border-red');
        };
    };
    inputPhone.onfocus = function(){
        inputPhone.classList.remove('border-color');
        inputPhone.classList.remove('red-border');
    };

    var inputAdress = document.getElementById('input-adress');
    inputAdress.onblur = function(){
        var adressValidate = expValAdress.test(inputAdress.value);
        if (adressValidate == true){
            inputAdress.classList.add('border-color');
        } else if(inputAdress.value = ''){
            inputAdress.classList.add('border-red');
        } else{
            inputAdress.classList.add('border-red');
        };
    };
    inputAdress.onfocus = function(){
        inputAdress.classList.remove('border-color');
        inputAdress.classList.remove('red-border');
    };

    var inputLocation = document.getElementById('input-location');
    inputLocation.onblur = function(){
        var locationValidate = expValLocation.test(inputLocation.value);
        if (locationValidate === true){
            inputLocation.classList.add('border-color');
        } else if(inputLocation.value = ''){
            inputLocation.classList.add('border-red');
        } else{
            inputLocation.classList.add('border-red');
        };
    };
    inputLocation.onfocus = function(){
        inputLocation.classList.remove('border-color');
        inputLocation.classList.remove('red-border');
    };

    var inputPostal = document.getElementById('input-postal');
    inputPostal.onblur = function(){
        var postalValidate = expValPostal.test(inputPostal.value);
        if (postalValidate == true){
            inputPostal.classList.add('border-color');
        } else if(inputPostal.value = ''){
            inputPostal.classList.remove('border-color');
            inputPostal.classList.add('border-red');
        } else{
            inputPostal.classList.remove('border-red');
            inputPostal.classList.add('border-color');
        };
    };
    inputPostal.onfocus = function(){
        inputPostal.classList.remove('border-color');
        inputPostal.classList.remove('red-border');
    };

    var inputEmail = document.getElementById('input-email');
        inputEmail.onblur = function(){
        var emailValidate = expValEmail.test(inputEmail.value);
        if (emailValidate == true){
            inputEmail.classList.add('border-color');
            inputEmail.classList.remove('border-red');
        } else{
            inputEmail.classList.add('border-red');
            inputEmail.classList.remove('border-color');
        };
    };
    inputEmail.onfocus = function(){
        inputEmail.classList.remove('border-red');
    };

    var inputPassword = document.getElementById('input-password');
    inputPassword.onblur = function(){
            var validatePassword1 = expPassword.test(inputPassword.value);
            if (validatePassword1 == true){
                inputPassword.classList.add('border-color')
            } else if (inputPassword.value === inputRepeat.value){
                inputPassword.classList.add('border-color')
            }else{
                inputPassword.classList.add('border-red');
            };
    };
    inputPassword.onfocus = function(){
        inputPassword.classList.remove('border-color');
        inputPassword.classList.remove('border-red');
    };

    var inputRepeat = document.getElementById('input-repeat') ;
    inputRepeat.onblur = function(){
        if (inputRepeat.value === inputPassword.value){
            inputRepeat.classList.add('border-color')
        } else{
            inputRepeat.classList.add('border-red')
            alert('Password incorrect')
        };
    };
    inputRepeat.onfocus = function(){
        inputRepeat.classList.remove('border-color');
        inputRepeat.classList.remove('border-red');
    };

    var buttonForm = document.getElementById("button-form");
    var nameStorage = localStorage.getItem('Name');
    firsName.value = nameStorage;
    var lastNameStorage = localStorage.getItem('Lastname');
    lastName.value = lastNameStorage;
    var dniStorage = localStorage.getItem('DNI');
    inputDni.value = dniStorage;
    var dateStorage = localStorage.getItem('Date of birth day');
    inputDob.value = dateStorage;
    var phoneStorage = localStorage.getItem('Phone');
    inputPhone.value = phoneStorage;
    var addressStorage = localStorage.getItem('Address');
    inputAdress.value = addressStorage;
    var locationStorage = localStorage.getItem('Location');
    inputLocation.value = locationStorage;
    var zipStorage = localStorage.getItem('Zip');
    inputPostal.value = zipStorage;
    var emailStorage = localStorage.getItem('Email');
    inputEmail.value = emailStorage;
    var passwordStorage = localStorage.getItem('Password');
    inputPassword.value = passwordStorage;
    var repeatPasswordStorage = localStorage.getItem('Password');
    inputRepeat.value = repeatPasswordStorage;

    buttonForm.onclick = function(e){
        e.preventDefault();
        var arrayButtom = [];
        var dob = inputDob.value.split('-');
        var dob2 = dob[1] + '/' + dob[2] + '/' + dob[0];
        var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firsName.value}&lastName=${lastName.value}&dni=${inputDni.value}&dob=${dob2}&phone=${inputPhone.value}&address=${inputAdress.value}&city=${inputLocation.value}&zip=${inputPostal.value}&email=${inputEmail.value}&password=${inputPassword.value}`
        if (expVal.test(firsName.value) && expValTwo.test(lastName.value) && expValDni.test(inputDni.value)
         && expValPhone.test(inputPhone.value) && expValAdress.test(inputAdress.value) && 
         expValLocation.test(inputLocation.value) && expValPostal.test(inputPostal.value) && 
         expValEmail.test(inputEmail.value) && expPassword.test(inputPassword.value)){
            arrayButtom.push('Name: ' + (firsName.value) +'\n' + 'Last name: ' + (lastName.value + '\n'));
            arrayButtom.push('Dni: ' + (inputDni.value) +'\n' + 'Phone: ' + (inputPhone.value +'\n'));
            arrayButtom.push('Adress: ' + (inputAdress.value) +'\n' + 'Location: ' + (inputLocation.value + '\n'));
            arrayButtom.push('Postal code: ' + (inputPostal.value) +'\n' + 'Email: ' + (inputEmail.value + '\n'));
            arrayButtom.push('Password: ' + (inputPassword.value) +'\n' + 'Password confirmation: ' +  (inputRepeat.value + '\n'));
        } else if(expVal.test(firsName.value) || expValTwo.test(lastName.value) || expValDni.test(inputDni.value)
        || expValPhone.test(inputPhone.value) || expValAdress.test(inputAdress.value) || 
        expValLocation.test(inputLocation.value) || expValPostal.test(inputPostal.value) || 
        expValEmail.test(inputEmail.value) || expPassword.test(inputPassword.value)){
                alert('One or more fields are not correct');
            } else{
                alert('Please complete all fields!');
            }

            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                if(data.success == true){
                    alert('Request success: ' + data.msg + '\n' + arrayButtom);
                    localStorage.setItem('Name', firsName.value);
                    localStorage.setItem('Lastname', lastName.value);
                    localStorage.setItem('DNI', inputDni.value);
                    localStorage.setItem('Date of birth day', inputDob.value);
                    localStorage.setItem('Phone', inputPhone.value);
                    localStorage.setItem('Address', inputAdress.value);
                    localStorage.setItem('Location', inputLocation.value);
                    localStorage.setItem('Zip', inputPostal.value);
                    localStorage.setItem('Email', inputEmail.value);
                    localStorage.setItem('Password', inputPassword.value);
                } else{
                    var arrayErrors = [];
                    for(var i = 0; i < data.errors.length; i++){
                        arrayErrors.push(data.errors[i].msg);
                    }
                    var errorMsg = arrayErrors.join('\n');
                    alert('Request rejected: ' +  '\n' + errorMsg);
                }; 
            })
            .catch(function(error){
                alert('An error occurred: '+ error);
         });
    };
};
