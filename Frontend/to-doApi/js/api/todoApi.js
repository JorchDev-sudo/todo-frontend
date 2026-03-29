//Get Users
async function getAll() { 
    const response = fetch("http://localhost:8080/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        }
    })

    const data = await response.json()
    return data
}