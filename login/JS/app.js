const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  paintGreeting();
}
function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText =`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings()
}
