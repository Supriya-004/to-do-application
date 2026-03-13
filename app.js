let todos = JSON.parse(localStorage.getItem("todos")) || [];

function displayTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo,index)=>{
        const li = document.createElement("li");

        li.innerHTML = `
        ${todo}
        <span class="delete" onclick="deleteTodo(${index})">X</span>
        `;

        list.appendChild(li);
    });
}


function deleteTodo(index){
    todos.splice(index,1);

    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
}

displayTodos();