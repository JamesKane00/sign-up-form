const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('create-account');

password.addEventListener('change', testPassword);
confirmPassword.addEventListener('change', testPassword);
tel.addEventListener('change', testTel);
submit.addEventListener('click', submitForm);

function testPassword(e) {
    let password = e.target;
    let valid = password.checkValidity();

    password.setCustomValidity('');

    if(valid) {
        let passReg = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        if (passReg.test(password.value) === false) {
            password.setCustomValidity('Password must contain at least one capital letter, one number and one special character');
            password.reportValidity();
        }
        if (confirmPassword.value != password.value) {
            password.setCustomValidity('Ensure Both Password Fields Match.');
            password.reportValidity();
        } 
    }
}

function testTel(e) {
    let number = e.target;

    number.setCustomValidity('');

    if(telValid) {
        let telReg = new RegExp('\d{3}[ -.]\d{3}[ -.]\d{4}');
        if (telReg.test(number.value) == false) {
            number.setCustomValidity('Please enter a valid US phone number (###-###-####)');
            number.reportValidity();
        }
    }
}

function submitForm(e) {
    form.addEventListener('submit', (e) => {
        const submittedForm = e.target;

        if (submittedForm.checkValidity()) {
            Array.from(form.elements).forEach(i => {
                i.value = "";
                window.location.reload();
            })
        } else {
            e.preventDefault();
        }
    });
}