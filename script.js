let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  let val = Number(input1.value) + Number(input2.value);
  result.append(val);
});
