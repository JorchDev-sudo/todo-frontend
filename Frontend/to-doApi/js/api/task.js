export async function getTasks(page = 0) {
    const response = await fetch(`http://localhost:8080/api/tasks?page=${page}&size=10`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        }
    });
    
    return await response.json();
}