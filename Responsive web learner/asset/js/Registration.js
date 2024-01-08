// GRABBING THE ELEMENTS FROM THE DOM (HTML)

const username = document.getElementById('username');

const form = document.getElementById('form');

const email = document.getElementById('email');

const password = document.getElementById('password');

const confirmPassword = document.getElementById('confirmPassword');

 

// SUBMIT THE FORM

form.addEventListener('submit', e => {

    e.preventDefault(); //prevents the input from submitting

 

    validateInputs();

});

 

console.log(form); //Output form values for us

 

const setSuccess = (element) =>{

    const inputControl = element.parentElement;

    const errorDisplay = inputControl.querySelector('.error');

 

    //SET THE SUCCESS MESSAGE ON THE PAGE THROUGH CSS

    errorDisplay.innerText = '';

    inputControl.classList.add('success');

    inputControl.classList.remove('error');

}

 

// FUNCTION TO SET AN ERROR MESSAGE

const setError = (element, message) => {

    const inputControl = element.parentElement;

    const errorDisplay = inputControl.querySelector('.error');

 

    // SET THE MESSAGE ON THE PAGE THROUGH CSS

    errorDisplay.innerText = message;

    inputControl.classList.add('error');

    inputControl.classList.remove('success');

}

 

//HANDLE EMAIL VALIDATION USING REGEX

const isValidEmail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());

}

 

const validateInputs = () =>{

    const usernameValue = username.value.trim();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    const confirmPasswordValue = confirmPassword.value.trim();

 

    if (usernameValue===''){

        setError(username, "Username is required");

    }

    else{

        setSuccess(username)

    }

 

 

    if (emailValue ===""){ //check if emailValue is empty

        setError(email, "Email is required");

    }

    else if (!isValidEmail(emailValue)){ //check if emailValue is correct

        setError(email, "Provide a valid email address");

    }

    else{

        setSuccess(email);

    }

 

    console.log(emailValue) //Print out the email value that the user sends

 

    if (passwordValue ===""){ //check if passwordValue is empty

        setError(password, "Password is required");

    }

    else if (passwordValue.length < 8){

        setError(password, "Password must be at least 8 characters");

    }

    else{

        setSuccess(password);

    }

 

    // EQUALITY OPERATORS

    // == //equal to

    // === // strictly equal to

    // !==

 

 

 

    if (confirmPasswordValue === ''){ //check if passwordValue is empty

        setError(confirmPassword, "Please confirm your password");

    }

    else if (confirmPasswordValue !== passwordValue){

        setError(confirmPassword, "Password does not match");

    }

    else{

        setSuccess(confirmPassword);

    }

 

}


