const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];

console.log(fruits[0] = "pears");
console.log(fruits[2] = "lemons");
console.log(fruits[3] = "bananas");

console.log('fruits :>> ', fruits);
// 

const fruitIndex = fruits.length - 1;
console.log('fruitIndex :>> ', fruitIndex);


for (const fruit of fruits) {
    console.log('fruit :>> ', fruit);
}
