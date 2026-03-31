import { getTasks } from "../api/task.js"
import { renderTasks } from "../views/taskView.js"

let currentPage = 0

export async function loadTasks(page = 0) {
    const data = await getTasks(page)

    currentPage = data.number

    const { tasksContainer, tasksElements } = renderTasks(data)

    return {tasksContainer, tasksElements}
}

/*
export function initTaskEvents() {
    document.getElementById("nextPage").addEventListener("click", () => {
        loadTasks(currentPage + 1)
    });

    document.getElementById("prevPage").addEventListener("click", () => {
        if (currentPage > 0) {
            loadTasks(currentPage - 1)
        }
    });
}
*/