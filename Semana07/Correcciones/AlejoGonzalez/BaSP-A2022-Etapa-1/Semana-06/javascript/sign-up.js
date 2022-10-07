window.onload = function() {
    var name = document.getElementById("name");
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var numbersLetters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
    var numbersLettersSpace = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ';

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
    }

    name.onblur = function() {
        if(!validateName()) {
            name.classList.remove("succes");
            name.classList.add("error");
        }
        if(validateName()) {
            name.classList.remove("error");
            name.classList.add("succes");
        }
    }

    var lastName = document.getElementById("last-name");

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
    }

    lastName.onblur = function() {
        if(!validateLastName()) {
            lastName.classList.remove("succes");
            lastName.classList.add("error");
        }
        if(validateLastName()) {
            lastName.classList.remove("error");
            lastName.classList.add("succes");
        }
    }

    var dni = document.getElementById("dni");
    
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
    }

    dni.onblur = function() {
        if(!validateDni()) {
            dni.classList.remove("succes");
            dni.classList.add("error");
        }
        if(validateDni()) {
            dni.classList.remove("error");
            dni.classList.add("succes");
        }
    }

    var date = document.getElementById("date");

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
            return false
        } return true
    }

    date.onfocus = function() {
        date.classList.remove("succes");
        date.classList.remove("error");
    }

    date.onblur = function() {
        if(validateDate()) {
            date.classList.remove("error");
            date.classList.add("succes");
        }
        if(!validateDate()) {
            date.classList.remove("succes");
            date.classList.add("error");
        }
    }

    var phone = document.getElementById("phone");
    
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
    }

    phone.onblur = function() {
        if(!validatePhone()) {
            phone.classList.remove("succes");
            phone.classList.add("error");
        }
        if(validatePhone()) {
            phone.classList.remove("error");
            phone.classList.add("succes");
        }
    }

    var address = document.getElementById("address");

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
    }

    address.onblur = function() {
        if(!validateAddress()) {
            address.classList.remove("succes");
            address.classList.add("error");
        }
        if(validateAddress()) {
            address.classList.remove("error");
            address.classList.add("succes");
        }
    }

    var location = document.getElementById("location");

    function validateLocation() {        
        for (let i = 0; i < location.value.length; i++) {
            if(!numbersLetters.includes(location.value[i])) {
                return false;
            }
        }
        if(location.value.length < 4) {
            return false
        }
        return true;
    }

    location.onfocus = function() {
        location.classList.remove("succes");
        location.classList.remove("error");
    }

    location.onblur = function() {
        if(!validateLocation()) {
            location.classList.remove("succes");
            location.classList.add("error");
        }
        if(validateLocation()) {
            location.classList.remove("error");
            location.classList.add("succes");
        }
    }

    var postalCode = document.getElementById("postal-code");

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
    }

    postalCode.onblur = function() {
        if(!validatePostalCode()) {
            postalCode.classList.remove("succes");
            postalCode.classList.add("error");
        }
        if(validatePostalCode()) {
            postalCode.classList.remove("error");
            postalCode.classList.add("succes");
        }
    }

    var email = document.getElementById("email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function validateEmail() {
        if(emailExpression.test(email.value)) {
            return true;
        } else return false;
    }

    email.onfocus = function() {
        email.classList.add("border-none");
    }

    email.onblur = function() {
        if(!validateEmail()) {
            email.classList.remove("succes")
            email.classList.remove("border-none");
            email.classList.add("error");
        }
        if(validateEmail()){
            email.classList.remove("error");
            email.classList.remove("border-none");
            email.classList.add("succes");
        }
    }

    var password = document.getElementById("password");

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
        password.classList.add("border-none");
    }

    password.onblur = function() {
        if(!validatePassword()) {
            password.classList.remove("succes")
            password.classList.remove("border-none");
            password.classList.add("error");
        }
        if(validatePassword()){
            password.classList.remove("error");
            password.classList.remove("border-none");
            password.classList.add("succes");
        }
    }

    var repeatPassword = document.getElementById("repeat-password");

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
        repeatPassword.classList.add("border-none");
    }

    repeatPassword.onblur = function() {
        if(!validateRepeatPassword()) {
            repeatPassword.classList.remove("succes")
            repeatPassword.classList.remove("border-none");
            repeatPassword.classList.add("error");
        }
        if(validateRepeatPassword()){
            repeatPassword.classList.remove("error");
            repeatPassword.classList.remove("border-none");
            repeatPassword.classList.add("succes");
        }
    }

    var button = document.getElementById("sign-up-button");

    button.onclick = function() {
        if(validateName() && validateLastName() && validateDni() && validateDate() && validatePhone() && validateAddress() &&
        validateLocation() && validatePostalCode() && validateEmail() && validatePassword() && validateRepeatPassword()) {
            alert('Name: ' + name.value + '\n Last Name: ' + lastName.value + '\n DNI: ' + dni.value + '\n Date off Birth: ' + date.value +
            '\n Phone: ' + phone.value + '\n Address: ' + address.value + '\n Location: ' + location.value + '\n Postal Code: ' + postalCode.value +
            '\n Email: ' + email.value + '\n Password: ' + password.value + '\n Repeat Password: ' + repeatPassword.value);
        } else {
            alert('Invalid input, check');
        }
    }
}