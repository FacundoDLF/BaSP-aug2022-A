window.onload = function() {
    var name = document.getElementById("name");
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
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
        name.classList.add("input-border");
    }

    name.onblur = function() {
        if(!validateName()) {
            name.classList.remove("input-border");
            name.classList.remove("succes");
            name.classList.add("error");
        }
        if(validateName()) {
            name.classList.remove("input-border");
            name.classList.remove("error");
            name.classList.add("succes");
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
        email.classList.remove("error");
        email.classList.remove("succes");
        email.classList.add("input-border");
    }

    email.onblur = function() {
        if(!validateEmail()) {
            email.classList.remove("succes");
            email.classList.remove("input-border");
            email.classList.add("error");
        }
        if(validateEmail()){
            email.classList.remove("error");
            email.classList.remove("input-border");
            email.classList.add("succes");
        }
    }

    var message = document.getElementById("message");

    function validateMessage() {
        for (let i = 0; i < message.value.length; i++) {
            if(!numbersLettersSpace.includes(message.value[i])) {
                return false;
            }
        }
        if(message.value.length < 4) {
            return false;
        }
        return true;
    }

    message.onfocus = function() {
        message.classList.remove("succes");
        message.classList.remove("error");
        message.classList.add("input-border");
    }

    message.onblur = function() {
        if(!validateMessage()) {
            message.classList.remove("input-border");
            message.classList.remove("succes");
            message.classList.add("error");
        }
        if(validateMessage()) {
            message.classList.remove("input-border");
            message.classList.remove("error");
            message.classList.add("succes");
        }
    }

    var button = document.getElementById("form-button");

    button.onclick = function() {
        if(validateEmail() && validateName() && validateMessage()) {
            alert('Email: ' + email.value + '\n Name: ' + name.value + '\n Message: ' + message.value);
        } else if (!validateEmail() && validateName() && validateMessage()) {
            alert('Invalid email');
        } else if (validateEmail() && !validateName() && validateMessage()) {
            alert('Invalid name');
        } else if (validateEmail() && validateName() && !validateMessage()) {
            alert('Invalid message');
        } else if (!validateEmail() && !validateName() && validateMessage()) {
            alert('Invalid name and email');
        } else if (!validateEmail() && validateName() && !validateMessage()) {
            alert('Invalid message and email');
        } else if (validateEmail() && !validateName() && !validateMessage()) {
            alert('Invalid name and message');
        } else {
            alert('Invalid email, name and message');
        }
    }
}