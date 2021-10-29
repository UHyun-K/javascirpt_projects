const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event){
  const li =event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) =>  toDo.id != parseInt(li.id));//새로운 배열을 toDos에 할당
  saveToDos(); //
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText ="X";
  button.addEventListener('click',deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value ="";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos){
  const parsedToDos = JSON.parse(savedToDos);//live object로

  toDos = parsedToDos; // 7번 줄을 보면 todo는 항상 빈배열로 시작하여 newtodo만 넣었기때문에 저장이 안됨
  parsedToDos.forEach(paintToDo);
}


