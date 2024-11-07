/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/


console.log("Task 3");
document.write("<h2>Task 3</h2>");

function sumBigIntegers(numStr1, numStr2) {
  const BigInt1 = BigInt(numStr1);
  const BigInt2 = BigInt(numStr2);
  return BigInt1 + BigInt2;
}
console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
document.write(`<p>${sumBigIntegers('9007199254740991', '9007199254740991')}</p>`);

console.log("");