export function createDashboardView() {
    const container = document.createElement("div")

    const title = document.createElement("h2")
    title.textContent = "Bienvenido!"

    const logoutButton = document.createElement("button")
    logoutButton.textContent = "Logout"

    container.append(title, logoutButton)

    return {
        container,
        elements: { logoutButton }
    }
}