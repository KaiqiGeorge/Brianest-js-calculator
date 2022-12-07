let display = document.querySelector("#display");
let btns = Array.from(document.querySelectorAll("button"));

btns.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = Array.from(display.innerText).slice(0,-1);
        }
        break;
      case "=":
        try {
          display.innerText = Math.round(eval(display.innerText) * 100) / 100;
        } catch {
          display.innerText = "error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
