window.onload = function() {
    var expRegPassword = /^['a-zA-Z'0-9]{8,20}$/;
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    var emailEnter = document.getElementById('email-enter');
    emailEnter.onblur = function(){
        var validateEmail = expReg.test(emailEnter.value);
        if (validateEmail == true){
            emailEnter.classList.remove('red-border')
            emailEnter.classList.add('green-border');
        }  else{
            emailEnter.classList.add('red-border');
            emailEnter.classList.remove('green-border');
        };
    };      
    emailEnter.onfocus = function(){
        emailEnter.classList.remove('red-border');
    };     
    var passwordEnter = document.getElementById('password-enter');
        passwordEnter.onblur = function(){
            var validatePassword = expRegPassword.test(passwordEnter.value);
            if (validatePassword == true){
                passwordEnter.classList.remove('red-border')
                passwordEnter.classList.add('green-border');
            } else{
                passwordEnter.classList.add('red-border')
                passwordEnter.classList.remove('green-border');
            };
        };
    passwordEnter.onfocus = function(){
        passwordEnter.classList.remove('red-border');
    };

  var buttonForm = document.getElementById('button-form');
   buttonForm.onclick = function(e){
        e.preventDefault();
       if (expReg.test(emailEnter.value) && expRegPassword.test(passwordEnter.value)){
           alert('Email: ' + emailEnter.value + "\n" + 'Password: ' + passwordEnter.value);
       } else if(!expReg.test(emailEnter.value) && expRegPassword.test(passwordEnter.value)){
           alert('Email false');
       } else if(expReg.test(emailEnter.value) && !expRegPassword.test(passwordEnter.value)){
        alert('Password false');
       } else{
            alert("Email and Password false");
       };
    };
};   





















