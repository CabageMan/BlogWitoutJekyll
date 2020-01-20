"use strict";

import * as validation from "./validationHandlers";

document.getElementById('loginSubmitButton').addEventListener('click', function(event){
    event.preventDefault();
    validateLoginForm();
});

function validateLoginForm() {
    let nameValue = document.forms['loginForm']['username'];
    let passwordValue = document.forms['loginForm']['password'];
    let rememberMeValue = document.forms['loginForm']['rememberMe'];

    if (validation.isValid(nameValue) && validation.isValid(password)) {
        let alertString = `You entered: \nUsername: ${nameValue}\nPassword: ${passwordValue}\nRemember Me: ${rememberMeValue}`;
        alert(alertString);
    } else if (!validation.isValid(nameValue)) {
        alert('Name must be filled out!');
    } else if (!validation.isValid(passwordValue)) {
        alert('Password must be filled out!');
    } else {
        alert('Name and Password must be filled out!')
    }
}