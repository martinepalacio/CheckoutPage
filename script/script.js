let totalPrice = document.getElementById("totalPrice");
let btnMin1 = document.getElementById("btnMin1");
let btnAdd1 = document.getElementById("btnAdd1");
let btnMin2 = document.getElementById("btnMin2");
let btnAdd2 = document.getElementById("btnAdd2");
let count1 = 0;
let count2 = 0;
let countTotalPrice = 0;
const priceItem1 = 54.99;
const priceItem2 = 74.99;
const priceEnvio = 19.0;
let resultTotal = countTotalPrice + priceEnvio;

const calculo = () => {
  countTotalPrice = count1 * priceItem1 + count2 * priceItem2 + priceEnvio;
  document.getElementById("totalPrice").textContent =
    "$" + countTotalPrice.toFixed(2);
};

const verif0 = () => {
  if (count1 === 0 && count2 === 0) {
    document.getElementById("totalPrice").textContent = "$0";
  }
};

btnAdd1.addEventListener("click", () => {
  count1 = ++count1;
  document.getElementById("count1").textContent = count1;
  calculo();
  verif0();
});
btnMin1.addEventListener("click", () => {
  if (count1 > 0) {
    count1 = --count1;
  } else {
    count1 = 0;
  }
  document.getElementById("count1").textContent = count1;
  calculo();
  verif0();
});

btnAdd2.addEventListener("click", () => {
  count2 = ++count2;
  document.getElementById("count2").textContent = count2;
  calculo();
  verif0();
});
btnMin2.addEventListener("click", () => {
  if (count2 > 0) {
    count2 = --count2;
  } else {
    count2 = 0;
  }
  document.getElementById("count2").textContent = count2;
  calculo();
  verif0();
});

let sumaTotalPrice = count1 * priceItem1 + (count2 + priceItem2);
console.log(sumaTotalPrice);
