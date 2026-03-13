
function addTodo(){
    const input = document.getElementById("todoInput");
    const value = input.value.trim();

    if(value === ""){
        alert("Please enter a task");
        return;
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    input.value="";
    displayTodos();
}

function deleteTodo(index){
    todos.splice(index,1);

    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
}

displayTodos();