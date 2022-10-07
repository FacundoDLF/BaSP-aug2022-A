window.onload = function() {
    var mail = document.getElementById("mail");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function validateMail() {
        if(emailExpression.test(mail.value)) {
            return true;
        } else return false;
    }

    mail.onfocus = function() {
        mail.classList.add("border-none");
    }

    mail.onblur = function() {
        if(!validateMail()) {
            mail.classList.remove("succes")
            mail.classList.remove("border-none");
            mail.classList.add("error");
        }
        if(validateMail()){
            mail.classList.remove("error");
            mail.classList.remove("border-none");
            mail.classList.add("succes");
        }
    }

    var password = document.getElementById("password");    
    var passExp2 = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
    var numbers = '0123456789';
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    function validatePassword() {
        var arrayNum = [];
        var arrayAbc = [];
        for (let i = 0; i < password.value.length; i++) {
            if(!passExp2.includes(password.value[i])) {
                return false;
            }
            if(numbers.includes(password.value[i])) {
                arrayNum.push(password.value[i]);
            }
            if(abc.includes(password.value[i])) {
                arrayAbc.push(password.value[i]);
            }
        }        
        if(!password.value) {
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

    var button = document.getElementById("login-button");

    button.onclick = function() {
        if(validateMail() && validatePassword()) {
            alert('Email: ' + mail.value + '\n Password: ' + password.value);
        } else if (!validateMail() && validatePassword()) {
            alert('Invalid email');
        } else if (validateMail() && !validatePassword()) {
            alert('Invalid password');
        } else {
            alert('Invalid email and password');
        }
    }
}