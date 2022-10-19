const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


firstname.addEventListener('change', testFirstName);
password.addEventListener('change', testPassword);

function testFirstName(e) {
    let firstName = e.target;
    if (!firstName.checkValidity()) {
        firstName.setCustomValidity('Please Enter A Valid First Name');
        firstName.reportValidity();
    } 
}

function testPassword(e) {
    let password = e.target;
    let currently = password.checkValidity();

    if(currently) {
        let passReg = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        if (passReg.test(password.value) === false) {
            password.setCustomValidity('Password must contain at least one capital letter, one number and one special character');
            password.reportValidity();
        }
    }
}

function testPasswordConfirmation(e) {

} 

form.addEventListener('submit', (e) => {
    const submittedForm = e.target;

    if (submittedForm.checkValidity()) {

    } else {
        e.preventDefault();
    }
});