window.onload = function() {
    var mail = document.getElementById("mail");
    var password = document.getElementById("password");
    var button = document.getElementById("login-button");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var passExp2 = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
    var numbers = '0123456789';
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    function validateMail() {
        if(emailExpression.test(mail.value)) {
            return true;
        } else return false;
    }

    mail.onfocus = function() {
        mail.classList.add("border-none");
        document.getElementById("email-msg").innerHTML = '';
    }

    mail.onblur = function() {
        if(!validateMail()) {
            mail.classList.remove("succes")
            mail.classList.remove("border-none");
            mail.classList.add("error");
            document.getElementById("email-msg").innerHTML = 'Invalid Email';
        }
        if(validateMail()){
            mail.classList.remove("error");
            mail.classList.remove("border-none");
            mail.classList.add("succes");
            document.getElementById("email-msg").innerHTML = '';
        }
    }

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
        document.getElementById("pass-msg").innerHTML = '';
    }

    password.onblur = function() {
        if(!validatePassword()) {
            password.classList.remove("succes")
            password.classList.remove("border-none");
            password.classList.add("error");
            document.getElementById("pass-msg").innerHTML = 'Invalid Password';
        }
        if(validatePassword()){
            password.classList.remove("error");
            password.classList.remove("border-none");
            password.classList.add("succes");
            document.getElementById("pass-msg").innerHTML = '';
        }
    }

    button.onclick = function() {
        var errors = [];
        if(!validatePassword()) {
            errors.push('Invalid password');
        }
        if(!validateMail()) {
            errors.push('Invalid mail');
        }
        if(!errors.length) {
            alert('Email: ' + mail.value + '\nPassword: ' + password.value);
            var request = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + mail.value + '&password=' + password.value;
            fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if(data.success) {
                        alert('Msg: ' + data.msg + '\nEmail: ' + mail.value + '\nPassword: ' + password.value);
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