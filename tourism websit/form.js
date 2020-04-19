let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");

function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})?$/
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    } else {

        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }

}

// function validate() {
//     if (email.value == "" || pwd.value == "") {
//         alert("Fields cannot be Empty");
//         return false;
//     } else {
//         return true;
//     }

//     //*alert("validation is proper");
// }
// }