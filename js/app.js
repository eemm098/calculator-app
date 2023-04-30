let screen = document.querySelector(".screen");

let del = document.querySelector(".del");

let equal = document.querySelector(".equal");

let reset = document.querySelector(".reset");
let buttons = document.querySelectorAll(".btn");

let theme = document.querySelectorAll(".theme");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

del.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "";
  } else {
    let s = screen.value.split("");
    s.pop();
    screen.value = s.join("");
  }
});

reset.addEventListener("click", function (e) {
  screen.value = "";
});

// -----------------------------------------------------------

$(document).ready(function () {
  $(" ul li.theme").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let theme1 = document.querySelector("li.one");
let theme2 = document.querySelector("li.two");
let theme3 = document.querySelector("li.three");
let root = document.querySelector("body");
    if (theme1.classList.contains("active")) {
      root.style.cssText = `
    --main-background:hsl(222, 26%, 31%);
    --keyboard-background:hsl(223, 31%, 20%);
    --screen-background:hsl(224, 36%, 15%);

    --reset-btn: hsl(225, 21%, 49%);
    --reset-btn-shadow:hsl(224, 28%, 35%);

    --equal-btn:hsl(6, 63%, 50%);
    --equal-btn-shadow:hsl(6, 70%, 34%);

    --light-btn:hsl(30, 25%, 89%);
    --light-btn-shadow: hsl(28, 16%, 65%);

    --text-color:hsl(221, 14%, 31%);
    --white:hsl(0, 0%, 100%);
    --screen-color:white;`;
    }
    else if (theme2.classList.contains('active')) {
      root.style.cssText = `
    --main-background: hsl(0, 0%, 90%);
    --keyboard-background:hsl(0, 5%, 81%);
    --screen-background:hsl(0, 0%, 93%);

    --reset-btn:  hsl(185, 42%, 37%);
    --reset-btn-shadow:hsl(185, 58%, 25%);

    --equal-btn: hsl(25, 98%, 40%);
    --equal-btn-shadow: hsl(25, 99%, 27%);

    --light-btn:hsl(45, 7%, 89%);
    --light-btn-shadow:  hsl(35, 11%, 61%);

    --text-color:hsl(60, 10%, 19%);
    --white:hsl(0, 0%, 100%);
    --screen-color:hsl(60, 10%, 19%);`;
    }
    else if (theme3.classList.contains('active')) {
      root.style.cssText = `
      --main-background: hsl(268, 75%, 9%);
      --keyboard-background:hsl(268, 71%, 12%);
      --screen-background:hsl(268, 71%, 12%);
  
      --reset-btn: hsl(281, 89%, 26%);
      --reset-btn-shadow:hsl(285, 91%, 52%);
  
      --equal-btn: hsl(176, 100%, 44%);
      --equal-btn-shadow:hsl(177, 92%, 70%);
  
      --light-btn:hsl(268, 47%, 21%);
      --light-btn-shadow: hsl(290, 70%, 36%);
  
      --text-color:hsl(52, 100%, 62%);
      --white:hsl(0, 0%, 100%);
      --screen-color:hsl(52, 100%, 62%);`;
    }
  });
});

// ------------------------------------------------------


















































