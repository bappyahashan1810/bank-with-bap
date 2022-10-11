document.getElementById('Login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    // email & password checked

    if (userEmail == 'bappy@gmail.com' && userPassword == '123') {

        window.location.href = 'banking.html';
    }

    else {
        console.log('invalid');
    }

});

