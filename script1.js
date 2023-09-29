const btnEl = document.querySelectorAll(".btn");
const screen = document.querySelector(".inp");

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const buttonvalue = btnEl[i].textContent;
    if (buttonvalue === "AC") {
      Clearresult();
    } else if (buttonvalue === "=") {
      calculateResult();
    } else if (buttonvalue === "Del") {
      removelastdigit();
    } else {
      appendvalue(buttonvalue);
    }
  });
}

function Clearresult() {
  screen.value = "";
}
function calculateResult() {
  if (screen.value != ""){
    screen.value = eval(screen.value);
  } else {
    screen.value = "";
  }
}

function removelastdigit() {
  screen.value = screen.value.slice(0, -1);
}

function appendvalue(buttonvalue) {
  screen.value += buttonvalue;
}
