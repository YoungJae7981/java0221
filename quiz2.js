// const outputDiv = document.getElementById("output");
// const button1 = document.getElementById("myButton1");
// const button2 = document.getElementById("myButton2");
// const button3 = document.getElementById("myButton3");
// // function handleClick(event) {
// //   const buttonid = event.target.id;
// //   outputDiv.innerHTML = buttonid;
// // }
// // button1.addEventListener("click", handleClick);
// // button2.addEventListener("click", handleClick);
// // button3.addEventListener("click", handleClick);

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// Constructor 생성자
//LOL의 영웅들 만들기 =객체
//Life , Attack,Shield,Speed,특수능력

// 생성자함수
function Hero() {
  (this.name = "youngjae"),
    (this.age = 23),
    (this.speed = 10),
    (this.life = 50);
}
const youngjae = new Hero();
console.log(youngjae.name + "" + youngjae.life);

function 영웅() {
  (this.name = "youngjae"),
    (this.age = 23),
    (this.speed = 10),
    (this.life = 50);
}
const 영재 = new 영웅("영재", 20, 12, 30);
const 바루스 = new 영웅("바루스", 20, 58, 45);
console.log(영재);
console.log(바루스);

//new는 키워드 new로 생성하면 새로운 메모리영역을 가진다.
let obj = {
  name: "Sam",
};
let a = obj; //new로 만들지 않음에 주의
a.name = "tom";
console.log(obj.name);
