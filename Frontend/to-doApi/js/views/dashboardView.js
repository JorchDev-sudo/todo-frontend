export function createDashboardView() {
    const dashboardContainer = document.createElement("div")

    const title = document.createElement("h2")
    title.textContent = " Welcome!"

    const logoutButton = document.createElement("button")
    logoutButton.textContent = "Logout"

    dashboardContainer.append(title, logoutButton)

    return {
        dashboardContainer,
        dashboardElements: { logoutButton }
    }
}