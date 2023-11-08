document.addEventListener("DOMContentLoaded", function() {
    const userDetails = document.getElementById("user-details");
    const taskList = document.getElementById("task-list");
    const createTaskButton = document.getElementById("create-task-button");

    // Mock user data
    const user = {
        name: "John Doe",
        username: "johndoe",
        tasks: ["Task 1", "Task 2"],
    };

    // Display user details and tasks
    userDetails.innerHTML = `<p>Name: ${user.name}</p><p>Username: ${user.username}</p>`;
    taskList.innerHTML = `<h3>Tasks:</h3><ul>${user.tasks.map(task => `<li>${task}</li>`).join("")}</ul>`;

    createTaskButton.addEventListener("click", () => {
        const taskDescription = document.getElementById("task-description").value;
        const assignee = document.getElementById("assignee").value;

        // You can add code here to create a new task and update the user's task list
        alert(`Task created: ${taskDescription}, Assignee: ${assignee}`);
    });
});
