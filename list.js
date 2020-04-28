let todos = ["train insaijin"];

window.setTimeout(function() {
  let input = prompt("what would you like to do?");

  while(input !== "quit"){
    // handle input
    if(input === "list") {
      listTodos();
    } else if(input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }
    // ask again for new input
    input = prompt("what would you like to do?");
  }

  console.log("OK, YOU QUIT THE APP");

  function listTodos(){
  console.log("*********")
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);
  });
  console.log("*********")
  }

  function addTodo(){
  // askfor new todo
  let newToDo = prompt("Enter new todo");
  // add to todos array
  todos.push(newToDo);
  console.log("Added Todo");
  }

  function deleteTodo(){
  // ask for index of todo to be deleted
  let index = prompt("Enter index of todo to delete");
  // delete that todo
  // splice(
  todos.splice(index,1);
  console.log("Deleted Todo");
  }

}, 500);
