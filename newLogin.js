// const form = document.querySelector("#login-form");
// const input = document.querySelector('#login-form input[type="text"]');

// form.addEventListener("submit", function (L) {
//   L.preventDefault();
//   const inputValue = input.value;
//   localStorage.setItem("name", inputValue);
//   localStorage.setItem("name", inputValue);
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `안녕 반가워, ${inputValue}!`;
//   greeting.classList.remove("hidden");
// });
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

function onSubmit(e) {
  if (loginInput.value.trim() === "") {
    alert("Please enter your name.");
    e.preventDefault();
  } else {
    localStorage.setItem("username", loginInput.value);
    displayGreeting();
  }
}

function displayGreeting() {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    greeting.textContent = `안녕, ${storedName}!`;
    greeting.classList.remove("hidden");
  }
}

displayGreeting();
loginForm.addEventListener("submit", onSubmit);

// 1) 로컬스토리지를 읽어서 이름이 있는지 확인
// 2) 이름이 있으면 H1태그에 "HELLO,이름"출력
// 3) HIDDEN 클래스 삭제
