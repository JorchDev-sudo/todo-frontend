import { getTasks } from "../api/task.js"
import { renderTasks } from "../views/taskView.js"

let currentPage = 0
const size = 10

export async function loadTasks(page = 0) {
    const data = await getTasks(page, size)

    currentPage = data.number

    const tasksContainer = renderTasks(data)
    const tasksElements = tasksContainer.tasksElements  

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