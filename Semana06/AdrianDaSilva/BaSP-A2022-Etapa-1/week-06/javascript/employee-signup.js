window.onload = function () {
    var firstName = document.getElementById('first-name');
    var firstNameErrorBox = document.getElementById('firstName-error');
    var lastName = document.getElementById('last-name');
    var lastNameErrorBox = document.getElementById('lastName-error');
    var dni = document.getElementById('dni');
    var dniErrorBox = document.getElementById('dni-error');
    var birthDate = document.getElementById('birth-date');
    var birthDateErrorBox = document.getElementById('birthDate-error');
    var phoneNumber = document.getElementById('phone');
    var phoneNumberErrorBox = document.getElementById('phone-error');
    var address = document.getElementById('address');
    var addressErrorBox = document.getElementById('address-error');
    var location = document.getElementById('location');
    var locationErrorBox = document.getElementById('location-error');
    var postalCode = document.getElementById('postal-code');
    var postalCodeErrorBox = document.getElementById('postalCode-error');
    var email = document.getElementById('email');
    var emailErrorBox = document.getElementById('email-error');
    var repeatEmail = document.getElementById('repeat-email');
    var repeatEmailErrorBox = document.getElementById('repeatEmail-error');
    var password = document.getElementById('password');
    var passwordErrorBox = document.getElementById('password-error');
    var repeatPassword = document.getElementById('repeat-password');
    var repeatPasswordErrorBox = document.getElementById('repeatPassword-error');
    var signupButton = document.getElementById('signup-btn');
    var required = 'This field is required'

    //FIRST NAME VALIDATION
    firstName.onblur = function validateFirstName() {
        var firstNameV = firstName.value;
        if (firstNameV.length == 0) {
            firstNameErrorBox.innerHTML = required;
            firstName.classList.remove('green-border');
            firstName.classList.add('default-border');
            return false;
        } 
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< firstNameV.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (hasNumbers(firstNameV)) {
            firstNameErrorBox.innerHTML = 'Must have only letters';
            firstName.classList.remove('green-border');
            firstName.classList.add('default-border');
            return false;
        }
        var AZ = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ'
        if (!(AZ.indexOf(firstNameV.charAt(0),0)!=-1)) {
            firstNameErrorBox.innerHTML = 'Must start with a capital letter';
            firstName.classList.remove('green-border');
            firstName.classList.add('default-border');
            console.log('a')
            return false;
        }
        if (firstNameV.length < 4) {
            firstNameErrorBox.innerHTML = 'Must have at least 4 characters';
            firstName.classList.remove('green-border');
            firstName.classList.add('default-border');
            return false;
        }
        firstName.classList.remove('default-border');
        firstName.classList.add('green-border');
        return true;
    }
    firstName.onfocus = function() {
        firstNameErrorBox.innerHTML = '';
    }

    //LAST NAME VALIDATION
    lastName.onblur = function validateLastName() {
        var lastNameV = lastName.value;
        if (lastNameV.length == 0) {
            lastNameErrorBox.innerHTML = required;
            lastName.classList.remove('green-border');
            lastName.classList.add('default-border');
            return false;
        } 
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< lastNameV.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (hasNumbers(lastNameV)) {
            lastNameErrorBox.innerHTML = 'Must have only letters';
            lastName.classList.remove('green-border');
            lastName.classList.add('default-border');
            return false;
        }
        var AZ = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ'
        if (!(AZ.indexOf(lastNameV.charAt(0),0)!=-1)) {
            lastNameErrorBox.innerHTML = 'Must start with a capital letter';
            lastName.classList.remove('green-border');
            lastName.classList.add('default-border');
            console.log('a')
            return false;
        }
        if (lastNameV.length < 4) {
            lastNameErrorBox.innerHTML = 'Must have at least 4 characters';
            lastName.classList.remove('green-border');
            lastName.classList.add('default-border');
            return false;
        }
        lastName.classList.remove('default-border');
        lastName.classList.add('green-border');
        return true;
    }
    lastName.onfocus = function() {
        lastNameErrorBox.innerHTML = '';
    }

    //DNI VALIDATION
    dni.onblur = function validateDni() {        
        var dniV = dni.value;
        if (dniV.length == 0) {
            dniErrorBox.innerHTML = required;
            dni.classList.remove('green-border');
            dni.classList.add('default-border');
            return false;
        } 
        if (isNaN(dniV)) {
            dniErrorBox.innerHTML = 'Must have only numbers';
            dni.classList.remove('green-border');
            dni.classList.add('default-border');
            return false;
        }
        if (dniV.length < 8) {
            dniErrorBox.innerHTML = 'Must have at least 8 characters';
            dni.classList.remove('green-border');
            dni.classList.add('default-border');
            return false;
        }
        dni.classList.remove('default-border');
        dni.classList.add('green-border');
        return true;
    }
    dni.onfocus = function() {
        dniErrorBox.innerHTML = '';
    }

    //BIRTH DATE VALIDATION
    birthDate.onblur = function validateBirthDate() {        
        var birthDateV = birthDate.value;
        var bDyyyy = birthDateV.substring(0,4);
        var bDmm = birthDateV.substring(5,7);
        var bDdd = birthDateV.substring(8,10);
        birthDateV = bDdd + '-' + bDmm + '-' + bDyyyy;
        
        var date = new Date().toISOString().split('T')[0];
        var dyyyy = date.substring(0,4);
        var dmm = date.substring(5,7);
        var ddd = date.substring(8,10);
        date = ddd + '-' + dmm + '-' + dyyyy;

        var age = date.substring(6,10) - birthDateV.substring(6,10);
        var mDif = date.substring(3,5) - birthDateV.substring(3,5);

        if (birthDateV == '--' || birthDateV.length == 2) {
            birthDateErrorBox.innerHTML = required;
            birthDate.classList.remove('green-border');
            birthDate.classList.add('default-border');
            return false;
        } 
        if (mDif < 0 || (mDif === 0 && date.substring(0,2) < birthDateV.substring(0,2))) {
            age --;
        } 
        if (age < 18) {
            birthDateErrorBox.innerHTML = 'You must be 18+ yo to sign up';
            birthDate.classList.remove('green-border');
            birthDate.classList.add('default-border');
            return false;
        }
        birthDate.classList.remove('default-border');
        birthDate.classList.add('green-border');
        return true;
    }
    birthDate.onfocus = function() {
        birthDateErrorBox.innerHTML = '';
    }

    //PHONE NUMBER VALIDATION
    phoneNumber.onblur = function validatePhoneNumber() {        
        var phoneNumberV = phoneNumber.value;
        if (phoneNumberV.length == 0) {
            phoneNumberErrorBox.innerHTML = required;
            phoneNumber.classList.remove('green-border');
            phoneNumber.classList.add('default-border');
            return false;
        } 
        if (isNaN(phoneNumberV)) {
            phoneNumberErrorBox.innerHTML = 'Must have only numbers';
            phoneNumber.classList.remove('green-border');
            phoneNumber.classList.add('default-border');
            return false;
        }
        if (phoneNumberV.length !== 10) {
            phoneNumberErrorBox.innerHTML = 'Must have 10 characters';
            phoneNumber.classList.remove('green-border');
            phoneNumber.classList.add('default-border');
            return false;
        }
        phoneNumber.classList.remove('default-border');
        phoneNumber.classList.add('green-border');
        return true;
    }
    phoneNumber.onfocus = function() {
        phoneNumberErrorBox.innerHTML = '';
    }

    //ADDRESS DATE VALIDATION
    address.onblur = function validateAdress() {        
        var addressV = address.value;
        if (addressV.length == 0) {
            addressErrorBox.innerHTML = required;
            address.classList.remove('green-border');
            address.classList.add('default-border');
            return false;
        }
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< addressV.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasNumbers(addressV)) {
            addressErrorBox.innerHTML = 'Must have numbers';
            address.classList.remove('green-border');
            address.classList.add('default-border');
            return false;
        }
        var AZaz = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';
        function hasLetters(text) {
            for (i = 0; i< addressV.length; i++) {
                if (AZaz.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasLetters(addressV)) {
            addressErrorBox.innerHTML = 'Must have letters';
            address.classList.remove('green-border');
            address.classList.add('default-border');
            return false;
        }
        addressVTrimmed = addressV.trim();
        addressVSplitted = addressVTrimmed.split(' ');
        if (addressVSplitted.length < 2) {
            addressErrorBox.innerHTML = 'Must have a space between text';
            address.classList.remove('green-border');
            address.classList.add('default-border');
            return false;
        }
        if (addressV.length < 5) {
            addressErrorBox.innerHTML = 'Must have at least 5 characters';
            address.classList.remove('green-border');
            address.classList.add('default-border');
            return false;
        }
        address.classList.remove('default-border');
        address.classList.add('green-border');
        return true;
    }
    address.onfocus = function() {
        addressErrorBox.innerHTML = '';
    }

    //LOCATION VALIDATION
    location.onblur = function validateLocation() {        
        var locationV = location.value;
        if (locationV.length == 0) {
            locationErrorBox.innerHTML = required;
            location.classList.remove('green-border');
            location.classList.add('default-border');
            return false;
        } 
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< locationV.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (hasNumbers(locationV)) {
            locationErrorBox.innerHTML = 'Must have only letters';
            location.classList.remove('green-border');
            location.classList.add('default-border');
            return false;
        }
        if (locationV.length < 4) {
            locationErrorBox.innerHTML = 'Must have at least 4 characters';
            location.classList.remove('green-border');
            location.classList.add('default-border');
            return false;
        }
        location.classList.remove('default-border');
        location.classList.add('green-border');
        return true;
    }
    location.onfocus = function() {
        locationErrorBox.innerHTML = '';
    }

    //POSTAL CODE VALIDATION
    postalCode.onblur = function validateLocation() {        
        var postalCodeV = postalCode.value;
        if (postalCodeV.length == 0) {
            postalCodeErrorBox.innerHTML = required;
            postalCode.classList.remove('green-border');
            postalCode.classList.add('default-border');
            return false;
        } 
        if (isNaN(postalCodeV)) {
            postalCodeErrorBox.innerHTML = 'Must have only numbers';
            postalCode.classList.remove('green-border');
            postalCode.classList.add('default-border');
            return false;
        }
        if (postalCodeV.length < 4) {
            postalCodeErrorBox.innerHTML = 'Must have between 4 and 5 characters';
            postalCode.classList.remove('green-border');
            postalCode.classList.add('default-border');
            return false;
        } else if (postalCodeV.length > 5) {
            postalCodeErrorBox.innerHTML = 'Must have between 4 and 5 characters';
            postalCode.classList.remove('green-border');
            postalCode.classList.add('default-border');
            return false;
        }
        postalCode.classList.remove('default-border');
        postalCode.classList.add('green-border');
        return true;
    }
    postalCode.onfocus = function() {
        postalCodeErrorBox.innerHTML = '';
    }

    //EMAIL VALIDATION
    email.onblur = function validateEmail() {
        var emailV = email.value;
        if (emailV.length == 0) {
            emailErrorBox.innerHTML = required;
            email.classList.remove('green-border');
            email.classList.add('default-border');
            return false;
        } 
        if (!emailV.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            emailErrorBox.innerHTML = 'Invalid email format';
            email.classList.remove('green-border');
            email.classList.add('default-border');
            return false;
        } 
        email.classList.remove('default-border');
        email.classList.add('green-border');
        return true;
    }
    email.onfocus = function() {
        emailErrorBox.innerHTML = '';
    }

    //REPEAT EMAIL VALIDATION
    repeatEmail.onblur = function validateRepeatEmail() {        
        var emailV = email.value;
        var repeatEmailV = repeatEmail.value;
        if (repeatEmailV.length == 0) {
            repeatEmailErrorBox.innerHTML = required;
            repeatEmail.classList.remove('green-border');
            repeatEmail.classList.add('default-border');
            return false;
        } 
        if (repeatEmailV !== emailV) {
            repeatEmailErrorBox.innerHTML = 'Unmatching email ';
            repeatEmail.classList.remove('green-border');
            repeatEmail.classList.add('default-border');
            return false;
        } 
        repeatEmail.classList.remove('default-border');
        repeatEmail.classList.add('green-border');
        return true;
    }
    repeatEmail.onfocus = function() {
        repeatEmailErrorBox.innerHTML = '';
    }

    //PASSWORD VALIDATION
    password.onblur = function validatePassword() {        
        var passwordV = password.value;
        if (passwordV.length == 0) {
            passwordErrorBox.innerHTML = required;
            password.classList.remove('green-border');
            password.classList.add('default-border');
            return false;
        } 
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< passwordV.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasNumbers(passwordV)) {
            passwordErrorBox.innerHTML = 'Must have numbers';
            password.classList.remove('green-border');
            password.classList.add('default-border');
            return false;
        }
        var AZaz = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';
        function hasLetters(text) {
            for (i = 0; i< passwordV.length; i++) {
                if (AZaz.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasLetters(passwordV)) {
            passwordErrorBox.innerHTML = 'Must have letters';
            password.classList.remove('green-border');
            password.classList.add('default-border');
            return false;
        }
        if (passwordV.length < 8) {
            passwordErrorBox.innerHTML = 'Must have at least 8 characters';
            password.classList.remove('green-border');
            password.classList.add('default-border');
            return false;
        }
        password.classList.remove('default-border');
        password.classList.add('green-border');
        return true;
    }
    password.onfocus = function() {
        passwordErrorBox.innerHTML = '';
    }

    //REPEAT PASSWORD VALIDATION
    repeatPassword.onblur = function validateRepeatPassword() {
        var passwordV = password.value;
        var repeatPasswordV = repeatPassword.value;
        if (repeatPasswordV.length == 0) {
            repeatPasswordErrorBox.innerHTML = 'This field is required';
            repeatPassword.classList.remove('green-border');
            repeatPassword.classList.add('default-border');
            return false;
        } 
        if (repeatPasswordV !== passwordV) {
            repeatPasswordErrorBox.innerHTML = 'Unmatching password ';
            repeatPassword.classList.remove('green-border');
            repeatPassword.classList.add('default-border');
            return false;
        } 
        repeatPassword.classList.remove('default-border');
        repeatPassword.classList.add('green-border');
        return true;
    }
    repeatPassword.onfocus = function() {
        repeatPasswordErrorBox.innerHTML = '';
    }
    
    // SIGNUP BUTTON
    signupButton.onclick = function(e) {
        e.preventDefault();
        var labelArray = document.getElementsByTagName('label');
        
        var msgStarters = [];
        for (i = 0 ; i < labelArray.length ; i++) {
            if (labelArray[i]) {
                msgStarters.push(labelArray[i].innerHTML + ': ');
            }
        }

        var fields = []
        fields.push(firstName.onblur());
        fields.push(lastName.onblur());
        fields.push(dni.onblur());
        fields.push(birthDate.onblur());
        fields.push(phoneNumber.onblur());
        fields.push(address.onblur());
        fields.push(location.onblur());
        fields.push(postalCode.onblur());
        fields.push(email.onblur());
        fields.push(repeatEmail.onblur());
        fields.push(password.onblur());
        fields.push(repeatPassword.onblur());

        var values = [];
        values.push(firstName.value);
        values.push(lastName.value);
        values.push(dni.value);
        values.push(birthDate.value);
        values.push(phoneNumber.value);
        values.push(address.value);
        values.push(location.value);
        values.push(postalCode.value);
        values.push(email.value);
        values.push(repeatEmail.value);
        values.push(password.value);
        values.push(repeatPassword.value);

        var allValidated = [];
        for (i = 0 ; i < values.length ; i++) {
            allValidated.push(msgStarters[i] + values[i])
        }

        var errors = [];
        errors.push(firstNameErrorBox.innerHTML);
        errors.push(lastNameErrorBox.innerHTML);
        errors.push(dniErrorBox.innerHTML);
        errors.push(birthDateErrorBox.innerHTML);
        errors.push(phoneNumberErrorBox.innerHTML);
        errors.push(addressErrorBox.innerHTML);
        errors.push(locationErrorBox.innerHTML);
        errors.push(postalCodeErrorBox.innerHTML);
        errors.push(emailErrorBox.innerHTML);
        errors.push(repeatEmailErrorBox.innerHTML);
        errors.push(passwordErrorBox.innerHTML);
        errors.push(repeatPasswordErrorBox.innerHTML);

        var invalidFields = [];
        for (i = 0 ; i < errors.length ; i++) {
            invalidFields.push(msgStarters[i] + errors[i])
        }
        function isTrue(value) {
            return value === true;
        }
        
        if (fields.every(isTrue)) {
            alert(allValidated.join("\n"));
        } else {
            for (i = 0 ; i < fields.length ; i++) {
                if (fields[i]) {
                    invalidFields[i] = msgStarters[i] + 'CORRECT';
                }
            }
            alert(invalidFields.join("\n"));
        }
    } 
}