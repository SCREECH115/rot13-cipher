import caesar13 from "./modules/caesar13.js";

const btn = document.getElementById("btnGenerate");
const input = document.getElementById("input");
const output = document.getElementById("output");
const warning = document.getElementById("warning");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const resetBtn = document.querySelector(".reset-btn");
const copyBtn = document.querySelector(".copy-btn");

btn.addEventListener("click", caesar13);

resetBtn.addEventListener("click", function () {
  input.value = "";
  output.value = "";
  output.style.padding = "0px";
  output.style.height = "0px";
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
});
