let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");


function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})?$/
    if (email.value == "") {
        alert("Email cannot be empty");
        return false;
    } else if (pwd.value == "") {
        alert("password cannot blank")
        return false;
    } else if (pwd.value.length <= 8) {
        alert("password is too short")
        pwd.style.border = "2px.solid.red";
        return false;
    }
}
const indicatepassLength = () => {
    if (password.value.length < 8) {
        passLenghtIndicator.innerHTML = "weak";
        passLenghtIndicator.style.backgroundColor = 'red';

    } else if (password.value.length < 12 && password.value.length >= 8) {
        passLenghtIndicator.innerHTML = "medium";
        passLenghtIndicator.style.backgroundColor = 'orange';
    } else {
        passLenghtIndicator.innerHTML = "strong";
        passLenghtIndicator.style.backgroundColor = 'green';
    }
    let passLenghtIndicatorLen = 10 + password.value.length * 5;
    passLenghtIndicator.style.width = '${passIndicatorLen}%';
    passLenghtIndicator.classList.remove('hidden');


}