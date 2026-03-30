const tbody = document.getElementById("tasksTableBody");
const pageInfo = document.getElementById("pageInfo");

export function renderTasks(data) {
    tbody.innerHTML = "";

    data.content.forEach(task => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
            <td>${task.createdAt}</td>
        `;

        tbody.appendChild(row);
    });

    pageInfo.textContent = `Page ${data.number + 1} of ${data.totalPages}`;
}