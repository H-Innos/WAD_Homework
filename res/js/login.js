const email = document.querySelector('input[type="text"]')
const password = document.querySelector('input[type="password"]')
const button = document.querySelector('input[type="submit"]')

button.addEventListener("mouseover", enableSubmit)
email.addEventListener("input", enableSubmit)
password.addEventListener("input", enableSubmit)

function enableSubmit() {
    if (email.value != "" && password.value != "") {
        button.disabled = false
    } else {
        button.disabled = true
    }
}