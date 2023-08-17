let computernum = 0;

let inputcount = document.getElementById("input_count");

let Checkbox = document.getElementById("Check_box");
let Resetbox = document.getElementById("Reset_box");
let resultarea = document.getElementById("result_area");
let chance = 5;
let chancearea = document.getElementById("chance_area");

let list = [];
let gameover = false;

Checkbox.addEventListener("click", render);
Resetbox.addEventListener("click", reset);

function pickrandomNum() {
  computernum = Math.floor(Math.random() * 100) + 1;
  console.log(computernum);
}

pickrandomNum();

function render() {
  let inputcountvalue = inputcount.value;

  if (inputcountvalue < 1 || inputcountvalue > 100) {
    resultarea.textContent = "1~100 숫자를 입력하세요";
    return;
  }
  if (list.includes(inputcountvalue)) {
    resultarea.textContent = "이미 입력한 값입니다";
    return;
  }

  chance--;
  chancearea.textContent = `기회:${chance}`;

  if (inputcountvalue < computernum) {
    resultarea.textContent = "up";
  } else if (inputcountvalue > computernum) {
    resultarea.textContent = "down";
  } else {
    resultarea.textContent = "정답입니다";
    gameover = true;
  }
  list.push(inputcountvalue);

  if (chance < 1) {
    gameover = true;
    resultarea.textContent = "꽝이다!! reset 누르세요";
  }
  if (gameover === true) {
    Checkbox.disabled = true;
  }
}

function reset() {
  inputcount.value = "";
  pickrandomNum();
  resultarea.textContent = "재도전!!";
  chancearea.textContent = "기회:5번";
  chance = 5;

  list = [];
  gameover = false;
  Checkbox.disabled = false;
}
