export const registerButton = document.createElement("button")
registerButton.textContent = "Register"

export const loginButton = document.createElement("button")
loginButton.textContent = "Login"

export const nameInput = document.createElement("input")
nameInput.placeholder = "Name"

export const emailInput = document.createElement("input")
emailInput.placeholder = "Email"

export const passwordInput = document.createElement("input")
passwordInput.placeholder = "Password"

export function render() {
    document.body.append(
        nameInput,
        emailInput,
        passwordInput,
        registerButton,
        loginButton
    )
}