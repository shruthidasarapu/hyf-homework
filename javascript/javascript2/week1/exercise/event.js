const body = document.querySelector("body");
const div = document.querySelector("div");
body.appendChild(div)
document.getElementById("button").addEventListener("click", event);

function event() {
  div.innerHTML = "button clicked";
  document.body.style.background = "black";
  document.body.style.color = "white";
}