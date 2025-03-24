// 1.
const modal = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".modal-btn");

const classChange = function () {
  modal.classList.toggle("hidden");
  modalBtn.classList.toggle("hidden");
};

modalBtn.addEventListener("click", function () {
  classChange();
});

// modali daixureba mis garet nebismier adgilas dacherit
modal.addEventListener("click", function (event) {
  if (event.target === modal) classChange();
});

// screen separator
const separate = function (el) {
  el.insertAdjacentHTML("afterEnd", "<hr>");
};
separate(modalBtn);

// 2.
const body = document.body;
const colorBtn = document.querySelector(".get-color");
const colorInput = document.querySelector(".type-color");
const colors = ["red", "blue", "green", "black", "white"];

colorBtn.addEventListener("click", function () {
  if (colors.includes(colorInput.value.toLowerCase())) {
    body.style.backgroundColor = colorInput.value.toLowerCase();
  } else {
    alert("Please write red, blue, green, black or white colors");
  }
  colorInput.value = "";
});

separate(colorBtn);

// 3.
const averageInput = document.querySelector(".write-numbers");
const averageBtn = document.querySelector(".get-average");
const showResult = document.querySelector(".show-result");

averageBtn.addEventListener("click", function () {
  const arr = averageInput.value.split(":").map(Number);

  // 1:1: abrundebs [1,1,0] array-s, rac amcirebs sashualos
  if (averageInput.value.endsWith(":")) arr.pop();

  let sum = 0;
  const sumNumbers = arr.map((el) => (sum += el));
  const result = (sum / arr.length).toFixed(1);

  if (arr.includes(NaN) || averageInput.value === "")
    alert("Please enter numbers with correct format");
  else showResult.innerText = `Result is: ${result}`;
  averageInput.value = "";
});
