import { createAuthView } from '../views/authView.js'
import { initDashboard } from './dashboardController.js' 
import { render } from '../render.js'
import { register, login } from '../api/auth.js'

export function initAuthFlow() {

    const { container, elements } = createAuthView()

    elements.registerButton.addEventListener("click", async () => {
        const name = elements.nameInput.value
        const email = elements.emailInput.value
        const password = elements.passwordInput.value

        const registerResponse = await register(name, email, password)

        if (registerResponse.status = 200) {
            const loginResponse = await login(email, password)
            
            if (loginResponse.token) {
                showDashboard()
            }
        }
    })

    elements.loginButton.addEventListener("click", async () => {
        const email = elements.emailInput.value
        const password = elements.passwordInput.value

        const loginResponse = await login(email, password)

        if (loginResponse.token) {
            showDashboard()
        }
    })


    render(container)
}

function showDashboard() {
    elements.logoutButton.addEventListener("click", () => {
        initAuthFlow()
    })

    initDashboard()
}