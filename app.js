import caesar13 from "./modules/caesar13.js";
import reset from "./modules/reset.js";
import copy from "./modules/copy.js";

const btn = document.getElementById("btnGenerate");
const input = document.getElementById("input");
const resetBtn = document.querySelector(".reset-btn");
const copyBtn = document.querySelector(".copy-btn");

// Calculating ROT13
// btn.addEventListener("click", function () {
//   console.log(input.value.to);
// });

btn.addEventListener("click", caesar13);

// Reset form
resetBtn.addEventListener("click", reset);

// Copy encrypted value
copyBtn.addEventListener("click", copy);

//

/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 13 - "Izogram"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
 *
 *
 * Przykład:
 * isogram('Izogram'); // => true
 * isogram('Przeprogramowani'); // => false
 *
 */

// function isogram(word) {
//   return (
//     word
//       .toLowerCase()
//       .split("")
//       .filter((item, pos, arr) => arr.indexOf(item) == pos).length ==
//     word.length
//   );
// }

// const isogram = (word) => {
//   return (
//     word
//       .toLowerCase()
//       .split("")
//       .filter((value, position, array) => array.indexOf(value) === position)
//       .length === word.length
//   );
// };

// /* Weryfikacja */

// function verify(input, goal) {
//   if (input === goal) {
//     console.log("Gratulacje!");
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(isogram("izogram"), true);
// verify(isogram("Przeprogramowani"), false);
// verify(isogram("SprawdzAm"), false);

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzżźćńółęąś";
  const lowCase = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    console.log(alphabet[i]);
    if (lowCase.indexOf(alphabet[i] === alphabet.length)) {
      return true;
    }
  }

  return false;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram("test"), false);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małżeństw!"), true);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małże!"), false);
