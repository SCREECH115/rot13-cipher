import caesar13 from "./modules/caesar13.js";

const btn = document.getElementById("btnGenerate");
const input = document.getElementById("input");
const output = document.getElementById("output");
const warning = document.getElementById("warning");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

btn.addEventListener("click", caesar13);
