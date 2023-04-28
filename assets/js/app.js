const body = document.querySelector("body");
const switchButton = document.querySelector(".switch-button .switch");

const switchMode = () => {
  console.log("hehlo");
  body.classList.contains("dark")
    ? body.classList.remove("dark")
    : body.classList.add("dark");
};
