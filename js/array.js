const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];
const fruitIndex = fruits.length - 1;
console.log('fruitIndex :>> ', fruitIndex);

console.log(fruits[1] = "pears");
console.log(fruits[3] = "lemons");
console.log(fruits[4] = "bananas");

console.log('fruits :>> ', fruits);

for (const fruit of fruits) {
    console.log('fruit :>> ', fruit);
}
