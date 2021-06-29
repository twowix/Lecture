let red_btn = document.getElementById("red-btn");
let blue_btn = document.getElementById("red-btn");
let green_btn = document.getElementById("red-btn");
let content = document.getElementById("content");

red_btn.addEventListener('click', function () {
    console.log("빨간 버튼 눌렀다!");
    content.style.background = "red";
})