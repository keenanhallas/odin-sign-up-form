let signUpForm = document.querySelector(".sign-up-form");
let warningSpan = document.querySelector(".password-warning");
let submitButton = document.querySelector(".submit-btn");
let passwordOne = document.querySelector("[name='password']");
let passwordTwo = document.querySelector("[name='confirm-password']");
let formInputs = document.querySelectorAll("input")

function checkMatch(e) {
    if(passwordOne.value !== passwordTwo.value){
        warningSpan.classList.toggle("mismatch");
        e.preventDefault();
    } else {
        warningSpan.classList.remove("mismatch");
    }
}

submitButton.addEventListener("click", checkMatch);