let display = document.querySelector("#display");
let btns = Array.from(document.querySelectorAll("button"));

btns.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+/-":
        if (!display.innerText) {
        } else if (display.innerText > 0) {
          display.innerText = -Math.abs(display.innerText);
        } else {
          display.innerText = Math.abs(display.innerText);
        }
        break;
      case "=":
        if (!display.innerText) {
        } else {
          try {
            display.innerText = Math.round(eval(display.innerText) * 100) / 100;
          } catch {
            display.innerText = "error";
          }
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
