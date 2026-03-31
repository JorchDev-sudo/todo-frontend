const tasksContainer = document.createElement("div")
const table = document.createElement("table")

const thead = document.createElement("thead")

const headingRow = document.createElement("tr")

const idTh = document.createElement("th")
idTh.innerText = "Id"

const nameTh = document.createElement("th")
nameTh.innerText = "Name"

const descriptionTh = document.createElement("th")
descriptionTh.innerText = "Description"

const statusTh = document.createElement("th")
statusTh.innerText = "Status"

const createdAtTh = document.createElement("th")
createdAtTh.innerText = "Created At"

const tbody = document.createElement("tbody")
const pageInfo = document.createElement("span")

export function renderTasks(data) {
    data.content.forEach(task => {
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
            <td>${task.createdAt}</td>
        `;

        tbody.appendChild(row)
    })

    pageInfo.textContent = `Page ${data.number + 1} of ${data.totalPages}`

    headingRow.append(idTh, nameTh, descriptionTh, statusTh, createdAtTh)
    thead.append(headingRow)
    table.append(thead, tbody)
    tasksContainer.append(table, pageInfo)

    return {
        tasksContainer,
        tasksElements: {table, pageInfo}
    }
}