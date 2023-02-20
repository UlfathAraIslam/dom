// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: set password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from an element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DANGER: Do not verify email passwprd on the client side

    // step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@bapp.com' && password === 'secret'){
        window.location.href= 'bank.html';
    }
    else{
        alert('passward can not find');
    }

})