let display = document.getElementById("display");

function getInput(input) {
  display.value += input;
}

function allclear() {
  display.value = "";
}
function deleteDigit() {
  display.value = display.value.slice(0, -1);
}
// function calculate() {
//   for (let index = 0; index < displayinput.length; index++) {
//     if (displayinput[index] == "+") {
//       symbol = "+";
//     } else {
//       value = displayinput[index];
//     }
//   }
// }

let result = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
};
