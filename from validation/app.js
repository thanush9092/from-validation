const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const mobilenumber = document.getElementById("mobilenumber");
document.getElementById("date").valueAsDate = new Date();

form.addEventListener('submit', e => {
    
    e.preventDefault();
    checkInput();
    alert("dhanush")
});

function checkInput() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const mobilenumberValue = mobilenumber.value.trim();

    if (nameValue == '') {
        setError(name, 'Name Cannot be Blank');
    } else {
        setSuccess(name);
    }

    if (emailValue == '') {
        setError(email, 'Email Cannot be Blank');
    } else if (emailValue.indexOf('@') <= 0) {
        setError(email, 'Invalid email');
    }
    else {
        setSuccess(email);
    }

    if (confirmpasswordValue === '') {
        setError(confirmpassword, 'Confirm Password Cannot be Blank');
    } else if (passwordValue !== confirmpasswordValue) {
        setError(confirmpassword, 'Incorrect password');
    }
    else {
        setSuccess(confirmpassword);
    }

    if (passwordValue === '') {
        setError(password, 'Password Cannot be Blank');
    } else {
        setSuccess(password);
    }
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (mobilenumberValue == '') {
        setError(mobilenumber, 'MobileNumber Cannot be Blank');
    } else if (!mobilenumberValue.match(re)) {
        setError(mobilenumber, 'Enter Valid number');
    }
    else {
        setSuccess(mobilenumber);
    }


    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
    function setSuccess(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control success';
        small.innerText = message;
    }

}

