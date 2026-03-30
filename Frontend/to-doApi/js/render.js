const app = document.getElementById("app")

export function render(view) {
    app.innerHTML = ""
    app.appendChild(view)
}