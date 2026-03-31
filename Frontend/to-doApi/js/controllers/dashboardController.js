import { createDashboardView } from "../views/dashboardView.js"
import { loadTasks } from "./taskController.js"

import { render } from "../render.js"

export async function initDashboard() {
    const { dashboardContainer, dashboardElements } = createDashboardView()
    const { tasksContainer, tasksElements } = loadTasks()

    dashboardContainer.appendChild(tasksContainer)

    render(dashboardContainer)
}