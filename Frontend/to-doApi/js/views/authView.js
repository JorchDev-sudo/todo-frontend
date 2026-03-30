export function createAuthView() {
    const container = document.createElement("div")

    const nameInput = document.createElement("input")
    nameInput.placeholder = "name"
    const emailInput = document.createElement("input")
    emailInput.placeholder = "email"
    const passwordInput = document.createElement("input")
    passwordInput.placeholder = "password"

    const registerButton = document.createElement("button")
    registerButton.textContent = "Register"
    const loginButton = document.createElement("button")
    loginButton.textContent = "Login"

    container.append(nameInput, emailInput, passwordInput, registerButton, loginButton)

    return {
        container,
        elements: { nameInput, emailInput, passwordInput, registerButton, loginButton }
    }
}