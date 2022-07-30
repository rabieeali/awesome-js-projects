console.clear();

const form = document.getElementById("form");
const ul = document.getElementById("ul");
const input = document.getElementById("input");

// make list

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = document.getElementById("input").value;
  const li = document.createElement("li");
  const text = document.createTextNode(inputText);
  const closeBtn = document.createElement("strong");
  li.append(text);
  li.append(closeBtn);
  closeBtn.innerText = "X";
  closeBtn.classList.add("close-btn");
  inputText === "" ? alert("you must write a to do!") : ul.append(li);
  input.value = "";
});

// specify completed to dos

ul.addEventListener("click", (e) => {
  e.target.tagName === "LI" ? e.target.classList.toggle("done") : "";
});

// delete to dos functionality

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "STRONG") {
    e.target.parentElement.style.display = "none";
  }
});
