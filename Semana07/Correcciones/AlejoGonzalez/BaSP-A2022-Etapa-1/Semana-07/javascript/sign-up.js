window.onload = function() {
    var name = document.getElementById("name");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var date = document.getElementById("date");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeat-password");
    var button = document.getElementById("sign-up-button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var numbersLetters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
    var numbersLettersSpace = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ';

    name.value = localStorage.getItem('name');
    lastName.value = localStorage.getItem('lastName');
    dni.value = localStorage.getItem('dni');
    date.value = localStorage.getItem('dob');
    phone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    location.value = localStorage.getItem('city');
    postalCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    repeatPassword.value = localStorage.getItem('repeatPassword');

    function validateName() {
        for (let i = 0; i < name.value.length; i++) {
            if(!abc.includes(name.value[i])) {
                return false;
            }
        }
        if(name.value.length < 4) {
            return false;
        }
        return true;
    }

    name.onfocus = function() {
        name.classList.remove("succes");
        name.classList.remove("error");
        document.getElementById("name-msg").innerHTML = '';
    }

    name.onblur = function() {
        if(!validateName()) {
            name.classList.remove("succes");
            name.classList.add("error");
            document.getElementById("name-msg").innerHTML = 'Invalid Name';
        }
        if(validateName()) {
            name.classList.remove("error");
            name.classList.add("succes");
            document.getElementById("name-msg").innerHTML = '';
        }
    }

    function validateLastName() {        
        for (let i = 0; i < lastName.value.length; i++) {
            if(!abc.includes(lastName.value[i])) {
                return false;
            }
        }
        if(lastName.value.length < 4) {
            return false;
        }
        return true;
    }

    lastName.onfocus = function() {
        lastName.classList.remove("succes");
        lastName.classList.remove("error");
        document.getElementById("last-msg").innerHTML = '';
    }

    lastName.onblur = function() {
        if(!validateLastName()) {
            lastName.classList.remove("succes");
            lastName.classList.add("error");
            document.getElementById("last-msg").innerHTML = 'Invalid Last Name';
        }
        if(validateLastName()) {
            lastName.classList.remove("error");
            lastName.classList.add("succes");
            document.getElementById("last-msg").innerHTML = '';
        }
    }

    function validateDni() {        
        for (let i = 0; i < dni.value.length; i++) {
            if(!numbers.includes(dni.value[i])) {
                return false;
            }
        }
        if(dni.value.length < 8) {
            return false;
        }
        return true;
    }

    dni.onfocus = function() {
        dni.classList.remove("succes");
        dni.classList.remove("error");
        document.getElementById("dni-msg").innerHTML = '';
    }

    dni.onblur = function() {
        if(!validateDni()) {
            dni.classList.remove("succes");
            dni.classList.add("error");
            document.getElementById("dni-msg").innerHTML = 'Invalid DNI';
        }
        if(validateDni()) {
            dni.classList.remove("error");
            dni.classList.add("succes");
            document.getElementById("dni-msg").innerHTML = '';
        }
    }

    function calculateAge(date) {
        var today = new Date();
        var date2 = new Date(date)
        var age = today.getFullYear() - date2.getFullYear();
        var months = today.getMonth() - date2.getMonth();
        if (months < 0 || (months === 0 && today.getDate() < date2.getDate())) {
            age--;
        }
        return age;
    }

    function validateDate() {
        if(calculateAge(date.value) < 18) {
            return false;
        }
        if(!date.value) {
            return false;
        } else return true;
    }

    date.onfocus = function() {
        date.classList.remove("succes");
        date.classList.remove("error");
        document.getElementById("date-msg").innerHTML = '';
    }

    date.onblur = function() {
        if(validateDate()) {
            date.classList.remove("error");
            date.classList.add("succes");
            document.getElementById("date-msg").innerHTML = '';
        }
        if(!validateDate()) {
            date.classList.remove("succes");
            date.classList.add("error");
            document.getElementById("date-msg").innerHTML = 'Invalid Date';
        }
    }

    function validatePhone() {        
        for (let i = 0; i < phone.value.length; i++) {
            if(!numbers.includes(phone.value[i])) {
                return false;
            }
        }
        if(phone.value.length != 10) {
            return false;
        }
        return true;
    }

    phone.onfocus = function() {
        phone.classList.remove("succes");
        phone.classList.remove("error");
        document.getElementById("phone-msg").innerHTML = '';
    }

    phone.onblur = function() {
        if(!validatePhone()) {
            phone.classList.remove("succes");
            phone.classList.add("error");
            document.getElementById("phone-msg").innerHTML = 'Invalid Phone';
        }
        if(validatePhone()) {
            phone.classList.remove("error");
            phone.classList.add("succes");
            document.getElementById("phone-msg").innerHTML = '';
        }
    }

    function validateAddress() {
        var arrayNum = [];
        var arrayAbc = [];
        for (let i = 0; i < address.value.length; i++) {
            if(!numbersLettersSpace.includes(address.value[i])) {
                return false;
            }
            if(numbers.includes(address.value[i])) {
                arrayNum.push(address.value[i]);
            }
            if(abc.includes(address.value[i])) {
                arrayAbc.push(address.value[i]);
            }
        }
        if(address.value.length < 5) {
            return false;
        }
        if(arrayAbc.length === 0 || arrayNum.length === 0) {
            return false;
        }
        var addresSplit = address.value.split(' ');
        if(!addresSplit[0] || !addresSplit[1]) {
            return false;
        }
        return true;
    }
    

    address.onfocus = function() {
        address.classList.remove("succes");
        address.classList.remove("error");
        document.getElementById("address-msg").innerHTML = '';
    }

    address.onblur = function() {
        if(!validateAddress()) {
            address.classList.remove("succes");
            address.classList.add("error");
            document.getElementById("address-msg").innerHTML = 'Invalid Address';
        }
        if(validateAddress()) {
            address.classList.remove("error");
            address.classList.add("succes");
            document.getElementById("address-msg").innerHTML = '';
        }
    }

    function validateLocation() {
        var arrayAbc = [];
        for (let i = 0; i < location.value.length; i++) {
            if(!numbersLetters.includes(location.value[i])) {
                return false;
            }
            if(abc.includes(location.value[i])) {
                arrayAbc.push(location.value[i]);
            }
        }
        if(location.value.length < 4) {
            return false;
        }
        if(arrayAbc.length < 4) {
            return false;
        }
        return true;
    }

    location.onfocus = function() {
        location.classList.remove("succes");
        location.classList.remove("error");
        document.getElementById("location-msg").innerHTML = '';
    }

    location.onblur = function() {
        if(!validateLocation()) {
            location.classList.remove("succes");
            location.classList.add("error");
            document.getElementById("location-msg").innerHTML = 'Invalid Location';
        }
        if(validateLocation()) {
            location.classList.remove("error");
            location.classList.add("succes");
            document.getElementById("location-msg").innerHTML = '';
        }
    }

    function validatePostalCode() {        
        for (let i = 0; i < postalCode.value.length; i++) {
            if(!numbers.includes(postalCode.value[i])) {
                return false;
            }
        }
        if(postalCode.value.length === 4 || postalCode.value.length === 5) {
            return true;
        }
        return false;
    }

    postalCode.onfocus = function() {
        postalCode.classList.remove("succes");
        postalCode.classList.remove("error");
        document.getElementById("zip-msg").innerHTML = '';
    }

    postalCode.onblur = function() {
        if(!validatePostalCode()) {
            postalCode.classList.remove("succes");
            postalCode.classList.add("error");
            document.getElementById("zip-msg").innerHTML = 'Invalid Postal Code';
        }
        if(validatePostalCode()) {
            postalCode.classList.remove("error");
            postalCode.classList.add("succes");
            document.getElementById("zip-msg").innerHTML = '';
        }
    }

    function validateEmail() {
        if(emailExpression.test(email.value)) {
            return true;
        } else return false;
    }

    email.onfocus = function() {
        email.classList.remove("succes");
        email.classList.remove("error");
        document.getElementById("email-msg").innerHTML = '';
    }

    email.onblur = function() {
        if(!validateEmail()) {
            email.classList.remove("succes");
            email.classList.add("error");
            document.getElementById("email-msg").innerHTML = 'Invalid Email';
        }
        if(validateEmail()){
            email.classList.remove("error");
            email.classList.add("succes");
            document.getElementById("email-msg").innerHTML = '';
        }
    }

    function validatePassword() {
        var arrayNum = [];
        var arrayAbc = [];
        for (let i = 0; i < password.value.length; i++) {
            if(!numbersLetters.includes(password.value[i])) {
                return false;
            }
            if(numbers.includes(password.value[i])) {
                arrayNum.push(password.value[i]);
            }
            if(abc.includes(password.value[i])) {
                arrayAbc.push(password.value[i]);
            }
        }        
        if(password.value.length < 8) {
            return false;
        }
        if(arrayAbc.length === 0 || arrayNum.length === 0) {
            return false;
        }
        return true;
    }

    password.onfocus = function() {
        password.classList.remove("succes");
        password.classList.remove("error");
        document.getElementById("pass-msg").innerHTML = '';
    }

    password.onblur = function() {
        if(!validatePassword()) {
            password.classList.remove("succes");
            password.classList.add("error");
            document.getElementById("pass-msg").innerHTML = 'Invalid Password';
        }
        if(validatePassword()){
            password.classList.remove("error");
            password.classList.add("succes");
            document.getElementById("pass-msg").innerHTML = '';
        }
    }

    function validateRepeatPassword() {
        var arrayNum = [];
        var arrayAbc = [];
        for (let i = 0; i < password.value.length; i++) {
            if(!numbersLetters.includes(password.value[i])) {
                return false;
            }
            if(numbers.includes(password.value[i])) {
                arrayNum.push(password.value[i]);
            }
            if(abc.includes(password.value[i])) {
                arrayAbc.push(password.value[i]);
            }
        }        
        if(password.value.length < 8) {
            return false;
        }
        if(arrayAbc.length === 0 || arrayNum.length === 0) {
            return false;
        }
        if(password.value != repeatPassword.value) {
            return false;
        }
        return true;
    }

    repeatPassword.onfocus = function() {
        repeatPassword.classList.remove("succes");
        repeatPassword.classList.remove("error");
        document.getElementById("rpass-msg").innerHTML = '';
    }

    repeatPassword.onblur = function() {
        if(!validateRepeatPassword()) {
            repeatPassword.classList.remove("succes")
            repeatPassword.classList.remove("border-none");
            repeatPassword.classList.add("error");
            document.getElementById("rpass-msg").innerHTML = 'Invalid Repeat Password';
        }
        if(validateRepeatPassword()){
            repeatPassword.classList.remove("error");
            repeatPassword.classList.remove("border-none");
            repeatPassword.classList.add("succes");
            document.getElementById("rpass-msg").innerHTML = '';
        }
    }

    button.onclick = function() {
        var errors = [];
        if(!validateName()) {
            errors.push('Invalid Name');
        }
        if(!validateLastName()) {
            errors.push('Invalid Last Name');
        }
        if(!validateDni()) {
            errors.push('Invalid DNI');
        }
        if(!validateDate()) {
            errors.push('Invalid Date');
        }
        if(!validatePhone()) {
            errors.push('Invalid Phone');
        }
        if(!validateAddress()) {
            errors.push('Invalid Address');
        }
        if(!validateLocation()) {
            errors.push('Invalid Location');
        }
        if(!validatePostalCode()) {
            errors.push('Invalid Postal Code');
        }
        if(!validateEmail()) {
            errors.push('Invalid Email');
        }
        if(!validatePassword()) {
            errors.push('Invalid Password');
        }
        if(!validateRepeatPassword()) {
            errors.push('Invalid Repeat Password');
        }
        if(!errors.length) {
            alert('Name: ' + name.value + '\nLast Name: ' + lastName.value + '\nDNI: ' + dni.value
            + '\nDate: ' + date.value + '\nPhone: ' + phone.value + '\nAddress: ' + address.value 
            + '\nLocation: ' + location.value + '\nPostal Code: ' + postalCode.value + '\nEmail: ' + email.value
            + '\nPassword: ' + password.value + '\nRepeat Password: ' + repeatPassword.value);
            var arrayDate = date.value.split('-');
            var formatDate = arrayDate[1] + '/' + arrayDate[2] + '/' + arrayDate[0];
            var request = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + name.value + '&lastName=' + lastName.value +
            '&dni=' + dni.value + '&dob=' + formatDate + '&phone=' + phone.value + '&address=' + address.value + '&city=' + location.value +
            '&zip=' + postalCode.value + '&email=' + email.value + '&password=' + password.value + '&password=' + repeatPassword.value;
            fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if(data.success) {
                        localStorage.setItem('name', name.value);
                        localStorage.setItem('lastName', lastName.value);
                        localStorage.setItem('dni', dni.value);
                        localStorage.setItem('dob', date.value);
                        localStorage.setItem('phone', phone.value);
                        localStorage.setItem('address', address.value);
                        localStorage.setItem('city', location.value);
                        localStorage.setItem('zip', postalCode.value);
                        localStorage.setItem('email', email.value);
                        localStorage.setItem('password', password.value);
                        localStorage.setItem('repeatPassword', repeatPassword.value);
                        alert('Msg: ' + data.msg + '\nName: ' + name.value + '\nLast Name: ' + lastName.value + '\nDNI: ' + dni.value
                        + '\nDate: ' + date.value + '\nPhone: ' + phone.value + '\nAddress: ' + address.value 
                        + '\nLocation: ' + location.value + '\nPostal Code: ' + postalCode.value + '\nEmail: ' + email.value
                        + '\nPassword: ' + password.value + '\nRepeat Password: ' + repeatPassword.value);
                    } else if (data.msg) {
                        alert('Error: ' + data.msg);
                    } else if (data.errors){
                        var errorMsg = []
                        for (var i=0; i<data.errors.length; i++) {
                            errorMsg.push(data.errors[i].msg);
                        }
                        alert(errorMsg.join('\n'));
                    }
                })
                .catch(function(error) {
                    alert('Error: ' + error);
                });
        } else {
            alert(errors.join('\n'));
        }
    }
}