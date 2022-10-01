window.onload = function () {
    var loginEmail = document.getElementById('email');
    var emailErrorBox = document.getElementById('email-error');
    var inputEmail = document.getElementById('input-email');
    var loginPassword = document.getElementById('password');
    var passwordErrorBox = document.getElementById('password-error');
    var inputPassword = document.getElementById('input-password');

    var required = 'This field is required'

    var loginButton = document.getElementById('login-btn');
    
    // EMAIL VALIDATION
    loginEmail.onblur = function validateEmail() {
        var email = loginEmail.value;
        
        if (email.length == 0) {
            emailErrorBox.innerHTML = required;
            inputEmail.classList.remove('green-border');
            inputEmail.classList.add('default-border');
            return false;
        } 
        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            emailErrorBox.innerHTML = 'Invalid email format';
            inputEmail.classList.remove('green-border');
            inputEmail.classList.add('default-border');
            return false;
        } 
        inputEmail.classList.remove('default-border');
        inputEmail.classList.add('green-border');
        return true;
    }
    loginEmail.onfocus = function() {
        emailErrorBox.innerHTML = '';
    }

    // PASSWORD VALIDATION
    loginPassword.onblur = function validatePassword() {
        var password = loginPassword.value;

        if (password.length == 0) {
            passwordErrorBox.innerHTML = required;
            inputPassword.classList.remove('green-border');
            inputPassword.classList.add('default-border');
            return false;
        }
        var numbers = '0123456789';
        function hasNumbers(text) {
            for (i = 0; i< password.length; i++) {
                if (numbers.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasNumbers(password)) {
            passwordErrorBox.innerHTML = 'Must have numbers';
            inputPassword.classList.remove('green-border');
            inputPassword.classList.add('default-border');
            return false;
        }
        var AZaz = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';
        function hasLetters(text) {
            for (i = 0; i< password.length; i++) {
                if (AZaz.indexOf(text.charAt(i),0)!=-1)
                return true;
            }
            return false;
        }
        if (!hasLetters(password)) {
            passwordErrorBox.innerHTML = 'Must have letters';
            inputPassword.classList.remove('green-border');
            inputPassword.classList.add('default-border');
            return false;
        }
        if (password.length < 8) {
            passwordErrorBox.innerHTML = 'Must have at least 8 characters';
            inputPassword.classList.remove('green-border');
            inputPassword.classList.add('default-border');
            return false;
        }
        inputPassword.classList.remove('default-border');
        inputPassword.classList.add('green-border');
        return true;
    }
    loginPassword.onfocus = function() {
        passwordErrorBox.innerHTML = '';
    }

    // LOGIN BUTTON
    loginButton.onclick = function(e) {
        e.preventDefault();
        var validateEmail = loginEmail.onblur();
        var validatePassword = loginPassword.onblur();
        var msgStarters = ['Email: ' , 'Password: '];
        var fields = [validateEmail , validatePassword]
        var allValidated = [
            msgStarters[0] + loginEmail.value ,
            msgStarters[1] + loginPassword.value 
        ]
        var invalidFields = [
            msgStarters[0] + emailErrorBox.innerHTML ,
            msgStarters[1] + passwordErrorBox.innerHTML
        ]

        if (validatePassword && validateEmail) {
            alert(allValidated.join("\n"));
        }
        if (!validatePassword || !validateEmail) {
            for (i = 0 ; i < fields.length ; i++) {
                if (fields[i]) {
                    invalidFields[i] = msgStarters[i] + 'CORRECT';
                }
            }
            alert(invalidFields.join("\n"));
        }
    } 
}